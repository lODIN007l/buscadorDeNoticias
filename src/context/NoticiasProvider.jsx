import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  //
  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
    // console.log(categoria);
  };

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      //   console.log(data);
    };
    consultarApi();
    // console.log(noticias);
  }, [categoria]);

  return (
    <NoticiasContext.Provider
      value={{ handleChangeCategoria, categoria, noticias }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };
export default NoticiasContext;
