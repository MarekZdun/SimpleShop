import React, { Component } from 'react';

class Dashboard extends Component {
    render(){
        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 vh-100 bg-success">

                        </div>
                        <div className="col-sm-5 offset-sm-1 vh-100 bg-info">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 vh-100 bg-warning">
                            <h1>SPECIAL OFFER</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;