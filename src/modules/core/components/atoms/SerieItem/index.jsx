import './styles.scss';
import PropTypes from 'prop-types';

SerieItem.propTypes = {
  title: PropTypes.string
};

// eslint-disable-next-line no-unused-vars
export default function SerieItem({ title }) {
  return (
    <li>
      <label className="series__list--text">
        {/* <input value={false} type="checkbox" /> */}
        {title}
      </label>
    </li>
  );
}
