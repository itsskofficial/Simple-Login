import { Fragment } from "react"
import Button from "./UI/Button"
import './css/Navbar.css'
import AuthContext from "../store/auth-context"

const Navbar = (props) => {
    <AuthContext.Consumer>
        {(ctx) => {
            const logoutHandler = (event) => {
        props.onLogout(true)
    }

    const logoutNavbar = 
        <div className="navbar-container">
                <h1 className="navbar-title">
                    Welcome
                </h1>
            </div>

    const loginNavbar = 
        <div className="navbar-container">
                <div className="navbar-title-container">
                    <h1 className="navbar-title">
                        Hello {ctx.user!=null?ctx.username:''}
                    </h1>
                </div>
                <div className="navbar-actions">
                    <Button onClick={logoutHandler} className="navbar-logout">
                        Logout
                    </Button>
                </div>
        </div>
        }}
    </AuthContext.Consumer>
    
    
    return (
        <AuthContext.Consumer>
            {(ctx) => {
                <Fragment>
                    {ctx.user==null?logoutNavbar:loginNavbar}
                </Fragment>
            }}
        </AuthContext.Consumer>
    )
}

export default Navbar