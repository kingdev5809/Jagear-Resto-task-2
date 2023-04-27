import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className=" bg-black-100 min-h-[100vh] flex flex-1 h-screen overflow-y-scroll">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
