import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Main from "././components/Main/Main"
import AddBtn from ".././src/components/Todo/AddBtn"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main/>
      <AddBtn/>
      </ThemeProvider>


  );
}

export default App;