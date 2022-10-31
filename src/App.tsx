import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Main from "././components/Main/Main"

import ThreeDots from ".././src/components/Todo/ThreeDots"
import Todo from './components/Todo/main_todo/Todo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main/>
      <ThreeDots/>
      <Todo/>
      </ThemeProvider>


  );
}

export default App;