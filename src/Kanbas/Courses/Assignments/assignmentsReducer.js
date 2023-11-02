// src/Kanbas/Courses/Assignments/assignmentsReducer.js
import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    createAssignment: (state, action) => {
      state.assignments.push(action.payload);
    },
    removeAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    editAssignment: (state, action) => {
      const updatedIndex = state.assignments.findIndex(
        (assignment) => assignment._id === action.payload._id
      );
      state.assignments[updatedIndex] = action.payload;
    },
  },
});

export const { createAssignment,removeAssignment,editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
