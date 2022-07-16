export const ADD_BOOK = "ADD_BOOK";

export const addBook = (title, description) => {
    return {
        type: ADD_BOOK,
        payload: {
            title: title, description: description
        }
    };
};
