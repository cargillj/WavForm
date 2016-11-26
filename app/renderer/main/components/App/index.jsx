// @flow
import React, { PropTypes } from 'react';
import styles from './styles.css';

function App({ children, settings }) {
  return (
    <div className={styles.container}>
      {children}   
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired
};


export default App;
