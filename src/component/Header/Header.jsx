import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

function Header() {
  const cart = useSelector((state) => state.cart);
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
              <LibraryAddIcon />
            </Badge>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
