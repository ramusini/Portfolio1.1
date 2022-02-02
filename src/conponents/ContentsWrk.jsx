import React from "react";

const styles = {
  backgroundColor: "rgb(230, 236, 240)",
  marginBottom: "10px",
  height: "40px"
};

export default function ContentsWrk() {
  return (
    <>
      <h2 style={styles}>Work</h2>
      <div>
        <h3>何を勉強してきた？</h3>
        <p>progateなど</p>
        <p>リアクトとか</p>
      </div>
    </>
  );
}
