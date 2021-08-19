import Link from 'next/link';
const MbMenus = () => {
    return(
        <div className="menus-wrap">
            <ul className="mb-menu-list">
                <li className="mb-menu-item">
                   <Link href="/became-partner"><a className="mb-menu-link">became a partner</a></Link>
                </li>
                <li className="mb-menu-item">
                    <Link href="/producer"><a className="mb-menu-link">Our producer</a></Link>
                </li>
                <li className="mb-menu-item">
                    <Link href="/buy-earn"><a className="mb-menu-link">Buy and Earn Opportunity</a></Link>
                </li>
                <li className="mb-menu-item">
                    <Link href="/find-service-point"><a className="mb-menu-link">Find Various Service Point</a></Link>
                </li>
                <li className="mb-menu-item">
                    <Link href="/product-market"><a className="mb-menu-link">Product's Market</a></Link>
                </li>
                <li className="mb-menu-item">
                    <Link href="/ready-meals"><a className="mb-menu-link">Homemade Ready Meals</a></Link>
                </li>
                <li className="mb-menu-item">
                    <Link href="/became-partner"><a className="mb-menu-link">Ready to Cook Product's</a></Link>
                </li>
                <li className="mb-menu-item">
                    <Link href="/combo-pack"><a className="mb-menu-link">Combo Pack's</a></Link>
                </li>
                <li className="mb-menu-item">
                    <Link href="/wholesale"><a className="mb-menu-link">Wholesale Zone</a></Link>
                </li>
                <li className="mb-menu-item">
                    <Link href="/faq"><a  className="mb-menu-link">FAQ</a></Link>
                </li>
                <li className="mb-menu-item">
                    <Link href="/guide-line"><a className="mb-menu-link">guide line</a></Link>
                </li>
                <li className="mb-menu-item">
                    <Link href="/blog"><a className="mb-menu-link">Our blog</a></Link>
                </li>
            </ul>
        </div>
    )
}
export default MbMenus