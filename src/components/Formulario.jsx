import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
//
//
const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];
//
//
//

const Formulario = () => {
  return (
    <form>
      <FormControl>
        <InputLabel>Categoria</InputLabel>
        <Select label="categoria"></Select>
      </FormControl>
    </form>
  );
};

export default Formulario;
