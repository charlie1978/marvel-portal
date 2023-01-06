import React, { useState } from 'react';
import './styles.scss';

const tvList = [];

function ShowtvList() {
  const [checked, setChecked] = useState([]);
  const handleCheck = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  const [setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleReset = () => {};
  const handleApply = () => {};

  return (
    <div className="tv">
      <ul className="tv__list">
        {tvList.map((item, index) => (
          <li key={index} className="tv__list--item">
            <input value={item} type="checkbox" onChange={handleCheck} />
            <label className="tv__list--text">{item}</label>
          </li>
        ))}
      </ul>
      <div className="tv__buttons--container">
        <div className="tv__buttons--left">
          <button className="tv__buttons" onClick={handleApply}>
            Apply
          </button>
        </div>
        <div className="tv__buttons--right">
          <button className="tv__buttons" onClick={handleReset}>
            Reset
          </button>
          <button className="tv__buttons" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowtvList;
