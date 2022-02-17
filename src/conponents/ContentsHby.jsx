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
    textAlign: "center",
    marginTop: "10px"
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
        <p>ボードゲームと呼ばれるものを好んで蒐集し、遊びます。</p>
        <p>
          時折、「ボードゲーム？が趣味？」と尋ねられることがありますが、例えば読書が趣味の方は「主に洋書を読み、ジャンルはミステリーとホラーが好きです。
          特にコナンドイルの著書が愛読書です」と言ったりするかと思います。
        </p>
        <p>
          ボードゲームも本と似たようなもので数多くのタイトルがあり、毎年1,000以上のタイトルが新たに出版されているほどです。
          例に沿うと私の場合は「主にドイツボードゲームを遊びます、ジャンルはワーカープレイスメントや拡大再生産系が好きです。特にウヴェ・ローゼンベルク先生の作品がお気に入りです」となります。
        </p>
        <p>
          なぜボードゲームが好きか？については長くなるため、以上に留めます。
        </p>
        <div style={styles.imgFrame}>
          <img style={styles.img} src={pic} alt="ボドゲ1" />
          <h5>火星にコロニーを築くボドゲを遊ぶある日</h5>
        </div>
        <h3>ウォーハンマー40kで筆塗りや対戦を楽しむ</h3>
        <p>
          イギリス発祥のホビーとしてウォーハンマーというのものがあります。40年近く前から今なお拡大し続ける壮大なスケールの世界観をもとにして再現されたミニチュアを集めて戦うホビーです。
          私は初めて5年ほどになります。お気に入りのミニチュアを塗装したり友人と対戦して遊んでいます。
        </p>
        <p>
          世界観を読んで知って面白く、ミニチュアを塗って面白く、対戦して面白い。人によって楽しみ方が複数ある趣味です。
        </p>
        <p>
          見慣れない趣味だと思いますが、イギリスでは子供がクリスマスのプレゼントに欲しがるほどメジャーだとかそうでないとか。
        </p>
        <div style={styles.imgFrame}>
          <img style={styles.img} src={pic2} alt="塗り" />
          <h5>塗装が終わったものと塗装を待つもの達</h5>
        </div>
        <div style={styles.imgFrame}>
          <img style={styles.img} src={pic3} alt="盤面" />
          <h5>区民館を借りて対戦するある日</h5>
        </div>
        <h3>堤防釣り</h3>
        <p>
          堤防釣りに出ることもあります。
          ほとんどがボウズ（釣果なし）で帰っているため才能はないと思いますが、それでも4年ほど続けています。実は車での遠出と近辺の海鮮グルメが趣味なのかもしれません。
        </p>
        <div style={styles.imgFrame}>
          <img style={styles.img} src={pic4} alt="釣り" />
          <h5>3年目で初めて釣れたアオリイカに喜ぶ西村</h5>
        </div>
        <div style={styles.imgFrame}>
          <img style={styles.img} src={pic5} alt="イカ" />
          <h5>釣り人の特権を楽しむある日</h5>
        </div>
      </div>
    </>
  );
}
