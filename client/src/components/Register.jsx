import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';
import Alert from './Alert';

function Register({ setAlert, register, isAuthenticated }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });
    const { name, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        }
        else {
            register({ name, email, password });
        }
    }
    if (isAuthenticated) {
        return <Navigate to='/' />
    }
    return (
        <div>
            <div className='aboutContant'></div>
            <div className='container'>
                <Alert />
                <div className='row text-center'>
                    <h3 className='signInTitle'>Sign Up</h3>
                    <form className='form py-3' onSubmit={(e) => onSubmit(e)}>
                        <div className='form-group m-3'>
                            <input type='text' className='py-2 loginInput' placeholder='Name' name='name' value={name} onChange={(e) => onChange(e)} />
                        </div>
                        <div className='form-group m-3'>
                            <input type='email' className='py-2 loginInput' placeholder='Email Address' name='email' value={email} onChange={(e) => onChange(e)} />
                        </div>
                        <div className='form-group m-3'>
                            <input type='password' className='py-2 loginInput' placeholder='Password' name='password' minLength='6' value={password} onChange={(e) => onChange(e)} />
                        </div>
                        <div className='form-group m-3'>
                            <input type='password' className='py-2 loginInput' placeholder='Confirm Password' name='password2' minLength='6' value={password2} onChange={(e) => onChange(e)} />
                        </div>
                        <div>
                            <button type="submit" className='loginUserBtn'>SignUp</button>
                            {/* <Link to='/'>SignUp</Link> */}
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register)