// 1. Get all the countries from Asia continent/region using Filter method
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
    const asianCountries = countries.filter(country => country.region === "Asia");
    console.log("Asian Countries:", asianCountries);
  })
  .catch(error => console.error("Error fetching data:", error));

// 2. Get all the countries with a population of less than 2 lakhs (200,000) using Filter method
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
    const lowPopulationCountries = countries.filter(country => country.population < 200000);
    console.log("Low Population Countries:", lowPopulationCountries);
  })
  .catch(error => console.error("Error fetching data:", error));

// 3. Print the following details name, capital, flag, using forEach method
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
    console.log("Country Details:");
    countries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    });
  })
  .catch(error => console.error("Error fetching data:", error));

// 4. Print the total population of countries using reduce method
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
    const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
    console.log("Total Population:", totalPopulation);
  })
  .catch(error => console.error("Error fetching data:", error));

// 5. Print the country that uses US dollars as currency.
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
    const usDollarCountry = countries.find(country => country.currencies && country.currencies.USD);
    if (usDollarCountry) {
      console.log(`Country that uses US dollars: ${usDollarCountry.name.common}`);
    } else {
      console.log("No country uses US dollars as currency.");
    }
  })
  .catch(error => console.error("Error fetching data:", error));
