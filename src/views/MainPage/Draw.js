import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { MainButton } from 'components/atoms';

const drawRandomCard = cards => {
  return cards[Math.floor(Math.random() * cards.length)];
};

class Draw extends Component {
  state = {
    word: '',
    description: '',
    ShowSecondCard: true,
    animationResetKey: Math.random(),
  };

  handleClick = () => {
    const { active, cards } = this.props;
    const { word, description, ShowSecondCard } = this.state;
    if (active && cards.length) {
      if (!ShowSecondCard) return this.setState({ ShowSecondCard: true });

      let randomCard;
      do {
        randomCard = drawRandomCard(cards);
      } while (
        randomCard.word === word &&
        randomCard.description === description
      );
      if (Math.random() >= 0.5) {
        // Random language in first step
        this.setState({
          word: randomCard.word,
          description: randomCard.description,
          ShowSecondCard: false,
          animationResetKey: Math.random(),
        });
      } else {
        this.setState({
          word: randomCard.description,
          description: randomCard.word,
          ShowSecondCard: false,
          animationResetKey: Math.random(),
        });
      }
    }
    return null;
  };

  render() {
    const { active, cards } = this.props;
    const { word, description, ShowSecondCard, animationResetKey } = this.state;

    const drawStatement = () => {
      if (!active) return 'Wybierz dział';
      if (!cards.length) return 'Dodaj Pierwsze fiszki';
      if (word) return word;
      return 'Losuj!';
    };

    return (
      <>
        <div className="MP__draw_Window">
          <span className="MP__draw_Window_span">{drawStatement()}</span>
        </div>
        <div className="MP__draw_Window">
          <span
            className="MP__draw_Window_span MP__draw_Window_span--animated"
            key={animationResetKey}
          >
            {ShowSecondCard && description}
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
