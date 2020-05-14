import {
  PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST
} from "../constants/productConstants"
import axios from 'axios';
import Axios from "axios";

const listProducts = (category = '', searchKeyword = '', sortOrder = '') => async (dispatch) => {
  try {

    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products?category=" + category +
      "&searchKeyword=" + searchKeyword + "&sortOrder=" + sortOrder);

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  }
  catch (error) {

    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
}

const saveProduct = (product, image) => async (dispatch, getState) => {
  try {

    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    const { userSignin: { userInfo } } = getState();
    if (!product._id) {

      const {data} = await Axios.post('/api/products', product, {
        headers: {
          'Authorization': 'Bearer ' + userInfo.token
        }
      });

      const formData = new FormData()
      formData.append(
        'myImage',
        image
      );

      let createImageResult  = await Axios.post(`/api/products/${data.data._id}/image`, formData, {
        headers: {
          'Authorization': 'Bearer ' + userInfo.token,
          'content-type': 'multipart/form-data'
        }
      });

      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });

    } else {

      const { data } = await Axios.put('/api/products/' + product._id, product, {
        headers: {
          'Authorization': 'Bearer ' + userInfo.token
        }
      });

      const formData = new FormData()
      formData.append(
        'myImage',
        image
      );

      let updateImageResult = await Axios.post(`/api/products/${product._id}/image`, formData, {
        headers: {
          'Authorization': 'Bearer ' + userInfo.token,
          'content-type': 'multipart/form-data'
        }
      });

      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });

    }

  } catch (error) {

    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  }
}

const detailsProduct = (productId) => async (dispatch) => {
  try {

    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get("/api/products/" + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
}

const publishReview = (productId, rating, text) =>  async (dispatch, getState) => {
  try {

    const { userSignin: { userInfo } } = getState();
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });

    let comment = {
      user: userInfo._id,
      rating: rating,
      text: text
    }

    let result  = await Axios.post(`/api/comments/${productId}`, comment, {
      headers: {
        'Authorization': 'Bearer ' + userInfo.token
      }
    });

    const { data } = await axios.get("/api/products/" + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
}

const deleteReview = (productId, reviewId) =>  async (dispatch, getState) => {
  try {

    const { userSignin: { userInfo } } = getState();
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });

    const payload = {
      productId: productId,
      commentId: reviewId
    }

    let result  = await Axios.post(`/api/comments/delete`, payload, {
      headers: {
        'Authorization': 'Bearer ' + userInfo.token
      }
    });

    const { data } = await axios.get("/api/products/" + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
}

const deleteProdcut = (productId) => async (dispatch, getState) => {
  try {

    const { userSignin: { userInfo } } = getState();
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });

    const { data } = await axios.delete("/api/products/" + productId, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token
      }
    });

    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });

  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
}

export { listProducts, detailsProduct, saveProduct, publishReview, deleteReview, deleteProdcut }