import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {DefaultApi} from "./generated/openbd/api";

function App() {
  const [url, setUrl] = useState("9780321125217");
  const [markdown, setMarkdown] = useState("");
  const bookInfoApi: DefaultApi = new DefaultApi();

  const handleChange = (event: any) => {
    setUrl(event.target.value);
  }

  const getBookData = async () => {
    let newVar = await bookInfoApi.getGet(Array.of(url));
    // console.log(newVar.data[0]);
    const data : any= newVar.data[0];
    const summary :any = data.summary;
    const author = summary?.author
    setMarkdown(author);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>ISBNを入れたら章のデータが取れて、markdownでタスク化できるものを作りたかった。</h3>
        <h3>現在：openBdでデータを取得</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={url} onChange={handleChange}/>
        <button onClick={getBookData}>データ取得</button>
        <textarea value={markdown} readOnly/>
      </header>
    </div>
  );
}

export default App;
