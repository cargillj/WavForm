import React, { Component, PropTypes } from 'react';
import Rcslider from 'rc-slider';
import styles from './styles.css';

class Home extends Component {
  onVolumeChange(val) {
    this.props.setVolume(val);
  }

  render() {
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
            onChange={(val) => {this.onVolumeChange(val)}}
            value={this.props.settings.volume}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  setVolume: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
}


export default Home;
