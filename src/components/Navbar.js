import { Fragment, useState } from "react"
import Button from "./UI/Button"
import './css/Navbar.css'

const Navbar = (props) => {

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
                            Hello {}
                        </h1>
                    </div>
                    <div className="navbar-actions">
                        <Button onClick={logoutHandler} className="navbar-logout">
                            Logout
                        </Button>
                    </div>
        </div>
    
    // const [navbarContents, setnavbarContents] = useState(
    //     <div className="navbar-container">
    //         <h1 className="navbar-title">
    //             Welcome
    //         </h1>
    //     </div>
    // )

    

    // if (props.user!=null) {
    //     setnavbarContents(
    //         <div className="navbar-container">
    //             <div className="navbar-title-container">
    //                 <h1 className="navbar-title">
    //                     Hello {props.user.username}
    //                 </h1>
    //             </div>
    //             <div className="navbar-actions">
    //                 <Button onClick={logoutHandler} className="navbar-logout">
    //                     Logout
    //                 </Button>
    //             </div>
    //         </div>
    //     )
    // }
    
    return (
        <Fragment>
            {props.user==null?logoutNavbar:loginNavbar}
        </Fragment>
    )
}

export default Navbar