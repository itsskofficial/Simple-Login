import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Navbar loginSuccessful={onLoginHandler} onLogout={onLogoutHandler}></Navbar>
    
  )
}

export default App;
