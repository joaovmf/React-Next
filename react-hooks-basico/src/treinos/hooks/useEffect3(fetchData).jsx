import { useState } from "react"

export const Home = () => {
  /* eslint-disable */
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts')
      const json = await data.json()
      setPosts(json)
      return json;
    }
  })

  return<pre>{JSON.stringify(posts, null, 2)}</pre>
}
