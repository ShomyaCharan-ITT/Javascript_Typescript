
//Another way of creating a class
let victoria = {                           //Inside this class i am having only data
                name : "JVT",
                Designation : "Programmer",
                Salary : "2.3 or 230000"
              }
 console.log(victoria.name)          //Displaying data outside the class
 console.log(victoria.Designation)
 console.log(victoria.Salary)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
let aria = {
             name : "JVT",             //Inside class having data as well as one method
             Designation : "Programmer",
             Salary : 50000,
             Display()
             {
              console.log(this.Designation)
             }
          }
      aria.Display()
 //--------------------------------------------------------------------------------------------------------------------------------------------------------------     
 let grace = {
            name : "Intimetec",            //These are datas
            Designation : "Trainee",
            Location : "Bangalore",
            EmployeeFirstname : "shomya",
            EmployeeLastName : "Charan",
            DateofJoining : "11Jan 2021",
            PassoutYear : 2020,
            Native : "Patna",
                                          //Now creating two methods inside it
          companyInfo()
            {
              console.log(this.name,this.Designation,this.Location)
            },
          personalInfo()
            {
              console.log(this.EmployeeFirstname,this.EmployeeLastName,this.DateofJoining,this.PassoutYear,this.Native)
            }
         }
     
       grace.companyInfo()
      grace.personalInfo()
//-----------------------------------------------------------------------------------------------------------------------------------------------
 let chloe = {
                   PersonalInfo(fname,lname,gender,tenthschool,primboard,primlocation,secschool,secboard,degree,str,college)
                   {
                   this.StudentFirstName = fname,    //These all are datas
                   this.StudentLastName = lname,
                   this.Gender = gender,
                   this.TenthSchool = tenthschool,
                   this.PrimaryBoard = primboard,
                   this.SchoolLocation = primlocation,
                   this.TwelthSchool = secschool,
                   this.SecondaryBoard = secboard,
                   this.HighestDegree = degree,
                   this.Stream = str,
                   this.University = college
                   },
                   //creating first method in this class
                  
                  DisplayPersonalInfo()
                  {
                    console.log(this.StudentFirstName,this.StudentLastName,this.Gender)
                  },
                  DisplayPrimarySchoolDetails()
                  {
                    console.log(this.TenthSchool,this.PrimaryBoard,this.SchoolLocation)
                   },
                  DisplaySecondarySchoolDetails()
                  {
                    console.log(this.TwelthSchool,this.SecondaryBoard)
                   },
                   DisplayCollegeDetails()
                   {
                    console.log(this.HighestDegree,this.Stream,this.University)
                   }
                 }
              chloe.PersonalInfo("shomya","charan","Female","International school","I.C.S.E","Boring Road","Delhi Public School","C.B.S.E","Graduation","Computer science","Sharda University");
              chloe.DisplayPersonalInfo()
              chloe.DisplayPrimarySchoolDetails()
              chloe.DisplaySecondarySchoolDetails()
             chloe.DisplayCollegeDetails()
//------------------------------------------------------------------------------------------------------------------------------------------------------------------              
        
 let camila = {
                   studentdetails(stufname,stulname,stustate)
                   {
                      this.studentfirstname = stufname,     
                      this.studentlastname = stulname,
                      this.native = stustate
                   },  
                    TenthDetails(primschool,prischoolboard,prischoollocation)            
                    {
                      this.primaryschoolname = primschool,
                      this.primaryschoolboard = prischoolboard,
                      this.primaryschoollocation = prischoollocation
                    },
                     DisplayTenthDetails()   
                     {
                      console.log(this.primaryschoolname,this.primaryschoolboard,this.primaryschoollocation)
                     } 
                                   
                              } 
           camila.studentdetails("shomya","charan","Patna")   
           camila.TenthDetails("International School","ICSE","Boring Road,Patna")
           camila.DisplayTenthDetails()
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------            
 // method returning value
 let penelope = {
                        employee(efname,elname,ecompany,ejobrole,esalary)
                        {
                         this.firstname = efname,
                         thislastname = elname,
                         this.company = ecompany,
                         this.Designation = ejobrole,
                         this.salary = esalary
                        },
                        CheckSalary()
                        {
                          if(this.salary >500)
                           {
                             return "congrats"
                           }
                          else
                          {
                            return "Work Hard"
                          }
                       }
                    }
penelope.employee("shomya","charan","Intimetec","Trainee",10000)
var result = penelope.CheckSalary()
console.log(result)
//-----------------------------------------------------------------------------------------------------------------------------------
let layla = {
                  Details(empname,empeducation,empbirthdate,empaddress,emphomenumber,emppersonalnumber,empemail,empitexperience,empskill,empexperience,empmanager,emppancard)
                  {
                    this.Name = empname,
                    this.EductionalQualification = empeducation,
                    this.DateOfBirth = empbirthdate,
                    this.Address = empaddress,
                    this.ResidenceNumber = emphomenumber,
                    this.Mobile = emppersonalnumber,
                    this.Email = empemail,
                    this.TotalITExperience = empitexperience,
                    this.Skill = empskill,
                    this.Experience = empexperience,
                    this.ReportingManager = empmanager,
                    this.pancardnumber = emppancard
                 },
                 DisplayDetails()
                 {
                  console.log(this.Name)
                 }
              }
              layla.Details("Venkateshwara Technologies","btech mca mba bsc msc","2/6/1988", "Ground floor new thippasandra",0873827378,9982379910,"venkateshwara@gmail.com","1 years","c,cpp","Venkatesh","asus67590lf")
             layla.DisplayDetails()
 //---------------------------------------------------------------------------------------------------------------------                
 let lillian = {
                  broadbanddetails(accnum,userid,ip)            // creating method inside the class
                  {
                    this.accountnumber = accnum,
                    this.broadbanduserid = userid,
                    this.IPAddress = ip
                  },
                  netusage(totaldownload,downloadspeed,uploadspeed)
                  {
                    this.TotalMBDownloaded = totaldownload,
                    this.MobileDownloadSpeed = downloadspeed,
                    this.MobileUploadSpeed = uploadspeed
                 },
                Displaybroadbanddetails()
                {
                  console.log(this.accountnumber,this.broadbanduserid,this.IPAddress)
                },
                Displaynetusage()
                {
                  console.log(this.TotalMBDownloaded,this.MobileDownloadSpeed,this.MobileUploadSpeed)
                } 
           }
      lillian.broadbanddetails(1135497,11128550,"10.245.97.123")
     lillian.Displaybroadbanddetails()
      
     lillian.netusage("21.26 GB","30.05 mbps","30.05 mbps")
      lillian.Displaynetusage()
