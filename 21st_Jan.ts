class corporateinformation
{   private organization : string;
    private profile : string;
    private income : string;
    private destination : string;
    constructor(cname : string,designation :string,salary :string,location :string)
    {
      this.organization = cname;                // assigning data into objects
      this.profile = designation;
      this.income  = salary;
      this.destination = location;
    }
    showdetails()
    {
       console.log(this.organization); 
    }
}
 let IT = new corporateinformation("JVT","Programmer","2.3 or 230000","Bangalore");
 IT.showdetails()
-------------------------------------------------------------------------------------------
class Employee
{
   private company :string;
   private location :string;
   private designation :string;
   private Framework :string;
   constructor(organization :string,location :string,position :string,framework :string)
   {
     this.company = organization;
     this.location = location;
     this.designation = position;
     this.Framework = framework;
   }  
   display()
{
  console.log(this.company,this.location,this.designation,this.Framework);
}
}
let julia = new Employee("Intimetec","Bangalore","Trainee","Angular");
    julia.display();
----------------------------------------------------------------------------------------------
class broadbandinfo
{
  private accountnumber :number;
  private broadbanduserid   :number;
  private ipaddress  :string;
  private ToatalMBDownloaded :number;
  private MobileDownloadSpeed :number;
  private MobileUploadSpeed  :number;
  private remaining :number;
  constructor(accnum :number,userid :number,ipadd :string)
  {
     this.accountnumber = accnum;
     this.broadbanduserid = userid;
     this.ipaddress = ipadd;
  }
  checklimit(totaldownloads :number,downloadspeed :number,uploadspeed :number)
  {
    this.ToatalMBDownloaded = totaldownloads;
    this.MobileDownloadSpeed = downloadspeed;
    this.MobileUploadSpeed = uploadspeed;
    if(this.ToatalMBDownloaded > 30)
    {
      console.log("Data Pack Exhausted");
    }
    else
    {
      this.remaining = 30 - this.ToatalMBDownloaded;
      console.log("Remaining Data :" + this.remaining);
    }
  }
  displaydata()
  {
    console.log(this.accountnumber,this.ToatalMBDownloaded,this.MobileUploadSpeed,this.MobileDownloadSpeed);
  }
}
let valentina = new broadbandinfo(113456,111285550,"10.245.97.123");
    valentina.checklimit(21.26,30.05,32.06);
    valentina.displaydata();

let clara = new broadbandinfo(233526,4562728,"12.837.14.215");
    clara.checklimit(40,32,46);
    clara.displaydata();
  -----------------------------------------------------------------------------------------------------------
class concertdetails
{
    concertdate :string;
    eventday : string;
    eventtime : string;
    darshan :string;
    priceperticket :number;
    private visitorname :string;
    private ordernumber :number;
    private emailid :string;
    private adharcardnumber :number;
    private bookingnumber :string;

  constructor(name :string,ordnum :number,email :string,adharnumber :number,booknumber :string)
  {
     this.visitorname = name;
     this.ordernumber = ordnum;
     this.emailid = email;
     this.adharcardnumber = adharnumber;
     this.bookingnumber = booknumber;
  }
  eventdetails(edate :string,day :string,time :string,seva :string,cost :number)
  {
    this.concertdate = edate;
    this.eventday = day;
    this.eventtime = time;
    this.darshan = seva;
    this.priceperticket = cost;
  }
  showeventdetails()
  {
    console.log("Event Date :",+this.concertdate,"Event Day :"+ this.eventday,"Price "+this.priceperticket+"visitor name"+this.visitorname,+"Darshan type "+this.darshan);
  }
}
let vivian = new concertdetails("venkatesh",106003277352,"venkatesh.db@gmail.com",26388821728,"IS15111080016");
vivian.eventdetails("Dec 1st","Tuesday","3:30 am","Archana",220);
vivian.showeventdetails();
-----------------------------------------------------------------------------------------
class Accountcreation
{
   private firstname :string;
   private lastname :string;
   private company :string;
   private password :string;
   private confirmpassword :string;
   private contactnumber :number;
   private emailid :string;
  constructor(fname :string,lname :string,organization :string,pwd :string,cpwd :string,phonenumber :number,email :string)
  {
     this.firstname = fname;
     this.lastname = lname;
     this.company = organization;
     this.password = pwd;
     this.confirmpassword = cpwd;
     this.contactnumber = phonenumber; 
     this.emailid = email    // store human info basic one
  }
  passwordverification(): number
  {
    if(this.password == this.confirmpassword)
    {
      return 1;
    }   
    else
    {
      return 0;
    }      
  }
}
let madeline = new Accountcreation("venkatesh","db","jvt","balu","bau",9900367262,"venkatesh.db@gmail.com");
let res : number = madeline.passwordverification();
if(res == 1)
{
  console.log("Account Created Successfully");
}
else
{
  console.log("Password and confirm password doesnot match");
}