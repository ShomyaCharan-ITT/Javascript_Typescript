
//creating function
function corporateinfo()
{
  Companyname = "JVT"
  Designation = "Programmer"
  Salary = "2.3 or 23000"
  Location = "Bangalore"
}
corporateinfo()  //making a call to that function
//--------------------------------------------------------------------------------------------------------------------------------------------
//creating function and passing value while function call
function CorporateInformation(compname,designation,sal,place)
{
   return sal
}
var result = CorporateInformation("JVT","Software Engineer","4.5 or 45000","Pune")//function call
console.log(result)
//-----------------------------------------------------------------------------------------------------------------------------------------------
class company  //creating class
{
  constructor(companyname = "jvt",jobrole,framework)
  {
   this.organisationname = companyname,
   this.Designation = jobrole,
   this.Domain = framework
  }
  display()
  {
    console.log("Organization Name :"+this.organisationname+"Designation :"+this.Designation+"Domain :"+this.Domain)
  }
}
let kinsley = new company("Intimetec","Software Developer","Angular")    //creating object of the above class. new keyword will internally calls the malloc function.new is used to create object.object is nothing but a memory address in RAM.This Memory address doesnot have any name that's why we create a reference that will keep on pointing to that Memory addresss.
let allison = new company(undefined,"Tester","Angular")
kinsley.display()
allison.display()
//-----------------------------------------------------------------------------------------------------------------------------------------
class organisation //Now we are passing data while creating the object.So now though the object is changing,data is changing but the variable in which they are stored is not changing.
{
 constructor(firstname,lastname,jobrole,company,location,dateofjoining)
 {
  this.FirstName = firstname
  this.Lastname = lastname
  this.JobRole = jobrole
  this.Company = company
  this.Location = location
  this.DateOfJoining = dateofjoining
 }
 display()
 {
  console.log("<br>"+this.FirstName +"<br>"+this.Lastname+"<br>"+this.JobRole)
 }
}
let maya = new organisation("shomya","charan","Front end developer","Intimetec","Bangalore","11-01-21")//creating multiple object with different data
let sara = new organisation("gaurav","charan","Back end developer","Infosysy","Pune","11-01-17")
maya.display() 
sara.display()
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
class NetDetails                              //Now passing data while creating a object
{
  constructor(accnum,userid,ipaddress)
  {
    this.AccountNumber = accnum
    this.UserId = userid
    this.IPAddress  = ipaddress
    
  }
  netusage(totalmbdownloaded,mobiledownloadspeed,mobileuploadspeed)
  {
    this.TotalMBDownloaded = totalmbdownloaded
    this.MobileDownloadSpeed = mobiledownloadspeed
    this.MobileUploadSpeed = mobileuploadspeed
    return this.TotalMBDownloaded
  }
}
let adeline = new NetDetails(11354977,11285009,"10.245.97.123")
  var letsee = adeline.netusage("21.26 GB","30.05 mbps","32.96 mbps")
  console.log("<br>"+"Toatl MB Downloaded : "+"<br>"+letsee)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
let alexa = {
            BroadBandInfo(accountnumber,broadbanduserid,ipaddress)
            {
             this.AccountNumber = accountnumber,
             this.BroadBandUserID = broadbanduserid,
             this.IPAddress = ipaddress
            },
            NetUsage(totalmbdownloaded,mobiledownloadspeed,mobileuploadspeed)
            {
             this.TotalMBDownloaded = totalmbdownloaded,
             this.MobileDownLoadSpeed = mobiledownloadspeed,
             this.MobileUploadSpeed = mobileuploadspeed
            }
         }
alexa.BroadBandInfo(11354977,11285009,"10.245.97.123")
alexa.NetUsage("35.36 GB","31.10 mbps","37.97 mbps")
//------------------------------------------------------------------------------------------------------------------------------------------------------------------                                 
function BroadBand(accnum,userid,ipaddress)                                //Making use of callback fucntion
{
  console.log("AccountNumber :"+ accnum)
}
function Net(callbackbroadbandinfo)
{
 this.TotalMBDownloaded = "40.05 GB"
 this.MobileDownloadSpeed ="40 mbps"
 this.MobileUploadSpeed = "37.07 mbps"
 console.log("TotalMBDownloaded :"+"<br>"+this.TotalMBDownloaded)
 callbackbroadbandinfo(1156255,8726728,"12.392.21.190")
}
Net(BroadBand)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
let ariana = {                        //another wayof creating class
               concertDetails(date,day,time,perslottickets,nameofseva)
               {
                  this.Date = date,
                  this.Day = day,
                  this.Time= time,
                  this.PerSlotTickets = perslottickets,
                  this.Nameofseva= nameofseva              
               },
               visitorDetails(tickettype,bookingnumber,nameofpilgrim,ordernumber,emailid,IDProof,Numberofticket,ReportingTime)
               {
                 this.TicketType =tickettype,
                 this.BookingNumber = bookingnumber,
                 this.NameOfPilgrim = nameofpilgrim,
                 this.OrderNumber = ordernumber,
                 this.EmailId = emailid,
                 this.IDProof = IDProof,
                 this.NumberOfTicket = Numberofticket,
                 this.ReportingTime = ReportingTime
               }
         }
ariana.concertDetails("Dec 1st","Tuesday","3:30 AM",2000,"Archana")
ariana.visitorDetails("special Entry Darshan","is15111080080016","venkatesh",010600013554,"venkatesh@gmail.com","Adhar Card",1,"4:00 AM")
//------------------------------------------------------------------------------------------------------------------------------------------------------------
class Education
 {
   constructor(fname,lname,primschool,secschool,highqual)
   {
     this.Firstname = fname
     this.Lastname = lname
     this.Primaryschool = primschool
     this.Secondaryschool = secschool   
     this.HighestQualification= highqual
   }
   seteducationdata()
   {
       if(this.Firstname == undefined)
       {
        console.log(" First name needed")
       }
       else if(this.Lastname = undefined)
       {
        console.log("Last name needed")
       }
       else if(this.Primaryschool == undefined)
       {
        console.log("Primary school name required" )
       }
       else if(this.Secondaryschool == undefined)
       {
        console.log("secondar school name required")
       }
       else if(this.HighestQualification == undefined)
       {  
        console.log("Specify Highest Qualification")
       }
       else
       {
        this.arr = [this.Firstname,this.Lastname,this.Primaryschool,this.Secondaryschool,this.HighestQualification]
        console.log("Data saved")
       }
   }
}

let kartikey = new Education("shomya","charan","International school","Delhi Public School","Graduation")
    kartikey.seteducationdata()  
let elena = new Education(undefined,"sinha","DPS","DPS","MBA")
  elena.seteducationdata()
//----------------------------------------------------------------------------------------------------------------------------------------------------------
  class employeerecognition
  {
  constructor(name,designation,company,salary)
  {
    this.employeename = name
    this.jobrole = designation
    this.income = salary
  }
  validatedata()
  {
     if(this.employeename == undefined)
     {
      console.log(" Employee name required")
     }
     else if(this.jobrole == undefined)
     {
      console.log("Job Role mandatory")
     }
     else if(this.income == undefined)
     {
      console.log("Income Required")
     }
   
  }
  seerecognition()
  {
    if(this.income > 50000)
    {
      console.log("Congratulation You got a bonus of Rs.5000")
   }
   else
   {
    console.log("No. Bonus")
    }
  }  
}
let gabreilla = new employeerecognition("shomya charan","Trainee","Intimetec",100000)
    gabreilla.validatedata()
    gabreilla.seerecognition()

