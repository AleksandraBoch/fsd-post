import React, {useEffect, useState} from 'react';
import logo from '../logo.svg';
import './styles/App.css';
import PostList from "../pages/PostPage/PostList";
import axios from "axios";

function App() {

  return (
    <div className="App">
 <PostList />
    </div>
  );
}

export default App;
