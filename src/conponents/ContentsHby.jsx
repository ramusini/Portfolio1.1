import React from "react";
import pic from "./images/onMars.png";
import pic2 from "./images/paint.png";
import pic3 from "./images/battle.png";
import pic4 from "./images/fishing.png";
import pic5 from "./images/ika.png";

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
  },
  img: {
    width: "60%"
  },
  imgFrame: {
    fontSize: "12px",
    textAlign: "center"
  }
};

export default function ContentsHby() {
  return (
    <>
      <div style={styles.style}>
        <h2 style={styles.index}>Hobby</h2>
        <h4 style={styles.item}>bordgame/warhammer40k/fishing/etc.</h4>
      </div>
      <div style={styles.contents}>
        <h3>ボードゲームを遊ぶ</h3>
        <p>
          ボードゲームと呼ばれるものを好んで遊びます。読書が趣味の方は例えば「洋書が好きで、主にミステリーとホラーが好きです。コナンドイルの著書が愛読書です」と言ったりすると思います。ボドゲ好きも似たようなもので私の場合は「ドイツボドゲが好きで、主にワーカープレイスメントや拡大再生産系を遊びます。ウヴェ・ローゼンベルク先生の作品が好きです」となります。
        </p>
        <div style={styles.imgFrame}>
          <img style={styles.img} src={pic} alt="ボドゲ1" />
          <h5>火星にコロニーを築くボドゲを遊ぶある日</h5>
        </div>
        <h3>ウォーハンマー40kでペイントやゲームを楽しむ</h3>
        <p>
          イギリス発祥のホビーとしてウォーハンマーというのものがあります。40年近く前から今なお拡大し続ける壮大なスケールの世界観をもとに再現されたミニチュアを集めて戦うホビーです。
          私は初めて5年ほどですが、いまだに全貌の1割も理解できていません。お気に入りのミニチュアをペイントしたり友人と戦ったりして遊んでいます。
        </p>
        <div style={styles.imgFrame}>
          <img style={styles.img} src={pic2} alt="塗り" />
          <h5>ペイントが終わったものと未ペイントのもの</h5>
        </div>
        <div style={styles.imgFrame}>
          <img style={styles.img} src={pic3} alt="盤面" />
          <h5>区民館を借りて対戦</h5>
        </div>
        <h3>堤防釣り</h3>
        <p>
          堤防釣りに出ることもあります。
          ほとんどがボウズで帰っているため才能はないと思いますが、それでも4年ほど続けているので趣味になっているようです。
        </p>
        <div style={styles.imgFrame}>
          <img style={styles.img} src={pic4} alt="釣り" />
          <h5>3年目で初めて釣れたアオリイカに喜ぶ西村</h5>
        </div>
        <div style={styles.imgFrame}>
          <img style={styles.img} src={pic5} alt="イカ" />
          <h5>釣り人の特権を楽しむ</h5>
        </div>
      </div>
    </>
  );
}
