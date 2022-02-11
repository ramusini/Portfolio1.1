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
        <h3>Ruby on Rails　ツイートアプリ作成</h3>
        <p>
          <a href="https://railstutorial.jp/chapters/beginning?version=5.0">
            「Ruby on Rails チュートリアル第5版」
          </a>
          にてRailsを学びながらTwitterによく似たものを作成しました。
        </p>
        <h3>React Todoアプリ開発</h3>
        <a href="https://csb-85o6i.netlify.app/">Todoアプリ</a>
        <p>
          udemyの講座
          <a href="https://www.udemy.com/course/modern_javascipt_react_beginner/">
            「モダンJavaScriptの基礎から始める挫折しないためのReact入門」
          </a>
          にてReactを学びながらTodoアプリを作成しました。
        </p>
        <h3>React Native　メモアプリ開発</h3>
        <p>
          udemyの講座
          <a href="https://www.udemy.com/course/react-native-ios-android/learn/lecture/24111922?start=480#overview">
            「React Native, Firebase, Expo でアプリ開発をゼロから始めよう！」
          </a>
          にてReact
          Native、Expo、Firebaseの使い方を学びながらメモアプリを作成しApple
          Storeに公開しました。
        </p>
        <p></p>
      </div>
    </>
  );
}