//---------------------------------------------------------------------------------------------------------------------------------
 //Another way of creating method
 let nora = {
              }
     nora.broadbanddetails = function(accnum,userid,ip)
                              {
                                this.accountnumber = accnum,
                                this.broadbanduserid = userid,
                                this.IPAddress = ip
                               },
     nora.Displaybroadbanddetails = function()
                                       {
                                        console.log(this.accountnumber,this.broadbanduserid,this.IPAddress)
                                        },
     nora.netusage = function(totaldownload,downloadspeed,uploadspeed)
                        {
                          this.TotalMBDownloaded = totaldownload,
                          this.MobileDownloadSpeed = downloadspeed,
                          this.MobileUploadSpeed = uploadspeed
                        },
      nora.DisplayNetUsage = function()
                                {
                                  console.log(this.TotalMBDownloaded,this.MobileDownloadSpeed,this.MobileUploadSpeed)
                                 }  
     nora.broadbanddetails(1135497,11128550,"10.245.97.123")
    nora.Displaybroadbanddetails()
     nora.netusage("21.26 GB","30.05 mbps","30.05 mbps")
      nora.DisplayNetUsage()
//--------------------------------------------------------------------------------------------------------------------------------------------------
 // Methode returning value
 
 let zoey = {
                  netusage(totaldownload,downloadspeed,uploadspeed)
                  {
                    this.TotalMBDownloaded = totaldownload,
                    this.MobileDownloadSpeed = downloadspeed,
                    this.MobileUploadSpeed = uploadspeed
                  },
                  checkusage()
                  {
                    if(this.TotalMBDownloaded > 100)
                      {
                       return "Data usage exceed"
                      }
                    else
                    {
                       this.remaining = 100 - this.TotalMBDownloaded
                       return(this.remaining)
                     }
                  }
              }
     zoey.netusage("21.26 GB","30.05 mbps","30.05 mbps")
 var res = zoey.checkusage()
 if(res == "Data usage exceed")
  {
    console.log("Oops!! You have exhausted your daily quota")
  }
 else
  {
    console.log("Your Remaining Data is: " + res)
  }
//-----------------------------------------------------------------------------------------------------------------------------------------------------
// Paasing data while making method call   
  let mila = {
                    netusage(totalmbdownloaded,mobiledownloadspeed,mobileuploadspeed)
                     {
                     this.TotalMBDownloaded = totalmbdownloaded,
                     this.MobileDownloadSpeed = mobiledownloadspeed,
                     this.MobileUploadSpeed = mobileuploadspeed
                     },
                  Displaynetusage()
                  {
                    console.log(this.TotalMBDownloaded,this.MobileDownloadSpeed,this.MobileUploadSpeed)
                  },
                 broadbanddetails(accountnumber,broadbanduserid,ipaddress)
                 {
                    this.AccountNumber = accountnumber,
                    this.BroadBandUserId = broadbanduserid,
                    this.IPAddress = ipaddress
                 },
                 DisplayBroadbanddetails()
                 {
                 console.log(this.AccountNumber,this.BroadBandUserId,this.IPAddress)
                 }
                 
               }
  mila.netusage("21 GB","27 MB","35 MB")
   mila.Displaynetusage()
 mila.broadbanddetails(1122334455,778899,1234)
  mila.DisplayBroadbanddetails()
 //----------------------------------------------------------------------------------------------------------------------------------------------------
