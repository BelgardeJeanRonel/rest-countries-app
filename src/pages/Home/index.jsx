// import logo from './logo.svg';
import { Countries } from "../../components/Countries";
import { Field } from "../../components/Field";
import { Filter } from "../../components/Filter";
import "./style.scss";
import { useFetchingCountries } from "../../utils/hooks/useFetchingCountries";

export function Home() {
  useFetchingCountries();

  return (
    <div className="Home">
      <div className="container-inputs">
        <Field />
        <Filter />
      </div>

      <Countries />
    </div>
  );
}
