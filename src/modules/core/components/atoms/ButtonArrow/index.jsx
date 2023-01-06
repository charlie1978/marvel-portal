import React, { useState } from 'react';
import './styles.scss';
import { RiArrowDropDownFill } from 'react-icons/ri';
import ShowMoviesList from '../ShowMoviesList';
import ShowtvList from '../ShowtvList';

function ButtonArrow() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="filters">
      <div className="filters__movie" onClick={handleToggle}>
        <div className="filters__movie--text">MOVIE</div>
        <RiArrowDropDownFill className="filters__movie icon" />
        {toggle && <ShowMoviesList show={toggle} />}

        {/* aca debe ir una rutina de click condicional menu tv y movie  */}

        <div className="filters__tv" onClick={handleToggle}>
          <div className="filters__tv--text">TV</div>
          <RiArrowDropDownFill className="filters__tv icon" />
          {toggle && <ShowtvList show={toggle} />}
        </div>
      </div>
    </div>
  );
}

export default ButtonArrow;
