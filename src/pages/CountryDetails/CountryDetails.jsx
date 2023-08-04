import { useParams } from "react-router-dom";
import { ButtonBack } from "./ButtonBack/ButtonBack";
import { Details } from "./Details/Details";
import "./style.scss";
import { useSelector } from "react-redux";
import { findCountry } from "../../selectors/country";
import { Error } from "../Error404";

export function CountryDetails() {
  const { name } = useParams();
  const country = useSelector((state) =>
    findCountry(state.countries.data, name)
  );

  return (
    <div className="countryDetails">
      {country ? (
        <>
          <ButtonBack />
          <Details {...country} />
        </>
      ) : <Error />}
    </div>
  );
}
