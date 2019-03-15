export default function bookReducer(state = {
  stocks: [
    {
      name: 'GOOG',
      buy: {
        prices: []
      },
      sell: {
        prices: []
      }
    },
    {
      name: 'FB',
      buy: {
        prices: []
      },
      sell: {
        prices: []
      }
    },
    {
      name: 'ORCL',
      buy: {
        prices: []
      },
      sell: {
        prices: []
      }
    },
    {
      name: 'ZGRO',
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
    case 'START_UPDATE_BOOK_REQUEST':
      return state

    case 'UPDATE_BOOK':
      const order = action.payload;
      let updatedStocks = state.stocks;
      updatedStocks.forEach(stock => {
        if (stock.name === order.stock) {
          debugger
          const price = stock[order.buySell].prices.indexOf(stock[order.buySell].prices.find(price => price.price === order.price));
          debugger
          if (price >= 0) {
            stock[order.buySell].prices[price].orders.push(order)
          } else {
            const newPrice = {
              price: order.price,
              orders: [order]
            };
            stock[order.buySell].prices.push(newPrice);
          }
        }
      })
      debugger
      return {
        stocks: updatedStocks,
        ...state
      }
      break;
    default:
      return state
  }
}
