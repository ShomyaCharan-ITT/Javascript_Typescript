
class faredetails
{
  
  constructor(name,age,gender,birth,distance,tname)
  {
   this.passengername = name;
   this.passengerage = age;
   this.gender = gender;
   this.seatnumber = birth;
   this.distancecovered = distance;
   this.trainname = tname;
  }
  calculatefare() 
  {
     if(this.trainname == "Rajdhani")
     {
       if(this.distancecovered > 200 && this.distancecovered < 350)
       {
         this.ticketfare = 420;
         this.servicecharge = 23;
         this.totalfare = this.ticketfare + this.servicecharge;
         document.writeln("Total Fare :" + this.totalfare);

       }
       else if(this.distancecovered > 350 && this.distancecovered <500)
       {
         this.ticketfare = 800;
         this.servicetax = 35;
         this.totalfare = this.ticketfare + this.servicetax;
         document.writeln("Total Fare :" + this.totalfare);
       }
       else
       {
        document.writeln(" Rajdhani not in this route");
       }
     }
     else if(this.trainname == "Bangalore Express")
     {
       if(this.distancecovered > 400 && this.distancecovered < 700)
       {
         this.ticketfare = 1500;
         this.servicetax = 70;
         this.totalfare = this.ticketfare + this.servicetax;
        document.writeln("Total Fare :" + this.totalfare);
       }
       else if(this.distancecovered >700 && this.distancecovered <1200)
       {
         this.ticketfare = 2800;
         this.servicetax = 100;
         this.totalfare = this.ticketfare + this.servicetax;
         document.writeln("Total Fare :" + this.totalfare);
       }
       else
       {
        document.writeln("Bnagalore express not in this route");
       }
     }
     else
     {
      document.writeln("No Train Available");       
     }
  }
  
}
let naomi = new faredetails("Arun",27,"Male",7,323,"Rajdhani");
    naomi.calculatefare();
let alice = new faredetails("Karan",25,"Male",8,1100,"Bangalore Express");
  alice.calculatefare();
let sadie = new faredetails("Anjana",23,"female",10,500,"sampoorn kranti");
    sadie.calculatefare();
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 class payslip
 {
     constructor(name,company,role,framework,location,gross)
   {
     this.employeename = name;
     this.organization = company;
     this.jobrole = role;
     this.framework = framework;
     this.location = location;
     this.grosssalary = gross;
   }
   calculatepayslip()
   {
      this.basic = (40 * this.grosssalary)/100;
      this.hra = (40 * this.basic)/100;
      this.emplpf = (12 * this.basic)/100;
   }
   showpayslip()
   {
    document.writeln("Basic salary :"+this.basic+"HRA :"+this.hra+"Emplr PF :"+this.emplpf);
   }
 }
 let hailey = new payslip("shomya","Intimetec","Trainee","Angular","Bangalore",50000);
 hailey.calculatepayslip();
hailey.showpayslip();
//-------------------------------------------------------------------------------------------------------------
class onlineshopping
{
  
  constructor(uname,pwd,mail,mobilenum,location)   //signup purpose
  {
    this.username = uname;
    this.password = pwd;
    this.emailid = mail;
    this.mobilenumber = mobilenum;
    this.location = location;
  }
  logincredentialscheck(logname,logpwd) 
  {
    this.loginname = logname;
    this.loginpwd = logpwd;
    if(this.loginname == this.username && this.loginpwd == this.password)
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }
  productdetails(brand,color,material,occassion,size,gender)
  {
    this.productbrand = brand;
    this.productcolor = color;
    this.fabric = material;
    this.occassion = occassion;
    this.size = size;
    this.gender = gender;
    document.writeln("Product details saved successfully");   
  }
  shippingdetails(arrival,repolicy)
  {
     this.estimatedarrival = arrival;
     this.returnpolicy = repolicy;
     document.writeln("Shipping details saved successfully");
  }
}
let eva = new onlineshopping("shomya","shomya@123","shomya@gmail.com",9824367268,"Bangalore");
 var result  = eva.logincredentialscheck("shomya","shomya@123");
     if(result == 1)
     {
      eva.productdetails("scott inernational","black","cotton","casual","s","Men");
       eva.shippingdetails("Estimated arrival 9 days","15 days return policy");
     }
     else
     {
       document.writeln("Invalid username or password");
     }
