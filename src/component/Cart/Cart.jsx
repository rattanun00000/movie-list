import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../../redux/slices/cartSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './Cart.scss';
export default function Cart() {
  const cart = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="cart-title">My Movie List</div>
      {cart.length === 0 ? (
        <p className="cartEmpty">List is empty...</p>
      ) : (
        <div className="card-container">
          {cart.map((item) => (
            <div className="cart-card" key={item.imdbID}>
              <div className="cart-left">
                <div className="img-container">
                  <img
                    className="img-size"
                    src={item.Poster}
                    alt={item.Title}
                  />
                </div>
              </div>
              <div className="cart-right">
                <p className="cart-title">{item.Title}</p>
                <div
                  className="cart-right-bottom"
                  onClick={() => dispatch(deleteCart(item.imdbID))}
                >
                  <div className="delete-button">
                    Watched
                    <DeleteForeverIcon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
