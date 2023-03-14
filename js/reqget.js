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
fetch(`API URL`, {
   headers: {
      'Accept': 'application/json'
   }
})
   .then(response => response.text())
   .then(text => console.log(text))
//------------------------------------------------//




//------------------------------------------//
//     Copyright By Siam Rahman - 2023      //
//------------------------------------------//
