import PropTypes from 'prop-types';
// import { useState } from 'react';
import './styles.scss';

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  isSkeleton: PropTypes.bool
};

export default function CharacterCard({ image, name, description, isSkeleton }) {
  return (
    <div className="mvl-character-card" data-is-skeleton={isSkeleton}>
      <div className="mvl-character-card__image-container">
        <img className="mvl-character-card__image" src={image} alt="" />
        <div className="mvl-character-card__body">
          <h3 className="u-no-margin">{name}</h3>
          <h5 className="marvel-label">1939 Timely Comics</h5>
          <h3 className="u-no-margin">{description}</h3>
          <h4 className="u-no-margin">{name}</h4>
        </div>
      </div>
    </div>
  );
}
