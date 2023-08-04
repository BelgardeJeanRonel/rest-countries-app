import { Route, Routes } from "react-router-dom";
import { Header } from "../Header";
import { CountryDetails } from "../../pages/CountryDetails/CountryDetails";
import { Home } from "../../pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader";
import { useFetchingCountries } from "../../utils/hooks/useFetchingCountries";
import { themeLocalStorage } from "../../actions/actions";
import { Error } from "../../pages/Error404";

export function App() {
  const countries = useSelector((state) => state.countries);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const themeInLocalStorage = JSON.parse(localStorage.getItem("darkMode"));

  dispatch(themeLocalStorage(themeInLocalStorage));

  const isLoading =
    countries.status === "void" || countries.status === "pending";
  useFetchingCountries();

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : countries.status === "rejected" || countries.data?.message ? (
        <div className={theme === "dark" ? "notFound dark-mode" : "notFound"}>
          Nous sommes désolé, Une erreur s'est produite.
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/country/:name" element={<CountryDetails />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      )}
    </>
  );
}
