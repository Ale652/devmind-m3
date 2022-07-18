export const ADD_BOOK = "ADD_BOOK";
export const GET_BOOKS = "GET_BOOKS";
export const SET_MODAL = "SET_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const GET_BOOKS2 = "GET_BOOKS2";


export const getBooks = (data) => {
    return {
        type: GET_BOOKS,
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

export const setModal = (user, todos) => {
    return {
        type: SET_MODAL,
        payload: {
            user: user, todos: todos
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