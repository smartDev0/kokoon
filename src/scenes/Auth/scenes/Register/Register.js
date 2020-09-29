import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Arrow from './../../../../assets/imgs/arrow.svg'
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email: '',
            password: '',
            c_password:'',
            errorName: '',
            errorEmail: '',
            errorPassword: '',
            errorCpassword: '',
            submitted: false,
            flag: false,
        }
    }
    Submit = (e) => {
        e.preventDefault();
        var pwd = this.state.password;
        const na = /^[a-zA-Z0-9]+$/;
        const re = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
        const pattern = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
        const result = pattern.test(this.state.email);

        if (!na.test(this.state.name)) {
            this.setState({
                errorName: 'Invalid name'
            });
        }
        else if (result !== true) {
            this.setState({
                errorEmail: 'Invalid e-mail address',
                errorName:''
            });
        }
        else if (pwd.length < 10) {
            this.setState({ errorPassword: 'Password must include at least 10 characters', errorEmail: '' });
        } else if (!re.test(pwd)) {
            this.setState({ errorPassword: 'At least one English, one numeric, one spacial character  should be included.' })
        } else if (this.state.password !== this.state.c_password) {
            this.setState({
                errorPassword:'',
                errorCpassword: 'Passwords do not match'
            });
        } else {
            this.setState({
                errorCpassword: '',
                flag: true
            });
        }
    }
    render() {
        const { flag } = this.state;
        return (
            <div className="d-flex">
                <div className="auth-main">
                    {flag ? (
                        <form className="w-100">
                            <div className="auth-title">
                                Success
                            </div>
                            <br />
                            <br />
                            <div className="auth-text">
                                {'Congratulations! Now you have an account for kokoon.cloud!  Sign in now and have a great experience for managing your videos :)'}
                            </div>
                            <br />
                            <br></br>
                            <Button className="auth-button" onClick={() => this.props.history.push('/auth/signin')}>Sign In</Button>
                        </form>
                    ) : (
                            <form className="w-100" onSubmit={this.Submit}>
                                <div className="auth-title">
                                    Sign Up
                                </div>
                                <br />
                                <br />
                                <div className="form-group">
                                    <label className="form-label">UserName</label>
                                    <input className="form-control auth-input-text"
                                        placeholder="John Doe" type="text"
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                        value={this.state.name}></input>
                                    <span className="validation-text">{this.state.errorName}</span>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">E-mail</label>
                                    <input className="form-control auth-input-text" placeholder="youreamil@yourcompany.com" type="email"
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                        value={this.state.email}></input>
                                    <span className="validation-text">{this.state.errorEmail}</span>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <input className="form-control auth-input-text" placeholder="***********" type="password"
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                        value={this.state.password}></input>
                                    <span className="validation-text">{this.state.errorPassword}</span>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Repeat Password</label>
                                    <input className="form-control auth-input-text" placeholder="***********" type="password"
                                        onChange={(e) => this.setState({ c_password: e.target.value })}
                                        value={this.state.c_password}></input>
                                    <span className="validation-text">{this.state.errorCpassword}</span>
                                </div>
                                <br></br>
                                <Button type="submit" className="auth-button">Sign Up</Button>
                                <br />
                                <div className="text-center forgot-label mt-20">
                                    Don't have an account? <Link to="/auth/signin" className="forgot-label acitve-text">Sign In</Link>
                                </div>
                            </form>

                        )}
                </div>
                <div className="auth-img d-v-center">
                    <img src={Arrow} alt="" />
                </div>
            </div>
        )
    }
}
export default Register;