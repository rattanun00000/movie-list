import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import PostAddIcon from '@mui/icons-material/PostAdd';

function Header() {
  const cart = useSelector((state) => state.cart.list);
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-right">
          <Link to="/cart">
            <Badge className="badge" badgeContent={cart.length} color="primary">
              <div>My list</div>
              <PostAddIcon style={{ fontSize: '35px' }} />
            </Badge>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
