import React from 'react';

const ProductSummary = () => {
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h4 className="card-title font-weight-bold text-muted">Banana</h4>
                <p className="card-text text-muted">Product description</p>
                <h4 className="card-text font-weight-bold text-muted">50E</h4>
                <a href="/" className="btn btn-primary mt-2">BUY NOW</a>
            </div>
        </div>
    )
}

export default ProductSummary;