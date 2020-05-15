import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import ReactStars from 'react-stars';

function HomeScreen(props) {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;

  const { categories } = useSelector(state => state.categoryList);
  const cat = category ? categories.find(c => c._id === category): "";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder))
  }
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder))
  }

  return <>
    {cat &&
      <h2>{cat.name}</h2>}
{console.log(products)}
    <ul className="filter">
      <li>
        <form onSubmit={submitHandler}>
          <input name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </li>
      <li>
        Sort By {' '}
        <select name="sortOrder" onChange={sortHandler}>
          <option value="">Newest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </li>
    </ul>
    {loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
        <ul className="products">
          {
            products && products.length > 0 &&
            products.map(product =>
              <li key={product._id}>
                <div className="product">
                  <Link to={'/product/' + product._id}>
                    <img className="product-image" src={product.image} alt="product" />
                  </Link>
                  <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.title}</Link>
                  </div>
                  <div className="product-price">${product.price}</div>
                  <div className="product-rating"><ReactStars value={product.rating} edit={false} half={true} size={25} color2={'#ffd700'} /> ({product.numReviews} Reviews)</div>
                </div>
              </li>)
          }
        </ul>
    }
  </>

}
export default HomeScreen;