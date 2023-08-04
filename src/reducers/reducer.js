import { produce } from "immer";
import {
  FETCHING,
  INPUT_COUNTRIE,
  REJECTED,
  RESOLVED,
  SELECT_REGION,
  THEME_LOCAL_STORAGE,
  TOGGLE_THEME,
} from "../actions/actions";
import { act } from "@testing-library/react";

const initialState = {
  countries: {
    status: "void",
    data: null,
    error: null,
  },
  inputCountrie: "",
  regionValue: "",
  theme: "light",
};

export function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCHING: {
        if (draft.countries.status === "void") {
          draft.countries.status = "pending";
          return;
        }

        if (draft.countries.status === "rejected") {
          draft.countries.status = "pending";
          return;
        }

        if (draft.countries.status === "resolved") {
          draft.status = "updating";
          return;
        }

        return;
      }
      case RESOLVED: {
        if (
          draft.countries.status === "pending" ||
          draft.countries.status === "updating"
        ) {
          draft.countries.data = action.payload;
          draft.countries.status = "resolved";
          return;
        }

        return;
      }

      case REJECTED: {
        if (
          draft.countries.status === "pending" ||
          draft.countries.status === "updating"
        ) {
          draft.countries.status = "rejected";
          draft.countries.error = action.payload;
          draft.countries.data = null;
          return;
        }

        return;
      }

      case INPUT_COUNTRIE: {
        draft.inputCountrie = action.value;

        return;
      }
      case SELECT_REGION: {
        draft.regionValue = action.value;

        return;
      }

      case TOGGLE_THEME: {
        draft.theme = draft.theme === "light" ? "dark" : "light";

        return;
      }

      case THEME_LOCAL_STORAGE: {
        draft.theme = action.theme === true ? "dark" : "light";

        return;
      }
      default:
        return;
    }
  });
}
