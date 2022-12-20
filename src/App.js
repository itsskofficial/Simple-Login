import { Fragment, useState } from "react";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

const App = () => {

  const [currentUser, setCurrentUser] = useState(null)
  
  const onLoginHandler = (user) => {
    setCurrentUser(user)
  }

  const onLogoutHandler = (logout) => {
    
  }

  return (
    <Fragment>
      <Navbar onLogout={onLogoutHandler} user={currentUser}>
      </Navbar>
      <LoginForm loginSuccessful={onLoginHandler} user={currentUser}>
      </LoginForm>
    </Fragment>
  )
}

export default App;
