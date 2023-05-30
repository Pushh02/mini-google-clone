import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { getResult, searchTerm, setSearchTerm, loading, results } =
    useResultContext();

  useEffect(() => {
    if (searchTerm != "") {
      getResult(`/?query=${searchTerm}&limit=10`);
    }
  }, [searchTerm]);
  const location = useLocation();

  if (loading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="p-16 pt-8">
          {results?.results?.map(({ url, title, description }, index) => (
            <div key={index} className="">
              <a href={url} target="_blank">
                <p className="text-sm">
                  {url.lenght > 30 ? url.substring(0, 60) : url}
                </p>
                <p className="text-lg text-blue-700">{title}</p>
                <p className="text-sm pb-5">
                  {description.lenght > 30 ? description.substring(0, 120) : description}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
      break;

    default:
      return "ERROR";
  }
};

export default Results;
