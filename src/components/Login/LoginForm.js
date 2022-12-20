import { Fragment, useRef, useState } from "react"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal"

const LoginForm = (props) => {

    const userName = useRef()
    const userPassword = useRef()

    const [error,setError] = useState(null)
    
    const formSubmitHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        
        if (userName.current.value.trim().length === 0 || userPassword.current.value.trim().length === 0) {
            setError({
                title: "Empty Fields",
                message: "Username and Password fields are compulsory"
            })
            return
        }

        if (userName.current.value.trim().length < 3) {
            setError({
                title: "Invalid UserName",
                message: "Username must be atleast 3 characters"
            })
            return
        }

        if (userPassword.current.value.trim().length < 7) {
            setError({
                title: "Invalid Password",
                message: "Password must be atleast 7 characters"
            })
            return
        }

        props.loginSuccessful = true
        userName.current.value = ''
        userPassword.current.value=''
    }

    const errorConfirmHandler = (event) => {
        setError(null)
        userName.current.value = ''
        userPassword.current.value=''
    }

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorConfirmHandler}/>}
            <Card>
                <div className="login-form-header">
                    <h2 className="login-form-title">
                        Login Form
                    </h2>
                </div>
                <div className="login-form-container">
                    <form onSubmit={formSubmitHandler}>
                        <div className="login-form-username-container">
                            <label for="login-form-username-input" className="login-form-username-label">
                                Enter Username
                            </label>
                            <input type="text" id="login-form-username-input" className="login-form-username-input" ref={userName}>
                            </input>
                        </div>
                        <div className="login-form-password-container">
                            
                       </div>
                       
                    </form>
                </div>
            </Card>
        </Fragment>
    )
}

export default LoginForm