import React from "react";

const styles = {
  backgroundColor: "rgb(230, 236, 240)",
  marginBottom: "10px",
  height: "40px"
};

export default function ContentsHby() {
  return (
    <>
      <h2 style={styles}>Hobby</h2>
      <div>
        <h3>お前は余暇に何をしているのか</h3>
        <p>■趣味</p>
        <p>ボードゲームなど</p>
      </div>
    </>
  );
}
