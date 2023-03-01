import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

import Calendar from './Calendar/Calendar'
import Sidebar from './Sidebar/Sidebar';
import Todo from './Todo/Todo';
import TopBar from './TopBar/TopBar';

class OverView extends React.Component <any, any> {
  constructor(props) {
    super(props)
    this.state = {
      isConnected: false
    };
  }

  statusCheck() {
    const { isConnected } = this.state
    if(isConnected) {
      console.log('test')
    }
  }

  render() {
    return (
      <div className='main'>
        <TopBar />
        <div className='content row'>
          <div className='top'>
            <Calendar />
          </div>
          <div className='bottom'>
            <Todo />
            <Sidebar />
          </div>
        </div>
      </div>

    );
  }
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OverView />} />
      </Routes>
    </Router>
  );
}
