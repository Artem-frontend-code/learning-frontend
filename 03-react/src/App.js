import React, {useState} from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./styles/App.css";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "HTML", body:"description"},
    {id: 2, title: "JS", body:"description"},
    {id: 3, title: "C++", body:"description"},
  ]);

  

  const createPost = (NewPost) => {
    setPosts([...posts, NewPost]);

  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      
      <PostForm create={createPost}/>
      {posts.length !== 0 ? <PostList remove = 
      {removePost} posts={posts} title="Языки программирования"/> 
      : 
      <h1 style={{textAlign: 'center',}}>Посты не найдены</h1>
      }
      
      

    </div>
  );
}

export default App;
