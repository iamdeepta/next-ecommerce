
import Cart from "../../../assets/icons/cart";
import Wishlist from "../../../assets/icons/wishlist";
import Account from "../../../assets/icons/user";
import Home from "../../../assets/icons/home";
import Link from 'next/link';

export const mbNavBottom = () => {
  return (
    <div className="mb-nav-bottom">
      <div className="container">
        <ul className="mb-nav-bottom-list">
          <li className="mb-nav-bottom-item">
            <Link href="/">
              <a><Home /></a>
            </Link>
          </li>
          <li className="mb-nav-bottom-item">
            <Link href="/wishlist">
              <a><Wishlist /></a>
            </Link>
          </li>
          <li className="mb-nav-bottom-item">
            <Link href="/cart">
              <a><Cart /></a>
            </Link>
          </li>
          <li className="mb-nav-bottom-item">
            <Link href="/login">
              <a><Account /></a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default mbNavBottom;