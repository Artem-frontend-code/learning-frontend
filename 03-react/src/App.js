import React, {useState, useMemo} from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
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

  const [filter, setFilter] = useState({sort: "" , query:""});

  

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))


  }, [filter.query, sortedPosts])

  const createPost = (NewPost) => {
    setPosts([...posts, NewPost]);

  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  

  return (
    <div className="App">
      
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList remove = {removePost} posts={sortedAndSearchedPosts} title="Языки программирования"/> 
      
      
      
      
      

    </div>
  );
}

export default App;
