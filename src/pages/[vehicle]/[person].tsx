import { useRouter } from 'next/router'
import { VehiclePerson } from '../api/VehiclePerson'
import { NextPageContext } from 'next'

export interface PersonProps {
  ownersList?: VehiclePerson[]
}

export default function Person({ ownersList } : PersonProps){
  const router = useRouter()  
  if(!ownersList){
    <h1>loading</h1>
  }
  return <pre>{JSON.stringify(ownersList, null , 4)}</pre>
  
}

interface MyNextPageContext extends NextPageContext {
  query:{
    person: string;
    vehicle: string
  }
}

Person.getInitialProps = async ({query }: MyNextPageContext) => {
  
  const response = await fetch('http://localhost:3000/api/vehicle?ownerName=' + query.person + '&vehicle=' + query.vehicle)
  const ownersList : VehiclePerson | undefined = await response.json();
  return {ownersList: ownersList}
}