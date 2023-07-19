abstract class Car {
    Wheel(): string {   // function declaration 
      return '4-Wheeler'; // function defination 
    }
    CheckAC(): string {
      return 'AC is available';
    }
    callFacility(): string {
      return 'Call facility supported';
    }
  
    abstract Price(): number;
    abstract getTotalSeats(): number;
    abstract Color(): string;
    abstract isGPS(): boolean;
  }
  
  interface gps{
    isGPS ():boolean;
  }

  class Toyota extends Car implements gps {
    Price(): number {
      return 1000000;
    }
    getTotalSeats(): number {
      return 5;
    }
    Color(): string {
      return 'White';
    }
    isGPS(): boolean {
      return false; //  GPS not available
    }
  }
  
  class Hyundai extends Car implements gps{
    Price(): number {
      return 900000;
    }
    getTotalSeats(): number {
      return 7;
    }
    Color(): string {
      return 'Grey';
    }
    isGPS(): boolean {
      return true; //  GPS available
    }
  }
  
  const toyota = new Toyota();
  const hyundai = new Hyundai();
  
  console.log("*******Details of Toyota car********");
  console.log("Number of Wheels:", toyota.Wheel());
  console.log("AC:", toyota.CheckAC());
  console.log("Call Facility:", toyota.callFacility());
  console.log("Price:", toyota.Price());
  console.log("Total Seats:", toyota.getTotalSeats());
  console.log("Color:", toyota.Color());
  console.log("GPS:", toyota.isGPS()); // Output: false, as Toyota cars do not have GPS
  
  console.log("----------------------------------------");
  console.log("");
  
  console.log("********Details of hyundai Car********");
  console.log("Number of Wheels:", hyundai.Wheel());
  console.log("AC:", hyundai.CheckAC());
  console.log("Call Facility:", hyundai.callFacility());
  console.log("Price:", hyundai.Price());
  console.log("Total Seats:", hyundai.getTotalSeats());
  console.log("Color:", hyundai.Color());
  console.log("GPS:", hyundai.isGPS()); // Output: true, as hyundai cars have GPS=