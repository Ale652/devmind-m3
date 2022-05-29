import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from "../actions/actions";
     
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
                          }; break;

                          case REMOVE_NOTE:
                            const notesRemove = state.notes.filter((note, i) => i != action.payload.index);
                            {console.log(notesRemove)}
                            return {
                              notes: 
                                notesRemove
                              
                            };break;

                            case EDIT_NOTE:
                            
                            return {
                              notes: [
                                ...state.notes]
                                
                              
                            };break;
                          
                        default:
                          return state;
  }
};
 
export default rootReducer;

