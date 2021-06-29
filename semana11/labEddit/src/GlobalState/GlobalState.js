// import GlobalStateContext from "./GlobalStateContexts"
// import { useState } from "react"

// const GlobalState = (props) => {
//     const token = localStorage.getItem('token')
//     const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

//     const state = { rightButtonText}
//     const setters = { setRightButtonText}
//     const data = { state, setters}



//     return (
//         <GlobalStateContext.Provider value={data} >
//             {props.children}
//         </GlobalStateContext.Provider>
//     )
// }

// export default GlobalState;