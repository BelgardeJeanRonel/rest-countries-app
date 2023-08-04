import {
  countriesFetching,
  countriesRejected,
  countriesResolved,
} from "../actions/actions";

export async function fetchOrUpdateCountries(store) {
  const status = store.getState().countries.status;

  if (status === "pending" || status === "updating") {
    return;
  }

  store.dispatch(countriesFetching());
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    store.dispatch(countriesResolved(data));
  } catch (error) {
    store.dispatch(countriesRejected(error));
  }
}
