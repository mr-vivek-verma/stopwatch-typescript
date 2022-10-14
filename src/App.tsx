import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Main from "././components/Main/Main"
import AddBtn from ".././src/components/Todo/AddBtn"
import ThreeDots from ".././src/components/Todo/ThreeDots"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main/>
      <ThreeDots/>
      <AddBtn/>
      </ThemeProvider>


  );
}

export default App;