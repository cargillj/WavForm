import React, { PropTypes } from 'react';
import Rcslider from 'rc-slider';
import styles from './styles.css';

function Home({setVolume}) {
  function onVolumeChange(val) {
    console.log(val); 
    setVolume(val);
  }

  return (
    <div>
      <link rel="stylesheet" href="../../../node_modules/rc-slider/assets/index.css" />
      <h3>Module Select Component</h3>
      <div className={styles.volumeContainer}>
        <h5>Volume</h5>
        <Rcslider 
          min={0}
          max={1}
          step={0.01}
          onChange={onVolumeChange}
        />
      </div>
    </div>
  );
}

Home.propTypes = {
  setVolume: PropTypes.func.isRequired,
}


export default Home;
