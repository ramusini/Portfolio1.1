import React from "react";
import { makeStyles } from "@material-ui/styles";

import { FiUser } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiList } from "react-icons/fi";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#e6ecf0",
    marginLeft: "100px",
    height: "100px"
  },
  btnCSS: {
    texteDcoration: "none",
    color: "#66757F",
    padding: "10px",
    marginTop: "80px",
    fontSize: "20px",
    borderRadius: "4px",
    backgroundColor: "white",
    border: "1px solid transparent",
    cursor: "pointer",
    margin: "0 2px",
    "&:hover": {
      backgroundColor: "#00587A",
      color: "white"
    },
    /* クリック時にhoverで変えた色を維持 */
    "&:focus": {
      backgroundColor: "#00587A",
      color: "white"
    },
    /* スクロール時に画面上に固定 */
    position: "sticky",
    top: "0"
  }
});

export default function Buttons(props) {
  const { onClickPrf, onClickWrk, onClickHby } = props;
  const styles = useStyles();
  return (
    <div className="allBtn">
      <div className={styles.btn}>
        <button className={styles.btnCSS} onClick={onClickPrf}>
          <FiUser />
          Profile
        </button>
        <button className={styles.btnCSS} onClick={onClickHby}>
          <FiStar />
          Hobby
        </button>
        <button className={styles.btnCSS} onClick={onClickWrk}>
          <FiList />
          Works
        </button>
      </div>
    </div>
  );
}
