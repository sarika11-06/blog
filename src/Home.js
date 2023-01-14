import Bloglist from './BlogList'
import useFetch from './useFetch'

const Home = () => {
  let url = 'http://localhost:8000/blogs'
  const {data : blogs , isPending , error} = useFetch(url)

  return (
    <div className='home'>
      {error && <div>{error}</div> }
      {isPending && <div>Loading....</div> }
      { blogs && <Bloglist blogs={blogs} title="All Blogs" />}
      {/* <Bloglist blogs={blogs.filter((blog) => (blog.author === "mario"))} title="Mario's Blog" /> */}
    </div>
  )
}

export default Home
