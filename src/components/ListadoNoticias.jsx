import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "../components/Noticia";
//
const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagine, pagina } = useNoticias();
  // console.log(totalNoticias);
  const totalPaginas = Math.ceil(totalNoticias / 20);
  // console.log(Math.ceil(totalPaginas));
  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h3" component="h2">
        Ultimas Noticias
      </Typography>
      <Grid container spacing={4}>
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>
      <Stack
        sx={{
          marginTop: 5,
          marginBottom: 3,
        }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Pagination
          onChange={handleChangePagine}
          page={pagina}
          count={totalPaginas}
          color="secondary"
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