let emilia = new onlineshopping("shyam","shyam@123","shyam@gmail.com",67289389,"Jaipur");
var see = emilia.logincredentialscheck("shyam","shomya@123");
if(see == 1)
{
  emilia.productdetails("scott inernational","black","cotton","casual","s","Men");
  emilia.shippingdetails("Estimated arrival 9 days","15 days return policy");
}
else
{
  document.writeln("Invalid username or password");
}
//-------------------------------------------------------------------------------------------------------------------
class Emi
{
 
  constructor(amount,rate,duration)
  {
    this.loanamount = amount;
    this.rateofinterest = rate;
    this.duration = duration;
  }
  emicalculation()
  {
    this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.duration))/(((Math.pow(1+this.rateofinterest,this.duration))-1));
    document.writeln(this.emival);
  }
}
let autumn = new Emi(5000000,10.5,240);
    autumn.emicalculation();
//------------------------------------------------------------------------------------------------------------------
class emi
{
 
  constructor(loan,amount)
  {
     this.typeofloan = loan;
     this.loanamount = amount;
  }
  emicalculation()
  {
     if(this.typeofloan == "Home Loan")
     {
       this.rateofinterest = 10.5;
       this.loantenure = 240;
       this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.loantenure))/(((Math.pow(1+this.rateofinterest,this.loantenure))-1));
       return this.emival;
     } 
     else if(this.typeofloan == "Personal Loan")
     {
       this.rateofinterest = 17.5;
       this.loantenure = 36;
       this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.loantenure))/(((Math.pow(1+this.rateofinterest,this.loantenure))-1));
       return this.emival;
     }
     else
     {
       return 0;
     }
  }
}
let piper = new emi("Home Loan",5000000);
   var emivalue = piper.emicalculation();
   if(emivalue != 0)
   {
     document.writeln("EMI :" + emivalue);
   }
   else
   {
     document.writeln("No schemes available");
   }
let ruby = new emi("Personal Loan",5003400);
var emiamount = ruby.emicalculation();
   if(emiamount != 0)
   {
     document.writeln("EMI :" + emiamount);
   }
   else
   {
     document.writeln("No schemes available");
   }
//-----------------------------------------------------------------------------------------------------------------------
function AccountCreatio(FirstName,LastName,username ,pwd ,cpwd,Date,Gender, MobileNumber,Emailid)
 {
   var verify  = passwordverify(pwd,cpwd);      
   if(verify == 1)
   {
       document.writeln("Account Created Successfully");
       ProfileDetails(FirstName,LastName,username,pwd,Gender,MobileNumber,Emailid);
   }             
   else
   {
       document.writeln("Password and confirm password doesnot match");
   }  
 }
 function passwordverify(password, confirmpassword)
 {
     if(password == confirmpassword)
     {
         return 1;
     }
     else
     {
         return 0;
     }
 }
 function ProfileDetails(Fname, Lname,uname,password,gender,MobileNumber,EmailID)
 {
   document.writeln("first Name :" + Fname,"Last Name :"+Lname,"UserName"+ uname,"Password "+ password,"Mobile Number"+MobileNumber);
 }
 AccountCreatio("venkatesh","d b","jvt","balu","balu","2-6-1986","Male",8897382992,"venkatesh.db@gmail.com");
 //------------------------------------------------------------------------------------------------------------------
