import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routes from './pages/routes';

//Fonts Roboto
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
