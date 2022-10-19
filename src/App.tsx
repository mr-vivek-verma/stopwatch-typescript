import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Main from "././components/Main/Main"
import AddBtn from ".././src/components/Todo/AddBtn"
import ThreeDots from ".././src/components/Todo/ThreeDots"
import Todo from './components/Todo/Todo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main/>
      <ThreeDots/>
      <AddBtn/>
      <Todo/>
      </ThemeProvider>


  );
}

export default App;