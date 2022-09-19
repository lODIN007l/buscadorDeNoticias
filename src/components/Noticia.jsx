import useNoticias from "../hooks/useNoticias";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;
  return (
    <Grid item md={6} lg={6} xs={6}>
      <Card>
        {urlToImage && (
          <CardMedia
            height={"250"}
            component="img"
            alt="imagen de noticia"
            image={urlToImage}
          />
        )}
        <CardContent>
          <Typography variant="body" color="error">
            {source.name}
          </Typography>
          <Typography variant="h6" component={"div"}>
            {title}
          </Typography>
          <Typography variant="body3" component={"div"}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width={"100%"}
            textAlign="center"
            sx={{
              textDecoration: "none",
            }}
          >
            Leer Noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Noticia;
