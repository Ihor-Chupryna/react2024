import './App.css';
import { CommentForm } from "./components/CommentForm/CommentForm";
import { Comments } from "./components/Comments/Comments";
import { useState } from "react";

function App() {

  return (
    <div>
       <CommentForm/>
        <hr/>
        <Comments/>
    </div>
  );
}

export default App;
