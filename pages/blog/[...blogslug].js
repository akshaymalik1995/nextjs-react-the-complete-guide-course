import { useRouter } from "next/router"
const BlogPostPage = () => {
  const router = useRouter()
  // path : http://localhost:3000/blog/2022/05/01/best-products-ever
  console.log(router.query) // {blogslug : ['2022', '05', '01', 'best-products-ever']} 
    return (
      <div className="BlogPostPage">
        <h1>This is a Blog Page</h1>
      </div>
    )
  }
  
  export default BlogPostPage