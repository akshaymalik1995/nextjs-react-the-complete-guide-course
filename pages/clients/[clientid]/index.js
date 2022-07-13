import {useRouter} from "next/router"
const ClientProjectsPage = () => {
  const router = useRouter()
  const buttonHandler = () => {
    router.push({
      pathname : "/clients/[clientid]/[clientprojectid]",
      query : {clientid : "max", clientprojectid : "react-todo"}
    })
  }
    return (
      <div className="ClientProjectsPage">
        <h1>Here is a list of projects of a given client</h1>
        <button onClick={buttonHandler}>Open React Todo Project</button>
      </div>
    )
  }
  
  export default ClientProjectsPage
  