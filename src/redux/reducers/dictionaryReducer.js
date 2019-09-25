const initState = {
  dictionaries: []
};

const dictionaryReducer = (state = initState, action) => {
  switch (action.type) {
  case 'ADD_DICTIONARY':
    return { ...state, dictionaries: [...state.dictionaries, action.payload] };

  case 'ADD_ALL_DICTIONARIES':
    return { ...state, dictionaries: action.payload };

  default:
    return state;
  }
};

export default dictionaryReducer;
