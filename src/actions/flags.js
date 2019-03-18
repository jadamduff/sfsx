export function updateFlag(arr) {
  // Expecting arr to be in format of [{type, flag, value}]
  return (dispatch) => {
    dispatch({type: 'UPDATE_FLAGS', payload: arr})
  }
}

export function resetFlags(type, flag) {
  return (dispatch) => {
    dispatch({type: 'RESET_FLAGS', payload: {type, flag}})
  }
}
