import React from "react";
// import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

import { useState } from "react";
// import useAuthState from 'react-firebase-hooks/auth'

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Chat1 from "./components/Chat1/Chat1";
import Chat2 from "./components/Chat2/Chat2";
import Chat3 from "./components/Chat3/Chat3";
import Chat4 from "./components/Chat4/Chat4";
import Chat5 from "./components/Chat5/Chat5";
import Chat6 from "./components/Chat6/Chat6";
import SignIn from "./components/SignIn/SignIn";


//import Footer from "./components/Footer/Footer";

function App() {
  const [user, setUser] = useState(null); 

  // const [user] = useAuthState(auth)

  const handleSignIn = () => {
    setUser(true); // Simulate successful sign-in
    // Redirect to chat1 after successful sign-in
    //  history.push('/chat1');
    console.log("Logged in!"); // Check if this message appears in the console after successful login
  };


  return (
    <>
      {/* <SignIn handleSignIn = {handleSignIn} /> Pass setUser function to SignIn component */}

      {/* Conditional rendering based on user authentication */}
      {user ? 
        <div className="app-container">
          <div className="layout">
            <div className="sidebar-section">
              <Sidebar />
            </div>
            <div className="chat-section">
              <Routes>
                <Route path="/chat1" element={<Chat1 />} />
                <Route path="/chat2" element={<Chat2 />} />
                <Route path="/chat3" element={<Chat3 />} />
                <Route path="/chat4" element={<Chat4 />} />
                <Route path="/chat5" element={<Chat5 />} />
                <Route path="/chat6" element={<Chat6 />} />
                {/* Add a default route to redirect to chat1 if no valid route is matched */}
                <Route path="/*" element={<Navigate to="/chat1" />} />
              </Routes>
            </div>
          </div>
        </div>
       : <SignIn handleSignIn={handleSignIn}/>}
    </>
  );
}

export default App;



























//   return (
//     <>
//     <SignIn />
//     <div className="app-container">
//       <div className="layout">
//         <div className="sidebar-section">
//           <Sidebar />
//         </div>
//         <div className="chat-section">
          
//             <Routes>
//               <Route >
//               <Route path="/chat1" element={<Chat1 />} />
//               <Route path="/chat2" element={<Chat2 />} />
//               <Route path="/chat3" element={<Chat3 />} />
//               <Route path="/chat4" element={<Chat4 />} />
//               <Route path="/chat5" element={<Chat5 />} />
//               <Route path="/chat6" element={<Chat6 />} />
//           </Route>
//             </Routes>
          
//         </div>
//       </div>
     
//     </div>
//     </>
//   );
// }

// export default App;
