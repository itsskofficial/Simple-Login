import React from "react"

const AuthContext = React.createContext({
    user: null,
    onLogout: () => { },
    loginSuccessful : ()
    
})

const AuthContextProvider = (props) => {
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
        <AuthContext.Provider value={{
            user: currentUser,
            onLogout : onLogoutHandler,
            loginSuccessful : onLoginHandler
        }}
    )
}

export default AuthContext