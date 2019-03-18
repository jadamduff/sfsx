import { timestamp } from '../utils/general';

export function updateBook(orderObj) {
  return (dispatch) => {
    let finalizedOrderObj = orderObj;
    finalizedOrderObj.timestampReadable = timestamp();
    finalizedOrderObj.timestamp = Date.now();
    dispatch({type: 'UPDATE_BOOK', payload: finalizedOrderObj});
  }
}
