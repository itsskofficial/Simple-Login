import { Fragment } from "react";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

const App = () => {

 

  return (
      <Fragment>
        <Navbar onLogout={onLogoutHandler}>
        </Navbar>
        <LoginForm loginSuccessful={onLoginHandler}>
        </LoginForm>
      </Fragment>
  )
}

export default App;
