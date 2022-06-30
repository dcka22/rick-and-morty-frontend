import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharactersContainer from "./components/views/characters/list/CharactersContainer";
import NotFoundPage from "./components/views/errorPage/NotFoundPage";
import React from "react";
import LoginContainer from "./components/views/login/LoginContainer";
import CharacterDetailsContainer from "./components/views/characters/details/CharacterDetailsContainer";
import useToken from "./components/app/useToken";
import history from "./history";
import "./app.scss";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <LoginContainer setToken={setToken} />;
  }

  return (
    <Router history={history}>
      <Routes>
        <Route exact path='/' element={<LoginContainer />} />

        <Route path='/characters' element={<CharactersContainer />} />
        <Route path='/characters/:id' element={<CharacterDetailsContainer />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
