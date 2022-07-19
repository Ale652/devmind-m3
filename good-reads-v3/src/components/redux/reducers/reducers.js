import { ADD_BOOK, GET_BOOKS, REGISTER, LOGIN } from "../actions/actions";

const initialState = {
  books: [],
  register: {},
  login: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case REGISTER:
      return {
        
            ...state,
            register:
                        {
                            email: action.payload.email,
                            role: action.payload.role,
                            password: action.payload.password,
                        }
                    ,
        }; break;

        case LOGIN:
            return {
                
                    ...state,
                    login:
                                {
                                    email: action.payload.email,
                                    password: action.payload.password,
                                }
                            ,
                }; break;




    case GET_BOOKS:
      return {
        ...state,
      books: action.payload.data,
    }; break;



    case ADD_BOOK:
      return {
        ...state,
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