var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var employe = /** @class */ (function () {
    function employe(ename, degr, birthdate, IT) {
        this.employeename = ename;
        this.highestdegree = degr;
        this.dateofbirth = birthdate;
        this.experience = IT;
    }
    employe.prototype.displayemployeedetails = function () {
        console.log(this.employeename, this.highestdegree, this.experience);
    };
    return employe;
}());
var contactemployee = /** @class */ (function (_super) {
    __extends(contactemployee, _super);
    function contactemployee(name, degree, dob, it, addres, homenumber, phonenumber, email) {
        var _this = _super.call(this, name, degree, dob, it) || this;
        _this.address = addres;
        _this.residencenumber = homenumber;
        _this.personalnumber = phonenumber;
        _this.emailid = email;
        return _this;
    }
    contactemployee.prototype.displayemployeecontactdetails = function () {
        console.log(this.address, this.personalnumber, this.emailid);
    };
    return contactemployee;
}(employe));
var alexandra = new contactemployee("Jai venkateshwara", "B.tech", "2/6/1988", "1 years", "Jantha colony,dodakannali", 98262871827, 98822538299, "venkatesh@gmail.com");
alexandra.displayemployeedetails();
alexandra.displayemployeecontactdetails();
//---------------------------------------------------------------------------------------------------------------------
var employ = /** @class */ (function () {
    function employ(empfname, emplname, empcomp, designation, contactnumb, location) {
        this.firstname = empfname;
        this.lastname = emplname;
        this.organization = empcomp;
        this.jobrole = designation;
        this.contactnumber = contactnumb;
        this.location = location;
    }
    return employ;
}());
var payslip = /** @class */ (function (_super) {
    __extends(payslip, _super);
    function payslip(fname, lname, comp, desig, contact, location, gross) {
        var _this = _super.call(this, fname, lname, comp, desig, contact, location) || this;
        _this.grosssalary = gross;
        return _this;
    }
    payslip.prototype.calculatepayslip = function () {
        this.basic = (40 * this.grosssalary) / 100;
        this.hra = (40 * this.basic) / 100;
        this.emplpf = (12 * this.basic) / 100;
    };
    payslip.prototype.displaypayslip = function () {
        console.log("First Name :" + this.firstname, "Last Name :" + this.lastname + "Basic :" + this.basic + "HRA :" + this.hra + "EmplPF :" + this.emplpf);
    };
    return payslip;
}(employ));
var aishley = new payslip("shomya", "charan", "Intimetec", "Trainee", 8773892739, "Bangalore", 70000);
aishley.calculatepayslip();
aishley.displaypayslip();
//--------------------------------------------------------------------------------------------------------------------------------------------------------
var employee = /** @class */ (function () {
    function employee(efname, elname, ecompany, elocation, designation) {
        this.employeefirstname = efname;
        this.employeelastname = elname;
        this.organization = ecompany;
        this.companylocation = elocation;
        this.jobrole = designation;
    }
    return employee;
}());
var emi = /** @class */ (function (_super) {
    __extends(emi, _super);
    function emi(fname, lname, company, location, desig, loan, rate, time) {
        var _this = _super.call(this, fname, lname, company, location, desig) || this;
        _this.loanamount = loan;
        _this.rateofinterest = rate;
        _this.duration = time;
        return _this;
    }
    emi.prototype.calculateemi = function () {
        this.emival = this.loanamount * this.rateofinterest * (Math.pow(1 + this.rateofinterest, this.duration)) / (((Math.pow(1 + this.rateofinterest, this.duration)) - 1));
    };
    emi.prototype.displaydetails = function () {
        console.log("First Name :" + this.employeefirstname + "Last Name :" + this.employeelastname, "EMI :" + this.emival);
    };
    return emi;
}(employee));
var brianna = new emi("shomya", "charan", "Intimetec", "Bangalore", "Trainee", 5000000, 10.5, 240);
brianna.calculateemi();
brianna.displaydetails();
//--------------------------------------------------------------------------------------------------------------------------------------------------
var employeee = /** @class */ (function () {
    function employeee(efname, elname, contactnumb, loanty, lamount) {
        this.employeefirstname = efname;
        this.employeelastname = elname;
        this.contactnumber = contactnumb;
        this.loantype = loanty;
        this.loanamount = lamount;
    }
    return employeee;
}());
var emii = /** @class */ (function (_super) {
    __extends(emii, _super);
    function emii(fname, lname, contact, loan, amount) {
        return _super.call(this, fname, lname, contact, loan, amount) || this;
    }
    emii.prototype.calculateemi = function () {
        if (this.loantype == "Home Loan") {
            this.rateofinterest = 10.5;
            this.loantenure = 240;
            this.emival = this.loanamount * this.rateofinterest * (Math.pow(1 + this.rateofinterest, this.loantenure)) / (((Math.pow(1 + this.rateofinterest, this.loantenure)) - 1));
            return this.emival;
        }
        else if (this.loantype == "Personal Loan") {
            this.rateofinterest = 17.5;
            this.loantenure = 36;
            this.emival = this.loanamount * this.rateofinterest * (Math.pow(1 + this.rateofinterest, this.loantenure)) / (((Math.pow(1 + this.rateofinterest, this.loantenure)) - 1));
            return this.emival;
        }
        else {
            return 0;
        }
    };
    return emii;
}(employeee));
var bailey = new emii("shomya", "charan", 8394929399, "Home Loan", 5000000);
var equatedmonthlyinstallment = bailey.calculateemi();
if (equatedmonthlyinstallment != 0) {
    console.log("Equated Monthly Installment :" + equatedmonthlyinstallment);
}
else {
    console.log("No schemes available");
}
var mary = new emii("karan", "sharma", 7487382929, "Personal Loan", 7980000);
var equatedmonthlyinstallment = mary.calculateemi();
if (equatedmonthlyinstallment != 0) {
    console.log("Equated Monthly Installment :" + equatedmonthlyinstallment);
}
else {
    console.log("No schemes available");
}
//---------------------------------------------------------------------------------------------------------------------
var driverdetails = /** @class */ (function () {
    function driverdetails(lastname, firstname, middlename, jobrole, birthdate, birthstate) {
        this.driverlastname = lastname;
        this.driverfirstname = firstname;
        this.drivermiddlename = middlename;
        this.jobprofile = jobrole;
        this.dateofbirth = birthdate;
        this.stateofbirth = birthstate;
    }
    driverdetails.prototype.showdriverdetails = function () {
        console.log("Last Name :" + this.driverlastname + "First Name :" + this.driverlastname + "Middle Name :" + this.drivermiddlename);
    };
    return driverdetails;
}());
var licensedetails = /** @class */ (function (_super) {
    __extends(licensedetails, _super);
    function licensedetails(lname, fname, mname, designation, dob, birth, licnumber, licstate, liccountry) {
        var _this = _super.call(this, lname, fname, mname, designation, dob, birth) || this;
        _this.licensenumber = licnumber;
        _this.licensestate = licstate;
        _this.licensecountry = liccountry;
        return _this;
    }
    licensedetails.prototype.showlicensedetails = function () {
        console.log("License Number :" + this.licensenumber + "License State :" + this.licensestate);
    };
    return licensedetails;
}(driverdetails));
var athena = new licensedetails("Kumar", "Pavan", "Bijjavaram", "software engineer", "12-07-1992", "rajampet", "ka502012632689", "karnataka", "India");
athena.showdriverdetails();
athena.showlicensedetails();
//---------------------------------------------------------------------------------------------------------------------------------------------
var onlineshopping = /** @class */ (function () {
    function onlineshopping(fname, username, password, confirmpassword, email, contactnumber, location) {
        this.customerfirstname = fname;
        this.customerusername = username;
        this.signuppassword = password;
        this.signupconfirmpassword = confirmpassword;
        this.emailid = email;
        this.customercontactnumber = contactnumber;
        this.location = location;
    }
    onlineshopping.prototype.signuppasswordvalidation = function () {
        if (this.signuppassword == this.signupconfirmpassword) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return onlineshopping;
}());
var shipping = /** @class */ (function (_super) {
    __extends(shipping, _super);
    function shipping(name, uname, pwd, cpwd, email, contactnumber, location) {
        return _super.call(this, name, uname, pwd, cpwd, email, contactnumber, location) || this;
    }
    shipping.prototype.login = function (loginuname, loginpwd) {
        this.loginusername = loginuname;
        this.loginpassword = loginpwd;
        if (this.loginpassword == this.signuppassword) {
            return 1;
        }
        else {
            return 0;
        }
    };
    shipping.prototype.productdetails = function (brand, colour, fabric, occassion, size, gender) {
        this.productbrand = brand;
        this.productcolour = colour;
        this.material = fabric;
        this.occassion = occassion;
        this.productsize = size;
        this.gender = gender;
    };
    shipping.prototype.showproductdetails = function () {
        console.log("Brand :" + this.productbrand + "Material :" + this.material + "Size :" + this.productsize);
    };
    shipping.prototype.shippingdetails = function (delivery, returnpol) {
        this.expecteddelivery = delivery;
        this.returnpolicy = returnpol;
    };
    shipping.prototype.showshippingdetails = function () {
        console.log("Expected Delivery :", this.expecteddelivery);
        console.log("Return Policy :" + this.returnpolicy);
    };
    return shipping;
}(onlineshopping));
var andrea = new shipping("shomya", "shomya@123", "balu", "balu", "shomya@gmail.com", 9824367268, "Bangalore");
var check = andrea.signuppasswordvalidation();
if (check == 1) {
    console.log("Signed Up successfully");
    var logincheck = andrea.login("shomya@123", "balu");
    if (logincheck == 1) {
        console.log("Logged in successfully");
        andrea.productdetails("scott inernational", "black", "cotton", "casual", "s", "Men");
        andrea.showproductdetails();
        andrea.shippingdetails("Expected delivery 9 days", "Return within 15 days of product delivery");
        andrea.showshippingdetails();
    }
    else {
        console.log("Invalid password");
    }
}
else {
    console.log("Password and confirm password doesnot match");
}
