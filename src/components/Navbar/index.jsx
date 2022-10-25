import React from 'react';
import { NAV_ITEM as navigations } from '../../utils/constants/navItem';
import Nav from 'react-bootstrap/Nav';
import { default as NavComponent } from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { IconSearch } from '../Icons/index';

function Navbar() {
  return (
    <NavComponent bg="light" expand="lg">
      <NavComponent.Toggle aria-controls="basic-navbar-nav" />
      <div className={styles['nav_brand']}>
        <Link to="/" className="brand text-decoration-none">
          N E W S
        </Link>
      </div>
      <NavComponent.Collapse
        id="basic-navbar-nav"
        className={styles['navbar--container']}
      >
        <Nav className={styles['nav_item--left']}>
          {navigations.map((nav) => (
            <Link
              to={nav.link}
              key={nav.id}
              className="link text-decoration-none"
            >
              {nav.name}
            </Link>
          ))}
        </Nav>
        <div className={styles['nav_item--center']}>
          <Link to="/" className="brand text-decoration-none">
            N E W S
          </Link>
        </div>
        <div className={styles['nav_item--right']}>
          <Link to="/saved" className="link text-decoration-none">
            Saved
          </Link>

          <div className={`input-group ${styles.input}`}>
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                className="form-control"
                placeholder="Search"
                style={{ paddingBottom: '10px' }}
              />
            </div>
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: 'var(--blue)' }}
            >
              <IconSearch color="#ffffff" />
            </button>
          </div>
        </div>
      </NavComponent.Collapse>
    </NavComponent>
  );
}

export default Navbar;
