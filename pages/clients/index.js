import Link from "next/link"

const ClientPage = () => {
  const clients = [
    { id: "akshay", name: "Akshay Malik" },
    { id: "anubhav", name: "Anubhav Nain" },
  ]
  return (
    <div className="ClientPage">
      <h1>This is a Client Page</h1>
      <ul>
        {clients.map((client => (
          <li key={client.id}><Link href={{
            pathname: "/clients/[clientid]",
            query: { clientid: client.id }
          }}>{client.name}</Link></li>
        )))}
      </ul>
    </div>
  )
}

export default ClientPage