let aubrey = {
               eventDetails(darshan,reptime,privilige,cost,nooftkt,costpertkt,performdate,performtime)
               {
                 this.Nameofthedarshan = darshan,
                 this.Reportingtime = reptime,
                 this.Privligestoseva = privilige,
                 this.Rate = cost,
                 this.Nooftickets = nooftkt,
                 this.Perslottickets = costpertkt,
                 this.Performancedate = performdate,
                 this.Performancetime = performtime
               },
               pilgrimsDetails(pilgrimname,tkttype,visitdate,visitday,visittime,booknumber,ordernum,visitoremail,price,idproof,adharnumber,dateofbooking,timeofbooking,noofperson)
               {
                 this.Nameofpilgrim = pilgrimname,
                 this.Tickettype = tkttype,
                 this.Date = visitdate,
                 this.Day = visitday,
                 this.Time = visittime,
                 this.Bookingnumber = booknumber,
                 this.OrderNumber = ordernum,
                 this.Email = visitoremail,
                 this.Amount = price,
                 this.Proofid = idproof,
                 this.Adharcardnumber = adharnumber,
                 this.Bookeddate = dateofbooking,
                 this.Bookedtime = timeofbooking,
                 this.Numberofperson = noofperson
              },
              DisplayImportantInfo()
              {
                console.log(this.Nameofthedarshan,this.Reportingtime,this.Nameofpilgrim,this.Tickettype,this.Date,this.Day,this.Time)
              }
          }       
   aubrey.eventDetails("Archana","4:00 AM","Two small Laddu"," 50 to 2000",1,2000,12012015,"4:30")
  aubrey.pilgrimsDetails("chitrasen","Special Entry Darshan","Dec 1st","Tuesday","3:30 AM","IS 15111008013554",010600013554,"chitrasencharan@gmail.com",220,"Adhar Card",722367281638,11062015,"11:36:46",1)
   aubrey.DisplayImportantInfo()
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
 //Now passing the data while calling the method  
 let hannah = {
                  eventDetails(nameofdarshan,reportingtime,privilegetoseva,rate,numberoftickets,perslottickets,performancedate,performancetime)
                  {
                    this.Nameofdarshan = nameofdarshan,
                    this.Reportingtime = reportingtime,
                    this.Privilegetoseva = privilegetoseva,
                    this.Rate = rate,
                    this.Numberoftickets = numberoftickets,
                    this.Perslottickets = perslottickets,
                    this.Performancedate = performancedate,
                    this.Performancetime = performancetime
                   },
               pilgrimsDetails(nameofpilgrims,tickettype,date,day,time,bookingnumber,ordernumber,email,amount,proofid,adharcardnumber,bookeddate,bookedtime,numberofperson)
               {
                 this.Nameofpilgrims = nameofpilgrims,
                 this.Tickettype = tickettype,
                 this.Date = date,
                 this.Day = day,
                 this.Time = time,
                 this.Bookingnumber = bookingnumber,
                 this.Ordernumber = ordernumber,
                 this.Email = email,
                 this.Amount = amount,
                 this.Proofid = proofid,
                 this.Adharcardnumber = adharcardnumber,
                 this.Bookeddate = bookeddate,
                 this.Bookedtime = bookedtime,
                 this.Numberofpersons = numberofperson
               },
              importantdetails()
              {
                console.log(this.Nameofdarshan,this.Reportingtime,this.Privilegetoseva,this.Nameofpilgrims,this.Numberofpersons)
              }
     }
hannah.eventDetails("Archana","5:00AM","one small laddoo","100 to 1000",4,1500,11012020,"6:00 AM")
hannah.pilgrimsDetails("sinha","Special Entry Darshan","Dec 2nd","Tuesday","4:30AM","Is 25366226",762178278,"sharma@gmail.com",2360,"Pan card",772681234,98527,"12:23:50",4)
hannah.importantdetails()
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//Another way of creating method and returning a data
let lily = {
                       pilgrimsdetails(nameofpilgrims,tickettype,date,day,time,bookingnumber,ordernumber,email,amount,proofid,adharcardnumber,bookeddate,bookedtime,numberofperson)
                       {
                        this.Nameofpilgrim = nameofpilgrims,
                        this.Tickettype = tickettype,
                        this.Date = date,
                        this.Day = day,
                        this.Time = time,
                        this.Bookingnumber = bookingnumber,
                        this.OrderNumber = ordernumber,
                        this.Email = email,
                        this.Amount = amount,
                        this.Proofid = proofid,
                        this.Adharcardnumber = adharcardnumber,
                        this.Bookeddate = bookeddate,
                        this.Bookedtime = bookedtime,
                        this.Numberofperson = numberofperson
                        return(this.Nameofpilgrim)                     
                      } 
                                         
                }
lily.eventdetails = function(nameofdarshan,reportingtime,privilegetoseva,rate,numberoftickets,perslottickets,performancedate,performancetime)
                            {           
                             this.Nameofthedarshan = nameofdarshan,
                             this.Reportingtime = reportingtime,
                             this.Privligestoseva = privilegetoseva,
                             this.Rate = rate,
                             this.Nooftickets = numberoftickets,
                             this.Perslottickets = perslottickets,
                             this.Performancedate = performancedate,
                             this.Performancetime = performancetime
                            return(this.Nameofthedarshan)
                           }
var g = lily.eventdetails("Archana","5:00AM","one small laddoo","100 to 1000",4,1500,11012020,"6:00 AM")
console.log(g)
 var rst =lily.pilgrimsdetails("sinha","Special Entry Darshan","Dec 2nd","Tuesday","4:30AM","Is 25366226",762178278,"sharma@gmail.com",2360,"Pan card",772681234,98527,"12:23:50",4)           
 console.log(rst)                
//------------------------------------------------------------------------------------------------------------------------------------------------ 
 let addision = {
               mail(sender,receiver,maildate,mailtime,mailsubject,maildomain,signdomain)
                {
                 this.from = sender,
                 this.to = receiver,
                 this.date = maildate,
                 this.time = mailtime,
                 this.subject = mailsubject,
                 this.mailedby = maildomain,
                 this.signedby = signdomain
                },
                Display()
                {
                  console.log(this.from,this.to)
                }
               
            } 
  addision.mail("kasi.siva@gmail.com","venkatesh.db@gmail.com","fri,Nov 27,2015","12:05 AM","Requests to forward the Resumes","gamil.com","gmail.com")
   addision.Display()
//-----------------------------------------------------------------------------------------------------------------------------------------------------------              
 let eleanor = {
                 ProfileInfo(empname,empage,empgender,empemail,empid,empidcardnumber)
                 {
                   this.Name = empname,
                   this.Age = empage,
                   this.Gender = empgender,
                   this.EmailAddress = empemail,
                   this.PhotoIDCard = empid,
                   this.idcardnumber = empidcardnumber
                   
                   return(this.PhotoIDCard)
                 }
               }
    var proof = eleanor.ProfileInfo("JVT",5,"Male","info@jvtechnologies.co.in","voter id or Ration card",123456)
    console.log(proof)          
