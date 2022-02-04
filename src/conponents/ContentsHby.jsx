import React from "react";

const styles = {
  style: {
    alignItems: "center",
    lineHeight: "1.15",
    webkitTextSizeAdjust: "100%",
    backgroundColor: "#e6ecf0",
    display: "flex",
    justyifyContent: "flex-start"
  },
  index: {
    borderRight: "2px solid #333",
    padding: "8px 20px 8px 0",
    display: "block",
    fontSize: "1.5em",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontWeight: "bold"
  },
  item: {
    color: "#66757f",
    margin: "0 0 0 20px",
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineEnd: "0px",
    fontSize: "18px"
  },
  contents: {
    background: "#fff",
    padding: "25px 50px"
  }
};

export default function ContentsHby() {
  return (
    <>
      <div style={styles.style}>
        <h2 style={styles.index}>Hobby</h2>
        <h4 style={styles.item}>hobby</h4>
      </div>
      <div style={styles.contents}>
        <h3>余暇に何をしているのか</h3>
        <p>■趣味</p>
        <p>ボードゲームなど</p>
      </div>
    </>
  );
}
