import React from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat1 from "./components/Chat1/Chat1";
import Chat2 from "./components/Chat2/Chat2";
import Chat3 from "./components/Chat3/Chat3";
import Chat4 from "./components/Chat4/Chat4";
import Chat5 from "./components/Chat5/Chat5";
import Chat6 from "./components/Chat6/Chat6";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <div className="layout">
        <div className="sidebar-section">
          <Sidebar />
        </div>
        <div className="chat-section">
          
            <Routes>
              <Route >
              <Route path="/chat1" element={<Chat1 />} />
              <Route path="/chat2" element={<Chat2 />} />
              <Route path="/chat3" element={<Chat3 />} />
              <Route path="/chat4" element={<Chat4 />} />
              <Route path="/chat5" element={<Chat5 />} />
              <Route path="/chat6" element={<Chat6 />} />
          </Route>
            </Routes>
          
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
