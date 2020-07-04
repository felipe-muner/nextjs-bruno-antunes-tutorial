import {NextApiRequest, NextApiResponse} from 'next'

export default function getAllVehicles(req: NextApiRequest, res: NextApiResponse){
  res.json({name:'felpe', message: 'getAllVehicles'})
}