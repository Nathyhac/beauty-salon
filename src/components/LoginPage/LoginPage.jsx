"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"
import "./LoginPage.css"

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="container">
            {/* Login Content */}
            <div className="login-container">
                <div className="login-form-container">
                    <div className="login-form">
                        <h2>Have you ever used Planity?</h2>

                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input type="email" id="email" placeholder="email@example.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password*</label>
                            <div className="password-input">
                                <input type={showPassword ? "text" : "password"} id="password" />
                                <button className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <Link to="/forgot-password" className="forgot-password">
                            Forgot your password?
                        </Link>

                        <button className="login-button">Log in</button>

                        <div className="divider">
                            <span>OR</span>
                        </div>

                        <h2>New to Planity?</h2>

                        <Link to="/signup" className="create-account-link">
                            <button className="create-account">Create my account</button>
                        </Link>
                    </div>

                </div>

                <div className="login-image">
                    <img
                        src="https://unsplash.com/photos/a-woman-getting-her-nails-done-at-a-nail-salon-gb6gtiTZKB8"
                        alt="Comb"
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
