import { Fragment } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Fragment>
      <Navbar loginSuccessful={onLoginHandler} onLogout={onLogoutHandler}>
      </Navbar>
    </Fragment>
  )
}

export default App;
