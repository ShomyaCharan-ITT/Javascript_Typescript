class mail
{
  sendername :string;
  private senderemailid :string;
   receivername :string;
   private receiveremailid :string;
   dayofmail :string;
   dateofmail :string;
  constructor(sname :string,semail :string,recname :string,recmail :string,day :string,date :string)
  {
    this.sendername = sname;
    this.senderemailid = semail;
    this.receivername = recname;
    this.receiveremailid = recmail;
    this.dayofmail = day;
    this.dateofmail = date;
  }
  checkmailid()
  {
    if(this.senderemailid == "kasi.sivap@gmail.com" && this.receiveremailid == "venkatesh.db@gmail.com")
    {
      console.log("Mail sent successfully");
    }
    else
    {
      console.log("Invalid emailid");
    }
  }
}
let brielle = new mail("siva prasad","kasi.sivap@gmail.com","D b venkatesh","venkatesh.db@gmail.com","friday","Nov 27,2015");
    brielle.checkmailid();
let delilah = new mail("shomya charan","shomyacharan@gmail.com","sushma","sushma@gmail.com","friday","Nov 28,2015");
    delilah.checkmailid();  
//------------------------------------------------------------------------------------------------------------------
class Employeeaddressproof
{
  empname :string;
  age :number;
  gender :string;
  private emailid :string;
  private idproof :string;
  private idproofnumber :string;
  constructor(name :string,age :number,gen :string,mailid :string,id :string,idnum :string)
  {
    this.empname = name;
    this.age = age;
    this.gender = gen;
    this.emailid = mailid;
    this.idproof = id;
    this.idproofnumber = idnum;  
  }
  checkidcard() :number
  {
    if(this.idproof == "voter id" || this.idproof == "ration card")
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }
}
let isla = new Employeeaddressproof("JVT",5,"Male","info@jvtechnologies.co.in","voter id","ASUSPB560F");
  var result :number = isla.checkidcard();
  if(result == 1)
  {
    console.log("Your response has been submitted");
  }
  else
   {
     console.log("Provide either voter id or ration card");
   }
//------------------------------------------------------------------------------------------------------------
class Foodbill
{
  firstorder :string;
  firstorderquantity :number;
  secondorder :string;
  secondorderquantity :number;
  thirdorder :string;
  thirdorderquantity :number;
  Rateofbutterroti :number;
  Rateofmasalapapad :number;
  Rateofpaneerkadai :number;
  butterroticost :number;
  masalapapadcost :number;
  paneerkadaicost :number;
  totalamounttobepaid :number;
  totalquantity:number;
  servicecharge :number;
  VAT :number;
  servicetax :number;
  amounttobepaid :number;
  constructor(forder :string,fquant :number,sorder :string,squant :number,torder :string,tquant :number)
  {
    this.firstorder = forder;
    this.firstorderquantity = fquant;
    this.secondorder = sorder;
    this.secondorderquantity = squant;
    this.thirdorder = torder;
    this.thirdorderquantity = tquant;

  }
   calculateprice() 
   {
      if(this.firstorder == "Butter roti")
      {
        this.Rateofbutterroti = 65;
        this.butterroticost = 65 * this.firstorderquantity;
      }
      if(this.secondorder == "Masala Papad")
      {
        this.Rateofmasalapapad = 75;
        this.masalapapadcost = 75 * this.secondorderquantity;
      }
      if(this.thirdorder == "Paneer Kadai")
      {
        this.Rateofpaneerkadai = 325;
        this.paneerkadaicost = 325 * this.thirdorderquantity;
      }
      this.amounttobepaid = this.butterroticost + this.masalapapadcost+this.paneerkadaicost;
      this.totalquantity = this.firstorderquantity+this.secondorderquantity+this.thirdorderquantity;
      this.servicecharge = 73.50;
      this.VAT = 77;
      this.servicetax = 36.50;
      this.totalamounttobepaid = this.amounttobepaid + (this.servicetax+this.VAT+this.servicecharge);
   }
   showbill()
     {
        console.log("TotalQuantity :"+ this.totalquantity+"service tax :"+this.servicetax+"VAT :"+this.VAT+"Service charge"+this.servicecharge);
        console.log("Total Amount :" + this.totalamounttobepaid);

      }   
   }

