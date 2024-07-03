import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Contexts/Context";
 import signIn from '../../assets/images/logo.png'


function SignIn() {

    const navigate = useNavigate();

    const [formData, setformData] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        e.preventDefault();

        setformData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios
                .post(
                    "https://processing-management-system-api.vercel.app/api/auth/login",
                    formData
                )
                .then(alert("form submitted"));

            // Store token in local storage
            localStorage.setItem('token', response.data.token);

            setformData({
                email: "",
                password: "",
            });

            navigate("/dashboard");
        } catch (error) {
            console.log(error.message);
        }
    };

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
                                                            <input
                                                                className="floating-input form-control"
                                                                name="email"
                                                                value={formData.email}
                                                                type="email"
                                                                placeholder=" "
                                                                onChange={handleInput}
                                                            />
                                                            <label>Email</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="floating-label form-group">
                                                            <input
                                                                className="floating-input form-control"
                                                                name="password"
                                                                value={formData.password}
                                                                type="password"
                                                                placeholder=" "
                                                                onChange={handleInput}
                                                            />
                                                            <label>Password</label>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-lg-6">
                                                        <div className="custom-control custom-checkbox mb-3">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customCheck1"
                                                            />
                                                        </div>
                                                    </div> */}
                                                    <div className="col-lg-6 justify-content-end">
                                                        <Link to="/forgotPassword">Forgot Password?</Link>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">
                                                    Sign In
                                                </button>
                                                <p className="mt-3">
                                                    Create an Account{" "}
                                                    <Link to="/signUp" className="text-primary">
                                                        Sign Up
                                                    </Link>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 content-right">
                                        <img
                                            src={signIn}
                                            className="img-fluid image-right"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
