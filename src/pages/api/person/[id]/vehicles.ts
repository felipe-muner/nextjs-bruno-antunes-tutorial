import {NextApiRequest, NextApiResponse} from 'next'

export default function getllVehiclesByPersonId(req: NextApiRequest, res: NextApiResponse){  
  res.json( { byId: req.query.id, message: 'getllVehiclesByPersonId' } )
}