//Another way of creating method and returning data
//--------------------------------------------------------------------------------------------------------------------------------------------
let jagdish = {
              }
    jagdish.method = function(name,age,gender,emailid,id)
                     {
                       this.Name = name ,
                       this.Age = age,
                       this.Gender = gender,
                       this.email = emailid,
                       this.id = id
                       return(this.id)
                     }
  var link  =  jagdish.method("sukanya",10,"Female","sukanya@gmail.com",7627)
  console.log(link)            
//----------------------------------------------------------------------------------------------------------------------------------
let natalie = {
                ProfileDetails(ename,eage,egen)              //first method
                {
                  this.Name = ename,
                  this.Age = eage,
                  this.Gender = egen
                },
                Display()
                {
                  console.log(this.Name,this.Age,this.Email,this.Address,this.city,this.state)
                }
            }
    natalie.contactDetails = function(email,eaddress,ecity,estate,epin,ecountry,emobile,eid,eidnum)          //second method also belongs to the same class
                          {
                            this.Email = email,
                            this.Address = eaddress,
                            this.city = ecity,
                            this.state = estate,
                            this.Pincode = epin,
                            this.Country = ecountry,
                            this.MobileNumber = emobile,
                            this.Photoid = eid,
                            this.Photoidno = eidnum
                           }
  natalie.ProfileDetails("Mr. Venkatesh",25,"Male")
  natalie.contactDetails("venkatesh.db@gmail.com","BEML Main Road","Bangalore","Karnataka", 560075,"India", 99783526378,"Passport","G89975")
  natalie.Display()
//-------------------------------------------------------------------------------------------------------------------------------------
 // simple example of map data structure 
  let datastructure = new Map()          // Map data structure stores in the form of key value pair
      datastructure.set(1,623789)
      datastructure.set(2,571.36)
      datastructure.set(3,272.36)
      console.log(datastructure.get(2))
//---------------------------------------------------------------------------------------------------------------------------------------------
 //simple example of array data structure 
 let ar = [1,"shomya","charan","Patna","Bangalore",23]
 console.log(ar[1])
//----------------------------------------------------------------------------------------------------------------------------
//Now i want to print  the entire data
for(i = 0; i < ar.length; i++)
{
  console.log(ar[i])
}
//-------------------------------------------------------------------------------------------------------------------------
//Now i want to print the array in reverse order
let arr = [9,"charan","Intimetec","Independent",28,1]
for( i = arr.length-1; i>=0;i--)
{
  console.log(arr[i])
}
//-----------------------------------------------------------------------------------------------------------
let luna = {
                 Utilization : "3%",
                 outstanding(totaloutstanding,totalunbilled)
                 {
                   this.Total = totaloutstanding,
                   this.Unbilled = totalunbilled
                 },
                 LastPayableMade(lastpayableamount,lastpayabledate)
                 {
                    this.Amount = lastpayableamount,
                    this.Date = lastpayabledate
                 },
                 creditLimit(credit,availablecredit)
                 {
                   this.TotalCredit = credit,
                   this.AvailableCredit = availablecredit
                 },
                 cashLimit(cash,availablecash)
                 {
                   this.TotalCash = cash,
                   this.AvailableCash = availablecash
                   return(this.AvailableCash)
                 }
          }
 console.log(luna.Utilization)
luna.outstanding("Rs. 571.36","Rs. 0")
 luna.LastPayableMade("Rs. 360","11Jan2021")
luna.creditLimit("Rs. 18,000","Rs. 17,428.64")
 var cash = luna.cashLimit("Rs. 3,600","Rs. 3,600",)
 console.log(cash)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
let savannah = {
              ProfileInfo(lname,fname,mname,jobprofile,dob,city,country)
              {
                this.LastName = lname,
                this.FirstName = fname,
                this.MiddleName = mname,
                this.EmployeeType = jobprofile,
                this.DateOfBirth = dob,
                this.CityOfBirth = city,
                this.CivilianType = country
              },
              LicenseInfo(licnum,licstate,liccountry)
              {
                this.LicenseNumber = licnum,
                this.LicenseState = licstate,
                this.LicenseCountry = liccountry
                
                return(this.LicenseNumber)  // returning data from the method
             },
             DisplayDetails()
             {
              console.log(this.FirstName,this.MiddleName,this.LastName,this.LicenseState,this.LicenseCountry)
             }
        }
  savannah.ProfileInfo("Kumar","Pavan","Bijjavaram","Software Engineer","12-7-1992", "Rajampet","Around India")
var Lno = savannah.LicenseInfo("ka50201500006939","Karnataka","India")
console.log("Your License Number :" + Lno)
  savannah.DisplayDetails()
//--------------------------------------------------------------------------------------------------------------------------------------------------

 let brooklyn = {
                 AppearanceInfo()
                 {
                   this.Weight = 55,
                   this.Height = 5.8,
                   this.EyeColour = "Brown",
                   this.Gender = "Female"
                },
                ContactDetails()
                {
                  this.HomeAddress = "Rajampet,kadapa",
                  this.HomePhone = 975545445,
                  this.Mobile = 87462538918,
                  this.State = "Andhra Pradesh",
                  this.Country = "India"
               }
           }
       brooklyn.AppearanceInfo()
      brooklyn.ContactDetails()
