function Price(props) {
    return (
        <div className="price-wrapper">
            <span className="popularity">{props.priceObj.popularity}</span>
            <span className="total-amount">{props.priceObj.priceUnit}{props.priceObj.totalPrice}</span>
            <span className="price-unit">Prices in USD</span>
            <p className="price-description">Pay once, use it forever. <br/> No strings attached.</p>
            <button className="purchase-cta">Buy Now</button>
        </div>
    )
  }
  
  export default Price;