import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Arrow from './../../../../assets/imgs/arrow.svg'
class Reset extends React.Component {
    render() {
        return (
            <div className="d-flex">
                <div className="auth-main">
                    <form className="w-100">
                        <div className="auth-title">
                            Reset password
                        </div>
                        <br />
                        <br />
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input className="form-control auth-input-text" placeholder="***********" type="password"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input className="form-control auth-input-text" placeholder="***********" type="password"></input>
                        </div>
                        <br></br>
                        <Button className="auth-button">Reset password</Button>
                    </form>
                </div>
                <div className="auth-img d-v-center">
                    <img src={Arrow} alt="" />
                </div>
            </div>
        )
    }
}
export default Reset;