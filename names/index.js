const getFirstNames = require("./../utilities/utils/index");
const data = require("./../country/state/city/index");

const getPeopleInCity = (data) => {
  let firstName = getFirstNames(data);
  return firstName;
};

module.exports = getPeopleInCity;
console.log(getPeopleInCity(data));
