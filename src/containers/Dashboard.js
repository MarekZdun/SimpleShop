import React, { Component } from 'react';
import Notifications from '../components/Notifications';
import Board from '../components/Board';
import SpecialOffer from '../components/SpecialOffer';

class Dashboard extends Component {
    render(){
        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mt-5">
                            <Board />
                        </div>
                        <div className="col-sm-5 offset-sm-1 mt-sm-5">
                            <Notifications />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <SpecialOffer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;