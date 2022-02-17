import React from "react";

import pic from "./images/scrshotSampleApp.png";
import pic2 from "./images/todoApp.png";
import pic3 from "./images/memoApp2.png";

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
  link: {
    padding: "5px 10px",
    display: "inline-block",
    border: "1px solid",
    borderColor: "#00587a",
    borderRadius: "5px",
    backgroundColor: "transparent",
    cursor: "pointer",
    textDecoration: "none",
    color: "#00587a",
    fontSize: "13px",
    marginTop: "5px",
    marginLeft: "5px"
  },
  linkText: {
    cursor: "pointer",
    textDecoration: "none"
  },
  img: {
    width: "100%",
    marginBottom: "10px"
  },
  img2: {
    width: "50%",
    boxShadow: "3px 5px 5px #ddd",
    marginBottom: "10px"
  },
  skillsBox: {
    marginTop: "10px"
  },
  skills: {
    marginTop: "0px",
    fontSize: "12px",
    paddingTop: "0",
    paddingBottom: "3px",
    fontWeight: "bolder"
  }
};

export default function ContentsWrk() {
  return (
    <>
      <div style={styles.style}>
        <h2 style={styles.index}>Work</h2>
        <h4 style={styles.item}>
          basic-study/ruby-on-rails/react/react-native
        </h4>
      </div>
      <div style={styles.contents}>
        <h3>基礎学習</h3>
        <ul>
          <li>Ruby</li>
          <li>HTML&CSS</li>
          <li>Ruby on Rails5</li>
          <li>SQL</li>
          <li>Command Line</li>
          <li>Git</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <p>progateにて上記のコースを修了しました。</p>
        <h3>Twitter風アプリ作成</h3>
        <p>
          <a
            href="https://thawing-retreat-19868.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img style={styles.img} src={pic} alt="SampleApp" />
          </a>
          <a
            href="https://railstutorial.jp/chapters/beginning?version=5.0"
            style={styles.linkText}
            target="_blank"
            rel="noreferrer"
          >
            「Ruby on Rails チュートリアル第4版」
          </a>
          にてRailsについて学びながらTwitter風のアプリを作成しました。
        </p>
        <div style={styles.skillsBox}>
          <p style={styles.skills}>skills:Ruby/HTML/CSS/JavaScript/SQL</p>
          <p style={styles.skills}>collaboration:GitHub/heroku/AWS S3</p>
        </div>
        <a
          href="https://github.com/ramusini/sample_app"
          style={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          Check on GitHub
        </a>
        <a
          href="https://thawing-retreat-19868.herokuapp.com/"
          style={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          Check the App
        </a>

        <h3>Todoアプリ開発</h3>
        <a
          href="https://csb-85o6i.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img style={styles.img2} src={pic2} alt="todoApp" />
        </a>
        <p>
          udemyの講座
          <a
            href="https://www.udemy.com/course/modern_javascipt_react_beginner/"
            style={styles.linkText}
            target="_blank"
            rel="noreferrer"
          >
            「モダンJavaScriptの基礎から始める挫折しないためのReact入門」
          </a>
          にてReactを学びながらTodoアプリを作成しました。
        </p>
        <div style={styles.skillsBox}>
          <p style={styles.skills}>skills:React/HTML/CSS/JavaScript</p>
          <p style={styles.skills}>collaboration:GitHub/Netlify</p>
        </div>
        <a
          href="https://github.com/ramusini/react-ToDo-App"
          style={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          Check on GitHub
        </a>
        <a
          href="https://csb-85o6i.netlify.app/"
          style={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          Check the App
        </a>

        <h3>メモアプリ開発</h3>
        <a
          href="https://github.com/ramusini/MemoApp2"
          target="_blank"
          rel="noreferrer"
        >
          <img style={styles.img2} src={pic3} alt="memoApp2" />
        </a>
        <p>
          udemyの講座
          <a
            href="https://www.udemy.com/course/react-native-ios-android/learn/lecture/24111922?start=480#overview"
            style={styles.linkText}
            target="_blank"
            rel="noreferrer"
          >
            「React Native, Firebase, Expo でアプリ開発をゼロから始めよう！」
          </a>
          にてシンプルなメモアプリを作成しました。作成したアプリはストアに申請し審査中です。
        </p>
        <div style={styles.skillsBox}>
          <p style={styles.skills}>skills:ReactNative/HTML/CSS/JavaScript</p>
          <p style={styles.skills}>collaboration:GitHub/Expo/Firebase</p>
        </div>
        <a
          href="https://github.com/ramusini/MemoApp2"
          style={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          Check on GitHub
        </a>
      </div>
    </>
  );
}
