import logo from './logo.svg';
import './App.css';
import Btt from './Btt'
import FunctionClick from './Component/FunctionClick'
import ClassCompo from './Component/ClassCompo'
import Greet from './Component/Greet'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Btt styling={{color:'red'}} label='Cool' />
        <Btt styling={{color:'green'}} label='Yea' />
        <Btt styling={{color:'yellow'}} label='LoL' />
        <Btt styling={{color:'orange'}} label='Hmm' />
       <Greet title={'Mr'} name={'Oslim'} talent={'Running'}/>
        <FunctionClick/>
        <ClassCompo/>
      </header>
    </div>
  );
};

export default App;
