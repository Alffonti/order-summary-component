import illustration from "../assets/images/illustration-hero.svg"
import icon from "../assets/images/icon-music.svg"


export function OrderSummary() {
  return (
    <div className="order-summary">
      <img src={illustration} alt="" />
      <div className="order-summary__content">
        <h1 className="order-summary__title">Order Summary</h1>
        <p className="order-summary__description">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className="order-summary__plan-section">
          <img src={icon} alt="" />
          <div className="order-summary__plan-details">
            <h2 className="order-summary__plan-title">Annual Plan</h2>
            <p className="order-summary__plan-pricing">$59.99/year</p>
          </div>
          <a href="#">Change</a>
        </div>
        <button className="button button--primary">Proceed to Payment</button>
        <button className="button button--secondary">Cancel order</button>
      </div>
    </div>
  );
}