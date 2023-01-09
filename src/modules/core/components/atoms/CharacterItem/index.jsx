import './styles.scss';
import PropTypes from 'prop-types';

CharacterItem.propTypes = {
  name: PropTypes.string
};

export default function CharacterItem({ name}) {
  return (
    <li>
      <label className="characters__list--text">
        {/* <input value={false} type="checkbox" /> */}
        {name}
      </label>
    </li>    
  );
}
