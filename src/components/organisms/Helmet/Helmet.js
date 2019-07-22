import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import Favico from 'asset/favicon.ico';

const Seo = ({ description, keywords, title }) => {
  return (
    <Helmet>
      <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="index" title="Strona główna" href="#" />
      <title>{title}</title>
      <link rel="shortcut icon" type="image/png" href={Favico} />
    </Helmet>
  );
};
Seo.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string,
};
Seo.defaultProps = {
  description: 'Przyjemna nauka dowolnego języka',
  keywords: 'fiszki online nauka angielskiego zgadywanie słów',
  title: 'Nauka angielskiego',
};

export default Seo;
