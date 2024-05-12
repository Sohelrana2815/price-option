import "./App.css";
import LineChart from "./Components/LineChart/LineChart";
// import Nav from "./Components/Nav/Nav";
import Navbar from "./Components/Navbar/Navbar";
import Phones from "./Components/Phones/Phones";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      {/* <Nav></Nav> */}
      {/* <h1 className="font-bold text-3xl bg-green-500">Price Options</h1> */}
    </>
  );
}

export default App;
