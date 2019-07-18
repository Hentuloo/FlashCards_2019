import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTypes } from 'actions';

import MainLayout from 'layouts/MainLayout';
import { ViewsMenuMobile } from 'components/organisms';

import Types from './Types';
import Draw from './Draw';
import Learn from './Learn';

const sections = ['types', 'draw', 'learn'];

class MainPage extends Component {
  state = {
    activeSection: 'types',
  };

  componentDidMount() {
    const { activeSection, fetchTypesAction } = this.props;
    fetchTypesAction();
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
            <ViewsMenuMobile
              activeSection={activeSection}
              action={this.handleChangeSection}
            />
          </nav>
        </>
      </MainLayout>
    );
  }
}

const mapDispatchToProps = { fetchTypesAction: fetchTypes };

MainPage.propTypes = {
  activeSection: PropTypes.string,
  fetchTypesAction: PropTypes.func.isRequired,
};
MainPage.defaultProps = {
  activeSection: 'types',
};

export default connect(
  null,
  mapDispatchToProps,
)(MainPage);
