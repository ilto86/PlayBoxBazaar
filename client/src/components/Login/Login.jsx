import { useContext } from "react";
import { Link } from 'react-router-dom';
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

// import loginStyles from './Login.module.css';


const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};


export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        // <section id={loginStyles.login_page} className={loginStyles.auth}>
        <section className="contact_section layout_padding">
            {/* <form id={loginStyles.login} vonSubmit={onSubmit}> */}


            {/* <div className={loginStyles.container}> */}
            <div className="container">
                {/* <div className={loginStyles.brand_logo}></div> */}
                <div className="heading_container">
                    <h2>Login</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form_container">
                            <form onSubmit={onSubmit}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    // id={loginStyles.email} 
                                    name={LoginFormKeys.Email}
                                    placeholder="Email" 
                                    onChange={onChange}
                                    value={values[LoginFormKeys.Email]}
                                />

                                <label htmlFor="login-pass">Password:</label>
                                <input
                                    type="password"
                                    // id={loginStyles.login_password} 
                                    name={LoginFormKeys.Password}
                                    placeholder="Password"
                                    onChange={onChange}
                                    value={values[LoginFormKeys.Password]}
                                />
                                <div className="btn_box" >
                                    <button>Login</button>
                                </div>
                                {/* <input 
                                    type="submit" 
                                    className="btn_box" 
                                    value="Login" 
                                    onChange={onChange} 
                                /> */}
                                {/* <p className={loginStyles.field}> */}
                                {/* <div className="object-fit-xl-contain"> */}
                                <div className="navbar navbar-nav">
                                    <p>
                                        <span>If you don't have profile click <Link to="/sign-up">here</Link></span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
