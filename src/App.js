import { Fragment, useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import AuthContext from "./store/auth-context";

const App = () => {

 

  return (
    <AuthContext.Provider value={{ user: currentUser }}>
      <Fragment>
        <Navbar onLogout={onLogoutHandler}>
        </Navbar>
        <LoginForm loginSuccessful={onLoginHandler}>
        </LoginForm>
      </Fragment>
    </AuthContext.Provider>
  )
}

export default App;
