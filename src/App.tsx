import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [url, setUrl] = useState("");
  const [markdown, setMarkdown] = useState("");

  const handleChange = (event: any) => {
    setUrl(event.target.value);
  }

  const getBookData = () => {
    console.error("よんだよー");
    setMarkdown("あいうえおー");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={url} onChange={handleChange}/>
        <button onClick={getBookData}>データ取得</button>
        <textarea value={markdown} readOnly/>
      </header>
    </div>
  );
}

export default App;
