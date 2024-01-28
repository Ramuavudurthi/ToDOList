import logo from './logo.svg';
import './App.css';
import Demo1 from './components/Demo';
import Demo2 from './components/Demo2'
import Demo3 from './components/Demo3'
import Demo4 from './components/Demo4'
import Statehook from './components/Statehook';
import Demo5 from './components/conditionals/Demo'
import IncDec from './components/IncDec';
import Welcom from './components/Welcom';
import Hello from './components/Hello';
const person={
  name:'Ramu',
  age:20,
  mobile:'8688744624'
}
function App() {
  return (
    <div >
    <Hello/>
    </div>
  );
}

export default App;