let rylee = new Foodbill("Butter roti",4,"Masala Papad",3,"Paneer Kadai",1);
rylee.calculateprice();
rylee.showbill();
//--------------------------------------------------------------------------------------------------------------------
class faredetails
{
  private passengername :string;
  private passengerage :number;
  private gender :string;
  private seatnumber :number;
  distancecovered :number;
  trainname :string;
  private ticketfare :number;
  private servicetax :number;
  private servicecharge :number;
  private totalfare :number;

  constructor(name :string,age :number,gender :string,birth :number,distance :number,tname :string)
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
         console.log("Total Fare :" + this.totalfare);

       }
       else if(this.distancecovered > 350 && this.distancecovered <500)
       {
         this.ticketfare = 800;
         this.servicetax = 35;
         this.totalfare = this.ticketfare + this.servicetax;
         console.log("Total Fare :" + this.totalfare);
       }
       else
       {
         console.log(" Rajdhani not in this route");
       }
     }
     else if(this.trainname == "Bangalore Express")
     {
       if(this.distancecovered > 400 && this.distancecovered < 700)
       {
         this.ticketfare = 1500;
         this.servicetax = 70;
         this.totalfare = this.ticketfare + this.servicetax;
         console.log("Total Fare :" + this.totalfare);
       }
       else if(this.distancecovered >700 && this.distancecovered <1200)
       {
         this.ticketfare = 2800;
         this.servicetax = 100;
         this.totalfare = this.ticketfare + this.servicetax;
         console.log("Total Fare :" + this.totalfare);
       }
       else
       {
         console.log("Bnagalore express not in this route");
       }
     }
     else
     {
       console.log("No Train Available");       
     }
  }
  
}
let katherine = new faredetails("Arun",27,"Male",7,323,"Rajdhani");
    katherine.calculatefare();
let josephine = new faredetails("Karan",25,"Male",8,1100,"Bangalore Express");
    josephine.calculatefare();
let ivy= new faredetails("Anjana",23,"female",10,500,"sampoorn kranti");
    ivy.calculatefare();
//--------------------------------------------------------------------------------------------------------------
class electricitybill
 {  
   private username :string;
   private password :string;
   private modeofpayment :string;
   private bankname :string;
   private unitsconsumed :number;
   private cost :number;
   private consumernumber :number;
   constructor(uname :string,pwd :string,cnumber :number,mode :string,bank :string,units :number)
   {
     this.username = uname;
     this.password = pwd;
     this.modeofpayment = mode;
     this.bankname = bank;
     this.unitsconsumed = units;
     this.consumernumber = cnumber;
   }
   calculatebill()
   {
       if(this.unitsconsumed < 100)
       {
         this.cost = this.unitsconsumed *1.5;
       }
       else if(this.unitsconsumed > 100 && this.unitsconsumed < 300)
       {
         this.cost = 150 + ((this.unitsconsumed - 100)*2.5);
       }
       else if(this.unitsconsumed > 300 && this.unitsconsumed < 500)
       {
         this.cost = 650 + ((this.unitsconsumed - 300)*4.5);
       }
       else
       {
         this.cost = 1550 + ((this.unitsconsumed - 500)*6);
       }
   }
   showbill()
   {
     console.log("Electricity Bill To be paid" + this.cost);
   }
 }
 let liliana = new electricitybill("shomya","shomya@ch12",234571625,"net banking","sbi",370);
 liliana.calculatebill();
