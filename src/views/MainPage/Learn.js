import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LearnTable from 'components/molecules/LearnTable/LearnTable';
import MainButton from 'components/atoms/MainButton/MainButton';
import SquareButton from 'components/atoms/SquareButton/SquareButton';

const InputsCounter = count => {
  const inputs = [];
  for (let i = 0; i < count; i += 1) {
    inputs.push(
      <div key={i}>
        <input type="text" placeholder="word" />
        <input type="text" placeholder="słowo" />
      </div>,
    );
  }
  return inputs;
};
class Learn extends Component {
  state = {
    counter: 1,
  };

  handleClickNewInput = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    const { singleType } = this.props;
    const { counter } = this.state;
    return (
      <>
        <div className="MP__learn_addWrapper">
          <div className="MP__learn_addInputs">{InputsCounter(counter)}</div>
          <MainButton
            icon="icon-plus"
            value="dodaj typ fiszek"
            onClick={this.handleClickNewInput}
          />
          <SquareButton
            type="submit"
            value={counter > 1 ? 'Dodaj nowe słówka' : 'Dodaj nowe słówko'}
          />
        </div>

        <div className="MP__learn_table">
          {singleType && <LearnTable data={singleType.cards} />}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  singleType: state.FlashCards.find(type => type.id === state.Settings.active),
});

Learn.propTypes = {
  singleType: PropTypes.shape({
    cards: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    title: PropTypes.string,
  }),
};
Learn.defaultProps = {
  singleType: null,
};

export default connect(mapStateToProps)(Learn);
