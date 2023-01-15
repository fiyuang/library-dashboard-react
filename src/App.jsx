import { useState, useEffect } from 'react';
import './App.css';

import { createClient } from '@supabase/supabase-js';
import { CountriesTable } from './components/CountriesTable';
import { TestChakraUI } from './components/TestChakraUI';
import { LoginArea } from './components/login/LoginArea';

import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_API_KEY
);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      const result = await supabase.from('countries').select();
      setCountries(result.data);
    };

    fetchCountriesData();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <LoginArea />
        </ColorModeProvider>
      </ThemeProvider>
      {/* <TestChakraUI />
      <CountriesTable countries={countries} /> */}
    </div>
  );
}

export default App;
