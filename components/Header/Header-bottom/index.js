import Bar from '../../../assets/icons/bar';
import Downarrow from '../../../assets/icons/arrow-down';


export const HeaderBottom = () => {

    return (
        <div className="container-fluid">
            <header className="header-bottom">
                <nav className="nav-bottom">
                    <ul className="nav-list">
                        <li className="nav-item"><Bar /></li>
                        <li className="nav-item cat">Categories</li>
                        <li className="nav-item"><Downarrow /></li>
                    </ul>
                    <ul className="f-right">                      
                        <li className="nav-item"><a className="nav-link" href="/"><span></span>Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/view-more/product-market"><span></span>Product's Market</a></li>
                        <li className="nav-item"><a className="nav-link" href="/view-more/homemade-ready-meals"><span></span>Homemade Ready Meals</a></li>
                        <li className="nav-item"><a className="nav-link" href="/view-more/ready-to-cook-product"><span></span>Ready to Cook Product's</a></li>
                        <li className="nav-item"><a className="nav-link" href="/view-more/combo-packs"><span></span>Combo Pack's</a></li>
                        <li className="nav-item"><a className="nav-link" href="/view-more/wholesale"><span></span>Wholesale Zone</a></li>
                    </ul>
                </nav>
            </header>
        </div>


    )
}
export default HeaderBottom