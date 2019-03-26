const defaultFlagsState = {
  order: {
    status: 'init'
  },
  stocks: {
    selected: 'init'
  },
  executions: {
    unread: 0
  },
  prices: {
    selected: false
  }
}

export default function flagsReducer(state = defaultFlagsState, action) {
  const payload = action.payload;
  switch(action.type) {
    case 'UPDATE_FLAGS':
      let updatedState = {
        ...state
      }
      payload.forEach(x => {
        updatedState[x.type][x.flag] = x.value
      })
      return updatedState;

    case 'RESET_FLAGS':
      if (payload.type === 'all') {
        return defaultFlagsState;
      } else if (payload.flag === 'all') {
        let newTypeState = {};
        Object.keys(state[payload.type]).forEach(key => newTypeState[key] = 'init');
        return newTypeState;
      } else {
        return {
          ...state,
          [payload.type]: {
            ...state[payload.type],
            [payload.flag]: 'init'
          }
        }
      }

    default:
      return state
  }
}
