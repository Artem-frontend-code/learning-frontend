import React from "react";

const PostItem = ({post}) => {


    return (
        <div className="post">
          <h1>{post.title}</h1>
          <p>{post.difficulty}</p>
        </div>
    )

    

};

export default PostItem;