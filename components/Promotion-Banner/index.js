const PromotionBanner = () => {
  return (
    <div className="container">
        <div className="PromotionBanner">
          <div className="PromotionRight">
              <ul className="Promo-Banner-List">
                <li className="Promo-Banner-Item"><a className="Promo-Banner-Link" href="#"><img src="/images/promotion-banner/clock.jpg" /></a></li>
                <li className="Promo-Banner-Item"><a className="Promo-Banner-Link" href="#"><img src="/images/promotion-banner/offer.jpg" /></a></li>
              </ul>
            </div>
            <div className="PromotionLeft">
              <a href="#">
                <img src="/images/promotion-banner/blander.jpg" />
              </a>
            </div>
            <div className="PromotionRight">
              <ul className="Promo-Banner-List">
                <li className="Promo-Banner-Item"><a className="Promo-Banner-Link" href="#"><img src="/images/promotion-banner/clock.jpg" /></a></li>
                <li className="Promo-Banner-Item"><a className="Promo-Banner-Link" href="#"><img src="/images/promotion-banner/sale.jpg" /></a></li>
              </ul>
            </div>
        </div>
    </div>
  )
};


export default PromotionBanner