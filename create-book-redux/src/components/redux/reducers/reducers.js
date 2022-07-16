import { ADD_BOOK } from "../actions/actions";

const initialState = {
  books: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [
          ...state.books,
          {
            title: action.payload.title,
            description: action.payload.description,
          },
        ],
      };

    default:
      return state;
  }
};

export default rootReducer;
