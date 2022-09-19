import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const handleChangeCategoria = (e) => {
    setCategoria(e.targe.value);
  };

  return (
    <NoticiasContext.Provider value={{ handleChangeCategoria }}>
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };
export default NoticiasContext;
