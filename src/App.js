import { Fragment, useState } from "react";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

const App = () => {

  const [currentUser, setCurrentUser] = useState(null)
  
  
  const onLoginHandler = (user) => {
    setCurrentUser()
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
