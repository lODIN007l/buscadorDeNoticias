import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);
  //
  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
    // console.log(categoria);
  };
  const handleChangePagine = (e, valor) => {
    // console.log("paginando");
    console.log(valor);
    setPagina(valor);
  };

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      setPagina(1);
      //   console.log(data);
    };
    consultarApi();
    // console.log(noticias);
  }, [categoria]);
  // paginacion
  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      //   console.log(data);
    };
    consultarApi();
    // console.log(noticias);
  }, [pagina]);

  return (
    <NoticiasContext.Provider
      value={{
        handleChangeCategoria,
        categoria,
        noticias,
        totalNoticias,
        handleChangePagine,
        pagina,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };
export default NoticiasContext;
