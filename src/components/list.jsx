import React from "react";
import { connect } from "react-redux";
import { DELETE, COMPLETE } from "../Action";
import Modall from "./Modall";

function List({ Task, handelComplete = () => {}, handelDelete = () => {} }) {
  return (
    <div className=" mx-0 p-0  justify-content-md-center row ">
      <span className="  p-0 col-5">
        <h3 className="col-12 ">{`# Task ${Task.id}`}</h3>
        <div className='justify-content-md-center align-items-center row'>
        <span className="col-md-auto">
          <button
            className="toggler btn btn-warning m-2 "
            onClick={() => handelComplete(Task.id)}
          >
            {Task.complete ? "Undo" : "complete"}
          </button>{" "}
        </span>{" "}
        <span className="col-md-auto">
          <button
            className="delete btn btn-danger m-2"
            onClick={() => handelDelete(Task.id)}
          >
            DELETE
          </button>
        </span>
        <span className='col-md-auto'>
        <Modall Task={Task} />
        </span></div>
      </span>
      <span className="text-task p-0 m-2 border col-6">
        <h4 style={{ textDecoration: Task.complete ? "line-through" : "none" }}>
          {Task.text}
        </h4>
      </span>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    handelDelete: payload => dispatch(DELETE(payload)),
    handelComplete: payload => dispatch(COMPLETE(payload))
  };
};
const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
export default ListContainer;
