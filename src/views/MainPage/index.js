import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTypes } from 'actions';

import MainLayout from 'layouts/MainLayout';
import { NavForMobile, Helmet } from 'components/organisms';

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
      <>
        <Helmet
          description="Przyjemna nauka dowolnego języka"
          keywords="fiszki online nauka angielskiego zgadywanie słów"
          title="Fiszki online"
        />
        <MainLayout>
          <>
            <main className="main__wrapper">
              <section
                className={`main__section  main__draw 
              ${activeSection === 'draw' ? 'main__section--active' : ''}`}
              >
                <Draw />
              </section>
              <section
                className={`main__section  main__types 
              ${activeSection === 'types' ? 'main__section--active' : ''}`}
              >
                <Types />
              </section>
              <section
                className={`main__section  main__learn 
              ${activeSection === 'learn' ? 'main__section--active' : ''}`}
              >
                <Learn />
              </section>
            </main>
            <nav className="main__navForMobile">
              <NavForMobile
                activeSection={activeSection}
                action={this.handleChangeSection}
              />
            </nav>
          </>
        </MainLayout>
      </>
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
