import { ADD_NOTE } from "../actions/actions";

const initialState = {
  notes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            description: action.payload.description,
          },
        ],
      };

    default:
      return state;
  }
};

export default rootReducer;
