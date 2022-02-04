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

export default function ContentsPrf() {
  return (
    <>
      <div style={styles.style}>
        <h2 style={styles.index}>Profile</h2>
        <h4 style={styles.item}>come-from/education/career</h4>
      </div>
      <div style={styles.contents}>
        <h3>出身</h3>
        <p>
          三重県の松阪市で生まれ、松阪牛を食べるより海産物を食べて育ちました。
          ちなみに松阪牛は「まつさかうし」が公式呼称となっていますが、地元民はなぜかみんな「まつさかぎゅう」と呼んでいます。
        </p>
        <h3>学歴</h3>
        <p>
          市立殿町中学、県立松阪高校を卒業。スポーツはサッカーとソフトテニスをしていました。また、好きなゲームを掘り下げるうちに嘘かほんとかアメリカで聖書の2番目に読まれていると言う新自由主義についての小説を読もうとして断念するような一般的な少年時代を過ごします。
        </p>
        <p>
          明治大学商学部へ一浪したのち合格。多数のサークルを見学し、社会学研究部とマーケティング研究会に所属を決めます。
          そこで社会学とボードゲーム、マーケティングを学びました。マーケティング研究会ではプレゼン大会に出場し好成績を残しました。
        </p>
        <h3>職歴</h3>
        <p>
          新卒でJBCCに入社。主に中小企業を対象にITのトータルサービスを提案・提供する企業で、営業を3年3ヶ月経験。
        </p>
        <p>
          本田技研工業を対象にした営業として配属され、毎週栃木への出張など行いルート営業を2年ほど経験。
          また、並行して車両部品メーカーを対象に、お客様のIT環境を理解し提案するソリューション営業も経験。2年とも営業目標を達成させてもらいまいした。
        </p>
        <p>
          営業3年目の初め、新規開拓部門へ移動となるのですがコロナ流行により新規訪問の取り付く島もなく、社内の環境が急激に悪化したこともあり退職。
        </p>
        <p>
          現在は大学の先輩よりエンジニア職を紹介していただいたため、プログラミングについて学んでいます。勉強内容についてはWorksをご覧いただけると幸いです。
        </p>
      </div>
    </>
  );
}