liliana.showbill();
//---------------------------------------------------------------------------------------------------------
 class payslip
 {
   private employeename :string;
   private organization :string;
   private jobrole :string;
   private framework :string;
   private location :string;
   private grosssalary :number;
   private basic :number;
   private hra :number;
   private emplpf :number;
   constructor(name :string,company :string,role :string,framework :string,location :string,gross :number)
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
     console.log("Basic salary :"+this.basic+"HRA :"+this.hra+"Emplr PF :"+this.emplpf);
   }
 }
 let jade = new payslip("shomya","Intimetec","Trainee","Angular","Bangalore",50000);
 jade.calculatepayslip();
jade.showpayslip();
//-------------------------------------------------------------------------------------------------------------
class onlineshopping
{
   private username :string;
   private password :string;
   private emailid :string;
   private mobilenumber :number;
   private location :string;
   private loginname :string;
   private loginpwd :string;
   productbrand :string;
   estimatedarrival :string;
   productcolor :string;
   returnpolicy :string;
   fabric :string;
   occassion :string
   size :string;
   gender :string;
  constructor(uname :string,pwd :string,mail :string,mobilenum :number,location :string)   //signup purpose
  {
    this.username = uname;
    this.password = pwd;
    this.emailid = mail;
    this.mobilenumber = mobilenum;
    this.location = location;
  }
  logincredentialscheck(logname :string,logpwd :string) :number
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
  productdetails(brand :string,color :string,material :string,occassion :string,size :string,gender :string)
  {
    this.productbrand = brand;
    this.productcolor = color;
    this.fabric = material;
    this.occassion = occassion;
    this.size = size;
    this.gender = gender;
    console.log("Product details saved successfully");   
  }
  shippingdetails(arrival :string,repolicy :string)
  {
     this.estimatedarrival = arrival;
     this.returnpolicy = repolicy;
     console.log("Shipping details saved successfully");
  }
}
let maria = new onlineshopping("shomya","shomya@123","shomya@gmail.com",9824367268,"Bangalore");
 var result :number = maria.logincredentialscheck("shomya","shomya@123");
     if(result == 1)
     {
       maria.productdetails("scott inernational","black","cotton","casual","s","Men");
       maria.shippingdetails("Estimated arrival 9 days","15 days return policy");
     }
     else
     {
       console.log("Invalid username or password");
     }
let hadley = new onlineshopping("shyam","shyam@123","shyam@gmail.com",67289389,"Jaipur");
var see :number = hadley.logincredentialscheck("shyam","shomya@123");
if(see == 1)
{
  hadley.productdetails("scott inernational","black","cotton","casual","s","Men");
  hadley.shippingdetails("Estimated arrival 9 days","15 days return policy");
}
else
{
  console.log("Invalid username or password");
}
//-------------------------------------------------------------------------------------------------------------------
class emii
{
  private loanamount :number;
  private rateofinterest :number;
  private duration :number;
  private emival :number;
  constructor(amount :number,rate :number,duration :number)
  {
    this.loanamount = amount;
    this.rateofinterest = rate;
    this.duration = duration;
  }
  emicalculation()
  {
    this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.duration))/(((Math.pow(1+this.rateofinterest,this.duration))-1));
    console.log(this.emival);
  }
}
let natalia = new emii(5000000,10.5,240);
    natalia.emicalculation();
//------------------------------------------------------------------------------------------------------------------
class emi
{
  private typeofloan :string;
  private loanamount :number;
  private rateofinterest :number;
  private loantenure :number;
  private emival :number;
  constructor(loan :string,amount :number)
  {
     this.typeofloan = loan;
     this.loanamount = amount;
  }
  emicalculation():number
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
let anabelle = new emi("Home Loan",5000000);
   var emivalue :number = anabelle.emicalculation();
   if(emivalue != 0)
   {
     console.log("EMI :" + emivalue);
   }
   else
   {
     console.log("No schemes available");
   }
let faith= new emi("Personal Loan",5003400);
var emiamount :number = faith.emicalculation();
   if(emiamount != 0)
   {
     console.log("EMI :" + emiamount);
   }
   else
   {
     console.log("No schemes available");
   }
