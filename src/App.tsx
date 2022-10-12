import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Main from "././components/Main/Main"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main/>
      </ThemeProvider>


  );
}

export default App;