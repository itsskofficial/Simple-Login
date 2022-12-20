import { Fragment, useState } from "react"
import Button from "./UI/Button"
import './css/Navbar.css'

const Navbar = (props) => {

    const loginNavbar = <div className="navbar-container">
             <h1 className="navbar-title">
                Welcome
             </h1>
         </div>
    // const [navbarContents, setnavbarContents] = useState(
    //     <div className="navbar-container">
    //         <h1 className="navbar-title">
    //             Welcome
    //         </h1>
    //     </div>
    // )

    // const logoutHandler = (event) => {
    //     setnavbarContents(
    //         <div className="navbar-container">
    //             <div className="navbar-title-container">
    //                 <h1 className="navbar-title">
    //                     Welcome
    //                 </h1>
    //             </div>
    //         </div>
    //     )
    //     props.onLogout(true)
    // }

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
            {navbarContents}
        </Fragment>
    )
}

export default Navbar