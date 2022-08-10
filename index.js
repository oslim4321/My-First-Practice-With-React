import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Apping from './Component/Apping'
import Card from './card-component/Card'
import Shape from './Shaping/Shape'
import Contact from './Contact/Contact';
import Counter from './COunter/Counter'
import Pop from './POP/Pop';
import ClassTodoList from './ClassTodoList/ClassTodoList'


// import functionClick from './Component/functionClick'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
