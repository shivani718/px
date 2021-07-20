

  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-EMCLD0J9SEPQ-2");

function login()
    {
        var username=document.getElementById("username").value;
        var password=document.getElementById("password").value;
      const myaccount = {
        a1: "PX_Company-1",
        a2: "PX_Company-2",
        a3: "PX_Company-3",
        a4: "PX_Company-4"

    }
        if(username=="shivani.reddy00@gmail.com"||username=="shivanicheemala99@gmail.com" &&password=="admin")
        {
          b = username.substr(8, 6);
            var id = b;
        if(username=="shivani.reddy00@gmail.com"){
          
         //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": id, // Required for logged in app users
    "email": username,
  },
  {
  //Account Fields
    "id": myaccount.a4, //Required
    "name": myaccount.a4,
 });
        }else if(username=="shivanicheemala99@gmail.com"){
          
         //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": id, // Required for logged in app users
    "email": username,
  },
  {
  //Account Fields
    "id": myaccount.a3, //Required
    "name": myaccount.a3,
 });
        }
        // location.href ="home.html";
        }
        else
        {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": username

                            // "userHash": hash.toString()// optional transient for HMAC identification
                        },

                        {
                            //Account Fields
                            "id": myaccount.a1, //Required
                            "name": myaccount.a1,
                            // flat custom attributes
                        });
                }

            alert("Logged in user id :" + b);
            //window.open("/HTML/home.html");
            window.location = "https://shivani718.github.io/px/home.html";
      
            return false;
    }
    
function deleteAllCookies() {
    window.aptrinsic('reset');
    counter = 0;
}
