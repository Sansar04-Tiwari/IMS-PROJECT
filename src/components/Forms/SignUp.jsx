import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Context } from "../Contexts/Context";

function SignUp() {


    const navigate = useNavigate();

    const [formData, setformData] = useState({
        name: '',
        username: '',
        email: '',
        phone_number: '',
        gender: '',
        password: '',
        confirm_password: '',
        status: ''
    })

    //    taking value from the user

    const handleInput = (e) => {

        e.preventDefault();

        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://processing-management-system-api.vercel.app/api/auth/register', formData)
                .then(alert("form submitted"))

           localStorage.setItem('userId',res.data._id);

            setformData({
                name: '',
                username: '',
                email: '',
                phone_number: '',
                gender: '',
                password: '',
                confirm_password: '',
                status: ''
            });

            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <section className="login-content">
            <div className="container">
                <div className="row align-items-center justify-content-center height-self-center">
                    <div className="col-lg-8">
                        <div className="card auth-card">
                            <div className="card-body p-0">
                                <div className="d-flex align-items-center auth-content">
                                    <div className="col-lg-7 align-self-center">
                                        <div className="p-3">
                                            <h2 className="mb-2">Sign Up</h2>
                                            <p>Create your Inventory Managment System</p>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="floating-label form-group">
                                                            <input className="floating-input form-control" name='name' value={formData.name} type="text" placeholder=" " onChange={handleInput} required />
                                                            <label>Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="floating-label form-group">
                                                            <input className="floating-input form-control" name='username' value={formData.username} type="text" placeholder=" " onChange={handleInput} required />
                                                            <label>UserName</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="floating-label form-group">
                                                            <input className="floating-input form-control" name='email' value={formData.email} type="email" placeholder=" " onChange={handleInput} required />
                                                            <label>Email</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="floating-label form-group">
                                                            <input className="floating-input form-control" name='phone_number' value={formData.phone_number} type="number" placeholder=" " onChange={handleInput} required />
                                                            <label>Phone No.</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="floating-label form-group">
                                                            <select className='form-control' name='gender' value={formData.gender} onChange={handleInput} required>
                                                                <option value=''>Gender</option>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                            </select>
                                                            {/* <label>Gender</label> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="floating-label form-group">
                                                            <input className="floating-input form-control" name='password' value={formData.password} type="password" placeholder=" " onChange={handleInput} required />
                                                            <label>Password</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="floating-label form-group">
                                                            <input className="floating-input form-control" name='confirm_password' value={formData.confirm_password} type="password" placeholder=" " onChange={handleInput} required />
                                                            <label>Confirm Password</label>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-lg-12">
                                                        <div className="custom-control custom-checkbox mb-3">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                            <label className="custom-control-label" for="customCheck1">I agree with the terms of use</label>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                <button type="submit" className="btn btn-primary">Sign Up</button>
                                                <p className="mt-3">
                                                    Already have an Account <Link to='/'>Sign In</Link>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 content-right">
                                        <img src="../assets/images/login/01.png" className="img-fluid image-right" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp