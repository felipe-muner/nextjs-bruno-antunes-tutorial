// Fake users data
const vehicles = [
  {
    "vehicle": "car",
    "ownerName": "Felipe",
    "details": "I30",
  },
  {
    "vehicle": "car4",
    "ownerName": "Felipe",
    "details": "I30",
  },
  {
    "vehicle": "car2",
    "ownerName": "Felipe2",
    "details": "I302",
  },
  {
    "vehicle": "car3",
    "ownerName": "Felipe3",
    "details": "I303",
  },
];

export default function handler(req, res) {
  console.log(req.query)
  let filteredVehicles = vehicles
  if(req.query.ownerName){
    filteredVehicles = vehicles.filter(v => req.query.ownerName === v.ownerName)
  }

  if(req.query.ownerName){
    filteredVehicles = vehicles.filter(v => req.query.vehicle === v.vehicle)
  }

  // Get data from your database
  res.status(200).json(filteredVehicles);
  
}
