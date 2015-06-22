var Obama = {
    firstName: 'Barack',
    lastName: 'Obama',
    termLength: 'two terms',
    party: 'democrat',
    yearsofPresidency: 'seven',
};

var Bush = {
    firstName: 'George W.',
    lastName: 'Bush',
    termLength: 'two terms',
    party: 'republican',
    yearsofPresidency: 'eight',
};

var Clinton = {
    firstName: 'Bill',
    lastName: 'Clinton',
    termLength: 'two terms',
    party: 'democrat',
    yearsofPresidency: 'eight',
};

var BushSr = {
    firstName: 'George H.W',
    lastName: 'Bush',
    termLength: 'one terms',
    party: 'republican',
    yearsofPresidency: 'four',
};

var Reagan = {
    firstName: 'Ronald',
    lastName: 'Reagan',
    termLength: 'two terms',
    party: 'republican',
    yearsofPresidency: 'eight',
};

var presidents = [
    Obama,
    Bush,
    Clinton,
    BushSr,
    Reagan,
];

console.log( presidents[2].firstName + ' ' + presidents[2].lastName );
