import { useSelector, useStore } from "react-redux";
import { Country } from "../Country";
import "./style.scss";

function getCountries(countries, region) {
  if (countries?.length > 0) {
    if (region === "" || region === "Filter by Region") {
      return countries;
    }

    return countries?.filter((country) => region === country.region);
  }
}

export function Countries() {
  const countries = useSelector((state) => state.countries);
  const inputValue = useSelector((state) => state.inputCountrie);
  const currentRegion = useSelector((state) => state.regionValue);
  const theme = useSelector((state) => state.theme);

  const countriesData = getCountries(countries.data, currentRegion);

  const filteredCountries =
    countriesData?.length > 0 &&
    countriesData.filter((country) => {
      if (
        country.name.common.toUpperCase().indexOf(inputValue.toUpperCase()) !==
        -1
      ) {
        return country;
      }
    });

  return (
    <>
      {filteredCountries?.length == 0 && (
        <div className={theme === "dark" ? "notFound dark-mode" : "notFound"}>Country not found!</div>
      )}
      <div className="countries">
        {filteredCountries?.length > 0 &&
          filteredCountries.map((country) => (
            <Country key={country.name.common} {...country} />
          ))}
      </div>
    </>
  );
}
