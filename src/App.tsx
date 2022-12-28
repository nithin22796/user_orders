import './App.css';
import {ThemeProvider, createTheme } from "@mui/material/styles";
import { green, purple } from '@mui/material/colors';
import ButtonAppBar from './components/nav-bar';
import Routers from './routes';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <header className="">
      <ThemeProvider theme={theme}>
        <ButtonAppBar />
        <Routers />
      </ThemeProvider>
    </header>
  );
}

export default App;
