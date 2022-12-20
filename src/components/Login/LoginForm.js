import { Fragment, useRef } from "react"
import Card from "../UI/Card"

const LoginForm = (props) => {

    const userName = useRef()
    const userPassword = useRef()
    
    return (
        <Fragment>
            <Card>
                <div className="login-form-header">
                    <h2 className="login-form-title">
                        Login Form
                    </h2>
                </div>
                <div className="login-form-content">
                    <form>
                        
                    </form>
                    <label for="login-form-username-input" className="login-form-username-label">
                        Enter Username
                    </label>
                    <input type="text" id="login-form-username-input" className="login-form-username-input" ref={userName}>
                    </input>
                    <label for="login-form-password-input" className="login-form-password-label">
                        Enter Password
                    </label>
                    <input type="text" id="login-form-password-input" className="login-form-password-input" ref={userPassword}>
                    </input>
                </div>
            </Card>
        </Fragment>
    )
}

export default LoginForm