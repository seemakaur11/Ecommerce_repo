import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Alert from './Alert';

function Login({ login, isAuthenticated }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    };
    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return (
        <div className='container'>
            <Alert />
            <div className='row text-center'>
                <h1 className='large text-primary'>Sign In</h1>
                <form className='form py-3' onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group m-3'>
                        <input type='email' className='p-2' placeholder='Email Address' name='email' value={email} onChange={(e) => onChange(e)} />
                    </div>
                    <div className='form-group m-3'>
                        <input type='password' className='p-2' placeholder='Password' name='password' minLength='6' value={password} onChange={(e) => onChange(e)} />
                    </div>
                    <div>
                        <button type="submit" className='btn btn-danger'>Login</button>
                        {/* <Link to="/">Login</Link> */}
                    </div>
                </form>
                <p className='py-4'>
                    Don't have an account? <Link to='/register'>Sign Up</Link>
                </p>
            </div>

        </div>
    )
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login)