import { useEffect } from "react";
import { useStore } from "react-redux";
import { fetchOrUpdateCountries } from "../../GETCOUNTRIES/fetchOrUpdateCountries";

export function useFetchingCountries() {
  const store = useStore();

  useEffect(() => {
    fetchOrUpdateCountries(store);
  }, [store]);
}
