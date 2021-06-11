import React from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';
import Sidebar from './components/Sidebar';
import Image from './components/Image';
import { useSelector } from 'react-redux';
import { selectTaskList } from './features/taskSlice';

function App() {
  const taskList = useSelector(selectTaskList);

  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <div className='app__mainLeft'>
          <Image />
          <Sidebar taskList={taskList} />
        </div>
        <div className='app__mainRight'>
          <div className='app__mainRightTaskList'>
            {taskList.map(item => (
              <Task key={item.id} title={item.title} description={item.description} creator={item.creator} worker={item.worker} done={item.done} id={item.id} />
            ))}
          </div>
          <Input />
        </div>
      </div>   
    </div>
  );
}

export default App;
