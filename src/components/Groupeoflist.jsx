import React from "react";
import List from "./list";
import { connect } from "react-redux";
import { ADDTASK, SETINPUT } from "../Action";

function Groupeoflist({ text = "test" ,Tasks = [ ],  handelAddtask = () => {},  handelInput = () => {}}) {
  let id = Tasks.length + 1;
  
  return (
    <div>
      <div className="container-fluid p-0 bg-info">
        <div className="container d-inline text-right">
          <div className="container-fluid">
            <h1>
              <strong>TO-DO-APP!</strong>
            </h1>
            <h4>Add-new-To-Do</h4>
            <div className="active-cyan-4 mb-4">
              <input ////////////////////////// input
                className="form-control col-6"
                placeholder="Search"
                aria-label="Search"
                value={text}
                onChange={event => handelInput(event.target.value)}
              />
            </div>
            <button //////////////////////////////// add button
              type="button"
              className="btn btn-outline-light btn-lg btn-add"
              onClick={() => handelAddtask({ id, text, complete: false })}
            >
              Add New Task
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light py-1 ">
        <div className="d-inline text-center">
          <h3 className="d-inline text-center">let's get some work done</h3>
        </div>
        <div className="py-3 task-parent ">
          {Tasks.map((
            el,
            i ////////////////////////  mapping Task
          ) => (
            <List Task={el} key={i} />
          ))}
          <p>
            {/* { (isempty===true)&&  <h1 className='bg-warning'>NO TASK ADDED</h1> } */}
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {

  return {
    Tasks: state.Tasks,
    text: state.input
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handelAddtask: payload => dispatch(ADDTASK(payload)), // Task:obj

    handelInput: payload => dispatch(SETINPUT(payload)) // text
  };
};
const GroupeoflistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Groupeoflist);
export default GroupeoflistContainer;
