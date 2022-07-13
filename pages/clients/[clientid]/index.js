import {useRouter} from "next/router"
const ClientProjectsPage = () => {
  const router = useRouter()
  console.log(router.query) // {clientid: 'max'}
    return (
      <div className="ClientProjectsPage">
        <h1>Here is a list of projects of a given client</h1>
      </div>
    )
  }
  
  export default ClientProjectsPage
  