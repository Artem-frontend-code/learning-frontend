import React, {useState} from "react";
import "./styles/App.css"
import PostItem from "./components/PostItem";
  const languages = [
  { id: 1, title: "JavaScript", difficulty: "Средний" },
  { id: 2, title: "Python", difficulty: "Лёгкий" },
  { id: 3, title: "C++", difficulty: "Сложный" },
  { id: 4, title: "Java", difficulty: "Средний" },
];
function App() {
  return (
    
    <div className="App">
      {languages.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
        

      
    </div>
  );
}

export default App;
