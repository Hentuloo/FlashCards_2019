import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MainButton from 'components/atoms/MainButton/MainButton';

const drawRandomCard = cards => {
  return cards[Math.floor(Math.random() * cards.length)];
};

class Draw extends Component {
  state = {
    first: '',
    second: '',
    ShowSecondCard: true,
    animationResetKey: Math.random(),
  };

  handleClick = () => {
    const { cards } = this.props;
    const { first, second, ShowSecondCard } = this.state;
    if (cards) {
      if (!ShowSecondCard) return this.setState({ ShowSecondCard: true });

      let randomCard;
      do {
        randomCard = drawRandomCard(cards);
      } while (randomCard.first === first && randomCard.second === second);
      this.setState({
        first: randomCard.first,
        second: randomCard.second,
        ShowSecondCard: false,
        animationResetKey: Math.random(),
      });
    }
    return null;
  };

  render() {
    const { active } = this.props;
    const { first, second, ShowSecondCard, animationResetKey } = this.state;
    return (
      <>
        <div className="MP__draw_Window">
          <span className="MP__draw_Window_span">
            {!active ? 'Wybierz dział' : first || 'Losuj!'}
          </span>
        </div>
        <div className="MP__draw_Window">
          <span
            className="MP__draw_Window_span MP__draw_Window_span--animated"
            key={animationResetKey}
          >
            {ShowSecondCard && second}
          </span>
        </div>
        <MainButton
          icon="icon-arrows-ccw"
          value="Wylosuj fiszke"
          onClick={this.handleClick}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  if (state.Settings.active) {
    return {
      active: state.Settings.active && true,
      cards: state.FlashCards.find(e => e.id === state.Settings.active).cards,
    };
  }
  return { card: false };
};

Draw.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.bool,
};
Draw.defaultProps = {
  cards: null,
  active: false,
};

export default connect(mapStateToProps)(Draw);
