import "../App.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import ClassComponents from "./ClassComponents";
import CountComponents from "./CountComponents";
import LifeCycleMethods from "./LifeCycleMethods";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <ClassComponents />
      <CountComponents />
      <LifeCycleMethods />
    </>
  );
}
export default App;
