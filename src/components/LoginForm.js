import { Fragment, useRef, useState } from "react"
import Button from "./UI/Button"
import Card from "./UI/Card"
import ErrorModal from "./UI/ErrorModal"

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

        props.loginSuccessful({
            username: userName.current.value,
            password:userPassword.current.value
        })

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
            
        </Fragment>
    )
}

export default LoginForm