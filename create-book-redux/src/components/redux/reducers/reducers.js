import { ADD_BOOK, GET_BOOKS } from "../actions/actions";

const initialState = {
  books: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
      books: action.payload.data,
    }; break;



    case ADD_BOOK:
      return {
        books: [
          ...state.books,
          {
            title: action.payload.title,
            description: action.payload.description,
            type: action.payload.type,
            publishedDate: action.payload.publishedDate,
            author_id: action.payload.author_id,
            id: action.payload.id,
          },
        ],
      }; break;

    default:
      return state;
  }
};

export default rootReducer;
