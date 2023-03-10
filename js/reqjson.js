// AUTHOR : SIAM RAHMAN 

// WRITTEN WITH JAVASCRIPT/HTML

// LAST MODIFY : 10 MARCH

// GITHUB : https://github.com/siamrahman000

// -----------------------------------------------//
//          PHONE NUMBER PARAMETER                //
//------------------------------------------------//
//       THIS METHOD MADE BY SIAM RAHMAN          //
//------------------------------------------------//
const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);
const phone = urlParams.get('phone');
console.log("phone:", phone);
document.write("phone : ", phone);
//----------------------------------------------------------//
//     USE THIS STRING TO GET DATA NUMBER => ${phone}       //
//----------------------------------------------------------//

// -------------- URL / DATA ZONE --------------//
const data = { username: `+88${phone}` };
//----------------------------------------------//
//---------------REQUESTS ZONE------------------//
fetch("https://api.eat-z.com/auth/customer/signin", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
//------------------------------------------------//




//------------------------------------------//
//     Copyright By Siam Rahman - 2023      //
//------------------------------------------//