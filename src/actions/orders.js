import { timestamp } from '../utils/general';

export function createOrder(orderObj) {
  return (dispatch) => {
    let finalizedOrderObj = orderObj;
    finalizedOrderObj.timestamp = timestamp();
    dispatch({type: 'CREATE_ORDER', payload: finalizedOrderObj});

    // Call update book here, since creating an order will always update the book.

  }
}

export function updateBook(orderObj) {
  return (dispatch) => {
    dispatch({type: "UPDATE_BOOK", payload: orderObj})
  }
}
