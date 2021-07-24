import { Component } from "react";

class ArrayState extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "O titulo 1",
        body: "O corpo",
      },
      {
        id: 2,
        title: "O titulo 2",
        body: "O corpo 2",
      },
      {
        id: 3,
        title: "O titulo 3",
        body: "O corpo 3",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </>
    );
  }
}

export default ArrayState;
