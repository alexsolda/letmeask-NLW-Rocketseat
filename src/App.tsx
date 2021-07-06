import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeSwitcherContext } from './contexts/ThemeSwitcherContext';
import { AdminRoom } from './pages/AdminRoom';
import { useContext } from 'react';
import GlobalStyle from './styles/global';

function App() {

  const { theme } = useContext(ThemeSwitcherContext);

  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <AuthContextProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/rooms/new' component={NewRoom} />
            <Route path='/rooms/:id' component={Room} />
            <Route path='/admin/rooms/:id/:owner/' component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;