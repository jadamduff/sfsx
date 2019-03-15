import { timestamp } from '../utils/general';

export function updateBook(orderObj) {
  return (dispatch) => {
    dispatch({type: 'START_UPDATE_BOOK_REQUEST'});
    let finalizedOrderObj = orderObj;
    finalizedOrderObj.timestampReadable = timestamp();
    finalizedOrderObj.timestamp = Date.now();
    dispatch({type: 'UPDATE_BOOK', payload: finalizedOrderObj});
  }
}
