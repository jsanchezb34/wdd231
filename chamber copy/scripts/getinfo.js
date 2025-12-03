const myInfo = new URLSearchParams (window.location.search);
console.log (myInfo)
// personal
console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('organization-title'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));

// organization

console.log(myInfo.get('level'));
console.log(myInfo.get('organizationName'));
console.log(myInfo.get('description'));

//  text

document.querySelector("#results").innerHTML = `
<h2><strong>Success!!</strong></h2>
<p><strong>Thanks for your application.</strong></p>
<p>It was succesfully submited</p>
<p>Application submited by: ${myInfo.get('first')} ${myInfo.get('last')} as ${myInfo.get('organization-title')}</p>
<p>of "${myInfo.get('organizationName')}"</p>
<p></p>
<h2>Additional info:</h2>
<p>Organization´s membership level: <strong>${myInfo.get('level')}</strong></p>
<p><strong>Contact information</strong></p>
<p>${myInfo.get('email')}</p>
<p>${myInfo.get('phone')}</p>

`