import "./characterDetailsView.scss";

export default function CharacterDetailsView(props) {
  const { characterData, updateFavoriteCharacters, isFavorite } = props;

  return (
    <div className='character-container'>
      <div className='header'>Ricky and Morty characters</div>
      <div className='character-details'>
        <div className='image'>
          <img
            className='character-image'
            src={characterData?.image}
            alt='character'
          />
        </div>
        <div className='character-data'>
          <div className='character-name'>{characterData?.name}</div>
          <ul className='character-info'>
            <li>
              <span>Status: </span>
              {characterData?.status}
            </li>
            <li>
              <span>Specie: </span>
              {characterData?.species}
            </li>
            <li>
              <span>Gender: </span>
              {characterData?.gender}
            </li>
            <li>
              <span>Location: </span>
              {characterData?.location?.name}
            </li>
            <li>
              <span>Origin: </span>
              {characterData?.origin?.name}
            </li>
          </ul>
          <div>
            <button
              className='favorite-button'
              onClick={() => updateFavoriteCharacters(characterData?.id)}
            >
              {isFavorite ? "REMOVE FROM FAVORITES" : "ADD TO FAVORITES"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
