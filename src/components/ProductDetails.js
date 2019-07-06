import React from 'react'

const ProductDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="product-details">
            <div className="container mt-5">
                <div className="card">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card-body">
                                <h5 className="card-title">Banana {id}</h5>
                                <p className="card-text">Product description</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <img src="..." alt="..."></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
