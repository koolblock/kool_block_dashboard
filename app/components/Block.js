import { Box } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "max-content",
    minHeight: "70vh",
    fontFamily: "Roboto",
    boxSizing: 'border-box'
  },
}));

export default function Block({ children, background = false }) {
  const classes = useStyles();
  const theme = useTheme();

  const getBackground = () => {
    const colors = {
      green: theme.palette.green,
      black: theme.palette.black_koolblock,
    };
    return colors[background] ?? "white";
  };

  const background_color = background ? getBackground(background) : "white";

  return (
    <Box
      className={classes.container}
      style={{
        borderBottom: `25px solid ${background_color}`,
        borderRight: `35px solid ${background_color}`,
      }}
    >
      {children}
    </Box>
  );
}
