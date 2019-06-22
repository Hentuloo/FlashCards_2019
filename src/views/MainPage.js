import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'layouts/MainLayout';
import PageTypeButton from 'components/atoms/PageTypeButton/PageTypeButton';

const sections = ['types', 'draw', 'learn'];

class MainPage extends Component {
  state = {
    activeSection: 'types',
  };

  handleChangeSection = string => {
    const { activeSection } = this.props;
    if (sections.includes(string) && string !== activeSection) {
      this.setState({ activeSection: string });
    }
  };

  render() {
    const { activeSection } = this.state;
    return (
      <MainLayout>
        <>
          <main>
            {activeSection === 'draw' && (
              <div className="mainPage__sections  mainPage__draw">
                Tu jest losowanie
              </div>
            )}
            {activeSection === 'types' && (
              <div className="mainPage__sections  mainPage__types">tu typy</div>
            )}
            {activeSection === 'learn' && (
              <div className="mainPage__sections  mainPage__learn">
                tu jest do nauki
              </div>
            )}
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
