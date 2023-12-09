import { useContext } from "react";
import { Link } from 'react-router-dom';
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function Register() {
    const {registerSubmitHandler} = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });
    
    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>Register</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form_container">
                            <form action="" onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input 
                                        type="email" 
                                        name={RegisterFormKeys.Email}
                                        placeholder="Give your email here please..." 
                                        onChange={onChange} 
                                        values={values[RegisterFormKeys.Email]}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="pass">Password:</label>
                                    <input 
                                        type="password" 
                                        name={RegisterFormKeys.Password}
                                        placeholder="Give your password here please..." 
                                        onChange={onChange} 
                                        values={values[RegisterFormKeys.Password]}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="con-pass">Confirm Password:</label>
                                    <input 
                                        type="password" 
                                        name={RegisterFormKeys.ConfirmPassword}
                                        placeholder="Confirm your password here please..." 
                                        onChange={onChange} 
                                        values={values[RegisterFormKeys.ConfirmPassword]}
                                    />
                                </div>
                                <div className="btn_box">
                                    <button>SEND</button>
                                </div>
                                <div className="navbar navbar-nav">
                                    <p>
                                        <span>If you already have profile click <Link to="/sign-in">here</Link></span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}