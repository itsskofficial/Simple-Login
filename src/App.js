import { Fragment } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  
  const onLoginHandler = (event) => {

  }
  
  return (
    <Fragment>
      <Navbar loginSuccessful={onLoginHandler} onLogout={onLogoutHandler}>
      </Navbar>
    </Fragment>
  )
}

export default App;
