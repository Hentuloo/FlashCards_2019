import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'layouts/MainLayout';
import PageTypeButton from 'components/atoms/PageTypeButton/PageTypeButton';
import MainPageTypes from './MainPageTypes';
import MainPageDraw from './MainPageDraw';
import MainPageLearn from './MainPageLearn';

const sections = ['types', 'draw', 'learn'];

class MainPage extends Component {
  state = {
    activeSection: 'types',
  };

  componentDidMount() {
    const { activeSection } = this.props;
    this.setState({ activeSection });
  }

  handleChangeSection = string => {
    const { activeSection } = this.state;

    if (sections.includes(string) && string !== activeSection) {
      this.setState({ activeSection: string });
    }
  };

  render() {
    const { activeSection } = this.state;
    return (
      <MainLayout>
        <>
          <main className="mainPage__wrapper">
            <div
              className={`mainPage__sections  mainPage__draw ${
                activeSection === 'draw' ? 'mainPage__sections--active' : ''
              }`}
            >
              <MainPageDraw />
            </div>
            <div
              className={`mainPage__sections  mainPage__types ${
                activeSection === 'types' ? 'mainPage__sections--active' : ''
              }`}
            >
              <MainPageTypes />
            </div>
            <div
              className={`mainPage__sections  mainPage__learn ${
                activeSection === 'learn' ? 'mainPage__sections--active' : ''
              }`}
            >
              <MainPageLearn />
            </div>
          </main>
          <nav className="mainPage__nav">
            <PageTypeButton
              className={
                activeSection === 'types' && 'mainPage__button--active'
              }
              value="Gatunki"
              onClick={() => {
                this.handleChangeSection('types');
              }}
            />
            <PageTypeButton
              className={activeSection === 'draw' && 'mainPage__button--active'}
              value="Zgadywanie"
              onClick={() => {
                this.handleChangeSection('draw');
              }}
            />
            <PageTypeButton
              className={
                activeSection === 'learn' && 'mainPage__button--active'
              }
              value="Nauka"
              onClick={() => {
                this.handleChangeSection('learn');
              }}
            />
          </nav>
        </>
      </MainLayout>
    );
  }
}

MainPage.propTypes = {
  activeSection: PropTypes.string,
};
MainPage.defaultProps = {
  activeSection: 'types',
};

export default MainPage;
