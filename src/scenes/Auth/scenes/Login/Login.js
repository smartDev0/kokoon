import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Arrow from './../../../../assets/imgs/arrow.svg'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            submitted: false,
            flag: false,
            errorPassword: '',
        }
    }

    Submit = (e) => {
        e.preventDefault();
        var pwd = this.state.password;
        const re = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
        const pattern = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
        const result = pattern.test(this.state.email);
        if (result !== true) {
            this.setState({
                error: 'Invalid e-mail address'
            });
        } 
        else if (pwd.length < 10) {
            this.setState({ errorPassword: 'Password must include at least 10 characters',error:'' });
        } else if (!re.test(pwd)) {
            this.setState({ errorPassword: 'At least one English, one numeric, one spacial character  should be included.' })
        }  else {
            this.setState({
                submitted: true,
                errorPassword:'',
                flag: true
            });
            this.props.history.push('/workspace');
        }
    }
    render() {
        return (
            <div className="d-flex">
                <div className="auth-main">
                    <form className="w-100" onSubmit={this.Submit}>
                        <div className="auth-title">
                            Sign In
                        </div>
                        <br />
                        <br />
                        <div className="form-group">
                            <label className="form-label">E-mail</label>
                            <input className="form-control auth-input-text"
                                placeholder="youreamil@yourcompany.com" type="email"
                                onChange={(e) => this.setState({ email: e.target.value })} 
                                value={this.state.email}></input>
                            <span className="validation-text">{this.state.error}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input className="form-control auth-input-text"
                                placeholder="***********" type="password"
                                onChange={(e) => this.setState({ password: e.target.value })}
                                value={this.state.password}
                            ></input>
                            <span className="validation-text">{this.state.errorPassword}</span>
                        </div>
                        <div className="form-group text-right">
                            <Link to="/auth/forgot" className="forgot-label">Forgot Password</Link>
                        </div>
                        <br></br>
                        <Button type="submit" className="auth-button">Sign In</Button>
                        <br/>
                        <div className="text-center forgot-label mt-20">
                            Don't have an account? <Link to="/auth/signup" className="forgot-label acitve-text">Sign Up here</Link>
                        </div>
                    </form>
                </div>
                <div className="auth-img d-v-center">
                    <img src={Arrow} alt=""/>
                </div>
            </div>
        )
    }
}
export default Login;