import React from 'react';
import { Button } from 'react-bootstrap';
import Arrow from './../../../../assets/imgs/arrow.svg'
class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            c_password: '',
            error: '',
            submitted: false,
            flag: false
        }
    }
    Submit = (e) => {
        e.preventDefault();
        var pwd = this.state.password;
        const re = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
        if (pwd.length < 10) {
            this.setState({ error: 'Password must include at least 10 characters' });
        } else if (!re.test(pwd)) {
            this.setState({ error: 'At least one English, one numeric, one spacial character  should be included.' })
        } else if (this.state.password !== this.state.c_password) {
            this.setState({
                submitted: true,
                error: 'Passwords do not match'
            });
        } else {
            this.setState({
                submitted: true,
                error: '',
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
                                {'Congratulations! Now you have a new password for kokoon.cloud! Sign in now and have a great experience for managing your videos :)'}
                            </div>
                            <br />
                            <br></br>
                            <Button className="auth-button" onClick={() => this.props.history.push('/workspace')}>Sign In</Button>
                        </form>
                    ) : (
                        <form className="w-100" onSubmit={this.Submit}>
                            <div className="auth-title">
                                Reset password
                            </div>
                            <br />
                            <br />
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input className="form-control auth-input-text" placeholder="***********" type="password" name="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
                                {this.state.submitted ? ('') : (<span className="validation-text">{this.state.error}</span>)}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input className="form-control auth-input-text" placeholder="***********" type="password" name="c_password" onChange={(e) => this.setState({ c_password: e.target.value })}></input>
                                {this.state.submitted ? (<span className="validation-text">{this.state.error}</span>) : ('')}
                            </div>
                            <br></br>
                            <Button type="submit" className="auth-button">Reset password</Button>
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
export default Reset;