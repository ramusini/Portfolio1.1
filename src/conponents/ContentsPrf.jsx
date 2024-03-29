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
  itemSub: {
    color: "#66757f",
    margin: "0 0 0 0px",
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineEnd: "0px",
    fontSize: "15px",
    listStyle: "none",
    fontWeight: "bold"
  },
  contents: {
    background: "#fff",
    padding: "25px 50px"
  }
};

export default function ContentsPrf() {
  return (
    <>
      <div style={styles.style}>
        <h2 style={styles.index}>Profile</h2>
        <ul style={styles.itemSub}>
          <li>come-from</li>
          <li>education</li>
          <li>career</li>
        </ul>
      </div>
      <div style={styles.contents}>
        <h3>出身</h3>
        <p>
          三重県の松阪市で生まれ、松阪牛を食べるより海産物を食べて育ちました。
          ちなみに松阪牛は「まつさかうし」が公式呼称となっていますが、地元民はなぜかみんな「まつさかぎゅう」と呼んでいます。
        </p>
        <h3>学歴</h3>
        <p>2010年3月市立殿町中学校を卒業。</p>
        <p>2013年3月県立松阪高等学校を卒業。</p>
        <p>2018年3月明治大学商学部卒業。</p>
        <h3>職歴</h3>
        <p>
          2018年4月、新卒でJBCCに入社し営業を3年3ヶ月経験しました。主に中小企業を対象にITのトータルサービスを提案・提供することを生業とする企業です。
        </p>
        <p>
          某自動車メーカーをメインとした部署へ初期配属されました。
          また、並行して車両関連の部品メーカーを対象に、お客様のIT環境を理解し提案するソリューション営業も経験。2年とも営業目標を達成することができました。
        </p>
        <p>
          営業3年目の初めに新規開拓部門へ異動となり、１年新規開拓を経験した後退職しました。
        </p>
        <p>
          現在はエンジニアを目指しプログラミングについて学んでいます。勉強内容についてはWorksをご覧いただけると幸いです。
        </p>
      </div>
    </>
  );
}
