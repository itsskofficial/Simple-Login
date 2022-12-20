import { Fragment, useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

const App = () => {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(()=>{
    const storedUserInformation = localStorage.getItem('user')
    if (storedUserInformation != null) {
      setCurrentUser(JSON.parse(storedUserInformation))
    }

  },[])
  
  const onLoginHandler = (user) => {
    setCurrentUser(user)
    localStorage.setItem('user',JSON.stringify(user))
  }

  const onLogoutHandler = (logout) => {
    if (logout) {
      setCurrentUser(null)
    }
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
