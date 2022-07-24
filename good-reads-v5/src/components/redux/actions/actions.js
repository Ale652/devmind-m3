export const ADD_BOOK = "ADD_BOOK";
export const GET_BOOKS = "GET_BOOKS";
export const SET_MODAL = "SET_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const GET_BOOKS2 = "GET_BOOKS2";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUPP = "SIGNUPP";
export const GET_WISHED_BOOKS = "GET_WISHED_BOOKS";
export const GET_READ_BOOKS = "GET_READ_BOOKS";
export const USER = "USER";
export const ADD_BOOK_TO_WISH_LIST = "ADD_BOOK_TO_WISH_LIST";
export const ADD_BOOK_TO_READ_LIST = "ADD_BOOK_TO_READ_LIST";








export const getBooks = (data) => {
    return {
        type: GET_BOOKS,
        payload: {
            data: data
        }
    };
};

export const getBooksWishedBooks = (data) => {
    return {
        type: GET_WISHED_BOOKS,
        payload: {
            data: data
        }
    };
};


export const getReadsdBooks = (data) => {
    return {
        type: GET_READ_BOOKS,
        payload: {
            data: data
        }
    };
};





export const addBook = (title, description, type, publishedDate, author_id, id) => {
    return {
        type: ADD_BOOK,
        payload: {
            title: title, description: description, type: type, publishedDate: publishedDate, author_id: author_id, id: id
        }
    };
};


export const addBookToWishList = (book_id) => {
    return {
        type: ADD_BOOK_TO_WISH_LIST,
        payload: {
            book_id: book_id,
        }
    };
};

export const addBookToReadList = (book_id) => {
    return {
        type: ADD_BOOK_TO_READ_LIST,
        payload: {
            book_id: book_id,
        }
    };
};

export const register = (email, role, password) => {
    return {
        type: REGISTER,
        payload: {
            email: email, role: role, password: password
        }
    };
};

export const signupAction = (status) => {
    return {
        type: SIGNUPP,
        payload: {
            status: status
        }    
        
    };
};

export const login = (email, role, token) => {
    return {
        type: LOGIN,
        payload: {
            email: email, role: role, token: token
        }
    };
};

export const user = (email, firstName, lastName,id) => {
    return {
        type: USER,
        payload: {
            email: email, firstName: firstName, lastName: lastName, id: id
        }
    };
};



export const logout = () => {
    return {
        type: LOGOUT,
       
    };
};

export const setModal = (title,description,publishedDate,type,status,id,author) => {
    return {
        type: SET_MODAL,
        payload: {
            title: title,description: description,publishedDate:publishedDate,type:type,status:status,id:id,
            author_email:author.email,author_firstName:author.firstName,author_lastName:author.lastname
        }
    };
};


export const closeModal = (modal) => {
    return {
        type: CLOSE_MODAL,
        payload: {
            modal : modal,
        }
    };
};