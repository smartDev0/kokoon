import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Arrow from './../../../../assets/imgs/arrow.svg'
class Register extends React.Component {
    render() {
        return (
            <div className="d-flex">
                <div className="auth-main">
                    <form className="w-100">
                        <div className="auth-title">
                            Sign Up
                        </div>
                        <br />
                        <br />
                        <div className="form-group">
                            <label className="form-label">UserName</label>
                            <input className="form-control auth-input-text" placeholder="John Doe" type="text"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label">E-mail</label>
                            <input className="form-control auth-input-text" placeholder="youreamil@yourcompany.com" type="email"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input className="form-control auth-input-text" placeholder="***********" type="password"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Repeat Password</label>
                            <input className="form-control auth-input-text" placeholder="***********" type="password"></input>
                        </div>
                        <br></br>
                        <Button className="auth-button">Sign Up</Button>
                        <br />
                        <div className="text-center forgot-label mt-20">
                            Don't have an account? <Link to="/auth/signin" className="forgot-label acitve-text">Sign In</Link>
                        </div>
                    </form>
                </div>
                <div className="auth-img d-v-center">
                    <img src={Arrow} alt="" />
                </div>
            </div>
        )
    }
}
export default Register;