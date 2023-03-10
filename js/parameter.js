const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);

const phone = urlParams.get('phone');

console.log("phone:", phone);
document.write("phone : ", phone);