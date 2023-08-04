export function findCountry(countries, searchedName) {
  if (countries?.length > 0) {
    const country = countries?.find((testedCountry) => {
      return testedCountry.name.common === searchedName;
    });
    return country;
  }
}
