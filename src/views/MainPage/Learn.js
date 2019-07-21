import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addWords } from 'actions';

import validator from 'config/validator';
import Error from 'config/ErrorStatements';

import { LearnTable } from 'components/molecules';
import { MainButton, SquareButton } from 'components/atoms';

const InputsCounter = (onChange, count) => {
  const inputs = [];
  for (let i = 0; i < count; i += 1) {
    inputs.push(
      <div key={i}>
        <input
          onChange={onChange}
          number={i}
          name="word"
          type="text"
          placeholder="word"
          autoComplete="off"
        />
        <input
          onChange={onChange}
          number={i}
          name="description"
          type="text"
          placeholder="słowo"
          autoComplete="off"
        />
      </div>,
    );
  }
  return inputs;
};
class Learn extends Component {
  state = {
    errorType: false,
    counter: 1,
    inputs: [{ id: 0, word: '', description: '' }],
  };

  handleClickNewInput = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
        inputs: [
          ...prevState.inputs,
          { id: prevState.counter, word: '', description: '' },
        ],
      };
    });
  };

  handleChange = e => {
    const idInput = e.target.attributes.number.value;
    const { name, value } = e.target;

    this.setState(prevState => {
      return {
        inputs: prevState.inputs.map(input => {
          if (input.id === Number(idInput)) {
            return {
              ...input,
              [name]: value,
            };
          }
          return input;
        }),
        errorType: false,
      };
    });
  };

  handleSetErrorFromTable = errorType => this.setState({ errorType });

  handleSubmitNewWords = () => {
    const { addWordsAction, singleType } = this.props;
    const { inputs } = this.state;

    if (!singleType) return this.setState({ errorType: 'chooseType' });

    const notValid = validator({ cards: inputs });
    if (notValid) return this.setState({ errorType: notValid.errorType });

    addWordsAction(singleType.id, inputs);
    return this.setState({ errorType: false });
  };

  render() {
    const { singleType } = this.props;
    const { counter, errorType } = this.state;
    return (
      <>
        <div className="MP__learn_addWrapper">
          <div className="MP__learn_addInputs">
            {InputsCounter(this.handleChange, counter)}
          </div>
          <MainButton
            icon="icon-plus"
            value="dodaj typ fiszek"
            onClick={this.handleClickNewInput}
          />
          <SquareButton
            type="submit"
            onClick={this.handleSubmitNewWords}
            value={counter > 1 ? 'Dodaj nowe słówka' : 'Dodaj nowe słówko'}
          />
        </div>
        {errorType && (
          <div className="MP__learn_error">{Error.TYPES[errorType]}</div>
        )}
        <div className="MP__learn_table">
          {singleType && (
            <LearnTable
              idType={singleType.id}
              setError={this.handleSetErrorFromTable}
              data={singleType.cards}
            />
          )}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = { addWordsAction: addWords };
const mapStateToProps = state => ({
  singleType: state.FlashCards.find(type => type.id === state.Settings.active),
});

Learn.propTypes = {
  singleType: PropTypes.shape({
    cards: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    title: PropTypes.string,
  }),
  addWordsAction: PropTypes.func.isRequired,
};
Learn.defaultProps = {
  singleType: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Learn);
