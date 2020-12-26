import React, { Component } from 'react';
import FormInputs from '../components/FormInputs/FormInputs.jsx'
import './login.css';
import Button from '../components/CustomButton/CustomButton';
import { isEmpty } from '../shared/validator.js'
import * as AuthService from '../services/AuthService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            errors: {}
        }
    }
    handleInputChange = (field, event) => {
        let formData = this.state.formData;  // form data
        formData[field] = event.target.value; // current input change value
        this.isFormValid(formData); // check validation
        this.setState(formData); // set input change value 
    }

    login = (event) => {
        event.preventDefault();
        if (this.isFormValid()) {
            AuthService.login();
            // clear form fields error
            this.setState({ errors: {} });
            this.props.history.push('/dashboard');
        }
    }

    isFormValid = (fields) => {
        let isValid = true;
        const formData = fields ? fields : this.state.formData;
        let errors = {};
        if (isEmpty(formData.Username)) {
            isValid = false;
            errors.Username = 'UserName is Required';
        }

        if (isEmpty(formData.Password)) {
            isValid = false;
            errors.Password = 'Password is Required';
        }
        this.setState({ errors: errors });
        return isValid;
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user">
                                                <FormInputs
                                                    ncols={["col-md-12", "col-md-12"]}
                                                    properties={[
                                                        {
                                                            label: "Username",
                                                            type: "text",
                                                            className: "form-control",
                                                            placeholder: "UserName",
                                                            onChange: this.handleInputChange.bind(this, "Username"),
                                                            error: this.state.errors["Username"]
                                                        },
                                                        {
                                                            label: "Password",
                                                            type: "password",
                                                            className: "form-control",
                                                            placeholder: "Password",
                                                            onChange: this.handleInputChange.bind(this, "Password"),
                                                            error: this.state.errors["Password"]
                                                        }
                                                    ]}
                                                />
                                                <Button variant="outline-info" pullRight round type="submit" onClick={this.login.bind(this)} >
                                                    Login
                                                </Button>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
