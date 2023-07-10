import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchDataFromApi("movie/popular")
      .then((res) => dispatch(getApiConfiguration(res)))
      .catch((err) => console.log(err));
  }, []);
  return <div className="App">App</div>;
};

export default App;
