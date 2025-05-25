
import './App.css';
import TemperatureConverter from './components/Temperature';
import TaskInput from './components/TodoList';

function App() {
  return (
    <div className='central'>
    <TemperatureConverter />
    <TaskInput />
    </div>
  );
}

export default App;
