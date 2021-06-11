import React from 'react';
import './App.css';
import Input from './components/Input';
import Task from './components/Task';
import Sidebar from './components/Sidebar';
import { useSelector } from 'react-redux';
import { selectTaskList } from './features/taskSlice';

function App() {
  const taskList = useSelector(selectTaskList);

  return (
    <div className="app">
      {/* Header */}
      <div className="app__main">
        <Sidebar />
        <div className='app__mainContent'>
          {/* Image */}
          {taskList.map(item => (
            <Task key={item.id} title={item.title} description={item.description} creator={item.creator} worker={item.worker} done={item.done} id={item.id} />
          ))}
          <Input />
        </div>
      </div>
      
    </div>
  );
}

export default App;
