
// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"/>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/enc-base64.min.js"/>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/hmac-sha256.min.js"></script>

// (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
//      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
//     var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
//     var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
//   })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-EMCLD0J9SEPQ-2");

// segment
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="javWjpX2qUqY94GDjEB4FSXB8Y1gd6RK";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("javWjpX2qUqY94GDjEB4FSXB8Y1gd6RK");
  analytics.page();
  }}();

var idforhash = username.substr(6, 5);
var hashUserId = String(CryptoJS.HmacSHA256(idforhash, "oceNJBXdda80ZBLaggCrza0af2GNwddQm3HX5GMur"));

  if(username!=""){
        if((username=="vinesh.gandhe@gmail.com" || username=="gvk7663@gmail.com" || username=="vgande@gainsight.com"||username=="demouser7663@gmail.com" || username=="scheemala@gainsight.com" || username=="shivanicheemala99@gmail.com")&& password=="user" )
        {
            b = username.substr(6, 5);

             
  analytics.identify(b, {
  name: "Peter Gibbons",
  email: "scheemala@gainsightcom",
  plan: "premium",
  logins: 5,
  userHash: hashUserId
    
});
        }
  }
// {
//   "type": "identify",
//   "traits": {
//     "name": "Peter Gibbons",
//     "email": "scheemala@gainsight.com",
//     "plan": "premium",
//     "logins": 5
//   },
//   "userId": b,
//   "userHash": hashUserId
// }
//testing HMAC option



//iframe
// function initializeGainsightPX() 
// {
//     if (this.isGainsightPXInitialized) return;
    
//     // Gainsight PX Tag
//     (function (n, t, a, e, x) {   
//         let i = "aptrinsic"; n[i] = n[i] || function () {
//             (n[i].q = n[i].q || []).push(arguments)
//         }, 
//         n[i].p = e, n[i].c = x;
        
//         let r = t.createElement("script");
//         r.async = !0;
//         r.src = a + "?a=" + e;        
        
//         let c = t.getElementsByTagName("script")[0];
//         c.parentNode.insertBefore(r, c);
//     })
//     (window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-EMCLD0J9SEPQ-2",{ "iframeModeEnabled": false });
//     // End Gainsight PX Tag    
    
//     this.isGainsightPXInitialized = true;
// }


// static file load of aptrinsic.js file

// (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
//     (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
//   var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
//   var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
// })(window,document,"https://vineshgvk.github.io/Basic_Website/aptrinsic.js","AP-K0EYK7ZWBNRU-2",config);



//   iframe tag configure---start

// function initializeGainsightPX() 
// {
//     if (this.isGainsightPXInitialized) return;
    
//     // Gainsight PX Tag
//     (function (n, t, a, e, x) {   
//         let i = "aptrinsic"; n[i] = n[i] || function () {
//             (n[i].q = n[i].q || []).push(arguments)
//         }, 
//         n[i].p = e, n[i].c = x;
        
//         let r = t.createElement("script");
//         r.async = !0;
//         r.src = a + "?a=" + e;        
        
//         let c = t.getElementsByTagName("script")[0];
//         c.parentNode.insertBefore(r, c);
//     })
//     (window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-K0EYK7ZWBNRU-2",{ "iframeModeEnabled": false });
//     // End Gainsight PX Tag    
    
//     this.isGainsightPXInitialized = true;
// }
// initializeGainsightPX();

//   iframe tag configure---end


// function validate(username)
// {
// var username=document.getElementById("username").value;
// var password=document.getElementById("password").value;
//     const myaccount = {
//         a1: "PX_Company-1",
//         a2: "PX_Company-2",
//         a3: "PX_Company-3",
//         a4: "PX_Company-4"

//     }

//     if(username!=""){
//         if((username=="vinesh.gandhe@gmail.com" || username=="gvk7663@gmail.com" || username=="vgande@gainsight.com"||username=="demouser7663@gmail.com" || username=="scheemala@gainsight.com" || username=="shivanicheemala99@gmail.com")&& password=="user" )
//         {
//             alert("valid user");
//             b = username.substr(6, 5);
//             var id = b;
// //               var attrib_value= document.getElementById("myCheck").checked;
//             if (username=="vinesh.gandhe@gmail.com") {
//                     aptrinsic('identify', {
//                             //User Fields
//                             "id": id, // Required for logged in app users
//                             "email": username,
//                             "gender": "male",
// //                             "useractive" :attrib_value,
// //                             "checkattrib":attrib_value,
//                             "customtest":"{working:yes,default:no,license:free}",
                            

