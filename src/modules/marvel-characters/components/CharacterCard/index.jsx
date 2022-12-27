// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  isSkeleton: PropTypes.bool
};

export default function CharacterCard({ image, name, description, isSkeleton }) {
  const currentDate = new Date().toDateString();
  return (
    <div className="mvl-character-card" data-is-skeleton={isSkeleton}>
      <div className="mvl-character-card__image-container">
        <img className="mvl-character-card__image" src={image} alt="" />
      </div>
      <div className="mvl-character-card__body-container">
        <div className="mvl-character-card__body">
          <h3 className="u-no-margin">{name}</h3>
          <h5 className="marvel-label">1939 Timely Comics</h5>
          <h6 className="marvel-label"> </h6>
          <h3 className="u-no-margin"> </h3>
          <h3 className="u-no-margin">{description}</h3>
          <h6 className="marvel-label">{currentDate}</h6>
        </div>
      </div>
    </div>
  );
}
