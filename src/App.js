import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
