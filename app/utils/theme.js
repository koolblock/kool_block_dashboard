import { grey, indigo } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: indigo,
    green: "#84BC04",
    black: "#1C1C1C",
  },
});

export default theme;
