import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  render() {
    const { namePlayer, scorePlayer, emailPlayer } = this.props;
    return (
      <header
        className="header d-flex w-100 justify-content-between
        p-4 align-items-center"
      >
        <div
          className="d-flex rounded-pill
          justify-content-around align-items-center p-2"
        >
          <img
            data-testid="header-profile-picture"
            className="rounded-circle me-2"
            src={ `https://www.gravatar.com/avatar/${md5(emailPlayer)}` }
            alt={ namePlayer }
          />
          <h4
            data-testid="header-player-name"
          >
            { namePlayer}
          </h4>
        </div>
        <div className="d-flex">
          <p>
            Pontos:
          </p>
          <p
            data-testid="header-score"
          >
            {scorePlayer}
          </p>
        </div>
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
  scorePlayer: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
