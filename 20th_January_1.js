
class Broadband
{
      BroadbandInfo(AccountNumber,AccountUserId)
       {
          this.IPAddress = "12.124.47.323"
          document.writeln("IPAddress :"+ this.IPAddress) 
          return this.IPAddress;
        }
   NetConsumptionInfo(TotalMBDownloaded,Mobiledownloadspeed,Mobileuploadspeed )
  {
   this.TotalMBDownloaded = TotalMBDownloaded
   this.MobileDownloadSpeed = Mobiledownloadspeed
   this.MobileUploadSpeed = Mobileuploadspeed
    if(this.TotalMBDownloaded >= 200 )
    {
       document.writeln("Your TotalMBDownloaded has exceeded the limit");
    }
    else
    {
      this.remaining = 200 - this.TotalMBDownloaded
        document.writeln("Your remaining MBDownloads is :"+ this.remaining)
    }
    if(this.MobileDownloadSpeed < 22)
    {
        document.writeln("You have an unstable internet connection");
    }
    else
    {
        document.writeln("strong Mobile download speed")
    }  
    if(this.MobileUploadSpeed >7)  
    {
           document.writeln("Strong connection")
    }
    else
    {
           document.writeln("Poor Internet Connection")
    }
  }
}
let lydia = new Broadband();
var ress = lydia.BroadbandInfo(12436,634747)
document.writeln("IP Addres" + ress)
 lydia.NetConsumptionInfo(21,30,32)
//------------------------------------------------------------------------------------------------------------------ 
class eventdetails
{
         concert(BookingNumber)
         {
           this.BookingNumber = BookingNumber
           if(this.BookingNumber == "IS151110080016")
             {
              document.writeln("Your Booking has been made.")
              aubree.concertDetails()
              aubree.visitorDetails()
             }
           else
            {
              document.writeln("Your Ticket has not been booked");
            }
       }
 
               concertDetails()
                {
                   this.Date = "Dec 1st";
                   this.Day  = "Tuesday";
                   this.Time  = "3:30 AM";
                   this.NumberOfPerson  = 1;
                   this.NameOfSeva = "Archana";
                  this.Privilges = "Two Small Laddu";
                  document.writeln("Date :"+this.Date, "Day :"+ this.Day,"Name Of Seva :"+this.NameOfSeva);
                 }
             visitorDetails()
                {
                   this.VisitorName  = "venkatesh";
                   this.TicketType  = "Special Entry Ticlet";
                   this.ReportingTime  = "11:36:46";
                   this.EmailId = "venkatesh.db@gmail.com";
                  document.writeln("EmailID :"+ this.EmailId);
               }
}
let aubree = new eventdetails()
aubree.concert("IS151110080016")
//------------------------------------------------------------------------------------------------------------------------
class Mail
{
       MailFrom(senderid )
        {
         this.senderid = senderid
         if(this.senderid == "kasi.sivap@gmail.com")
          {
           arianna.MailTo("venkatesh.db@gmail.com");
          }
       else
         {
          document.writeln("Not Authorized to send mail");
         }
       }
        MailTo(receiverid)
         {
         this.receiverid = receiverid
         document.writeln("Mail successfully sent to " +this.receiverid)
        }     
}
let arianna = new Mail()
arianna.MailFrom("kasi.sivap@gmail.com")
//-----------------------------------------------------------------------------------------------------------------------------
class checkcredit
{
             creditcard(creditnum )
              {
               this.creditnum = creditnum
               if(this.creditnum == 61524376263782 )
                 {
                    this.outstandvalue = elian.outstanding();
                    this.minimumval =   elian.minimum();
                    document.writeln(this.outstandvalue);
                    document.writeln(this.minimumval);
                 }
             else
              {
                document.writeln("Invalid Credit card number");
              }
           }
             outstanding()
              {
                this.outstandingvalue = 571.36;
                return this.outstandingvalue;
              }
             minimum()
              {
               this.minimumbalance = 272.36;
               return this.minimumbalance
              }
}
let elian = new checkcredit()
    elian.creditcard(61524376263782)
    elian.creditcard(15263787365243)
//------------------------------------------------------------------------------------------------------------------------------------------
class creditdetails
{
      creditcardverification(crenumber)
       {
        this.crenumber = crenumber
         if(this.crenumber == 62627382738)
           {
            this.utilization= 3;
            melanie.showoutstanding(571.36,0);
            melanie.showlastpaymentmade(300,"11Jan2021");
            melanie.showcreditlimit(18000,17428.64);
            this.balance = melanie.showlimit(3600,3600);
            document.writeln("Available Cash" + this.balance);
          }
        else
         {
          document.writeln("Invalid Credentials");
         }
       }
    showoutstanding(TotalOutstanding , unbilled)
    {  
    this.TotalOutstanding = TotalOutstanding
    this.unbilled = unbilled
    document.writeln("Total Outstanding :"+ this.TotalOutstanding);   
    document.writeln("Unbilled "+ this.unbilled);
   }
    showlastpaymentmade(lastamountmade, PaymentMadeOn )
     {
       this.lastamountmade = lastamountmade
       this.PaymentMadeon = PaymentMadeOn
       document.writeln("Last Payment made on "+this.PaymentMadeon)
       document.writeln("Last Amount Made"+ this.lastamountmade);
     }
     showcreditlimit(TotalCredit, Availcred)
      {
         this.TotalCredit = TotalCredit
         this.Availcred = Availcred
         if(this.TotalCredit > 20000)
          {
             document.writeln("Credit Limit Exhausted");
          }
        else
         {
           this.rem  = 20000 - this.TotalCredit;
          document.writeln("Left over Credits "+ this.rem);
        }
      }
     showlimit(totalcash, cashavailable )
      {    
         this.totalcash= totalcash
         this.cashavailable = cashavailable
         return this.cashavailable;
      }
}
let melanie = new creditdetails()
    melanie.creditcardverification(62627382738)
    melanie.creditcardverification(35362736273)


