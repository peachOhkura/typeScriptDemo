var HR;
(function (HR) {
    //全域物件: 加上export之後，外部才可以存取
    var Employee = /** @class */ (function () {
        function Employee(id, name) {
            this.id = id;
            this.name = name;
        }
        ;
        Employee.prototype.getInfo = function () {
            return this.id + " , " + this.name;
        };
        return Employee;
    }());
    HR.Employee = Employee;
})(HR || (HR = {}));
//IIFE
// let emp = new HR.Employee(123, 'n');
// console.log(emp.getInfo());
// //alias別名，非必要設定
// import hr = HR.Employee;
// let emp2 = new HR.Employee(11, 'niii');
// console.log(emp2.getInfo());
var HR;
(function (HR) {
    HR.projectName = "HR Management";
})(HR || (HR = {}));
/// <reference path="03_namespace.ts"/>
/// <reference path="04_var.ts"/>
var emp = new HR.Employee(123, 'n');
console.log(emp.getInfo());
//alias別名，非必要設定
var hr = HR.Employee;
var emp2 = new HR.Employee(11, 'niii');
console.log(emp2.getInfo());
//tsc -outfile client.js 05_client.ts
