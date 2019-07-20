import {
  CHANGE_ACTIVE_SUCCESS,
  // CHANGE_ACTIVE_FAILURE,
  EDIT_TYPE_SUCCESS,
  // EDIT_TYPE_FAILURE,
  DELETE_TYPE_SUCCESS,
  // DELETE_TYPE_FAILURE
  ADD_TYPE_SUCCESS,
  // ADD_TYPE_FAILURE,
  FETCH_TYPES_SUCCESS,
  // FETCH_TYPES_FAILURE,
  ADD_WORDS_SUCCESS,
  // ADD_WORDS_FAILURE,
  DELETE_WORDS_SUCCESS,
  // DELETE_WORDS_FAILURE,
} from 'actions';

export default (state = [], action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_SUCCESS: {
      const { idType, cards } = action.payload;
      return [
        ...state.map(type => {
          if (type.id === idType) {
            return {
              ...type,
              cards,
            };
          }
          return type;
        }),
      ];
    }
    case EDIT_TYPE_SUCCESS: {
      const { id, title, icon } = action.payload;
      return [
        ...state.map(type => {
          if (type.id === id) {
            return {
              id,
              title,
              icon,
            };
          }
          return type;
        }),
      ];
    }
    case DELETE_TYPE_SUCCESS:
      return [...state.filter(type => type.id !== action.payload.id)];
    case ADD_TYPE_SUCCESS:
      return [...state, { ...action.payload }];
    case FETCH_TYPES_SUCCESS:
      return [...state, ...action.payload];
    case ADD_WORDS_SUCCESS: {
      const { newCards, idType } = action.payload;

      return state.map(type => {
        if (type.id === idType) {
          return {
            ...type,
            cards: [...type.cards, ...newCards],
          };
        }
        return type;
      });
    }
    case DELETE_WORDS_SUCCESS: {
      const { idType, idWord } = action.payload;
      return state.map(type => {
        if (type.id === idType) {
          return {
            ...type,
            cards: type.cards.filter(card => {
              const { _id: id } = card;
              if (id !== idWord) {
                return true;
              }
              return false;
            }),
          };
        }
        return type;
      });
    }
    default:
      return state;
  }
};
// SŁÓWKO USUWA SIĘ TYLKO Z BAZY A NIE WIDZĆ ŻE SIĘ USUNEŁO Z EKRANU
