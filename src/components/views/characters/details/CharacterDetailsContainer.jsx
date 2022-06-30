import React, { useEffect, useState } from "react";
import api from "../../../../services/api";
import CharacterDetailsView from "./CharacterDetailsView";
import { useParams, useSearchParams } from "react-router-dom";

function CharacterDetailsContainer() {
  const username = sessionStorage.getItem("user");
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [characterData, setCharactersData] = useState({});
  const [isFavorite, setIsFavorite] = useState(searchParams.get("isFavorite"));

  useEffect(() => {
    async function fetchData() {
      const character = await api.characters.details(id);

      setCharactersData(character.data);
    }
    fetchData();
  }, [id]);

  async function updateFavoriteCharacters(characterId) {
    if (isFavorite) {
      setSearchParams({ isFavorite: false });
      setIsFavorite(false);

      await api.users.removeFavoriteCharacter(username, characterId);
    } else {
      setSearchParams({ isFavorite: true });
      setIsFavorite(true);

      await api.users.addFavoriteCharacter(username, characterId);
    }
  }

  return (
    <CharacterDetailsView
      characterData={characterData}
      updateFavoriteCharacters={updateFavoriteCharacters}
      isFavorite={isFavorite}
    />
  );
}

export default CharacterDetailsContainer;
