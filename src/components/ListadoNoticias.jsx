import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "../components/Noticia";
//
const ListadoNoticias = () => {
  const { noticias } = useNoticias();
  //   console.log(noticias);
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
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
