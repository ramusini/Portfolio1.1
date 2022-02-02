import React from "react";
import { makeStyles } from "@material-ui/styles";

import { FiUser } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiList } from "react-icons/fi";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "rgb(230, 236, 240)",
    marginLeft: "300px",
    height: "204.3px"
  },
  btnCSS: {
    padding: "10px",
    marginTop: "80px",
    fontSize: "20px",
    borderRadius: "10px",
    backgroundColor: "white",
    border: "none",
    cursor: "pointer",
    margin: "0 3px",
    "&:hover": {
      backgroundColor: "rgb(0, 90, 121)",
      color: "white"
    },
    /* クリック時にhoverで変えた色を維持 */
    "&:focus": {
      backgroundColor: "rgb(0, 90, 121)",
      color: "white"
    },
    position: "sticky",
    top: "0px"
  }
});

export default function Buttons(props) {
  const { onClickPrf, onClickHby, onClickWrk } = props;
  const styles = useStyles();
  return (
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
  );
}
