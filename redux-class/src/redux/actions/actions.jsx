export const ADD_NOTE = "ADD_NOTE";

export const REMOVE_NOTE = "REMOVE_NOTE";

export const EDIT_NOTE = "EDIT_NOTE";

     
export const addNote = (title, description) => {
    return {
        type: ADD_NOTE,
        payload: {
            title: title, description: description
        }
    };
};


export const removeNote = (index) => {
    return {
        type: REMOVE_NOTE,
        payload: {
            index: index
        }
    };
};


export const editNote = (index) => {
    return{
        type: EDIT_NOTE,
        payload: {
            index: index
        }
    };
};

