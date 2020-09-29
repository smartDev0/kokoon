import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Arrow from './../../../../assets/imgs/arrow.svg'
class Forgot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            validation: false,
            error: true,
            submitted: false
        }
    }
    validateEmail(email) {
        var validation = false;
        const pattern = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
        const result = pattern.test(email);
        if (result === true) {
            this.setState({
                error: false,
                email: email
            });
            validation = true
            return validation;

        } else {
            this.setState({
                error: true
            });
            validation = false
            return validation;
        }
    }
    handleChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    Submit(e) {
        e.preventDefault();
        this.setState({submitted:true})
        if (this.validateEmail(this.state.email)) {
            this.setState({
                validation: true
            });
            this.props.history.push('/auth/reset');
        } else {
            this.setState({
                validation: false
            });
        }
    }
    render() {
        const { email, validation, error, submitted } = this.state;
        return (
            <div className="d-flex">
                <div className="auth-main">
                    <form className="w-100" onSubmit={this.Submit.bind(this)}>
                        <div className="auth-title">
                            Forgot password
                        </div>
                        <br />
                        <br />
                        <div className="auth-text">
                            {'Enter your email address. Then we will send you a reset link that helps resetting your password :)'}
                        </div>
                        <br />
                        <div className="form-group">
                            <label className="form-label">E-mail</label>
                            <input className="form-control auth-input-text" placeholder="youreamil@yourcompany.com" type="email"
                                onChange={(e) => this.handleChange(e)} value={email ? email : ''} />
                            {!validation && submitted ? <span className="validation-text">Invalid e-mail address</span> : ''}
                        </div>
                        <br></br>
                        <Button type="submit" className="auth-button">Email me reset link</Button>
                    </form>
                </div>
                <div className="auth-img d-v-center">
                    <img src={Arrow} alt="" />
                </div>
            </div>
        );
    }
}
export default Forgot;