//-------------------------------------------------------------------------------------------------------------
//Now Passing data while making method call                 
 let ajay = {
               AppearanceInfo(weight,height,eyecolour,gender)
                {
                  this.Weight = weight,
                  this.Height = height,
                  this.EyeColour = eyecolour,
                  this.Gender = gender
                },
                ContactDetails(homeaddress,homephone,mobile,state,country)
                {
                  this.HomeAddress = homeaddress,
                  this.HomePhone = homephone,
                  this.Mobile = mobile,
                  this.State = state,
                  this.Country = country
 
                  return(this.Mobile) 
                }
        }
  
  ajay.AppearanceInfo(60,7,"Black","Male")
 var mobnum = ajay.ContactDetails("Greater Noida,UttarPradesh",997243567,984716278,"Uttar Pradesh","India")
 console.log(mobnum)
 //--------------------------------------------------------------------------------------------------------------------------
 let leah = {
                systemspecification(rate,proc,randomaccessmemory,typeofsys,feature,devicename,devicedesc,windowversion,productid)
                {
                 this.Rating = rate,
                 this.Processor = proc,
                 this.RAM = randomaccessmemory,
                 this.SystemType = typeofsys,
                 this.PenAndTouch = feature,
                 this.ComputerName = devicename,
                 this.ComputerDescription = devicedesc,
                 this.WindowsEdition = windowversion,
                 this.WindowProductId = productid
                },
                
                upsspecification(devicemodel,inputvolt,frequency,outputvolt,typeofbattery,batterycapc,backup,time,weight)
                {
                 this.Model = devicemodel,
                 this.Ipvolatge = inputvolt,
                 this.Frequency = frequency,
                 this.Opvoltage = outputvolt,
                 this.BatteryType = typeofbattery,
                 this.BatteryCapacity = batterycapc,
                 this.BatteryBackup = backup,
                 this.RechargeTime = time,
                 this.Weight = weight
                },
                
                DisplayDeviceDetails()
                {
                  console.log(this.Processor,this.ComputerName,this.WindowProductId,this.Model)
                },
            }
 leah.systemspecification(4.5,"Intel Core i5-2450 CPU","4.00GB","64 bit operating system","No pen or touch input is available for this display","BALU-PC","WORKGROUP","Windows 7 ultimate","00426-OEM-8992662-00497")
 leah.upsspecification("Exide-digital 600","230v ac","50Hz","230v ac","Sealed Maintenance Free","12volt 7 Ah","12 to 20 mints","5 to 6 hours", "6.1 Kg")
 leah.DisplayDeviceDetails()
//------------------------------------------------------------------------------------------------------------------------------------------
 //Two different ways of writing methods. Both these methods belongs to the same class.
 
 let zoe = {
                 systemInfo(rate,proc,randomaccessmemory,typeofsys,feature,devicename,devicedesc,windowversion,productid)
                 {
                   this.Rating = rate,
                   this.Processor = proc,
                   this.RAM = randomaccessmemory,
                   this.SystemType = typeofsys,
                   this.PenAndTouch = feature,
                   this.ComputerName = devicename,
                   this.ComputerDescription = devicedesc,
                   this.WindowsEdition = windowversion,
                   this.ProductID = productid
                  }
              }
       zoe.upsInfo = function(devicemodel,inputvolt,frequency,outputvolt,typeofbattery,batterycapc,backup,time,weight)
                                {
                                  this.Model = devicemodel,
                                  this.BatteryCapacity = batterycapc,
                                  this.BatteryBackup = backup,
                                  this.Weight = weight
                                }                 
zoe.systemInfo(4.5,"Intel Core i5-2450 CPU","4.00GB","64 bit operating system","No pen or touch input is available for this display","BALU-PC","WORKGROUP","Windows 7 ultimate","00426-OEM-8992662-00497")
zoe.upsInfo("Exide-digital 600","230v ac","50Hz","230v ac","Sealed Maintenance Free","12volt 7 Ah","12 to 20 mints","5 to 6 hours", "6.1 Kg")
 //---------------------------------------------------------------------------------------------------------------------------------------------
 let stella = {
                   MultiplexInfo(theatrename,screen,moviename,moviecertification,clas,price,numberoftickets,seatnumbers,totalamount)
                   {
                     this.TheatreName = theatrename,
                     this.Screen = screen,
                     this.MovieName = moviename,
                     this.MovieCertification = moviecertification,
                     this.Clas = clas,
                     this.PricePerTicket = price,
                     this.NumberOfTickets = numberoftickets,
                     this.SeatNumbers = seatnumbers,
                     this.TotalAmount = totalamount
                   
                     return(this.TotalAmount)
                   }
                }
var price = stella.MultiplexInfo("PSS Multiplex","Screen 3","JVT[C,CPP]","u","first","Rs. 1050.00",5,"c1,c2,c3,c4,c5","Rs. 750")
console.log("Amount To Be Paid"+ price)  
//-------------------------------------------------------------------------------------------------------------------------------------------------------
 let hazel = {
                  ProfileInfo(fname,lname,user,dob,gender,mob,emailid)
                  {
                    this.FirstName = fname,
                    this.LastName = lname,
                    this.Username = user,
                    this.Birthday = dob,
                    this.Gender = gender,
                    this.Mobile = mob,
                    this.Email = emailid
                  },
                  CheckPassword(password,confirmpassword)
                  {
                    this.Password = password,
                    this.ConfirmPassword = confirmpassword
                    if(this.Password == this.ConfirmPassword)
                    {
                       return("Account Created")
                    }
                    else
                    {
                      return("Password and Confirm Password doesnot match")
                    }
                 }
              }   
 
       hazel.ProfileInfo("Venkatesh","db","jvt","2-6-1986","Male",9906399028,"venkatesh.db@gmail.com")
   var checking = hazel.CheckPassword("shomyacharan","shomyacharan")
   console.log(checking)
