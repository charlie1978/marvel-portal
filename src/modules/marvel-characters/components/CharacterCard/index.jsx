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
          <h4 className="u-no-margin">{name}</h4>
          <h6 className="marvel-label">1939 Timely Comics</h6>
          <h4 className="u-no-margin">{description}</h4>
          <h6 className="marvel-label">{currentDate}</h6>
        </div>
      </div>
    </div>
  );
}
