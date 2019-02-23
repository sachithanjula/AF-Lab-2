//**********************Q1*************************//

console.log("Question 1");
console.log("")

var vehicleName = 'Toyota';

function printVehicleNameOuter() {

    console.log(this.vehicleName);
    
}

console.log(this);

printVehicleNameOuter();

var vehicle = {
    vehicleName: 'Nissan',
    // printVehicleNameInner: printVehicleNameOuter

    printVehicleNameInner: function () {
        return function () {
            console.log(this.vehicleName);
        }
    }
};

// var execute = vehicle.printVehicleNameInner();
// execute.call(vehicle);

var execute = vehicle.printVehicleNameInner().bind(vehicle);
execute();