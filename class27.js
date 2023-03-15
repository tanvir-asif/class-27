// array sort

const friends = ['toki', 'shoaib', 'pavel', 'asif'];
const friendsSort = friends.sort();
const friendsReverse = friendsSort.reverse();
console.log(friendsReverse);

const bigNumber = [154, 146, 4, 142, 189, 825, 24, 62, 255, 865, 455];
const bigNumberSort = bigNumber.sort(function (a, b) {
    return a - b;
});
const bigNumberReverse = bigNumberSort.reverse();
console.log(bigNumberSort);



// try catch

const name = 'komra'
try {
    name = 'tomato';
} catch (error) {
    console.log('we get a error now', error);
}
console.log(name);

// arguments


function addAllNumber(num1, num2) {
    let total = 0;
    for (const number of arguments) {
        total +=number;
    }
    return total;
}
const total = addAllNumber(54, 126, 144, 15, 25, 654, 894, 62, 89, 47, 14, 522, 955, 85, 21, 621, 52, 561, 52, 896, 24, 44, 512, 471);
console.log(total);

// date

const myDate = new Date('2002-02-19');
console.log(myDate);

const anotherDate = new Date(2022, 12, 14, 11, 25, 33);
console.log(anotherDate);

if (myDate.getTime() < anotherDate.getTime()) {
    console.log('my fav time is earlier');
}