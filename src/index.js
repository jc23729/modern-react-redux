//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component

const App = () => {
  <div>
    <label className="label" for="name">Enter your name:</label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: 'blue', color: 'white'}}>Submit</button>
  </div>
};


//Take the react component and show it on the screen


ReactDOM.render(
  <App />,
  document.getElementById('root')
);













// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
