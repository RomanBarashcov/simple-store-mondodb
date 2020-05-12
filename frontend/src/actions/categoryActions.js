import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL
    } from "../constants/categoryConstants"
  import axios from 'axios';
  import Axios from "axios";
  
  const listCategories = () => async (dispatch) => {
    try {
  
      dispatch({ type: CATEGORY_LIST_REQUEST });
      const { data } = await axios.get("/api/categories");
      dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });

    }
    catch (error) {
  
      dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
    }
  }

  export { listCategories }