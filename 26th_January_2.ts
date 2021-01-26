class company
{   
    private companyname :string;
    private typeofcompany :string;
    private companylocation :string;
    constructor(company :string,companytype :string,location :string)
    {
      this.companyname = company;
      this.typeofcompany = companytype;
      this.companylocation = location;
    }
    display()
    {
  //    console.log("Company Name :"+this.companyname+"Type Of Company :"+this.typeofcompany);
    }
}
class employee extends company
{   
    private employeename :string;
    private employeelastname :string;
    private employeecompany :string;
    private employeeprofile :string;
    private employeeoffice :string;
    constructor(cmp :string,type :string,location :string,ename :string,elname :string,ecmp :string,eprofile :string,eoffice :string)
    {
       super(cmp,type,location);
       this.employeename = ename;
       this.employeelastname = elname;
       this.employeecompany = ecmp;
       this.employeeprofile = eprofile;
       this.employeeoffice = eoffice;
    }
    display()
    {
     super.display();
  //  console.log("Employee First Name :"+this.employeename+" Employee Last Name :"+this.employeelastname+"Employee Company :"+this.employeeoffice);
    }
}
let shyam = new employee("JVT","IT Company","Bangalore","shomya","charan","Intimetec","Trainee","Intimetec");
shyam.display();
//-----------------------------------------------------------------------------------------------------------
class employeedetail
{
    private employeename :string;
    private highestqualification :string;
    private dateofbirth :string;
    private itexperience :string;
    private reportingmanager :string
    private employeeskilset :string;
    constructor(empname :string,qualification :string,birthdate :string,experience :string,skillset :string,repmanager :string)
    {
      this.employeename = empname;
      this.highestqualification = qualification;
      this.dateofbirth = birthdate;
      this.itexperience = experience;
      this.reportingmanager = repmanager;
      this.employeeskilset = skillset;
    }
    display()
    {
   //    console.log("Employee Details :"+this.employeename+this.highestqualification+this.reportingmanager);
    }
}
class contactemployee extends employeedetail
{
    private employeeaddress :string;
    private residencenumber :number;
    private mobilenumber :number;
    private emailid :string;
    constructor(ename :string,degree :string,dob :string,it :string,skill :string,manager :string,address :string,resnum :number,mobnum :number,email :string)
    {
        super(ename,degree,dob,it,skill,manager)
        this.employeeaddress = address;
        this.residencenumber = resnum;
        this.mobilenumber = mobnum;
        this.emailid = email;
    }
    display()
    {
   //   console.log("Contact Details :"+this.employeeaddress+this.mobilenumber);
    }
}
let ram = new contactemployee("shomya charan","B.Tech","19/08/1998","1 year","c,cpp","venkatesh","Ground floor new thippasandra",0800345672,9900367097,"venkatesh.db@gmail.com");
    ram.display();
    //------------------------------------------------------------------------------------------------------
 class broadbandinfo
    {
        private accountnumber :number;
        private userid :number;
        private ipaddress :string;
        constructor(accnumber :number,usernumber :number,ipadd :string)
        {
          this.accountnumber = accnumber;
          this.userid = usernumber;
          this.ipaddress = ipadd;
        }
        display()
        {
       //   console.log("Account Info :"+this.accountnumber+this.userid+this.ipaddress);
        }
    }
       class netusageinfo extends broadbandinfo
    {
        private totalmbdownload :string;
        private mobiledownloadspeed :string;
        private mobileuploadspeed :string;
        constructor(accnum :number,uid :number,ip :string,totaldownload :string,downloadspeed :string,uploadspeed :string)
        {
          super(accnum,uid,ip);
          this.totalmbdownload = totaldownload;
          this.mobiledownloadspeed = downloadspeed;
          this.mobileuploadspeed = uploadspeed;
        }
        display()
        {
      //   console.log("Net Usage Info :"+this.totalmbdownload+this.mobiledownloadspeed+this.mobileuploadspeed);
        }
    }
    let karan = new netusageinfo(1135497,11128550,"10.245.97.123","21.26 GB","30.05 mbps","32.06 mbps");
        karan.display();
        //---------------------------------------------------------------------------------------------------
    class driverinfo
        {
            private driverlastname :string;
            private driverfirstname :string;
            private drivermiddlename :string;
            private driverprofile :string;
            private driverdob :string;
            private driverbirthplace :string;
            constructor(dlname :string,dfname :string,dmname :string,dprofile :string,ddob :string,dbirth :string)
            {
              this.driverlastname = dlname;
              this.driverfirstname = dfname;
              this.drivermiddlename = dmname;
              this.driverprofile = dprofile;
              this.driverdob = ddob;
              this.driverbirthplace = dbirth;
            }
            display()
            {
           //  console.log("Driver Details :"+"Driver Name :"+this.driverfirstname+this.drivermiddlename+this.driverlastname);
            }
        }
    class licenseinfo extends driverinfo
      {
            private licensenumber :string;
            private licensestate :string;
            private licensecountry :string;
            constructor(lname :string,fname :string,mname :string,profile :string,dob :string,birth :string,licnum :string,licstate :string,country :string)
            {
               super(lname,fname,mname,profile,dob,birth);
               this.licensenumber = licnum;
               this.licensestate = licstate;
               this.licensecountry = country;
            }
            display()
            {
               super.display();
           //   console.log("License Details :"+"License Number :"+this.licensenumber +"License State :"+this.licensestate+"License Country :"+this.licensecountry);
            }
        }
        let ajay = new licenseinfo("Kumar","Pavan","Bijjavaram","software engineer","12-07-1972","rajampet","ka50201500006939","Karnataka","India");
            ajay.display();
            //-----------------------------------------------------------------------------------------------
        class branchdetail
            {
                private bankname :string;
                private bankaddress :string;
                private branchname :string;
                private bankwebsite :string;
                constructor(banknm :string,banklocation :string,brhname :string,bkwebsite :string)
                {
                  this.bankname = banknm;
                  this.bankaddress = banklocation;
                  this.branchname = brhname;
                  this.bankwebsite = bkwebsite;
                }
                display()
                {
                 console.log("Branch Detail :");
                 console.log("Bank Name :"+this.bankname+" Bank Address :"+this.bankaddress+" Branch Name :"+this.branchname);
                }
            }
            class bankstatementdetails extends branchdetail
            {
                private atmnumber :string;
                private cardnumber :number;
                private transactionnumber :number;
                private responsecode :number;
                private withdrawl :number;
                private availablebalance :number;
                constructor(bank :string,bankadd :string,brname :string,website :string,atm :string,cardnum :number,txnnum :number,rescode :number,withdraw :number,balance :number)
                {
                  super(bank,bankadd,brname,website);
                  this.atmnumber = atm;
                  this.cardnumber = cardnum;
                  this.transactionnumber = txnnum;
                  this.responsecode = rescode;
                  this.withdrawl = withdraw;
                  this.availablebalance = balance;
                }
                display()
                {
                  super.display();
                 console.log("Bank Statement Details :");
                 console.log("ATM Number :"+this.atmnumber+" Card Number :"+this.cardnumber+"Cash Withdrawl :"+this.withdrawl+" Available Balance :"+this.availablebalance);
                }
            }
            let vinay = new bankstatementdetails("SBI Bank","Jantha Colony,Doddakannalli","Bangalore Main Branch","www.statebankofindia.com","SJNBL48",72572182788,2907,72,500,1000);
                vinay.display();
