import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import ReactAudioPlayer from 'react-audio-player';


class Home extends Component {

  componentDidMount() {
    this.rap.audioEl.volume = this.props.settings.volume
    this.rap.audioEl.addEventListener("volumechange",() => {
      this.props.setVolume(this.rap.audioEl.volume)
    });
  }

  componentDidUpdate() {
    this.rap.audioEl.volume = this.props.settings.volume
  }


  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Welcome to WavForm</h1>
          <ReactAudioPlayer
            src="http://www.bensound.org/bensound-music/bensound-goinghigher.mp3"
            ref={c => { this.rap = c }}
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
