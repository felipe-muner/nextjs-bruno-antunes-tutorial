import { useRouter } from 'next/router'

export default function Person({ownersList}){
  const router = useRouter()  
  return <pre>{JSON.stringify(ownersList, null , 4)}</pre>
}

Person.getInitialProps = async (ctx) => {
  const { query } = ctx
  console.log(query.person)
  const response = await fetch('http://localhost:3000/api/vehicle?ownerName=' + query.person + '&vehicle=' + query.vehicle)
  const ownersList = await response.json();
  return {ownersList: ownersList}
}