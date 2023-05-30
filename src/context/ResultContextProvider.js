import { createContext, useContext, useState } from "react";

const resultContext = createContext();
const baseURL = "https://google-search74.p.rapidapi.com";

const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResult = async (type) => {
    setLoading(true);
    const response = await fetch(`${baseURL}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "", // add your google search api key here
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    });
    const data = response.json().then((data) => setResults(data));
    // setResults(data);
    setLoading(false);
    // const loadData = async() =>{
    //   const res = await data;
    // }
  };

  return (
    <resultContext.Provider
      value={{ getResult, searchTerm, setSearchTerm, loading, results }}
    >
      {children}
    </resultContext.Provider>
  );
};
const useResultContext = () => useContext(resultContext);

export { ResultContextProvider, useResultContext };
