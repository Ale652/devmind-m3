export const ADD_NOTE = "ADD_NOTE";

export const addNote = (title, description) => {
    return {
        type: ADD_NOTE,
        payload: {
            title: title, description: description
        }
    };
};
