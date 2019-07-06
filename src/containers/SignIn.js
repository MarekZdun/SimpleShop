import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="sign-in mt-5">
                <div className="container">
                    <form className="pt-2" onSubmit={this.handleSubmit}>
                        <h5 className="text-muted font-weight-bold pt-5 pb-3">Sign In</h5>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-primary">LOGIN</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn
