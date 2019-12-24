import {
  add_Task,
  set_Input,
  set_Delete,
  set_Complete,
  set_Edit
} from "../Const/constType";

const initState = {
  Tasks: [{}],
  input: ""
};
// const counter=0
//  const todoList=[]

const GofList = (state = initState, action) => {
  switch (action.type) {
    case add_Task:
      return { ...state, Tasks: state.Tasks.concat(action.payload), input: "" };
    case set_Input:
      return { ...state, input: action.payload };
    // return Object.assign({}, state, { input: action.payload });
    case set_Delete:
      return Object.assign({}, state, {
        Tasks: state.Tasks.filter((el, i) => el.id !== action.payload)
      }); //id
    // return {...state,Tasks:state.Tasks.filter((el, i) => el.id !== action.payload)}; //id
    case set_Complete:
      console.log(state.Tasks);
      return {
        ...state,
        Tasks: state.Tasks.map((el, i) =>
          el.id === action.payload ? { ...el, complete: !el.complete } : el
        )
      };
    case set_Edit:
      console.log(action.payload)
      return {
        ...state,
        Tasks: state.Tasks.map((el, i) =>
          el.id === action.payload.id ? { ...el, text: action.payload.text, complete:false } : el
        ),input:''
      };
    default:
      return state;
  }
  // {...state, Tasks: state.map(el => (el.id === action.id ? action.movie : el))}
};

export default GofList;
