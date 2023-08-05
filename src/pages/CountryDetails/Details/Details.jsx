import { useSelector } from "react-redux";
import {
  getKey,
  getObjectValues,
  isObjectKeyExist,
} from "../../../utils/functions/functions";

import "./style.scss";
import { Description } from "../../../components/Description";

export function Details(props) {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme === "dark" ? "details dark-mode" : "details"}>
      <div className="card-flag">
        <img src={props.flags.png} alt={props.name.common} />
      </div>
      <div className="container-infos">
        <div className="card-infos">
          <div>
            <h2 className="card-title">{props.name.common}</h2>
            {isObjectKeyExist(props, "altSpellings") && (
              <Description
                label="Native Name:"
                answer={
                  props.altSpellings.length > 1
                    ? props.altSpellings[1]
                    : props.altSpellings[0]
                }
              />
            )}
            <Description label="Population:" answer={props.population} />
            {isObjectKeyExist(props, "region") && (
              <Description label="Region:" answer={props.region} />
            )}
            {isObjectKeyExist(props, "subregion") && (
              <Description label="Sub Region:" answer={props.subregion} />
            )}
            {isObjectKeyExist(props, "capital") && (
              <Description label="Capital:" answer={props.capital} />
            )}
          </div>
          <div className="level">
            {isObjectKeyExist(props, "tld") && (
              <Description label="Top Level Domaine:" answer={props.tld} />
            )}
            {isObjectKeyExist(props, "currencies") && (
              <Description
                label="Currencies:"
                answer={props.currencies[getKey(props.currencies)[0]].name}
              />
            )}
            {isObjectKeyExist(props, "languages") && (
              <div className="card-stat">
                <span>Languages:</span>
                {getObjectValues(props?.languages).map((language, key) => (
                  <span key={language}>
                    {`${language}`}
                    {key < getObjectValues(props.languages).length - 1
                      ? ", "
                      : ""}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        {isObjectKeyExist(props, "borders") && (
          <h3 className="title-border">Border Countries:</h3>
        )}
        <div className="container-borders">
          {props.borders?.map((border) => (
            <div
              key={border}
              className={
                theme === "dark" ? "btn-border dark-mode" : "btn-border"
              }
            >
              {border}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
