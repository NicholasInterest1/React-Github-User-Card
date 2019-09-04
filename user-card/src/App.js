import React from 'react';

import UserCard from './components/UserCard'
import UserSearchForm from './components/UserSearchForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      {/* <UserSearchForm /> */}
      <UserCard />
    </div>
  );
}

export default App;