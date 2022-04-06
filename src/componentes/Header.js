import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { namePlayer, scorePlayer, imageGravatar } = this.props;
    console.log(imageGravatar);
    return (
      <header>
        <h1
          data-testid="header-player-name"
        >
          { namePlayer}
        </h1>
        <img
          data-testid="header-profile-picture"
          src={ imageGravatar }
          alt={ namePlayer }
        />
        <p
          data-testid="header-score"
        >
          {scorePlayer}
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => (
  {
    namePlayer: state.player.name,
    imageGravatar: state.gravatar.image.url,
    scorePlayer: state.player.score,
  }
);

Header.propTypes = {
  namePlayer: PropTypes.string.isRequired,
  imageGravatar: PropTypes.string.isRequired,
  scorePlayer: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
