import { Fragment, useState } from "react"

const Navbar = (props) => {
    const [navbarContents, setnavbarContents] = useState(
        <div className="navbar-container">
            <h1 className="navbar-title">
                Welcome
            </h1>
        </div>
    )

    if (props.loginState === true) {
        setnavbarContents(
            
        )
    }
    return (
        <Fragment>
            {navbarContents}
        </Fragment>
    )
}

export default Navbar