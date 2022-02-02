import React from "react";
import pic from "./images/prof.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  logo: {
    float: "left"
  },
  portrate: {
    height: "100px",
    borderRadius: "100px"
  }
});

export default function Logo() {
  const styles = useStyles();
  return (
    <div className={styles.logo}>
      <img className={styles.portrate} src={pic} alt="自画像" />
      <h1>Nishimura shinji</h1>
    </div>
  );
}
