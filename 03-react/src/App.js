import React, {useState} from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "HTML", body:"description"},
    {id: 2, title: "JS", body:"description"},
    {id: 3, title: "C++", body:"description"},
  ]);

  const [posts2, setPosts2] = useState([
    {id: 1, title: "Квеантипин", body:"description"},
    {id: 2, title: "Снотворное", body:"description"},
    {id: 3, title: "Дота 2", body:"description"},
  ]);


  
  const addNewPost = (e) => {
    e.preventDefault();
    
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: '',});

  }


  return (
    <div className="App">
      <form>
        <MyInput 
        value = {post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder="Название поста"

        />
        <MyInput 
        value = {post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title="Языки программирования"/>
      <PostList posts={posts2} title="Страдания будущего"/>

    </div>
  );
}

export default App;
