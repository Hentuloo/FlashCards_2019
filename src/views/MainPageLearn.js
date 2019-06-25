import React, { Component } from 'react';
import MainPageTable from 'components/molecules/MainPageTable/MainPageTable';
import MenuButton from 'components/atoms/MenuButton/MenuButton';

const InputsCounter = count => {
  const inputs = [];
  for (let i = 0; i < count; i += 1) {
    inputs.push(
      <>
        <input type="text" placeholder="word" />
        <input type="text" placeholder="słowo" />
      </>,
    );
  }
  return inputs;
};
class MainPageLearn extends Component {
  state = {
    counter: 3,
  };

  handleClickNewInput = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <div className="mainPageLearn__Add_Wrapper">
          <div className="mainPageLearn__Add_Inputs">
            {InputsCounter(counter)}
          </div>
          <MenuButton
            icon="icon-plus"
            value="dodaj typ fiszek"
            onClick={this.handleClickNewInput}
          />
          <input
            className="mainPageLearn__Add_Button"
            type="submit"
            value="Dodaj nowe słówko"
          />
        </div>

        <div className="mainPage__Learn_Table">
          <MainPageTable />
        </div>
      </>
    );
  }
}

export default MainPageLearn;
