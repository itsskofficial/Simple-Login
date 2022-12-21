import React from "react"

const AuthContext = React.createContext({
    user: null
    
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

        }}
    )
}

export default AuthContext