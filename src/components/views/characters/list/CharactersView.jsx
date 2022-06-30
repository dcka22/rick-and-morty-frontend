import "./charactersView.scss";
import heartIconActive from "../../../assets/heartIconActive.png";
import heartIconInactive from "../../../assets/heartIconInactive.png";
import { useNavigate } from "react-router-dom";

export default function CharactersView(props) {
  const { charactersData } = props;
  const navigate = useNavigate();

  return (
    <div className='characters-container'>
      <div className='header'>Ricky and Morty characters</div>
      <div className='cards-container'>
        {charactersData &&
          charactersData.map((character, index) => {
            const isFavorite = character.isFavorite;

            const onClick = () => {
              navigate(
                `/characters/${character.id}?isFavorite=${
                  isFavorite ? true : false
                }`
              );
            };
            return (
              <div key={index} className='card-item' onClick={onClick}>
                <div className='card-details'>
                  <img
                    className='character-img'
                    src={character.image}
                    alt='character'
                  />
                  <div className='character-name'>{character.name}</div>
                  <div className='character-status'>
                    <p>Status: {character.status}</p>
                  </div>
                  <img
                    alt='heart-icon'
                    className='heart'
                    src={isFavorite ? heartIconActive : heartIconInactive}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
