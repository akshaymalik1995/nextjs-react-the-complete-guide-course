import { useRouter } from "next/router"

const PortfolioProjectPage = () => {
  const router = useRouter()
  console.log("pathname", router.pathname) // pathname /portfolio/[projectid]
  console.log("query object", router.query) // query object {projectid: 'akshay'}
  console.log("projectid", router.query.projectid) // projectid akshay
    return (
      <div className="PortfolioProjectPage">
        <h1>This is a dynamic Page nested inside the portfolio</h1>
      </div>
    )
  }
  
  export default PortfolioProjectPage