import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_ITEM as navigations } from '../../utils/constants/navItem';
import Nav from 'react-bootstrap/Nav';
import { default as NavComponent } from 'react-bootstrap/Navbar';
import styles from './styles.module.css';
import { IconSearch } from '../Icons/index';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/reducer/searchSlice/searchSlice';
function Navbar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(input));
  };

  return (
    <NavComponent bg="light" expand="lg">
      <NavComponent.Toggle aria-controls="basic-navbar-nav" />
      <div className={styles['nav_brand']}>
        <NavLink to="/" className="brand text-decoration-none">
          N E W S
        </NavLink>
      </div>
      <NavComponent.Collapse
        id="basic-navbar-nav"
        className={styles['navbar--container']}
      >
        <Nav className={styles['nav_item--left']}>
          {navigations.map((nav) => (
            <NavLink
              to={nav.link}
              key={nav.id}
              className="link text-decoration-none"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {nav.name}
            </NavLink>
          ))}
        </Nav>
        <div className={styles['nav_item--center']}>
          <NavLink to="/" className="brand text-decoration-none">
            N E W S
          </NavLink>
        </div>
        <div className={styles['nav_item--right']}>
          <NavLink
            to="/saved"
            className="link text-decoration-none"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Saved
          </NavLink>

          <form
            className={`input-group ${styles.input}`}
            onSubmit={handleSubmit}
          >
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                className="form-control"
                placeholder="Search"
                style={{ paddingBottom: '10px' }}
                onChange={handleChange}
                value={input}
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: 'var(--blue)' }}
              onClick={handleSubmit}
            >
              <IconSearch color="#ffffff" />
            </button>
          </form>
        </div>
      </NavComponent.Collapse>
    </NavComponent>
  );
}
const activeStyle = {
  color: 'var(--blue-2)',
};
export default Navbar;