//----------------------------------------------------------------------------------------------------------------------------------------------- 
 let ellie = {
              BankDetails()
              {
               this.BankName = "SBI Bank",
               this.BranchName = "Bangalore Main Branch",
               this.Website = "www.statebankofindia.com"
              }
            }
    ellie.confidentialdetails = function()
                                {
                                  this.CardNumber = 7827998919289,
                                  this.TxnNumber = 2907,
                                  this.ResponseCode = 072,
                                  this.Withdrawl = "Rs. 500",
                                  this.FromAccount = 24367162357627,
                                  this.AvailableBalance = "Rs. 1000.00",
                                  this.Date = "29/05/14",
                                  this.Time = "19:48"
                                  return(this.AvailableBalance)
                                }
    ellie.Display = function()
                   {
                    console.log(this.CardNumber,this.TxnNumber,this.BankName,this.BranchName)
                   }
     
  ellie.BankDetails()
 var availbal = ellie.confidentialdetails()
 console.log("Available Balance:"+ availbal)            
 ellie.Display()  
//----------------------------------------------------------------------------------------------------------------------------------------------      
 //Passing Data while making a method call
 
 let paisley= {
               BankDetails(bankname,branchname,website)
               {
                 this.BankName = bankname,
                 this.BranchName = branchname,
                 this.Website = website
                 return(this.BankName)
               },
               ConfidentialDetails(cardnumber,txnnumber,responsecode,withdrawl,fromaccount,availablebalance,date,time)
               {
                this.CardNumber = cardnumber,
                this.TxnNumber = txnnumber,
                this.ResponseCode = responsecode,
                this.Withdrawl = withdrawl,
                this.FromAccount = fromaccount,
                this.AvailableBalance = availablebalance,
                this.Date = date,
                this.Time = time       
                return(this.CardNumber)
               }
              
            }
 var ret1 =  paisley.BankDetails("UCO Bank","Jaipur Main Branch","www.ucobank.com")
 var cnum = paisley.ConfidentialDetails(5372637287,3809,073,"Rs. 500",53626376298,"Rs. 200000","11/01/2021","20:48")
 console.log("Bank Name:"+ret1)
 console.log("Card Number:"+ cnum)
//--------------------------------------------------------------------------------------------------------------------------------
 //visitng card details
 let audrey = {
             }
   audrey.visitingcarddetails = function(holdername,holdermailid,holdermobnum,holdercompanyname,holderjobprofile,holderaddress,holdercity,holderpincode)
                               {
                                 this.Name = holdername,
                                 this.MailID = holdermailid,
                                 this.ContactNumber = holdermobnum,
                                 this.CompanyName = holdercompanyname,
                                 this.Designation = holderjobprofile,
                                 this.Address = holderaddress,
                                 this.city = holdercity,
                                 this.Pincode = holderpincode
                                 return(this.MailID)
                               }
  var mailid = audrey.visitingcarddetails("Naresh","naresh.jvt@gmail.com",8340381395,"JVT","Programmer","2nd floor hal 3rd stage","Bangalore",560075)
  console.log("Contact:"+mailid)
 //------------------------------------------------------------------------------------------------------------------------------ 
  let skylar = {
                 
                 NetBankingDetails(username,customernumber,status,paymentmode,bank,transactionid,paymentstate)
                 {
                  this.tnebusername = username,
                  this.ConsumerNumber = customernumber,
                  this.BillingStatus = status,
                  this.ModeOfPayment = paymentmode,
                  this.ChooseBank = bank,
                  this.TransactionNumber  = transactionid,
                  this.PaymentStatus = paymentstate
                 },
                 checkPassword(password,confirmpassword)
                 {
                   this.Password = password,
                   this.ConfirmPassword = confirmpassword
                   if(this.Password == this.ConfirmPassword)
                    {
                      return("Logged in")
                    }
                    else
                      {
                       return("Invalid credentials")
                      }
                 }
          }
  skylar.NetBankingDetails("Agilan",234566,"paid/unpaid","NetBanking","SBI","18cv182537892","Successful")
  var outcome = skylar.checkPassword(1234567,1234567)
  console.log(outcome)
//----------------------------------------------------------------------------------------------------------------------------------------
let violet = {
               orderDetails(productcompany,code,productcolour,productsize,fabric,occassion,design,sleevelength,neckstyle,fit,gender,cost,cashback)           //first method
               {
                this.Brand = productcompany,
                this.ProductCode = code,
                this.Colour = productcolour,
                this.Size =  productsize,
                this.Material = fabric,
                this.Occasion = occassion,
                this.Pattern = design,
                this.Sleeve = sleevelength,
                this.NeckType = neckstyle,
                this.Fit = fit,
                this.Gender = gender
                this.Price = cost,
                this.Cashback = cashback
                return(this.Cashback)
               
               },
               shippingDetails(arrival,address,email,phonenum)         //second method
               {
                 this.EstimatedArrival = arrival,
                 this.ShippingAddress = address,
                 this.EmailID = email,
                 this.ContactNumber = phonenum
               }
            }
