import { Component } from "react";

class LifeCycleMethods extends Component {
  state = {
    counter: 0,
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

  timeoutUpdate = null;

  componentDidMount () {
      this.handleTimeout()
  }

  componentDidUpdate () {
    this.handleTimeout()
  }

  componentWillUnmount () {
      clearTimeout(this.timeoutUpdate)
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O titulo Mudou'
    
    this.timeoutUpdate = setTimeout(() =>{
        this.setState({ posts, counter: counter + 1 })
    }, 2000)
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <>
      <h1>{counter}</h1>
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

export default LifeCycleMethods;

