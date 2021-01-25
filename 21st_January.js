var corporateinformation = /** @class */ (function () {
    function corporateinformation(cname, designation, salary, location) {
        this.organization = cname; // assigning data into objects
        this.profile = designation;
        this.income = salary;
        this.destination = location;
    }
    corporateinformation.prototype.showdetails = function () {
        console.log(this.organization);
    };
    return corporateinformation;
}());
var IT = new corporateinformation("JVT", "Programmer", "2.3 or 230000", "Bangalore");
IT.showdetails();
//-------------------------------------------------------------------------------------------
var Employee = /** @class */ (function () {
    function Employee(organization, location, position, framework) {
        this.company = organization;
        this.location = location;
        this.designation = position;
        this.Framework = framework;
    }
    Employee.prototype.display = function () {
        console.log(this.company, this.location, this.designation, this.Framework);
    };
    return Employee;
}());
var julia = new Employee("Intimetec", "Bangalore", "Trainee", "Angular");
julia.display();
//----------------------------------------------------------------------------------------------
var broadbandinfo = /** @class */ (function () {
    function broadbandinfo(accnum, userid, ipadd) {
        this.accountnumber = accnum;
        this.broadbanduserid = userid;
        this.ipaddress = ipadd;
    }
    broadbandinfo.prototype.checklimit = function (totaldownloads, downloadspeed, uploadspeed) {
        this.ToatalMBDownloaded = totaldownloads;
        this.MobileDownloadSpeed = downloadspeed;
        this.MobileUploadSpeed = uploadspeed;
        if (this.ToatalMBDownloaded > 30) {
            console.log("Data Pack Exhausted");
        }
        else {
            this.remaining = 30 - this.ToatalMBDownloaded;
            console.log("Remaining Data :" + this.remaining);
        }
    };
    broadbandinfo.prototype.displaydata = function () {
        console.log(this.accountnumber, this.ToatalMBDownloaded, this.MobileUploadSpeed, this.MobileDownloadSpeed);
    };
    return broadbandinfo;
}());
var valentina = new broadbandinfo(113456, 111285550, "10.245.97.123");
valentina.checklimit(21.26, 30.05, 32.06);
valentina.displaydata();
var clara = new broadbandinfo(233526, 4562728, "12.837.14.215");
clara.checklimit(40, 32, 46);
clara.displaydata();
// -----------------------------------------------------------------------------------------------------------
var concertdetails = /** @class */ (function () {
    function concertdetails(name, ordnum, email, adharnumber, booknumber) {
        this.visitorname = name;
        this.ordernumber = ordnum;
        this.emailid = email;
        this.adharcardnumber = adharnumber;
        this.bookingnumber = booknumber;
    }
    concertdetails.prototype.eventdetails = function (edate, day, time, seva, cost) {
        this.concertdate = edate;
        this.eventday = day;
        this.eventtime = time;
        this.darshan = seva;
        this.priceperticket = cost;
    };
    concertdetails.prototype.showeventdetails = function () {
        console.log("Event Date :", +this.concertdate, "Event Day :" + this.eventday, "Price " + this.priceperticket + "visitor name" + this.visitorname, +"Darshan type " + this.darshan);
    };
    return concertdetails;
}());
var vivian = new concertdetails("venkatesh", 106003277352, "venkatesh.db@gmail.com", 26388821728, "IS15111080016");
vivian.eventdetails("Dec 1st", "Tuesday", "3:30 am", "Archana", 220);
vivian.showeventdetails();
//-----------------------------------------------------------------------------------------
var Accountcreation = /** @class */ (function () {
    function Accountcreation(fname, lname, organization, pwd, cpwd, phonenumber, email) {
        this.firstname = fname;
        this.lastname = lname;
        this.company = organization;
        this.password = pwd;
        this.confirmpassword = cpwd;
        this.contactnumber = phonenumber;
        this.emailid = email; // store human info basic one
    }
    Accountcreation.prototype.passwordverification = function () {
        if (this.password == this.confirmpassword) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return Accountcreation;
}());
var madeline = new Accountcreation("venkatesh", "db", "jvt", "balu", "bau", 9900367262, "venkatesh.db@gmail.com");
var res = madeline.passwordverification();
if (res == 1) {
    console.log("Account Created Successfully");
}
else {
    console.log("Password and confirm password doesnot match");
}