function creditcardverify(crenumber)
 {
    if(crenumber == 62627382738)
    {
        var utilization = 3;
        showoutstand(571.36,0);
        showlastpaymentmade(300,"11Jan2021");
        showcreditlimit(18000,17428.64);
       var balance = showlimit(3600,3600);
       document.writeln("Available Cash" + balance);
    }
    else
    {
        document.writeln("Invalid Credentials");
    }
 }
 function showoutstand(TotalOutstanding , unbilled )
 {  
    document.writeln("Total Outstanding :"+ TotalOutstanding);   
    document.writeln("Unbilled "+unbilled);
 }
 function showlastpaymentmade(lastamountmade, PaymentMadeOn)
 {
     document.writeln("Lat Payment made on "+PaymentMadeOn)
     document.writeln("Last Amount Made"+ lastamountmade);
 }
 function showcreditlimit(TotalCredit, Availcred)
 {
    if(TotalCredit > 20000)
    {
        document.writeln("Credit Limit Exhausted");
    }
    else
    {
        var rem  = TotalCredit - 20000;
        document.writeln("Left over Credits "+ rem);
    }
 }
    function showlimit(totalcash, cashavailable)
    {
         return cashavailable;
    }
 
 creditcardverify(62627382738);
 creditcardverify(112233);
//-----------------------------------------------------------------------------------------------------------------
class employee
{  
    constructor(ename,degr,birthdate,IT)
    {
       this.employeename = ename;
       this.highestdegree = degr;
       this.dateofbirth = birthdate;
       this.experience = IT;
    }
    displayemployeedetails()
    {
        document.writeln(this.employeename,this.highestdegree,this.experience);
    }
}
class contactemployee extends employee
{
   
    constructor(name ,degree ,dob ,it ,addres ,homenumber,phonenumber,email)
    {
        super(name,degree,dob,it);
        this.address = addres;
        this.residencenumber = homenumber;
        this.personalnumber = phonenumber;
        this.emailid = email;
    }
    displayemployeecontactdetails()
    {
        document.writeln(this.address,this.personalnumber,this.emailid);
    }
}
let serenity = new contactemployee("Jai venkateshwara","B.tech","2/6/1988","1 years","Jantha colony,dodakannali",98262871827,98822538299,"venkatesh@gmail.com");
    serenity.displayemployeedetails();
    serenity.displayemployeecontactdetails();
//-------------------------------------------------------------------------------------------------------------------------
class Employee
{
    constructor(empfname,emplname,empcomp,designation,contactnumb,location)
    {
      this.firstname = empfname;
      this.lastname = emplname;
      this.organization = empcomp;
      this.jobrole = designation;
      this.contactnumber = contactnumb;
      this.location = location;
    }
}
class employeepayslip extends Employee
{   
    constructor(fname,lname,comp,desig,contact,location,gross)
    {
      super(fname,lname,comp,desig,contact,location);
      this.grosssalary = gross;
    }
    calculatepayslip()
    {
         this.basic = (40 * this.grosssalary)/100;
         this.hra = (40 * this.basic)/100;
         this.emplpf = (12 * this.basic)/100;
    }
    displaypayslip()
    {
      document.writeln("First Name :"+ this.firstname,"Last Name :"+this.lastname+"Basic :"+this.basic+"HRA :"+this.hra+"EmplPF :"+this.emplpf);
    }
}
let willow = new employeepayslip("shomya","charan","Intimetec","Trainee",8773892739,"Bangalore",70000);
    willow.calculatepayslip();
   willow.displaypayslip();
//--------------------------------------------------------------------------------------------------------------
class employe
{   
    constructor(efname,elname,ecompany,elocation,designation)
    {
        this.employeefirstname = efname;
        this.employeelastname = elname;
        this.organization = ecompany;
        this.companylocation = elocation;
        this.jobrole = designation;
    }
}
class emii extends employe
{  
    constructor(fname,lname,company,location,desig,loan,rate,time)
    {
        super(fname,lname,company,location,desig);
        this.loanamount = loan;
        this.rateofinterest = rate;
        this.duration = time;
    }
    calculateemi()
    {
        this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.duration))/(((Math.pow(1+this.rateofinterest,this.duration))-1));
    }
    displaydetails()
    {
        document.writeln("First Name :"+this.employeefirstname+"Last Name :"+this.employeelastname,"EMI :"+this.emival);
    }
}
let everly = new emii("shomya","charan","Intimetec","Bangalore","Trainee",5000000,10.5,240);
    everly.calculateemi();
    everly.displaydetails();
