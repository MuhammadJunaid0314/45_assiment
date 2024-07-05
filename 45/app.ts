
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string; 
  }
  
  function createCar(manufacturer: string, model: string, ...options: [string, string][]): Car {
    const car: Car = {
      manufacturer,
      model,
    };
  
    options.forEach(([key, value]) => {
      car[key.trim()] = value.trim();
    });
  
    return car;
  }
  
  let myCar = createCar("Toyota", "Corolla", 
    ["Color", "Black"],
    ["Sunroof", "true"],
    ["Model", "2024"]
  );
  
  console.log(myCar);