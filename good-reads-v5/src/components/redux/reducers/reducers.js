import { ADD_BOOK, GET_BOOKS, REGISTER, LOGIN, LOGOUT, SIGNUPP,SET_MODAL,CLOSE_MODAL, GET_WISHED_BOOKS, GET_READ_BOOKS, USER, ADD_BOOK_TO_WISH_LIST, ADD_BOOK_TO_READ_LIST} from "../actions/actions";

const initialState = {
  books: [],
  register: {},
  login: {},
  signup: false,
  modal: undefined,
  books_wished: [],
  books_read: [],
  user: {},
  add_book_to_wish_list: [],
  add_book_to_read_list: [],
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

        case SIGNUPP:
          return {
            
                ...state,
                signup : action.payload.status,

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


          case USER:
            return {
                
                    ...state,
                    user:
                                {
                                    email: action.payload.email,
                                    firstName: action.payload.firstName,
                                    lastName: action.payload.lastName,
                                    id: action.payload.id,
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


    case GET_WISHED_BOOKS:
      return {
        ...state,
            books_wished: action.payload.data,
    }; break;

    case GET_READ_BOOKS:
      return {
        ...state,
            books_read: action.payload.data,
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

      case ADD_BOOK_TO_WISH_LIST:
      return {
        ...state,
        add_book_to_wish_list: [
          ...state.add_book_to_wish_list,
          {
            book_id: action.payload.book_id,
          },
        ],
      }; break;

      case ADD_BOOK_TO_READ_LIST:
        return {
          ...state,
          add_book_to_read_list: [
            ...state.add_book_to_read_list,
            {
              book_id: action.payload.book_id,
            },
          ],
        }; break;



      case SET_MODAL:
                            return {
                              ...state,
                              modal:
                                {
                                  title: action.payload.title,
                                  description: action.payload.description,
                                  publishedDate: action.payload.publishedDate,
                                  type: action.payload.type,
                                  status: action.payload.status,
                                  id: action.payload.id,
                                  author_email: "action.payload.author.email",
                                  author_firstName: "action.payload.author.firstName",
                                  author_lastName: "action.payload.author.lastName",
                              }
                            };
                            break;


                        case CLOSE_MODAL:

                          return {
                            ...state,
                            modal: undefined
                            
                          };
                          break;


    default:
      return state;
  }
};

export default rootReducer;