// src/Kanbas/Courses/Assignments/assignmentsReducer.js
import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: [],
  // assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {

    createAssignment: (state, action) => {
      state.assignments = [action.payload, ...state.assignments];
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
    
      // Create a shallow copy of the state
      const newState = { ...state };
    
      // Update the assignment at the specified index
      newState.assignments[updatedIndex] = action.payload;
    
      // Return the new state
      return newState;
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
  },
});

export const { createAssignment,removeAssignment,editAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
