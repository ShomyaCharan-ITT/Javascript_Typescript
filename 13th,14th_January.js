
var identity = "shomya"
var Hobby = "Playing Badminton and Listening to music"
var MotoOfLife = "Hakuna Matata"
var nature = "Caring and sharing"
var FavouritePet = "cat"
var FavouriteFruit = "All Except Apple"

function employeedetails()
{
  var name = "Shomya Charan"
  var Gender = "Female"
  var college = "Sharda University"
  var HighestQualification = "Graduation"
  var PassOutYear = 2020
  var stream = "computer Science"
  var CompanyJoined = "InTime Tec"
  var DateOfJoining = "11Jan2021"
  var Department = "IT"
  var WorkingOnTechnology = "Angular"
  var SessionAttended = 1
  var Designation = "Trainee"
  var TodaysTargetAchieved = "Yes"
  var WhatHasBeenTaught = "Javascript"
  var NoOfMeetingsAttendedToday = 3
  var workingHours = 10
  var Target = "MI Team"
  var TodaysChallenge = "converting emtions into code"
  var Motivation = "My mother is my Moivation"
  var Native = "Patna"
  
  console.log(name,Gender,college,HighestQualification,PassOutYear,stream,CompanyJoined,DateOfJoining,Department,WorkingOnTechnology,SessionAttended,Designation,TodaysTargetAchieved,WhatHasBeenTaught,NoOfMeetingsAttendedToday,workingHours,Target,TodaysChallenge,Motivation,Native)
  
  }
  employeedetails()
  
function Familydetails(FatherName)
{
  var ExpectationFromMe = "To be an indpendent women"
  var HadLunch = "Yes"
 
 console.log(FatherName,ExpectationFromMe,HadLunch)
}

Familydetails("chitrasen charan")
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
class corporate
{
  constructor(name,jobrole,salary,festival)
   {
     this.companyname = name;
     this.jobprofile = jobrole;
     this.income = salary;
     this.celebration = festival;
   }
  checkbonus()
   {
      if(this.celebration == "Diwali")
       {
         console.log("You Got a bonus of 5000")
       }
      else if(this.celebration == "Holi")
       {
        console.log("You got a bonus of 4000")
       }
      else
       {
         console.log("You got a bonus of 3500")
       }
   }
}
let shomya = new corporate("JVT","Programmer","2.3 or 230000","Diwali")
    shomya.checkbonus()
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
class Corporate{                    //creating class
   CompanyName = "JVT"
   JobRole = "Programmer"
   Salary = "2.3 or 230000"
  }
var RefVar = new Corporate() // creating object for the above class
console.log(RefVar.CompanyName)
console.log(RefVar.JobRole)
console.log(RefVar.Salary)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
class CompanyDetails
{
 constructor(EmployeeName,EmployeeAge,ITExperience,AccountNo,IPAddress,Email,EmployeeMobile,PrimarySkill,Address,ReportingManager,EducationQualification,TotalMBDownloaded,MobileDownloadSpeed,MobileUploadSpeed)
      {
         this.EmpName = EmployeeName
         this.EmpAge = EmployeeAge
         this.ITExp = ITExperience
         this.AccNo = AccountNo
         this.IPAdd = IPAddress
         this.mail = Email
         this.EmpMob = EmployeeMobile
         this.PrimSkill = PrimarySkill
         this.EmpAdd = Address
         this.ReportingMan = ReportingManager
         this.EduQual = EducationQualification
         this.TotalMBDown = TotalMBDownloaded
         this.DownloadSpeed = MobileDownloadSpeed
         this.UploadSpeed = MobileUploadSpeed
         console.log(this.EmpName,this.EmpAge,this.ITExp,this.AccNo,this.IPAdd,this.mail,this.EmpMob,this.PrimSkill,this.EmpAdd,this.ReportingMan,this.EduQual,this.TotalMBDown,this.DownloadSpeed,this.UploadSpeed)
        }
      TrainerDetails()                          // creating method
      {
        this.name = "Venkatesh"
        this.DOB = "2/6/1988"
        this.Address = "Ground Floor dodakkanalli"
        this.Mobile = "9900367097"
        this.Email = "venkatesh.db@gmail.com"
       this.TotalITExperience = "1 Years"
       this.PancardNo = "asu675901f"
      }
                     
}

