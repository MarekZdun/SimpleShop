import React from 'react';
import ProductSummary from './ProductSummary';

const SpecialOffer = () => {
    return (
        <div className="text-center">
            <h1>SPECIAL OFFER</h1>
            <div className="row">
                <div className="col-sm-4">
                    <ProductSummary />
                </div>
                <div className="col-sm-4">
                    <ProductSummary />
                </div>
                <div className="col-sm-4">
                    <ProductSummary />
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer;