import React, {useState} from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./styles/App.css";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "HTML", body:"нормально"},
    {id: 2, title: "JS", body:"более менее"},
    {id: 3, title: "C++", body:"круто"},
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (NewPost) => {
    setPosts([...posts, NewPost]);

  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}} />

      <div>
        <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue={'Сортировка'}
        options = {[
          {value: 'title', name:'По названию'},
          {value: 'body', name:'По описанию'},
        ]}
        />

      </div>

      {posts.length !== 0 ? <PostList remove = 
      {removePost} posts={posts} title="Языки программирования"/> 
      : 
      <h1 style={{textAlign: 'center',}}>Посты не найдены</h1>
      }
      
      

    </div>
  );
}

export default App;
