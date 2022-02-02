import "./styles.css";
import { useState } from "react";

import Buttons from "./conponents/Buttons";
import ContentsPrf from "./conponents/ContentsPrf";
import ContentsHby from "./conponents/ContentsHby";
import ContentsWrk from "./conponents/ContentsWrk";
import Logo from "./conponents/Logo";

export default function App() {
  const contents = [<ContentsPrf />, <ContentsHby />, <ContentsWrk />];
  const [arry, setArry] = useState("0");
  const onClickPrf = () => {
    setArry(0);
  };
  const onClickWrk = () => {
    setArry(1);
  };
  const onClickHby = () => {
    setArry(2);
  };
  return (
    <div className="App">
      <div className="header">
        <Logo />
        <Buttons
          onClickPrf={onClickPrf}
          onClickHby={onClickHby}
          onClickWrk={onClickWrk}
        />
      </div>
      <div className="main">{contents[arry]}</div>
    </div>
  );
}
