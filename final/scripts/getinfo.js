const myInfo = new URLSearchParams (window.location.search);
console.log (myInfo)
// personal
console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('organization-title'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));

// organization

console.log(myInfo.get('level'))

//  text

document.querySelector("#results").innerHTML = `
<h2><strong>${myInfo.get('first')}!! Thanks for your submission</strong></h2>
<p>It was succesfully submited</p>
<p><strong>${myInfo.get('first')} ${myInfo.get('last')}</strong> you are joining us</p>
<p> as a ${myInfo.get('level')}</P>

<p></p>
<h2>Additional info:</h2>
<p>Organization (club/workshop): ${myInfo.get('organizationName')}</p>
<p><strong>Contact information</strong></p>
<p>${myInfo.get('email')}</p>
<p>${myInfo.get('phone')}</p>

`