var arun = new CompanyDetails("shomya",22,"Fresher",223344455,"10.245.97.123","shomyacharan@gmail.com",8340381395,"Java","Doddakannalli","Arun","B.tech","21.26 GB","30.05 mbps","32.06 mbps")
var karan = new CompanyDetails("Karan",26,"Experience",223344455,"10.245.97.123","shomyacharan@gmail.com",8340381395,"Java","Doddakannalli","Arun","B.tech","21.26 GB","30.05 mbps","32.06 mbps")
console.log(arun.TrainerDetails())
//-----------------------------------------------------------------------------------------------------------------------------------------------------
class Celebration
{
 constructor(from,to,mailedBy,SignedBy)
      {
        this.fr = from
        this.to = to
        this.mailedBy = mailedBy
        this.SignedBy = SignedBy
       console.log(this.fr,this.to,this.mailedBy,this.SignedBy)
      }
    VenueDetails()
    {
      TicketType = "Special Entry Darshan"
      Date = "Dec 1st"
      Day = "Tuesday"
      Time = "3:30 AM"
      PerSlotTickets = 2000
      NameOfThePilgrim = "Venkatesh"
      OrderNo = 123456
      Email = "Venkatesh@gmail.com"
      Amount = 200
      ProofOfId = "Adhar card"
      NameOfTheSeva = "Archana"
      ReportingTime = "4 AM"
      PrivilegeToTheSeva = "Small Laddoo"
      AccommodationType = 500
      Available = 350
      NoOfTickets = 1
      Rate = "50 to 2000"
      }     
 }
   var LetsStart = new Celebration()
   console.log(LetsStart.VenueDetails)
   var angelina = new Celebration("Venkatesh@gmail.com","shomyacharan@gmail.com","gmail.com","gmail.com")
   var gorge = new Celebration("Venkatesh@gmail.com","gauravcharan@gmail.com","gmail.com","gmail.com")
   var Emma = new Celebration("Venkatesh@gmail.com","sushmacharan@gmail.com","gmail.com","gmail.com")


// In the below class object(here customer) is changig, Data is also changing but the variables are not changing
//--------------------------------------------------------------------------------------------------------------------------------------------------
class Creditcardinfo{
  constructor(creditcardnumber,outstanding,minimum)
  {
    this.CreditNumber = creditcardnumber
    this.Outstanding = outstanding
    this.Min = minimum
   }
   display()
   {
    console.log("Your Credit card Details are as shown below")
    console.log(this.CreditNumber, this.Outstanding, this.Min)
   }
}

let olivia = new Creditcardinfo(6146496758938152,571.36,272.36)
    olivia.display()
let ava = new Creditcardinfo(7754326128937489,600,235.67)
    ava.display()
let isabella = new Creditcardinfo(3425617626787826,790.54,300.5)
    isabella.display()
//--------------------------------------------------------------------------------------------------------------------------------------------    
class ProfileInformation{
   constructor(lastname, firstname,middlename,driverslicensenumber,driverslicensestate,driverlicensecountry,civiliantype,employeetype,dob,birthcity)
     {
       this.LastName = lastname
       this.FirstName = firstname
       this.MiddleName = middlename
       this.DriversLicenseNumber = driverslicensenumber
       this.DriversLicenseState = driverslicensestate
       this.DriversLicenseCountry = driverlicensecountry
       this.CivilianType = civiliantype
       this.EmployeeType = employeetype
       this.DateOfBirth = dob
       this.CityOfBirth = birthcity
     }
     
     displayProfileInfo()
     {
       console.log(" -----PROFILE INFORMATION----")
       console.log("First Name:",this.FirstName,"  ","Middle Name:", this.MiddleName," ","Last Name:", this.LastName)
       console.log("License Number :", this.DriversLicenseNumber)
       console.log("License Country :", this.DriversLicenseCountry)
       console.log("License State :", this.DriversLicenseState)
       console.log("Employee Type:", this.EmployeeType)
       console.log("Date Of Birth:", this.DateOfBirth, "City of Birth :", this.CityOfBirth)
     }
     
