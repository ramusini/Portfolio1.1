import React from "react";
import pic from "./images/portrate.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  logo: {},
  portrate: {
    border: "5px solid #fff",
    width: "100px",
    height: "100px",
    borderRadius: "100%",
    objectFit: "cover"
  }
});

export default function Logo() {
  const styles = useStyles();
  return (
    <div className="allLogo">
      <div className={styles.logo}>
        <img className={styles.portrate} src={pic} alt="自画像" />
        <h1>Nishimura shinji</h1>
      </div>
    </div>
  );
}
