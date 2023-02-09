import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const STATUES = Object.freeze({


  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'ERROR'

});



const JobSlice = createSlice({

  name: 'Job',
  initialState: {
    jobListsData: [],
    status: '',
  },


  extraReducers: (builder) => {

    builder

      .addCase(fetchjobLists.pending, (state) => {
        state.status = STATUES.LOADING

      })
      .addCase(fetchjobLists.fulfilled, (state, action) => {
        state.status = STATUES.IDLE
        state.jobListsData = action.payload
      })

      .addCase(fetchjobLists.rejected, (state) => {
        state.status = STATUES.ERROR
      })


  }

})

/*     export const {add} = JobSlice.actions;
 */    export default JobSlice.reducer;

// !  Get all Job Data  //

export const fetchjobLists = createAsyncThunk('/jobLists', async (thunkAPI) => {
  try {

    const response = await fetch('http://localhost:5000/admin/allpost',
      {
        method: 'GET',
        statusCode: 200,
        headers: {
          "origin": "*",
          "optionsSuccessStatus": 200,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS',
        },

      })

    return await response.json();


  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    /* toast.error("Session Expired") */ 
    return thunkAPI.rejectWithValue(message)
  }
})



