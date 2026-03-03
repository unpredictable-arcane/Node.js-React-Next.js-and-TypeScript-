const name = 'Anuj';
let age = 19;
const hasHobbies = true;

age = 10;
// name = Nikita
// hasHobbies = false.... Cuz it is a const variable

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
