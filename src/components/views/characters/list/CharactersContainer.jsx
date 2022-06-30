import React, { useEffect, useState } from "react";
import api from "../../../../services/api";
import CharactersView from "./CharactersView";

function CharactersContainer() {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const list = await api.characters.fetch();
      const user = sessionStorage.getItem("user");

      const characters = list.results;
      const userData = await api.users.get(user);

      characters.forEach((character) => {
        if (userData.favoriteCharacters.includes(character.id)) {
          Object.assign(character, {
            isFavorite: true,
          });
        }
      });
      setCharactersData(characters);
    }
    fetchData();
  }, []);

  return <CharactersView charactersData={charactersData} />;
}

export default CharactersContainer;
