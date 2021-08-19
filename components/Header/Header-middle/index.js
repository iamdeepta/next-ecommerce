import PopCartItem from "../../shopping-cart/popup-cart-item";
import Link from "next/link";
import CartIcon from "../../../assets/icons/cart";
import WishlistIcon from "../../../assets/icons/wishlist";
import UserIcon from "../../../assets/icons/user";
import { useState, useEffect, useRef } from "react";
import React from "react"
import { useSelector } from "react-redux";
import useOnClickOutside from "use-onclickoutside";
import { withRouter, useRouter } from "next/router"
import Menu from './menus';
import Category from './categories';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const Header = ({ isErrorPage }) => {
  const router = useRouter();
  const { cartItems } = useSelector((state) => state.cart);
  const arrayPaths = ["/"];

  const [onTop, setOnTop] = useState(
    !arrayPaths.includes(router.pathname) || isErrorPage ? false : true
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  function logout(){

    localStorage.clear();

    setTimeout(function(){
      toast.success("Logout Successfully");
      router.push('/');
    },1000);
  
  }

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);
  // end
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  return (
    <header className={`site-header ${!onTop ? "site-header--fixed" : ""}`}>
      <ToastContainer/>
      <div className="container">
        <Link href="/">
          <a>
            <img className="logo" src="/images/logo.png" />
          </a>
        </Link>
        <div className="Header-middle">
          {/* <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>  */}
          <form className={`new-search-form`}>
            {/* <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>  */}
            <input
              type="text"
              name="search"
              placeholder="Enter the product you are looking for"
            />
          </form>
          <button className="seach-btn" type="submit">
            <i
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search"
            ></i>
          </button>
          {/* </button> */}
        </div>
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        >
          <div className="mb-sidebar-wrap">
            <div className="mb-sidebar-header">
              {
                typeof window !== 'undefined' ?
              (localStorage.getItem('user-info') ? 
               
            <>
            <Link href="/dashboard">
              <a className="sidebar-login-btn">My Account</a>
            </Link>
            <Link href="/" onClick={logout}>
              <a className="sidebar-login-btn">Logout</a>
            </Link>
            </>
            :
            <>
              <Link href="/login">
              <a className="sidebar-login-btn">Login</a>
            </Link>
            <Link href="/register">
              <a className="sidebar-login-btn">Register</a>
            </Link>
            </>)
            :
            null
            }
              
            </div>
            <div className="mb-sidebar-body">
              <ul className="mb-sidebar-body-btns">
              <li>
                  <button className="sidebar-menus-btn" selected={isTabOne}>
                    <Link href={{ pathname: "/", query: { tab: "1" } }}>
                      <button>Menus</button>
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="sidebar-category-btn" selected={isTabTwo}>
                    <Link href={{ pathname: "/", query: { tab: "2" } }}>
                      <button>Categories</button>
                    </Link>
                  </button> 
                </li>
              </ul>
              <div>
              {isTabOne && <React.Fragment><Menu /></React.Fragment>}
              {isTabTwo && <React.Fragment><Category /></React.Fragment>}
              </div>
            </div>
          </div>
        </nav>
        <div className="site-header__actions">
          <button
            ref={searchRef}
            className={`search-form-wrapper ${
              searchOpen ? "search-form--active" : ""
            }`}
          >
            <form className={`search-form`}>
              <i
                className="icon-cancel"
                onClick={() => setSearchOpen(!searchOpen)}
              ></i>
              <input
                type="text"
                name="search"
                placeholder="Enter the product you are looking for.."
              />
            </form>
            <i
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search"
            ></i>
          </button>
          <Link href="/wishlist">
            <button className="site-header__btn-avatar" title="Wishlist">
              <WishlistIcon />
            </button>
          </Link>
          <li className="cart-btn-hv">
            <button className="btn-cart">
              <CartIcon />
              {cartItems.length > 0 && (
                <span className="btn-cart__count">{cartItems.length}</span>
              )}
            </button>
            <div className="Cart-popup-outer">
              <PopCartItem />
            </div>
          </li>
          <li className="account-wrap">
            <button className="site-header__btn-avatar">
              <UserIcon />
            </button>
            <div className="account-content">
              <div className="account-content-wrap">
              {
                typeof window !== 'undefined' ?
              (localStorage.getItem('user-info') ? 
               
            <>
            <div>
            <Link href="/dashboard">
              <a className="sidebar-login-btn">My Account</a>
            </Link>
            </div>
            <div>
            <Link href="javascript:void(0)">
              <a className="sidebar-login-btn" onClick={logout}>Logout</a>
            </Link>
            </div>
            </>
            :
            <>
            <div>
              <Link href="/login">
              <a className="sidebar-login-btn">Login</a>
            </Link>
            </div>
            <div>
            <Link href="/register">
              <a className="sidebar-login-btn">Register</a>
            </Link>
            </div>
            </>)
            :
            null
            }
              </div>
            </div>
          </li>
          <button
            onClick={() => setMenuOpen(true)}
            className="site-header__btn-menu"
          >
            <i className="btn-hamburger">
              <span></span>
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