   vehicleInformation(vehicaltype,vehicle,colour,enginenumber,chassisnumber,company)
   {
      this.VehicalType = vehicaltype
      this.Vehicle = vehicle
      this.Colour = colour
      this.EngineNumber = enginenumber
      this.ChassisNumber = chassisnumber
      this.Company = company
   }
   displayVehicleInfo()
   {
     console.log("--VEHICLE INFORMATION--")
     console.log("Vehical Type :", this.VehicalType,"Vehicle :",this.Vehicle,"colour :",this.colour,"Engine Number :", this.EngineNumber,"Chassis Number :", this.ChassisNumber,this.Company)
   }
}
let sophia = new ProfileInformation("Kumar","Pavan","Bijjavaram","ka50201500006939","Karnataka","India","India","Software Engineer","12-07-1992","rajampet")
    sophia.displayProfileInfo()
    sophia.vehicleInformation("light motor","car","red","Kp98gtyihh457797","tc5678898335r45","BMW")
    sophia.displayVehicleInfo()
let bhavya = new ProfileInformation("charan","shomya","sharma","ka456737828734674","Bihar","India","India","Jr.Software Engineer","19-08-1998","Patna")
    bhavya.displayProfileInfo()
    bhavya.vehicleInformation("Heavy motor","Bus","Black","Br0937227382","tg6277722","volvo")
    bhavya.displayVehicleInfo()
//-------------------------------------------------------------------------------------------------------------------------------------------------------  
class ApperanceInformation{

constructor(weight,eyecolour,gender,address,homemobilenumber,personalmobilenumber,state,country)
{
   this.Weight = weight
   this.EyeColour = eyecolour
   this.Gender = gender
   this.Address = address
   this.HomeMobileNumber = homemobilenumber
   this.PersonalMobileNumber = personalmobilenumber
   this.State = state
   this.Country = country
}

displayAppearanceInformation()
{
 console.log(this.Weight,this.EyeColour,this.Gender,this.Address,this.HomeMobileNumber,this.PersonalMobileNumber,this.State,this.Country)
}

}

let mia = new ApperanceInformation(55,5.8,"Brown","Female","#6/96 rajampet Kadapa","7846783878","66477372","Andhra Pradesh","India")
let miaa = new ApperanceInformation(48,5,"Black","Female","Doddakannali jantha Colony","98120753","6278148","Bangalore","India")
    mia.displayAppearanceInformation()
    miaa.displayAppearanceInformation()
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
class ComputerSpecification{

constructor(rating,processor,installedmemory,systemtype,pentouch,companyname,computerdescription,edition,productid)
{
  this.Rating = rating
  this.Processor = processor
  this.RAM = installedmemory
  this.SystemType = systemtype
  this.PenTouch = pentouch
  this.CompanyName = companyname
  this.ComputerDesc = computerdescription
  this.Edition = edition
  this.ProductID = productid
}
displaySystemInfo()
{
    console.log(this.Rating,this.Processor,this.RAM,this.SystemType,this.PenTouch,this.CompanyName,this.ComputerDesc,this.Edition,this.ProductID)
}
computerUps(model,ipvoltage,frequency,opvoltage,batterytype,batterycapacity,batterybackup,rechargetime,weight)
{
   this.Model = model
   this.IPvoltage = ipvoltage
   this.Frequency = frequency
   this.OPvoltage = opvoltage
   this.BatteryType = batterytype
   this.BatteryCapacity = batterycapacity
   this.BatteryBackup = batterybackup
   this.RechargeTime = rechargetime
   this.Weight = weight
}
displayComputerUpsInfo()
{
  console.log(this.Model,this.IPvoltage,this.Frequency,this.OPvoltage,this.BatteryType,this.BatteryCapacity,this.BatteryBackup,this.RechargeTime,this.Weight)
}
}
let shomyasystem = new ComputerSpecification(4.5,"Intel Core i5-2450 CPU","4.00GB","64 - bit operating system","No Pen or touch input is available for this display","BALU-PC","WORKGROUP","Windows 7 Ultimate","00426-OEM-8992662-00497")
    shomyasystem.displaySystemInfo()
    shomyasystem.computerUps("exide-digital600","230v ac","50hz","230 v ac","sealed maintenance free","12volt 7Ah","12 to 20mints"," 5 to 6 hours","6.1kg")
    shomyasystem.displayComputerUpsInfo()
