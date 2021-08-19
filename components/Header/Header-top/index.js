import Phone from '../../../assets/icons/phone';
import Mail from '../../../assets/icons/mail';
import Link from 'next/link';
export const HeaderTop = () => {

    return (
        <div className="container-fluid">
            <header className="header-top">
                <nav className="nav-top">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link href="/faq"><a className="nav-link">FAQ</a></Link>
                        </li>
                        <li className="nav-item"><Link  href="/guide-line"><a className="nav-link">guide line</a></Link></li>
                        <li className="nav-item"><Link href="/blog"><a className="nav-link">our Blog</a></Link></li>
                        <li className="nav-item"><Link href="#"><a className="nav-link" ><Phone /></a></Link></li>
                        <li className="nav-item"><Link href="tel:09638111666"><a className="nav-link">09638111666</a></Link></li>
                        <li className="nav-item"><Link href="#"><a className="nav-link"><Mail /></a></Link></li>
                        <li className="nav-item"><Link href="mail:support@website.com"><a className="nav-link">support@website.com</a></Link></li>
                    </ul>
                    <ul className="f-right">
                        <li className="nav-item"><Link href="/producer"><a className="nav-link" ><span></span>Our producer</a></Link></li>                                
                        <li className="nav-item"><Link href="/buy-earn"><a className="nav-link" ><span></span>Buy and Earn Opportunity</a></Link></li>                                
                        <li className="nav-item"><Link href="/became-partner"><a className="nav-link" ><span></span>became a partner</a></Link></li>
                        <li className="nav-item"><Link href="/find-service-point"><a className="nav-link"><span></span>Find Various Service Point</a></Link></li>
                    </ul>
                </nav>
            </header>
        </div>


    )
}
export default HeaderTop