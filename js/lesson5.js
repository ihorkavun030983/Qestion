const userAge = +prompt('Enter your year of birth');
const numberYears = Number(2023 - userAge);
console.log('userAge', typeof userAge);
console.log('numberYears', typeof numberYears);


if (!parseInt(userAge)) {
    alert ('It is a pity that you did not want to enter your year of birth.');
    }

       
const userCityLive = prompt('What city are you from?');
let userLiveCapital



switch (userCityLive ) {
    case 'Kiev':
    case 'Kyiv':
        userLiveCapital= ('You live in the capital Ukraine.');
    break;
    case 'Washington':
        userLiveCapital = ('You live in the capital USA.');
    break; 
    case 'London':
        userLiveCapital = ('You live in the capital England.');
    break;
    default:
        userLiveCapital= ('You live in the city: '+userCityLive);
        if (!parseInt(userCityLive)) {
            alert ('It is a pity that you did not want to enter your city.');
            }  
}



const userFavoriteSport = prompt('What is your favorite sport?');
let kindOfSport


switch (userFavoriteSport) {
  
    case 'Football':
        kindOfSport = ( 'Congratulations! Do you want to be like Pele?');
    break;
    case 'Basketball':
        kindOfSport = ( 'Congratulations! Do you want to be like Michael Jordan?' );
    break; 
    case 'Formula One':
        kindOfSport = ( 'Congratulations! Do you want to be like Michael Schumacher?' );
    break;
    default:
        kindOfSport = ('You entered the wrong sport');

        if (!parseInt(userFavoriteSport)) {
    alert ('It is a pity that you did not want to enter your favorite sport.');
    }
}

alert( 'You are ' + numberYears + 'years ' + userLiveCapital + kindOfSport)
