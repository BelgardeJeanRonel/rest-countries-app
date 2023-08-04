import { type } from "@testing-library/user-event/dist/type";

export const FETCHING = "countries/fetching";
export const RESOLVED = "countries/resolved";
export const REJECTED = "countries/rejected";
export const INPUT_COUNTRIE = "INPUT_COUNTRIE";
export const SELECT_REGION = "selectRegion";
export const TOGGLE_THEME = "theme/toggle";
export const THEME_LOCAL_STORAGE = "THEME_LOCAL_STORAGE";
// export const RESET_FIELD = "RESET_FIELD";


export const countriesFetching = () => ({ type: FETCHING });
export const countriesResolved = (data) => ({ type: RESOLVED, payload: data });
export const countriesRejected = (error) => ({
  type: REJECTED,
  payload: error,
});
export const inputCountrie = (value) => ({ type: INPUT_COUNTRIE, value });
export const selectRegion = (value) => ({ type: SELECT_REGION, value });
export const toggleTheme = () => ({ type: TOGGLE_THEME });
export const themeLocalStorage = (theme) => ({
  type: THEME_LOCAL_STORAGE,
  theme,
});

// export const resetField = () => ({ type: RESET_FIELD });


