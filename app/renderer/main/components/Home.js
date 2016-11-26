// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import ReactAudioPlayer from 'react-audio-player';


export default class Home extends Component {
  componentDidMount() {
    this.rap.audioEl.volume = 0.5
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Welcome to WavForm</h1>
          <ReactAudioPlayer
            src="http://www.bensound.org/bensound-music/bensound-goinghigher.mp3"
            ref={c => { 
                this.rap = c
              }
            }
          />
        </div>
      </div>
    );
  }
}
