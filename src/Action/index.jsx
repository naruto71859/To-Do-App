import {
  add_Task,
  set_Input,
  set_Delete,
  set_Complete,
  set_Edit
} from "../Const/constType";

export const ADDTASK = payload => {
  return { type: add_Task, payload };
};

export const SETINPUT = payload => {
  return { type: set_Input, payload };
};

export const DELETE = payload => {
  return { type: set_Delete, payload };
};

export const COMPLETE = payload => {
  return { type: set_Complete, payload };
};

export const EDIT = payload => {
  return { type: set_Edit, payload };
};
