import { timestamp } from '../utils/general';

export default function bookReducer(state = {
  stocks: [
    {
      name: 'GOOG',
      id: 'GOOG',
      buy: {
        prices: []
      },
      sell: {
        prices: []
      }
    },
    {
      name: 'FB',
      id: 'FB',
      buy: {
        prices: []
      },
      sell: {
        prices: []
      }
    },
    {
      name: 'ORCL',
      id: 'ORCL',
      buy: {
        prices: []
      },
      sell: {
        prices: []
      }
    },
    {
      name: 'ZGRO',
      id: 'ZGRO',
      buy: {
        prices: []
      },
      sell: {
        prices: []
      }
    }
  ],
  executions: []
}, action) {
  switch(action.type) {
    case 'UPDATE_BOOK':

      // --- This is the method to update the book with a new order ---

      let order = action.payload;
      order.shares = parseInt(order.shares); // Convert order shares to Int
      order.restingShares = parseInt(order.shares); // Add resting shares value, initialized at total number of new order's shares.
      let updatedStocks = [...state.stocks]; // Copy of stock state to modify.
      let updatedExecutions = [...state.executions]; // Copy of execution state to modify.


      updatedStocks.forEach((stock, stockIndex, stockArr) => { // Iterate over all stocks in state, looking for stock name matching order.

        if (order !== undefined && stock.name === order.stock) {

          const price = stock[order.buySell].prices.indexOf(stock[order.buySell].prices.find(price => price.price === order.price)); // find price already on the book at the order price, if it exists.
          const parsedOrderPrice = parseInt(order.price.replace(/\D/g,'')); // parse the order price to int to compare to opposite side prices.
          let oppBuySell = order.buySell === "buy" ? "sell" : "buy";
          let matchingPriceArr = [] // Array to collect executable prices on the opposite side of the book.
          stock[oppBuySell].prices.forEach((price, i) => { // Iterate over stock's prices.
            if (order.buySell === "buy" && parseInt(price.price.replace(/\D/g,'')) < parsedOrderPrice) { // if order is to buy, and opposite side price is less than order price
              matchingPriceArr.push([price, i]); // Add to collection of executable prices.
            } else if (order.buySell === "sell" && parseInt(price.price.replace(/\D/g,'')) > parsedOrderPrice) { // if order is to sell, and opposite side price is greater than order price
              matchingPriceArr.push([price, i]); // Add to collection of executable prices.
            }
          })

          matchingPriceArr = matchingPriceArr.sort((a, b) => parseInt(b[0].price.replace(/\D/g,'')) - parseInt(a[0].price.replace(/\D/g,''))); // Sort the collected executable prices in descending order.

          matchingPriceArr.forEach((price, priceIndex) => { // Iterate over executable prices
            if (order !== undefined && order.restingShares > 0) { // If there are any resting shares left in our order

              price[0].orders.forEach((restingOrder, restingOrderIndex) => { // Iterate over resting orders for that price
                const executionPrice = order.buySell === 'buy' ? order.price : restingOrder.price; // Execution price, determined by whether new order is buy or sell.

                if (restingOrder.restingShares < order.restingShares) { // If opposite side order's resting shares are greater than new order's resting shares
                  updatedExecutions.push({timestamp: timestamp(), ticker: stock.name, price: executionPrice, shares: restingOrder.restingShares}); // Create new execution
                  order.restingShares = order.restingShares - restingOrder.restingShares; // Update new order's resting shares.
                  stockArr[stockIndex][oppBuySell].prices[price[1]].orders[restingOrderIndex].restingShares = 0; // Opposite side order's resting shares are gone.
                } else if (restingOrder.restingShares === order.restingShares) { // If opposite side order's resting shares are equal to new order's resting shares
                  updatedExecutions.push({timestamp: timestamp(), ticker: stock.name, price: executionPrice, shares: restingOrder.restingShares}); // Create new execution
                  stockArr[stockIndex][oppBuySell].prices[price[1]].orders[restingOrderIndex].restingShares = 0; // Opposite side order's resting shares are gone.
                  order = undefined;  // New order's resting shares are gone, therefore new order should never be placed on the book.
                } else if (restingOrder.restingShares > order.restingShares) { // If opposite side order's resting shares are greater than new order's resting shares
                  updatedExecutions.push({timestamp: timestamp(), ticker: stock.name, price: executionPrice, shares: order.restingShares}); // Create new execution
                  stockArr[stockIndex][oppBuySell].prices[price[1]].orders[restingOrderIndex].restingShares = stockArr[stockIndex][oppBuySell].prices[price[1]].orders[restingOrderIndex].restingShares - order.restingShares; // Update opposite side order's resting shares
                  order = undefined; // New order's resting shares are gone, therefore new order should never be placed on the book.
                }

              })

              price[0].orders = price[0].orders.filter(order => { // filter out any orders within the price that have no resting shares left.
                return order.restingShares > 0
              })
            }
          })

          stock[oppBuySell].prices = stock[oppBuySell].prices.filter(price => { // filter out any prices within the stock that have no orders left.
            return price.orders.length > 0
          })

          if (price >= 0 && order !== undefined) { // If a price exists for the stock at the new order's price and the new order still has resting shares
            stock[order.buySell].prices[price].orders.push(order) // Add new order to that price
          } else if (order !== undefined){ // if not
            const newPrice = {
              price: order.price,
              orders: [order]
            };
            stock[order.buySell].prices.push(newPrice); // Create new price at new order's price with new order listed
          }
        }
      })
      return { // Update state
        ...state,
        stocks: updatedStocks,
        executions: updatedExecutions
      }
      break;
    default:
      return state
  }
}
