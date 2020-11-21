import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // App.js에서 export된 App component를 사용

ReactDOM.render(
    <App />,
  document.getElementById('root')
  // index.html의 root에게 전달할 내용
);
