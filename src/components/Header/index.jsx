import { Link } from "react-router-dom";
import "./style.scss";
import { resetField, toggleTheme } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { scrollToTop } from "../../utils/functions/functions";

export function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const themeSwitch = () => {
    dispatch(toggleTheme());

    const isDarkMode = theme === "light";

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  };
  return (
    <header className={theme === "dark" ? "header dark-mode" : "header"}>
      <Link
        to="/"
        className="header-title"
        onClick={() => {
          dispatch(resetField());
          scrollToTop()
        }}
      >
        <h1>Where in the world?</h1>
      </Link>
      <div className="mode" onClick={themeSwitch}>
        {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </div>
    </header>
  );
}
