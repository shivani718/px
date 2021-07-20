

  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-EMCLD0J9SEPQ-2");

function login()
    {
        var userName=document.getElementById("username");
        var password=document.getElementById("password");
        if(userName.value=="admin" &&password.value =="admin")
        {
            location.href ="home.html";
        }
        else
        {
            alert("wrong username / password");
        }
    }
    
