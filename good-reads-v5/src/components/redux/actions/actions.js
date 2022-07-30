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
export const ADD_REVIEW = "ADD_REVIEW";
export const GET_AUTHOR_BOOKS = "GET_AUTHOR_BOOKS";
export const GET_AUTHOR_PUBLISHED_BOOKS = "GET_AUTHOR_PUBLISHED_BOOKS";
export const GET_AUTHOR_UNPUBLISHED_BOOKS = "GET_AUTHOR_UNPUBLISHED_BOOKS";
export const GET_ALL_BOOKS_TO_PUBLISH = "GET_ALL_BOOKS_TO_PUBLISH";
export const GET_ALL_BOOKS_TO_UNPUBLISH = "GET_ALL_BOOKS_TO_UNPUBLISH";
export const GET_REJECTED_BOOKS = "GET_REJECTED_BOOKS";
export const GET_REVIEWS_FOR_BOOK = "GET_REVIEWS_FOR_BOOK";
export const SET_MODAL_BOOK_REVIEWS = "SET_MODAL_BOOK_REVIEWS";
export const CLOSE_MODAL_BOOK_REVIEWS = "CLOSE_MODAL_BOOK_REVIEWS";














export const getBooks = (data) => {
    return {
        type: GET_BOOKS,
        payload: {
            data: data
        }
    };
};


export const getRejectedBooks = (data) => {
    return {
        type: GET_REJECTED_BOOKS,
        payload: {
            data: data
        }
    };
};



export const getMyAuthorBooks = (data) => {
    return {
        type: GET_AUTHOR_BOOKS,
        payload: {
            data: data
        }
    };
};


export const getMyPublishedAuthorBooks = (data) => {
    return {
        type: GET_AUTHOR_PUBLISHED_BOOKS,
        payload: {
            data: data
        }
    };
};




export const getAllProposedBooksToBePublished = (data) => {
    return {
        type: GET_ALL_BOOKS_TO_PUBLISH,
        payload: {
            data: data
        }
    };
};


export const getAllProposedBooksToBeUnpublished = (data) => {
    return {
        type: GET_ALL_BOOKS_TO_UNPUBLISH,
        payload: {
            data: data
        }
    };
};

export const getMyUnpublishedAuthorBooks = (data) => {
    return {
        type: GET_AUTHOR_UNPUBLISHED_BOOKS,
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


export const addReview = (comment, rating, publishedTimestamp, book_id, reader_id, id) => {
    return {
        type: ADD_BOOK,
        payload: {
            comment: comment, rating: rating, publishedTimestamp: publishedTimestamp, book_id: book_id, reader_id: reader_id, id: id
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

export const setModal = (title,description,publishedDate,type,status, global_rating, id,author_email,author_firstName,author_lastName) => {
    return {
        type: SET_MODAL,
        payload: {
            title: title,description: description,publishedDate:publishedDate,type:type,status:status,global_rating:global_rating, id:id,
            author_email:author_email,author_firstName:author_firstName,author_lastName:author_lastName,
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



export const getReviewsForBook = (reviews_for_book) => {
    return {
        type: GET_REVIEWS_FOR_BOOK,
        payload: {
            reviews_for_book: reviews_for_book
        }
    };
};


export const setModalBookReviews = (data) => {
    return {
        type: SET_MODAL_BOOK_REVIEWS,
        payload: {
            data: data
        }
    };
};


export const closeModalBookReviews = (modal_for_reviews_for_book) => {
    return {
        type: CLOSE_MODAL_BOOK_REVIEWS,
        payload: {
            modal_for_reviews_for_book : modal_for_reviews_for_book,
        }
    };
};