import { useState } from "react";
import SideBar from "./components/sidebar";
import Header from "./components/header";
import Main from "./components/main";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      <div className="wrapper">
        <SideBar isActive={isActive} />
        <div className="main-content">
          <Header isActive={isActive} setIsActive={setIsActive} />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
