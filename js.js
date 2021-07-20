

  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-EMCLD0J9SEPQ-2");

function login()
    {
        var userName=document.getElementById("username").value;
        var password=document.getElementById("password").value;
      const myaccount = {
        a1: "PX_Company-1",
        a2: "PX_Company-2",
        a3: "PX_Company-3",
        a4: "PX_Company-4"

    }
        if(userName=="shivani.reddy00@gmail.com"||userName=="shivanicheemala99@gmail.com" &&password=="admin")
        {
          b = username.substr(8, 6);
            var id = b;
        if(userName=="shivani.reddy00@gmail.com"){
          
         //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": id // Required for logged in app users
    "email": userName
  },
  {
  //Account Fields
    "id": myaccount.a4, //Required
    "name": myaccount.a4,
 });
        }else if((userName=="shivanicheemala99@gmail.com"){
          
         //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": id // Required for logged in app users
    "email": userName
  },
  {
  //Account Fields
    "id": myaccount.a3, //Required
    "name": myaccount.a3,
 });
        }
         location.href ="home.html";
        }
        else
        {
            alert("wrong username / password");
        }
    }
    