//-----------------------------------------------------------------------------------------------------------
class driverdetails
{
    constructor(lastname ,firstname ,middlename ,jobrole ,birthdate ,birthstate )
    {
      this.driverlastname = lastname;
      this.driverfirstname = firstname;
      this.drivermiddlename = middlename;
      this.jobprofile = jobrole;
      this.dateofbirth = birthdate;
      this.stateofbirth = birthstate;
    }
    showdriverdetails()
    {
      document.writeln("Last Name :"+this.driverlastname+"First Name :"+this.driverlastname+"Middle Name :"+this.drivermiddlename);
    }
}
class licensedetails extends driverdetails
{
   
    constructor(lname ,fname ,mname ,designation ,dob ,birth ,licnumber,licstate ,liccountry )
    {
    super(lname,fname,mname,designation,dob,birth);
    this.licensenumber = licnumber;
    this.licensestate = licstate;
    this.licensecountry = liccountry;

    }
    showlicensedetails()
    {
     document.writeln("License Number :"+this.licensenumber+"License State :"+this.licensestate);
    }
}
let cora = new licensedetails("Kumar","Pavan","Bijjavaram","software engineer","12-07-1992","rajampet","ka502012632689","karnataka","India");
    cora.showdriverdetails();
    cora.showlicensedetails();
//----------------------------------------------------------------------------------------------------------------
class onlineshop
{   
    constructor(fname ,username ,password ,confirmpassword ,email ,contactnumber ,location )
    {
      this.customerfirstname = fname;
      this.customerusername = username;
      this.signuppassword = password;
      this.signupconfirmpassword = confirmpassword;
      this.emailid = email;
      this.customercontactnumber = contactnumber;
      this.location = location;
    }
    signuppasswordvalidation()
    {
        if(this.signuppassword == this.signupconfirmpassword)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
}
class shipping extends onlineshop
{
   
    constructor(name ,uname ,pwd ,cpwd ,email ,contactnumber ,location )
    {
       super(name,uname,pwd,cpwd,email,contactnumber,location);
    }
    login(loginuname , loginpwd )
    {
       this.loginusername = loginuname;
       this.loginpassword = loginpwd;
       if(this.loginpassword == this.signuppassword)
       {
           return 1;
       }
       else
       {
           return 0;
       }
    }
    productdetails(brand ,colour ,fabric ,occassion ,size,gender )
    {   
        this.productbrand = brand;
        this.productcolour = colour;
        this.material = fabric;
        this.occassion = occassion;
        this.productsize = size;
        this.gender = gender;
      
    }
    showproductdetails()
    {
        document.writeln("Brand :"+this.productbrand+"Material :"+this.material+"Size :"+this.productsize);
    }
    shippingdetails(delivery ,returnpol )
    {
      this.expecteddelivery = delivery;
      this.returnpolicy = returnpol;
    }
    showshippingdetails()
    {
        document.writeln("Expected Delivery :",this.expecteddelivery);
        document.writeln("Return Policy :"+this.returnpolicy);
    }
}
let kaylee = new shipping("shomya","shomya@123","balu","balu","shomya@gmail.com",9824367268,"Bangalore");
   var check = kaylee.signuppasswordvalidation();
   if(check == 1)
   {
       document.writeln("Signed Up successfully");
      var logincheck = kaylee.login("shomya@123","balu");
       if(logincheck == 1)
       {
           document.writeln("Logged in successfully");
           kaylee.productdetails("scott inernational","black","cotton","casual","s","Men");
           kaylee.showproductdetails();
           kaylee.shippingdetails("Expected delivery 9 days","Return within 15 days of product delivery");
           kaylee.showshippingdetails();
       }
       else
       {
           console.log("Invalid password");
       }
   }
   else
   {
       console.log("Password and confirm password doesnot match");
   }
  
