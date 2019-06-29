import React from 'react';

const SpecialOffer = () => {
    return (
        <div className="text-center">
            <h1>SPECIAL OFFER</h1>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h4 className="card-title font-weight-bold text-muted">Banana</h4>
                            <p className="card-text text-muted">Product description</p>
                            <h4 className="card-text font-weight-bold text-muted">50E</h4>
                            <a href="/" className="btn btn-primary mt-2">BUY NOW</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">

                </div>
                <div className="col-sm-4">

                </div>
            </div>
        </div>
    )
}

export default SpecialOffer;