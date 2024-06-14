import { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {Context, ContextProvider} from '../Contexts/Context'

function SignIn() {

    const navigate = useNavigate();

    const {data,setData} = useContext(Context);

    const [formData, setformData] = useState({
        user_name: '',
        password: '',
    })

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
            await axios.post('https://inventory-management-production-5cbf.up.railway.app/api/users/login', formData)
                .then(alert("form submitted"));

                setData(formData);

            setformData({
                user_name: '',
                password: ''
            });

            navigate('/dashboard');
        }
        catch (error) {
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
                                            <h2 className="mb-2">Sign In</h2>
                                            <p>Login to stay connected.</p>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="floating-label form-group">
                                                            <input className="floating-input form-control" name='user_name' value={formData.user_name} type="text" placeholder=" " onChange={handleInput} />
                                                            <label>UserName</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="floating-label form-group">
                                                            <input className="floating-input form-control" name='password' value={formData.password} type="password" placeholder=" " onChange={handleInput} />
                                                            <label>Password</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="custom-control custom-checkbox mb-3">
                                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                                            <label className="custom-control-label control-label-1" for="customCheck1">Remember Me</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <Link to='/forgotPassword'>Forgot Password?</Link>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Sign In</button>
                                                <p className="mt-3">
                                                    Create an Account <Link to='/signUp' className="text-primary">Sign Up</Link>
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

export default SignIn