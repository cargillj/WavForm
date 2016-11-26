import React from 'react';
import styles from './styles.css';
import ReactAudioPlayer from 'react-audio-player';

function Home() {
  return (
    <div>
      <div className={styles.container}>
        <h1>Welcome to WavForm</h1>
        <ReactAudioPlayer
          src="http://www.bensound.org/bensound-music/bensound-goinghigher.mp3"
          ref={((c) => { this.rap = c })()}
        />
      </div>
    </div>
  );
}

export default Home;
