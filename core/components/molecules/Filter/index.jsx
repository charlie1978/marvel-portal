import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
/*import { RiSearch2Line } from 'react-icons/ri';*/
import ButtonMovies from '../../atoms/ButtonArrow';

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired
};

function Filter({ totalItems }) {
  return (
    <div className="mvl-character-gri-filters">
      <div>
        <BiSearchAlt />
        <input
          type="text"
          value=""
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls="react-autowhatever-1"
          placeholder="Search"
          className="input-nav"
          readOnly
        />
        <ButtonMovies />
      </div>
      <div className="Container-span">
        <span className="span-results">{totalItems} RESULTADOS</span>
      </div>
    </div>
  );
}
export default Filter;
