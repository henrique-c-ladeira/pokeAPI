const INITIAL_STATE = {
    cardList: []
};

const cardListReducer = (state = INITIAL_STATE, action) =>  {
    switch (action.type) {
        case 'SET_CARD_LIST':
            return {
                ...state,
                cardList: action.payload
            };
        default:
            return state;
    }
};

export default cardListReducer;