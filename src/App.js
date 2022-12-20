import { Fragment } from "react";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

const App = () => {
  
  const onLoginHandler = (event) => {

  }

  return (
    <Fragment>
      <Navbar loginSuccessful={onLoginHandler} onLogout={onLogoutHandler} user={currentUser}>
      </Navbar>
      <LoginForm 
    </Fragment>
  )
}

export default App;
