import "./styles.css";
import pic from "./conponents/images/prof.png";

import Buttons from "./conponents/Buttons";
import Contents from "./conponents/Contents";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="portrate" src={pic} alt="自画像" />
        <h1>Nishimura shinji</h1>
        <Buttons />
      </div>
      <div className="main">
        <Contents />
      </div>
    </div>
  );
}
