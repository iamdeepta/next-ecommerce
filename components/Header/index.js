import HeaderTop from './Header-top';
import HeaderMiddle from './Header-middle';
import HeaderButtom from './Header-bottom';
import MbNav from './mb-nav-bottom';


export const Header = () => {
    return(
    <div className="app-main">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderButtom />
      <MbNav />

    </div>
    )
}

export default Header