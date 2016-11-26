// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import ReactAudioPlayer from 'react-audio-player';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Welcome to WavForm</h1>
          <ReactAudioPlayer
            src="../../../../../../Downloads/Dan Carlins Hardcore History/dchha01 Alexander versus Hitler.mp3"
            ref={c => { 
                this.rap = c
                this.rap.audioEl.volume = 0.3
              }
            }
          />
        </div>
      </div>
    );
  }
}
