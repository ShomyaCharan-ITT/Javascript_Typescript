var mail = /** @class */ (function () {
    function mail(sname, semail, recname, recmail, day, date) {
        this.sendername = sname;
        this.senderemailid = semail;
        this.receivername = recname;
        this.receiveremailid = recmail;
        this.dayofmail = day;
        this.dateofmail = date;
    }
    mail.prototype.checkmailid = function () {
        if (this.senderemailid == "kasi.sivap@gmail.com" && this.receiveremailid == "venkatesh.db@gmail.com") {
            console.log("Mail sent successfully");
        }
        else {
            console.log("Invalid emailid");
        }
    };
    return mail;
}());
var brielle = new mail("siva prasad", "kasi.sivap@gmail.com", "D b venkatesh", "venkatesh.db@gmail.com", "friday", "Nov 27,2015");
brielle.checkmailid();
var delilah = new mail("shomya charan", "shomyacharan@gmail.com", "sushma", "sushma@gmail.com", "friday", "Nov 28,2015");
delilah.checkmailid();
//------------------------------------------------------------------------------------------------------------------
var Employeeaddressproof = /** @class */ (function () {
    function Employeeaddressproof(name, age, gen, mailid, id, idnum) {
        this.empname = name;
        this.age = age;
        this.gender = gen;
        this.emailid = mailid;
        this.idproof = id;
        this.idproofnumber = idnum;
    }
    Employeeaddressproof.prototype.checkidcard = function () {
        if (this.idproof == "voter id" || this.idproof == "ration card") {
            return 1;
        }
        else {
            return 0;
        }
    };
    return Employeeaddressproof;
}());
var isla = new Employeeaddressproof("JVT", 5, "Male", "info@jvtechnologies.co.in", "voter id", "ASUSPB560F");
var result = isla.checkidcard();
if (result == 1) {
    console.log("Your response has been submitted");
}
else {
    console.log("Provide either voter id or ration card");
}
//------------------------------------------------------------------------------------------------------------
var Foodbill = /** @class */ (function () {
    function Foodbill(forder, fquant, sorder, squant, torder, tquant) {
        this.firstorder = forder;
        this.firstorderquantity = fquant;
        this.secondorder = sorder;
        this.secondorderquantity = squant;
        this.thirdorder = torder;
        this.thirdorderquantity = tquant;
    }
    Foodbill.prototype.calculateprice = function () {
        if (this.firstorder == "Butter roti") {
            this.Rateofbutterroti = 65;
            this.butterroticost = 65 * this.firstorderquantity;
        }
        if (this.secondorder == "Masala Papad") {
            this.Rateofmasalapapad = 75;
            this.masalapapadcost = 75 * this.secondorderquantity;
        }
        if (this.thirdorder == "Paneer Kadai") {
            this.Rateofpaneerkadai = 325;
            this.paneerkadaicost = 325 * this.thirdorderquantity;
        }
        this.amounttobepaid = this.butterroticost + this.masalapapadcost + this.paneerkadaicost;
        this.totalquantity = this.firstorderquantity + this.secondorderquantity + this.thirdorderquantity;
        this.servicecharge = 73.50;
        this.VAT = 77;
        this.servicetax = 36.50;
        this.totalamounttobepaid = this.amounttobepaid + (this.servicetax + this.VAT + this.servicecharge);
    };
    Foodbill.prototype.showbill = function () {
        console.log("TotalQuantity :" + this.totalquantity + "service tax :" + this.servicetax + "VAT :" + this.VAT + "Service charge" + this.servicecharge);
        console.log("Total Amount :" + this.totalamounttobepaid);
    };
    return Foodbill;
}());
var rylee = new Foodbill("Butter roti", 4, "Masala Papad", 3, "Paneer Kadai", 1);
rylee.calculateprice();
rylee.showbill();
//--------------------------------------------------------------------------------------------------------------------
var faredetails = /** @class */ (function () {
    function faredetails(name, age, gender, birth, distance, tname) {
        this.passengername = name;
        this.passengerage = age;
        this.gender = gender;
        this.seatnumber = birth;
        this.distancecovered = distance;
        this.trainname = tname;
    }
    faredetails.prototype.calculatefare = function () {
        if (this.trainname == "Rajdhani") {
            if (this.distancecovered > 200 && this.distancecovered < 350) {
                this.ticketfare = 420;
                this.servicecharge = 23;
                this.totalfare = this.ticketfare + this.servicecharge;
                console.log("Total Fare :" + this.totalfare);
            }
            else if (this.distancecovered > 350 && this.distancecovered < 500) {
                this.ticketfare = 800;
                this.servicetax = 35;
                this.totalfare = this.ticketfare + this.servicetax;
                console.log("Total Fare :" + this.totalfare);
            }
            else {
                console.log(" Rajdhani not in this route");
            }
        }
        else if (this.trainname == "Bangalore Express") {
            if (this.distancecovered > 400 && this.distancecovered < 700) {
                this.ticketfare = 1500;
                this.servicetax = 70;
                this.totalfare = this.ticketfare + this.servicetax;
                console.log("Total Fare :" + this.totalfare);
            }
            else if (this.distancecovered > 700 && this.distancecovered < 1200) {
                this.ticketfare = 2800;
                this.servicetax = 100;
                this.totalfare = this.ticketfare + this.servicetax;
                console.log("Total Fare :" + this.totalfare);
            }
            else {
                console.log("Bnagalore express not in this route");
            }
        }
        else {
            console.log("No Train Available");
        }
    };
    return faredetails;
}());
var katherine = new faredetails("Arun", 27, "Male", 7, 323, "Rajdhani");
katherine.calculatefare();
var josephine = new faredetails("Karan", 25, "Male", 8, 1100, "Bangalore Express");
josephine.calculatefare();
var ivy = new faredetails("Anjana", 23, "female", 10, 500, "sampoorn kranti");
ivy.calculatefare();
//--------------------------------------------------------------------------------------------------------------
var electricitybill = /** @class */ (function () {
    function electricitybill(uname, pwd, cnumber, mode, bank, units) {
        this.username = uname;
        this.password = pwd;
        this.modeofpayment = mode;
        this.bankname = bank;
        this.unitsconsumed = units;
        this.consumernumber = cnumber;
    }
    electricitybill.prototype.calculatebill = function () {
        if (this.unitsconsumed < 100) {
            this.cost = this.unitsconsumed * 1.5;
        }
        else if (this.unitsconsumed > 100 && this.unitsconsumed < 300) {
            this.cost = 150 + ((this.unitsconsumed - 100) * 2.5);
        }
        else if (this.unitsconsumed > 300 && this.unitsconsumed < 500) {
            this.cost = 650 + ((this.unitsconsumed - 300) * 4.5);
        }
        else {
            this.cost = 1550 + ((this.unitsconsumed - 500) * 6);
        }
    };
    electricitybill.prototype.showbill = function () {
        console.log("Electricity Bill To be paid" + this.cost);
    };
    return electricitybill;
}());
var liliana = new electricitybill("shomya", "shomya@ch12", 234571625, "net banking", "sbi", 370);
liliana.calculatebill();
liliana.showbill();
//---------------------------------------------------------------------------------------------------------
var payslip = /** @class */ (function () {
    function payslip(name, company, role, framework, location, gross) {
        this.employeename = name;
        this.organization = company;
        this.jobrole = role;
        this.framework = framework;
        this.location = location;
        this.grosssalary = gross;
    }
    payslip.prototype.calculatepayslip = function () {
        this.basic = (40 * this.grosssalary) / 100;
        this.hra = (40 * this.basic) / 100;
        this.emplpf = (12 * this.basic) / 100;
    };
    payslip.prototype.showpayslip = function () {
        console.log("Basic salary :" + this.basic + "HRA :" + this.hra + "Emplr PF :" + this.emplpf);
    };
    return payslip;
}());
var jade = new payslip("shomya", "Intimetec", "Trainee", "Angular", "Bangalore", 50000);
jade.calculatepayslip();
jade.showpayslip();
//-------------------------------------------------------------------------------------------------------------
var onlineshopping = /** @class */ (function () {
    function onlineshopping(uname, pwd, mail, mobilenum, location) {
        this.username = uname;
        this.password = pwd;
        this.emailid = mail;
        this.mobilenumber = mobilenum;
        this.location = location;
    }
    onlineshopping.prototype.logincredentialscheck = function (logname, logpwd) {
        this.loginname = logname;
        this.loginpwd = logpwd;
        if (this.loginname == this.username && this.loginpwd == this.password) {
            return 1;
        }
        else {
            return 0;
        }
    };
    onlineshopping.prototype.productdetails = function (brand, color, material, occassion, size, gender) {
        this.productbrand = brand;
        this.productcolor = color;
        this.fabric = material;
        this.occassion = occassion;
        this.size = size;
        this.gender = gender;
        console.log("Product details saved successfully");
    };
    onlineshopping.prototype.shippingdetails = function (arrival, repolicy) {
        this.estimatedarrival = arrival;
        this.returnpolicy = repolicy;
        console.log("Shipping details saved successfully");
    };
    return onlineshopping;
}());
var maria = new onlineshopping("shomya", "shomya@123", "shomya@gmail.com", 9824367268, "Bangalore");
var result = maria.logincredentialscheck("shomya", "shomya@123");
if (result == 1) {
    maria.productdetails("scott inernational", "black", "cotton", "casual", "s", "Men");
    maria.shippingdetails("Estimated arrival 9 days", "15 days return policy");
}
else {
    console.log("Invalid username or password");
}
var hadley = new onlineshopping("shyam", "shyam@123", "shyam@gmail.com", 67289389, "Jaipur");
var see = hadley.logincredentialscheck("shyam", "shomya@123");
if (see == 1) {
    hadley.productdetails("scott inernational", "black", "cotton", "casual", "s", "Men");
    hadley.shippingdetails("Estimated arrival 9 days", "15 days return policy");
}
else {
    console.log("Invalid username or password");
}
//-------------------------------------------------------------------------------------------------------------------
var emii = /** @class */ (function () {
    function emii(amount, rate, duration) {
        this.loanamount = amount;
        this.rateofinterest = rate;
        this.duration = duration;
    }
    emii.prototype.emicalculation = function () {
        this.emival = this.loanamount * this.rateofinterest * (Math.pow(1 + this.rateofinterest, this.duration)) / (((Math.pow(1 + this.rateofinterest, this.duration)) - 1));
        console.log(this.emival);
    };
    return emii;
}());
var natalia = new emii(5000000, 10.5, 240);
natalia.emicalculation();
//------------------------------------------------------------------------------------------------------------------
var emi = /** @class */ (function () {
    function emi(loan, amount) {
        this.typeofloan = loan;
        this.loanamount = amount;
    }
    emi.prototype.emicalculation = function () {
        if (this.typeofloan == "Home Loan") {
            this.rateofinterest = 10.5;
            this.loantenure = 240;
            this.emival = this.loanamount * this.rateofinterest * (Math.pow(1 + this.rateofinterest, this.loantenure)) / (((Math.pow(1 + this.rateofinterest, this.loantenure)) - 1));
            return this.emival;
        }
        else if (this.typeofloan == "Personal Loan") {
            this.rateofinterest = 17.5;
            this.loantenure = 36;
            this.emival = this.loanamount * this.rateofinterest * (Math.pow(1 + this.rateofinterest, this.loantenure)) / (((Math.pow(1 + this.rateofinterest, this.loantenure)) - 1));
            return this.emival;
        }
        else {
            return 0;
        }
    };
    return emi;
}());
var anabelle = new emi("Home Loan", 5000000);
var emivalue = anabelle.emicalculation();
if (emivalue != 0) {
    console.log("EMI :" + emivalue);
}
else {
    console.log("No schemes available");
}
var faith = new emi("Personal Loan", 5003400);
var emiamount = faith.emicalculation();
if (emiamount != 0) {
    console.log("EMI :" + emiamount);
}
else {
    console.log("No schemes available");
}