//                             // "userHash": hash.toString()// optional transient for HMAC identification
//                         },

//                         {
//                             //Account Fields
//                             "id": myaccount.a4, //Required
//                             "name": myaccount.a4,
//                             // flat custom attributes
//                         },
                        
//                         );
//                 } else if (username=="gvk7663@gmail.com") {
//                     aptrinsic('identify', {
//                             //User Fields
//                             "id": id, // Required for logged in app users
//                             "email": username

//                             // "userHash": hash.toString()// optional transient for HMAC identification
//                         },

//                         {
//                             //Account Fields
//                             "id": myaccount.a3, //Required
//                             "name": myaccount.a3,
//                             // flat custom attributes
//                         });
//                 } else if (username=="vgande@gainsight.com") {
//                     aptrinsic('identify', {
//                             //User Fields
//                             "id": id, // Required for logged in app users
//                             "email": username

//                             // "userHash": hash.toString()// optional transient for HMAC identification
//                         },

//                         {
//                             //Account Fields
//                             "id": myaccount.a2, //Required
//                             "name": myaccount.a2,
//                             // flat custom attributes
//                         });
//                 } else {
//                     aptrinsic('identify', {
//                             //User Fields
//                             "id": id, // Required for logged in app users
//                             "email": username

//                             // "userHash": hash.toString()// optional transient for HMAC identification
//                         },

//                         {
//                             //Account Fields
//                             "id": myaccount.a1, //Required
//                             "name": myaccount.a1,
//                             // flat custom attributes
//                         });
//                 }

//             alert("Logged in user id :" + b);
//             //window.open("/HTML/home.html");
//             window.location = "https://shivani718.github.io/px/home.html";
      
//             return false;

//         }
//         else
//         {
//             alert("login failed");
//         }
//     }
//         else{
//             alert("enter 'demouser7663@gmail.com'");
//         }


// }
//to clear the cookies after logout
function deleteAllCookies() {
    window.aptrinsic('reset');
    counter = 0;
}

// var Productname = "T.V";
// var Productbrand = "Panasonic";
// var Productprice = 90000;
// var transactionStatus = "Success";


// let purchaseinitiated = new CustomEvent('purchaseinitiated', {
//     detail: {
//         itemName: this.Productname,
//         itemBrand: this.Productbrand
//     }
// })
// let transactionsuccess = new CustomEvent('transactionsuccess', {
//     detail: {
//         Amountdeducted: this.Productprice,
//         Paymentstatus: this.transactionStatus
//     }
// })
// document.addEventListener('DOMContentLoaded', function () {
//     let m = document.getElementById('paymentbtn');
//     addButton(m);
//     m.addEventListener('click', function (ev) {

//         addPaymentStatus(m);
//     });

// });

// function addButton(parent) {
//     let b = document.createElement('button');
//     b.setAttribute("id", "Buynow");
//     b.setAttribute("class", "btn btn-primary");
//     b.textContent = "Make Payment";
//     parent.appendChild(b);
//     return b;
// }

// function addPaymentStatus(parent) {
//     let p = document.createElement('p');
//     p.textContent = "Your Transaction is being Proccessed.....";
//     p.setAttribute("id", "tStatus");
//     parent.appendChild(p);
//     p.addEventListener('purchaseinitiated', purchasedone);
//     p.dispatchEvent(purchaseinitiated);
//     setTimeout(printreciept, 2000);


// }
// function purchasedone(ev) {

//     console.log(ev.type, ev.detail);
//     // Write your PX code here to track the custom events 
//     aptrinsic('track', 'purchaseinitiated', {
//         itemName: ev.detail.itemName,
//         itemBrand: ev.detail.itemBrand
//     });
// }

// function printreciept() {
//     var p1 = document.getElementById("tStatus");
//     document.addEventListener('transactionsuccess', transactiondone);
//     document.dispatchEvent(transactionsuccess);
//     p1.textContent = "Transaction Success";

// }


// function transactiondone(ev1) {

//     console.log(ev1.type, ev1.detail);
//     // Write your PX code here to track the custom events
//     aptrinsic('track', 'transactionsuccess', {
//         Amountdeducted: ev1.detail.Amountdeducted,
//         Paymentstatus: ev1.detail.Paymentstatus
//     });
// }

