import "./styles.css";
import { useState } from "react";

import Buttons from "./conponents/Buttons";
import ButtonSp from "./conponents/ButtonsSp";
import ContentsPrf from "./conponents/ContentsPrf";
import ContentsHby from "./conponents/ContentsHby";
import ContentsWrk from "./conponents/ContentsWrk";
import Logo from "./conponents/Logo";

export default function App() {
  const contents = [<ContentsPrf />, <ContentsWrk />, <ContentsHby />];
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
      <meta charset="UTF-8"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="wrapper">
        <div className="header">
          <Logo />
          <Buttons
            onClickPrf={onClickPrf}
            onClickHby={onClickHby}
            onClickWrk={onClickWrk}
          />
        </div>
        <div>
          <div className="main">{contents[arry]}</div>
        </div>
      </div>
      <ButtonSp
        onClickPrf={onClickPrf}
        onClickHby={onClickHby}
        onClickWrk={onClickWrk}
      />
    </div>
  );
}
