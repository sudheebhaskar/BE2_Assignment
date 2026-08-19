const { initializeDatabase } = require("./db/db.connect");
const Car = require("./models/cars.models")

initializeDatabase();

// const jsonData = fs.readFileSync('cars.json', 'utf8')
// const carsData = JSON.parse(jsonData)

// function seedData(){

//   try{
//     for(const carData of carsData){
//       const newCar = new Car({
//         brand: carData.brand,
//         model: carData.model,
//         year: carData.year,
//         bodyStyle: carData.bodyStyle,
//         fuelType: carData.fuelType,
//         transmission: carData.transmission,
//         engine: carData.engine,
//         mileage: carData.mileage,
//         color: carData.color,
//         price: carData.price,
//         condition: carData.condition,
//         description: carData.description,
//         photosImageUrl: carData.photosImageUrl,
//         inMarket: carData.inMarket
//       })

//       newCar.save()
//       console.log('Car Data: ', newCar.brand)
//     }
//   } catch(error){
//      console.log("Error seeding the data", error)
//   }

// }

// seedData()

// const carData = {
//   brand: "Ford",
//   model: "Mustang",
//   year: 2019,
//   bodyStyle: "Convertible",
//   fuelType: "Gasoline",
//   transmission: "Automatic",
//   engine: "5.0L V8",
//   mileage: 25000,
//   color: "Red",
//   price: 3500000,
//   condition: "Used",
//   description: "Exciting Ford Mustang convertible with powerful V8 engine.",
//   photos: [
//     "https://example.com/mustang-photo1.jpg",
//     "https://example.com/mustang-photo2.jpg",
//     "https://example.com/mustang-photo3.jpg"
//   ]

// }



//createCar(carData);

const carData = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
};

async function createCar(carData){
  try{
    const car = new Car(carData)
    const saveCar = await car.save()
    console.log("New Car Data: ", saveCar)
  } catch(error){
    throw error
  }
}

//createCar(carData);


//get all cars data
async function readAllCars(){
  try{
    const allCars = await Car.find()
    console.log(allCars)
  } catch(error){
    console.log(error)
  }
}

//readAllCars()


//get car by brand name
async function carBrandName(brand){
  try{
    const brandCar = await Car.find({brand: brand})
    console.log(brandCar)
  } catch(error){
    console.log(error)
  }
}

//carBrandName("Ford")


//car color
async function getCarByColor(colorName){
  try{
    const colorCar = await Car.find({color: colorName})
    console.log(colorCar)
  } catch(error){
    console.log(error)
  }
}

//getCarByColor("Black")


//update the price

async function updatePriceOfCar(){
  try{
    const priceUpdated = await Car.findOneAndUpdate({model: "Corolla"},{price: 2300000},{new: true}
    )
    console.log(priceUpdated)
  } catch(error){
    console.log("Error while updating data", error)
  }
}

//updatePriceOfCar()

//used car
async function conditionUsedCar(model, dataToUpdate){
  try{
    const conditionUpdateCar = await Car.findOneAndUpdate({model: model}, dataToUpdate, {new:true})
    console.log(conditionUpdateCar)
  } catch(error){
    console.log("Error when updating data." , error)
  }
}

//conditionUsedCar("Model S", {condition: "Used"});


//delete a car
async function deleteCarById(carID){
  try{
    const deletedCar = await Car.findByIdAndDelete(carID)
    console.log(deletedCar)
  } catch(error){
    console.log("Error while deleting data", error)
  }
}

//deleteCarById("66d852f067475a6410b98544")



//delete a car by body style
async function deleteCarByBodyStyle(bodyStyleName){
  try{
    const deletedCar = await Car.findOneAndDelete({bodyStyle: bodyStyleName})
    console.log(deletedCar)
  } catch(error){
    console.log("Error while deleting data", error)
  }
}

deleteCarByBodyStyle("Coupe")