let gauravsystem = new ComputerSpecification(5.5,"Intel Core i7-6768 CPU","7.00GB","64 - bit operating system","Pen and Touch input is available for this display","BALU-PC","WORKGROUP","MAC 7 ultimate","00453-OEM-78878827-8878")
    gauravsystem.displaySystemInfo()
    gauravsystem.computerUps("exide-digital700","230v","70hz","230 v ac","sealed maintennace free","14 volt 7Ah","12 to 25mints","2 to 3 hours","4.5Kg")
    gauravsystem.displayComputerUpsInfo()
//------------------------------------------------------------------------------------------------------------------------------------------------------------ 
class VehicleRegisterationCertificate{

OwnerInformation(ownername,swd,permanentaddress,temporaryaddress)
{
   this.OwnerName = ownername
   this.SonWifeDaughter = swd
   this.PermanentAddress = permanentaddress
   this.TemporaryAddress = temporaryaddress
}
VehicleInformation(registerationnum,classisnum,enginenum,classofvehicle,cylinders,weight,wheelbase,seatingcapacity,fuel,cubiccylinder)
{
   this.RegisterationNumber = registerationnum
   this.ClassisNumber = classisnum
   this.EngineNumber = enginenum
   this.ClassOfVehicle = classofvehicle
   this.NumberOfCylinder = cylinders
   this.Weight = weight
   this.WheelBase = wheelbase
   this.SeatingCapacity = seatingcapacity
   this.Fuel = fuel
   this.CubicCylinder = cubiccylinder
}

AdditionalInformation(dealer,makersname)
{
   this.Dealer = dealer
   this.MakersName = makersname
}

DisplayOwnerDetails()
{
 console.log(this.OwnerName,this.SonWifeDaughter,this.PermanentAddress,this.TemporaryAddress)
}
DisplayVehicleDetails()
{
  console.log(this.RegisterationNumber,this.classisNumber,this.EngineNumber,this.ClassOfVehicle,this.NumberOfCylinder,this.Weight,this.WheelBase,this.SeatingCapacity,this.Fuel,this.CubicCylinder)
  }
DisplayAdditionalInformation()
{
  console.log(this.Dealer,this.MakersName)
}

 }
let aradhya = new VehicleRegisterationCertificate()
     aradhya.OwnerInformation("Sachin","Sirinivasan","Doddakannali Janatha colony","Boring Road Patna")
     aradhya.VehicleInformation("TN 22 CY 2917",5793603,"0G3N72505757","LMV(CAR)",3,740,2360,5,"Petrol",796)
     aradhya.AdditionalInformation("Murugan Vehicles & Services Limited","Maruti Suzuki Inda Limited")
     aradhya.DisplayOwnerDetails()
     aradhya.DisplayVehicleDetails()
     aradhya.DisplayAdditionalInformation()
//--------------------------------------------------------------------------------------------------------------------------------------------------------     
 class GoogleAccountCreation{
   constructor(firstname,lastname,username,password,confirmpassword,birthday,gender,mobile,email)
     {
       this.FirstName = firstname
       this.LastName = lastname
       this.Username = username
       this.Password = password
       this.ConfirmPassword = confirmpassword
       this.Birthday = birthday
       this.Gender = gender
       this.Mobile = mobile
       this.EmailAddress = email
      }
     show()
      {
       console.log("--CHECK DETAILS--")
       console.log(this.FirstName,this.LastName,this.UserName,this.Password,this.Birthday,this.Gender,this.Mobile,this.EmailAddress)
     }
 }
 let charlotte = new GoogleAccountCreation("Venkatesh","d b","jvt","balu","balu","2-6-1986","male",9900367097,"venkatesh.db@gmail.com")    
 let amelia = new GoogleAccountCreation("shomya","charan","shomya","All is well","All is well","19-08-1998","Female",834039729,"shomya@gmail.com")
    charlotte.show()
    amelia.show()
  // Making use of Array Data Structure . Accessible in the entire file
  Father = ["Chitrasen","Charan",47,"Tall","chitrasen@gmail.com","Very Caring"]
  console.log(Father[0])
  console.log(Father[5])
 
 class Supercoder{
 
 static holiday = "14 jan 2021"
constructor(level)
{
  this.Excitement = level
  console.log(this.Excitement)
}
static access()
{
 console.log(Supercoder.holiday)
 }
 }
 let reffer = new Supercoder("Very excited")
 Supercoder.access()