//----------------------------------------------------------------------------------
        class policyholderdetail
        {
            private policyholderfirstname :string;
            private policyholderlastname :string;
            private policyholderaddress :string;
            private holderemailid :string;
            private policyholderdesignation :string;
            constructor(firstname :string,lastname :string,holderaddress :string,emailid :string,designation :string)
            {
              this.policyholderfirstname = firstname;
              this.policyholderlastname = lastname;
              this.policyholderaddress = holderaddress;
              this.holderemailid = emailid;
              this.policyholderdesignation = designation;
            }
            display()
            {
              console.log("Policy Holder Details :");
              console.log("Policy Holder Name :"+this.policyholderfirstname+this.policyholderlastname);
            }
        }
        class policydetails extends policyholderdetail
        {
            private proposalnumber :number;
            private policystartingdate :string;
            private policymaturedate :string;
            constructor(fname :string,lname :string,address :string,email :string,profile :string,polnumber :number,proposalnum :number,policystartdate :string,policyenddate :string)
            {
              super(fname,lname,address,email,profile);
              this.proposalnumber = proposalnum;
              this.policystartingdate = policystartdate;
              this.policymaturedate = policyenddate;
            }
            display()
            {
             console.log("Policy Details :");
             console.log("Proposal Number :"+this.proposalnumber+"Policy start date :"+this.policystartingdate+"Policy Mature Date:"+this.policymaturedate);
            }
        }
        let anny = new policydetails("Shomya","charan","jantha colony,dodakkanlai","shomya@gmail.com","software engineer",99483929302939,110726378297,"14/07/2011","13/07/2012");
            anny.display();