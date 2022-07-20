import { ADD_BOOK, GET_BOOKS, REGISTER, LOGIN, LOGOUT, SINGUP } from "../actions/actions";

const initialState = {
  books: [],
  register: {},
  login: {},
  singup: false
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

        case SINGUP:
          return {
            
                ...state,
                singup : action.payload.status,

            }; break;
    

        case LOGIN:
            return {
                
                    ...state,
                    login:
                                {
                                    email: action.payload.email,
                                    role: action.payload.role,
                                    token: action.payload.token,
                                }
                            ,
                }; break;

            case LOGOUT:
            return {
                
                    ...state,
                    login:
                                {
                                    email: undefined,
                                    role: undefined,
                                    token: undefined,
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