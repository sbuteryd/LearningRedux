const data = [
    { name: 'Tyler', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
    { name: 'Richard', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
    { name: 'Amanda', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
    { name: 'Andrew', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
    { name: 'David', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
    { name: 'Karl', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip','li'] }
];

const iceCreamTotals = data.reduce((accumulator, currentValue) => {
    currentValue.favoriteIceCreams.forEach((favorite) => {
        accumulator[favorite]= ((accumulator[favorite]||0)+1)
    })
    debugger
    return accumulator

}, {});


console.log(iceCreamTotals);