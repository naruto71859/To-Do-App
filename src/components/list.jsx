import React from "react";
import { connect } from "react-redux";
import { DELETE, COMPLETE } from "../Action";
import Modall from "./Modall";

function List({ Task, handelComplete = () => {}, handelDelete = () => {} }) {
  return (
    <div className="  row d-flex justify-content-center align-items-center ">
    
        <h3 className=" col-auto ">{`# Task ${Task.id}`}</h3>
        <div className=" col-lg-1 col-md-2 col-sm-2 ">
          <button
            className="btn btn-block btn-warning  "
            onClick={() => handelComplete(Task.id)}
          >
            {Task.complete ? "Undo" : "complete"}
          </button>
        </div>
        <div className=" col-auto">
          <button
            className="btn btn-danger "
            onClick={() => handelDelete(Task.id)}
          >
            DELETE
          </button>
        </div>
       
        <Modall Task={Task} />
       
     
      <div className=" col-7 ">
        <h4 style={{ textDecoration: Task.complete ? "line-through" : "none" }}>
          {Task.text}
        </h4>
      </div>
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
