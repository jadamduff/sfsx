import { timestamp } from '../utils/general';

export function createOrder(orderObj) {
  return (dispatch) => {
    let finalizedOrderObj = orderObj;
    finalizedOrderObj.timestamp = timestamp();
    dispatch({type: 'CREATE_ORDER', payload: finalizedOrderObj});
  }
}
