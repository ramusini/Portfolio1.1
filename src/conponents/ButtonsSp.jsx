import React from "react";
import { makeStyles } from "@material-ui/styles";

import { FiUser } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiList } from "react-icons/fi";

const useStyles = makeStyles({
  btn: {
    background: "#e6ecf0",
    padding: "15px 6.5vw",
    textAlign: "center"
  },
  btnCSS: {
    fontSize: "15px",
    marginRight: "10px",
    marginLeft: "10px",
    border: "none",
    backgroundColor: "#e6ecf0",
    color: "#66757f",
    "&:focus": {
      color: "#00587A"
    }
  }
});

export default function ButtonsSp(props) {
  const { onClickPrf, onClickHby, onClickWrk } = props;
  const styles = useStyles();
  return (
    <div className="allBtnSp">
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
