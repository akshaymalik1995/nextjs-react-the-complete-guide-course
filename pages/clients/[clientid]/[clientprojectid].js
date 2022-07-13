import { useRouter } from "next/router"
const SelectedClientProjectPage = () => {
  const router = useRouter()
  console.log(router.query) // {clientid: 'max', clientprojectid: 'react-todo'}
    return (
      <div className="SelectedClientProjectPage">
        <h1>This is a page for a particular project of a given client</h1>
      </div>
    )
  }
  
  export default SelectedClientProjectPage
  