var cash = violet.orderDetails("Scott International","APSCOTT=INTERNSWIT610835D77A441","Black","s","Cotton","Casual","Solid","Full Sleeves","Hooded", "Slim","Men","Rs. 824","Rs. 453")
console.log("You Got Cashback of"+ cash)
   violet.shippingDetails("9 Days","BTM Stage - 2","shomya@gmail.com",8340381395)
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//Another way of creating the above same class is as shown below.Both the methods will belong to the same class.Only way of writing is different.
let bella = {
                       orderDetails(productcompany,code,productcolour,productsize,fabric,occassion,design,sleevelength,neckstyle,fit,gender,cost,cashback)
                       {
                        this.Brand = productcompany,
                        this.ProductCode = code,
                        this.Colour = productcolour,
                        this.Size =  productsize,
                        this.Material = fabric,
                        this.Occasion = occassion,
                        this.Pattern = design,
                        this.Sleeve = sleevelength,
                        this.NeckType = neckstyle,
                        this.Fit = fit,
                       this.Gender = gender
                       this.Price = cost,
                      this.Cashback = cashback
                      return(this.Cashback)
                        }
                    }
  bella.shippingaddress = function(arrival,retpolicy,address,email,phonenum)
                                   {
                                     this.EstimatedArrival = arrival,
                                     this.ReturnPolicy = retpolicy,
                                     this.ShippingAddress = address,
                                     this.EmailID = email,
                                     this.ContactNumber =phonenum
                                     
                                   }
 var cback = bella.orderDetails("Scott International","APSCOTT=INTERNSWIT610835D77A441","Black","s","Cotton","Casual","Solid","Full Sleeves","Hooded", "Slim","Men","Rs. 824","Rs. 453")
 console.log("You Got a Cashback of:"+cback)
 bella.shippingaddress("7 Days","Seller will accept return within 15days from date of delivery","Jantha colony,Doddakannali","shomyacharan@gmail.com",7861263467)
 //---------------------------------------------------------------------------------------------------------------------------------------------
 let aurora = {
                 iphoneDetails(operatingsys,chip,cpu,gpu,model,manufacturer,processor,ram,keyboard,storage,flash,videocamera,recording,noisecancel,expandstorage)
                 {
                 this.OS = operatingsys,
                 this.Chipset = chip,
                 this.CPU = cpu,
                 this.GPU = gpu,
                 this.Model = model,
                 this.Manufacturer = manufacturer,
                 this.Processor = processor,
                 this.RAM = ram,
                 this.Keyboard = keyboard,
                 this.Storage = storage,
                 this.Flash = flash,
                 this.VideoCallCamera = videocamera,
                 this.VideoRecording = recording ,
                 this.NoiseCancelling = noisecancel,
                 this.ExpandableStorage = expandstorage
                 },
                 platformDetails(platformoperatingsys,platformchip,platformcpu,platformgpu)
                 {
                   this.PlatformOS = platformoperatingsys,
                   this.PlatformChipset = platformchip,
                   this.PlatformCPU = platformcpu,
                   this.PlatformGPU =  platformgpu
                 },
                 batteryDetails(battery,standby,talktime,music)
                 {
                   this.Battery = battery,
                   this.StandBy = standby,
                   this.TalkTime = talktime,
                   this.MusicPlay = music 
                 },
                 networkTechnology(tech)
                 {
                 this.Technology = tech
                 },
                 bodyDetails(dimen,weight,sim)
                 {
                   this.Dimensions = dimen,
                   this.Weight = weight,
                   this.Sim = sim
                 }
           }
aurora.iphoneDetails("iOS 9,upgradable to iOS 9.2","Apple A9","Dual core 1.84 GHz Twister","PowerVR GT7600(Six core graphics)","iphone","1 GHz","512 Mb","Software","16GB/32 Gb","LED","VGA","720 F","2 microphones", "No")
aurora.platformDetails("iOS 9","Apple A9","Dual-core 1.84 GHz Twister","PowerVR GT7600(Six core Graphics)")
aurora.batteryDetails("Non-removable", "Up to 240h(3G)","Up to 14h(3G)", "Up to 50 h")
aurora.networkTechnology("GSM/CDMA/HSPA/EVDO/LTE")
aurora.bodyDetails("138.3*67.1*7.1 mm","143 g","Nano -SIM")
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
let lucy = {
                        TVSpecification(model,led,size,type,hdmi,usb,videoservice,price)
                        {
                         this.TVModel = model,
                         this.LED = led,
                         this.Sizes = size,
                         this.TypeOf240Hz = type,
                         this.WirelessHDMI = hdmi,
                         this.USB = usb,
                         this.BulitInVideoService = videoservice,
                         this.Tvprice = price
                         return(this.Tvprice)
                        },
                        LaptopSpecification(model,laptopos,processor,ram,screensize,resolution,weight,storage,graphic,network,batterylife,cost)
                        {
                          this.LaptopModel = model,
                          this.OS = laptopos,
                          this.Processor = processor,
                          this.RAM = ram,
                          this.Screen = screensize,
                          this.Resolution = resolution,
                          this.Weight = weight,
                          this.Storage = storage,
                          this.Graphics = graphic,
                          this.Networking = network,
                          this.BatteryLife = batterylife,
                          this.LaptopCost = cost
                          return(this.LaptopCost)
                        }
                  }
 var Tvprice = lucy.TVSpecification("LG55LHX","Backlight w/Local Dimming","55 inches","Scanning Backlight","yes","USB 2.0","Youtube","Rs. 55000")
 console.log("Price of TV:"+Tvprice)
  var Laptopprice = lucy.LaptopSpecification("LGp430","Windows 7 home base","Second Generation Intel Core i3,i5 or i7 processor","Upto 8 GB","14.0 inch HD-LCD-backlit", "1366*768","4.28 pound","320 GB","Intel HD Graphics", 802.11,"6-cell Battery","Rs. 50000")
  console.log("Price of Laptop:"+Laptopprice)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
