/* Q21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

interface CountryName {
    name: string;
    capital: string;
}

let countryList: CountryName[] = [
    { name: "Afghanistan", capital: "Kabul"},
    { name: "Albania", capital: "Tirana" },
    { name: "Algeria", capital: "Algiers" },
    { name: "Andorra", capital: "Andorra la Vella" },
    { name: "Angola", capital: "Luanda" },
    { name: "Anguilla", capital: "The Valley" },
    { name: "Antigua and Barbuda", capital: "St. John's" },
    { name: "Argentina", capital: "Buenos Aires" },
  ];

  console.log(countryList);