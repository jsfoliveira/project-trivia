import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { namePlayer, scorePlayer, emailPlayer } = this.props;
    return (
      <header>
        <h1
          data-testid="header-player-name"
        >
          { namePlayer}
        </h1>
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${md5(emailPlayer)}` }
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
    scorePlayer: state.player.score,
    emailPlayer: state.player.gravatarEmail,
  }
);

Header.propTypes = {
  namePlayer: PropTypes.string.isRequired,
  emailPlayer: PropTypes.string.isRequired,
  scorePlayer: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
