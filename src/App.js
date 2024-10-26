import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import SideBar from "./component/SideBar";

function App() {
  return (
    <div className="App bg-[#F5F5F5]">
      <Header />
      <div className="flex">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
