import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'layouts/MainLayout';
import TypesMenuMobile from 'components/organisms/TypesMenuMobile/TypesMenuMobile';

import Types from './Types';
import Draw from './Draw';
import Learn from './Learn';

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
          <main className="MP__wrapper">
            <div
              className={`MP__section  MP__draw 
              ${activeSection === 'draw' ? 'MP__section--active' : ''}`}
            >
              <Draw />
            </div>
            <div
              className={`MP__section  MP__types 
              ${activeSection === 'types' ? 'MP__section--active' : ''}`}
            >
              <Types />
            </div>
            <div
              className={`MP__section  MP__learn 
              ${activeSection === 'learn' ? 'MP__section--active' : ''}`}
            >
              <Learn />
            </div>
          </main>
          <nav className="MP__sectionNav_Mobile">
            <TypesMenuMobile
              activeSection={activeSection}
              action={this.handleChangeSection}
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
