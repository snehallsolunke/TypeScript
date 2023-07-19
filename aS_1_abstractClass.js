var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Wheel = function () {
        return '4-Wheeler'; // function defination 
    };
    Car.prototype.CheckAC = function () {
        return 'AC is available';
    };
    Car.prototype.callFacility = function () {
        return 'Call facility supported';
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return 'White';
    };
    Toyota.prototype.isGPS = function () {
        return false; //  GPS not available
    };
    return Toyota;
}(Car));
var Hyundai = /** @class */ (function (_super) {
    __extends(Hyundai, _super);
    function Hyundai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hyundai.prototype.Price = function () {
        return 900000;
    };
    Hyundai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hyundai.prototype.Color = function () {
        return 'Grey';
    };
    Hyundai.prototype.isGPS = function () {
        return true; //  GPS available
    };
    return Hyundai;
}(Car));
var toyota = new Toyota();
var hyundai = new Hyundai();
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
