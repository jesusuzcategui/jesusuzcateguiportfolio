import './App.css';
import Main from './components/core/MainComponent';

import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: '#BAD763'
        },
    }
});

function Pallete(){
    return (
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    );
}

function App() {
  return (
    <div className="App">
        <Pallete />
    </div>
  );
}

export default App;
