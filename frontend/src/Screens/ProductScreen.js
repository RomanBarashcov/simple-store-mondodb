import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct, publishReview, deleteReview } from '../actions/productActions';
import ReactStars from 'react-stars';

function ProductScreen(props) {

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(1);
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');

  const productDetails = useSelector(state => state.productDetails);
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
  }

  const handleAddReview = () => {

    if(!review) {
      alert("Set your review text please!")
      return;
    }
    
    dispatch(publishReview(props.match.params.id, rating, review))

    //destroy
    setRating(1);
    setReview('');

  }

  const handlerDeleteReview = (id) => {

    if(!userInfo && !userInfo.isAdmin) return;
    if (!window.confirm('Are you sure you want to delete rewiew?')) return;

    dispatch(deleteReview(props.match.params.id, id))

  }

  return <div>
    <div className="back-to-result">
      <Link to="/">Back to result</Link>
    </div>
    {
    loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
          <div>
          <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product" ></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.title}</h4>
                </li>
                <li>
                  <ReactStars value={product.rating} edit={false} half={true} size={25} color2={'#ffd700'} /> ({product.numReviews} Reviews)
            </li>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
            <div>
                    {product.description}
                  </div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>
                  Price: {product.price}
                </li>
                <li>
                  Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                </li>
                <li>
                  Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                    {[...Array(product.countInStock).keys()].map(x =>
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}
                  </select>
                </li>
                <li>
                  Size: <select value={size} onChange={(e) => { setSize(e.target.value) }}>
                      <option key={1} value={1}>40</option>
                      <option key={2} value={2}>41</option>
                      <option key={3} value={3}>42</option>
                      <option key={4} value={4}>43</option>
                      <option key={5} value={5}>44</option>
                      <option key={6} value={6}>45</option>
                      <option key={7} value={7}>46</option>
                  </select>
                </li>
                <li>
                  {product.countInStock > 0 && <button onClick={handleAddToCart} className="button primary" >Add to Cart</button>
                  }
                </li>
              </ul>
            </div>

          </div>
          <div className="comments-block">
            {
              userInfo && 
              <div>
              <h2>Add Review</h2>
              <div>
        
                  <ul>
                  <li>
                    <label htmlFor="fname">Rating </label>
                    <ReactStars value={rating} half={false} size={20} color2={'#ffd700'} onChange={(value) => { setRating(value)  }} />
                  </li>
                    <li>
                      <label htmlFor="fname">Review </label><br></br>
                      <textarea value={review} rows="5" type="text" id="fname" name="fname" onChange={(e) => {setReview(e.target.value)}}></textarea>
                    </li>
                    <li>
                      <button  className="button primary" onClick={() => handleAddReview()}>Send</button>
                    </li>
                  </ul>
        
              </div>
            </div>
            }
            <div className="comments">
                <div>
                  <h2>Reviews</h2>
                    {
                      product.comments &&
                        product.comments.map(comment => 
                          <ul key={comment._id}>
                            <li><b>User: </b> {comment.user.email}</li>
                            <li><b>Review: </b>{comment.text}</li>
                            <li><ReactStars edit={false} value={comment.rating} size={20} color2={'#ffd700'} /></li>
                              { userInfo && 
                                userInfo.isAdmin && 
                                <li> <button  className="button primary" onClick={() => handlerDeleteReview(comment._id)}>Delete</button></li> }
                          </ul>
                        )
                    }
              </div>
            </div>
          </div>
          </div>
        
        )
    }


  </div>
}
export default ProductScreen;