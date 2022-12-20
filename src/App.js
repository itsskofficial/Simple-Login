import { Fragment, useState } from "react";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

const App = () => {

  const [currentUser, setCurrentUser] = useState(null)
  
  
  
  const onLoginHandler = (user) => {
    setCurrentUser(user)
  }

  return (
    <Fragment>
      <Navbar onLogout={onLogoutHandler} user={currentUser}>
      </Navbar>
      <LoginForm loginSuccessful={onLoginHandler}
    </Fragment>
  )
}

export default App;
