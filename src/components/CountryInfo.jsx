import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./CountryInfo.css";
import Loading from "../hooks/Loading";
import Weather from "./Weather";

const CountryInfo = () => {
  const { country } = useParams();
  const { data } = useFetch(`https://restcountries.com/v3.1/name/${country}`);

  const [loading, setLoading] = useState(false);

  const loader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  useEffect(() => {
    loader();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        {data === undefined
          ? ""
          : data.map((info) => {
              return (
                <section key={info.name.common} className="section-info">
                  <div className="image-info" key={info.name.common}>
                    <img src={info.flags.svg} alt={info.name.common} />
                  </div>
                  <div className="text-info">
                    <div className="text-info-name">
                      <p>{info.name.common}</p>
                    </div>
                    <div className="text-info-capital">
                      <p>CAPITAL:</p>
                      <p>{info.capital[0]}</p>
                    </div>
                    <div className="text-info-region">
                      <p>REGION:</p>
                      <p>{info.region}</p>
                    </div>
                    <div className="text-info-subregion">
                      <p>SUBREGION:</p>
                      <p>{info.subregion}</p>
                    </div>
                    <div className="text-info-population">
                      <p>POPULATION:</p>
                      <p>{info.population}</p>
                    </div>
                    <div className="text-info-demonym">
                      <p>DEMONYM:</p>
                      <p>{info.demonyms.eng.f}</p>
                    </div>
                    <div className="text-info-languages">
                      <p>LANGUAGE:</p>
                      {info.languages.eng}
                    </div>
                    <div className="text-info-acronym">
                      <p>ACRONYM:</p>
                      <p>{info.altSpellings}</p>
                    </div>
                  </div>
                  <Weather city={info.capital[0]} />
                </section>
              );
            })}
      </>
    );
  }
};

export default CountryInfo;
