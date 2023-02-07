//! Interface

interface IVichle {
  Brand: string;
  Speed: number;
  FuelTank: number;
  GetFuelTotalPrice(way: number, unitPrice: number);
}

class Taxi implements IVichle {
  Brand: string;
  Speed: number;
  FuelTank: number;
  GetFuelTotalPrice(way: number, unitPrice: number): number {
    return way * unitPrice;
  }
}

class Truck implements IVichle {
  Brand: string;
  Speed: number;
  FuelTank: number;
  GetFuelTotalPrice(way: number, unitPrice: number): number {
    return way * unitPrice;
  }
}

let taxi = new Taxi();
let truck = new Truck();

taxi.Brand = "Mercedes";
taxi.FuelTank = 50;
taxi.Speed = 350;
let message1: string = "Total Price: " + taxi.GetFuelTotalPrice(100, 1.3);

truck.Brand = "Volvo";
truck.FuelTank = 200;
truck.Speed = 180;
let message2: string = "Total Price: " + truck.GetFuelTotalPrice(1000, 2.5);

console.log(message1);
console.log(message2);
