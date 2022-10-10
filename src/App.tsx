import { ThemeProvider, CssBaseline } from '@mui/material';
import './App.scss';
import AppContainer from "./components/Main/Main";
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;