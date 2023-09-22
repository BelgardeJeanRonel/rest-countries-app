// import logo from './logo.svg';
import { Countries } from "../../components/Countries";
import { Field } from "../../components/Field";
import { Filter } from "../../components/Filter";
import "./style.scss";
import { useFetchingCountries } from "../../utils/hooks/useFetchingCountries";
import { scrollToTop } from "../../utils/functions/functions";

export function Home() {
  useFetchingCountries();
  scrollToTop();

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