//--------------------------------------------------------------------------------------------------------------------------------------------------
class OnlineShopping{

ProductDetails(brand,productid,colour,size,material,occation,pattern,sleeves,necktype,fit,gender)
{
   this.Brand = brand
   this.ProductCode = productid
   this.Colour = colour
   this.Size = size
   this.Material = material
   this.Occassion = occation
   this.Pattern = pattern
   this.Sleeves = sleeves
   this.NeckType = necktype
   this.Fit = fit
   this.Gender = gender
}
 ShippingDetails(Delivery,Address,Email,Phonenumber)
 {
   this.ExpectedDelivery = Delivery
   this.ShippingAddress = Address
   this.EmailID = Email
   this.ContactNumber = Phonenumber
  }

DisplayProductDetails()
{
 console.log(this.Brand,this.ProductCode,this.Colour,this.Materials,this.Fit)
}
DisplayShippingAddress()
{
console.log(this.ExpectedDelivery,this.ShippingAddress,this.EmailID,this.ContactNumber)
}
}
let pointing = new OnlineShopping()
    pointing.ProductDetails("Scott International","APPSCOTT-INTERNWIT610835D77A441","Black","s","Cotton","casual","solid","Full Sleeves","Hooded","slim","Men")
    pointing.ShippingDetails(" 9 Days", "Plot 68 Pioneer co-operative colony","shomya@gmail.com",762309187)
    pointing.DisplayProductDetails()
    pointing.DisplayShippingAddress()
//------------------------------------------------------------------------------------------------------------------------------------------------------------
class MobileInformation
{
  constructor(os,chipset,cpu,gpu,model,manufacturer,processor,ram,keyboard,storage,flash,videocallcamera,videorecording,noisecancellation,expandablestorage) 
   {
     this.OS = os
     this.Chipset = chipset
     this.CPU = cpu
     this.GPU = gpu
     this.Model = model
     this.Manufacturer = manufacturer
     this.Processor = processor
     this.RAM = ram
     this.Keyboard = keyboard
     this.Storage = storage
     this.Flash = flash
     this.VideoCallRecording = videorecording
     this.NoiseCancellation = noisecancellation
     this.ExpandableStorage = expandablestorage
  }
  Platform(os,chipset,cpu,gpu)
  {
    this.OS = os
    this.Chipset = chipset
    this.CPU = cpu
    this.GPU = gpu
  }
  Battery(nonremovable,standby,talktime,musicplay)
  {
    this.NonRemove = nonremovable
    this.Standby =   standby
    this.Talktime = talktime
    this.MusicPlay = musicplay
  }
  Body(dimension,weight,sim)
  {
    this.Dimension = dimension
    this.Weight = weight
    this.Sim = sim
   }
   DisplayBatteryDetails()
   {
     console.log(this.NonRemove,this.StandBy,this.TalkTime,this.MusicPlay)
     }
   DisplayBodyDetails()
   {
     console.log(this.Dimension,this.Weight,this.Sim)
   }
   DisplayPlatformDetails()
   {
     console.log(this.OS,this.Chipset,this.CPU,this.GPU)
     }
     }
let mark = new MobileInformation("ios 9.2","Apple A9","Dual - core","Power GT7600","Iphone","Apple","1 GHZ","512Mb","Software","16GB/32Gb","LED","VGA","720 F","2 microphones","No")
     mark.Platform("ios","Apple A9","Dual Core 1.84 Ghz","PowerVR GT7400")
     mark.Battery("Li-po 1715mAh","up to 240 h","up to 14h","up to 50h")
     mark.Body("128*67.1*7.1",143,"Nano-sim")
     mark.DisplayBatteryDetails()
     mark.DisplayBodyDetails()
     mark.DisplayPlatformDetails()