let anna = {
                      vehicleInfo(registerednum,dealer,classisnum,enginenum,vehicleclass,nameofmaker,cylinder,weight,wheel,seatingcap,fuel,cubic)
                      {
                        this.RegisterationNumber = registerednum,
                        this.Dealer = dealer,
                        this.ClassisNumber = classisnum,
                        this.EngineNumber = enginenum,
                        this.ClassOfVehicle = vehicleclass,
                        this.MakersName = nameofmaker,
                        this.NumberOfCyclinder = cylinder,
                        this.Weight = weight,
                        this.WheelBase = wheel,
                        this.SeatingCapacity = seatingcap,
                        this.Fuel = fuel,
                        this.CubicCylinder = cubic
                     },
                      LicenseInfo(licensevalidity,licfor,licstate,licprovidedon)
                      {
                        this.LicenseFor = licfor,
                        this.LicenseState = licstate,
                        this.LicenseProvidedOn = licprovidedon,
                        this.LicenseValidity = licensevalidity
                        if(this.LicenseValidity == "01/05/2032")
                        {
                           return("License will expire today")
                        }
                        else
                        {
                          return("License will expire on 01/05/2032")
                        }
                        
                      },
                      ownersInfo(name,relation,permaddress,tempaddress,dob)
                      {
                      this.OwnersName = name,
                      this.SonwifeorDaughter = relation,
                      this.PermanentAddress = permaddress,
                      this.TemporaryAddress = tempaddress,
                      this.DateOfBirth = dob
                      }
                   }
  anna.vehicleInfo("TN 22 CY2917","Murugan vehicles & services Limited",5793603,"0G3N72505757","LMC(CAR)","Maruti Suzuki India LTD",3,740,2360,5,"Petrol",796)
  anna.ownersInfo("Sachin","Srinivasan","Charan Cottage,Patna","Doddakannalli,Jantha colony","19/08/1998")
  var check = anna.LicenseInfo("01/05/2032","CAR","Karnataka","02/05/2012")
  console.log(check)
//----------------------------------------------------------------------------------------------------------------------------------
string = "Hello@shomya",             //making use of predefined split method
console.log(string.split("@"))
//---------------------------------------------------------------------------------------------------------------------------------------
let samantha = {
               }
    samantha.shippingDetails = function(firstname,lastname,pincode,address,landmark,city,state,country,phonenumber)
                               {
                                this.FirstName = firstname,
                                this.LastName = lastname,
                                this.Pincode = pincode,
                                this.Address = address,
                                this.Landmark = landmark,
                                this.City = city,
                                this.State = state,
                                this.Country = country,
                                this.PhoneNumber = phonenumber
                                }
 samantha.orderDetails = function(productid,productname,productauthor,idnumber,price)
                             {
                              this.ProductId = productid,
                              this.ProductName = productname,
                              this.ProductAuthor = productauthor,
                              this.IDNumber = idnumber,
                              this.Price = price
                              return(this.Price)
                             }
                            
  samantha.shippingDetails("shomya","charan",56005,"Jantha colony,Doddakannalli","Near shiv temple","Bangalore","Karnataka","India",834038673)
 var cost = samantha.orderDetails(12345634,"c programming","Dennis Ritchie","2008Ec027","Rs. 650")
 console.log("Amount to be paid:"+cost)
//------------------------------------------------------------------------------------------------------------------------------------------
let carolina = {
             BranchDetails(brcode,brname,braddress)
             {
               this.BranchCode = brcode,
               this.BranchName = brname,
               this.BranchAddress = braddress
             }
          }
   carolina.PolicyDetails = function(policyname,policynum,amount,doc,duedate,latefee,interest,total,nextduedate)
                        {
                          this.PolicyName = policyname,
                          this.PolicyNumber = policynum,
                          this.PremiumAmount = amount,
                          this.DOC = doc,
                          this.DueDate = duedate,
                          this.LateFees = latefee,
                          this.LoanInterest = interest,
                          this.Total = total,
                          this.NextDue = nextduedate                        
                        }
     carolina.Display = function()
                   {
                    console.log(this.PolicyName,this.PolicyNumber,this.PremiumAmount,this.DueDate,this.NextDue)
                   }
    carolina.BranchDetails(309,"Jeevan Beema Nigam","Fraser road,Patna,Bihar")
    carolina.PolicyDetails(" Jeevan Suraksha Plan", 364164915,"Rs. 6426.00","02/04/2009","04/13","Rs. 287.20","Due 00/0000 to 00/0000","Rs. 6713.20","04/2014")
     carolina.Display()
//-----------------------------------------------------------------------------------------------------------------------------------------
 let genesis = {
                   TicketDetails(trainid,pnr,trainnum,trainname,bookingdate,clas,quota,doj,from,to,boardingat,dateofboarding,reservationupto,scheduleddepart)
                   {
                    this.TransactionID = trainid,
                    this.PNRNumber = pnr,
                    this.TrainNumber = trainnum,
                    this.Name = trainname,
                    this.DateOfBooking = bookingdate,
                    this.Clas = clas,
                    this.Quota = quota,
                    this.DateOfJourney = doj,
                    this.From =from ,
                    this.To = to,
                    this.BoardingAt = boardingat,
                    this.DateOfBoarding = dateofboarding,
                    this.ReservationUpto = reservationupto,
                    this.scheduledDeparture = scheduleddepart
                   },
                   PassengerDetails(passengername,age,gender,birth)
                   {
                    this.FirstPassengerName = passengername,
                    this.FirstPassengerAge = age,
                    this.FirstPassengerGender = gender,
                    this.FirstPassengerBirth = birth
                  
                   },
                   
                   FareDetails(distance,tktfare,servicecharge,totalfare)
                   {
                   this.Distance = distance,
                   this.TicketFare = tktfare,
                   this.ServiceCharge = servicecharge,
                   this.TotalFare = totalfare
                   }
               }
     genesis.TicketDetails( 100000380284535, 4115023549,56213,"Tirupati passr","14-Dec-2015","Sleeper Class","GENERAL","04Jan2016","KJM","TPTY","KJM","04Jan2016","TPTY","21:00 Hrs")
     genesis.PassengerDetails("Venkatesh",27,"Male",7)
    genesis.FareDetails("323Km","Rs. 420.00","Rs. 22.90","Rs. 442.90")
//-------------------------------------------------------------------------------------------------------------------------------------------------------

     
     
