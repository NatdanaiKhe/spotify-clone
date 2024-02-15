import "./Player.css";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import PlayIcon from "../assets/icons/Play.svg";
import ShuffleIcon from "../assets/icons/Button Suffle.svg";
import PreviousIcon from "../assets/icons/Previous Playlist.svg";
import NextIcon from "../assets/icons/Next Playlist.svg";
import RepeatIcon from "../assets/icons/Repeat.svg";
import SoundIcon from "../assets/icons/Sound On.svg";
import ListIcon from "../assets/icons/List.svg";
import MuteIcon from "../assets/icons/Mute.svg";
import PauseIcon from "../assets/icons/Pause.svg";
import my_music from "../assets/musics/MOLLY  PLAYBOI CARTI REMIX GUITAR.mp3";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState();
  const [volume, setVolume] = useState(0.1);
  const [play, { pause, duration, sound }] = useSound(my_music, {
    volume: volume,
  });
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });
  const mute = () => {
    if (volume === 0) {
      setVolume(0.1);
    } else {
      setVolume(0);
    }
  };

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min.toString(),
        sec: secRemain.toString(),
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min: min.toString(),
          sec: sec.toString(),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  return (
    <div className="player">
      <div className="detail">
        <div className="detail-container">
          {/* image  */}
          <div className="music-cover-wrapper">
            <img src="https://via.placeholder.com/56x56" />
          </div>
          {/* title */}
          <div className="song-detail">
            <div className="title">
              <span>Lorem</span>
            </div>
            <div className="encore-text">
              <span>Lorem</span>
            </div>
          </div>
          {/* like button */}
          <button className="heart-button">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.45657 1.24754C7.85098 1.08411 8.27372 1 8.70064 1C9.12757 1 9.55031 1.08411 9.94472 1.24754C10.3391 1.41093 10.6973 1.6504 10.9991 1.95228C11.301 2.25405 11.5406 2.6125 11.704 3.00684C11.8674 3.40125 11.9516 3.82399 11.9516 4.25091C11.9516 4.67784 11.8674 5.10058 11.704 5.49499C11.5406 5.88936 11.3011 6.24767 10.9992 6.54947C10.9992 6.54949 10.9992 6.54944 10.9992 6.54947L6.5792 10.9695C6.38394 11.1647 6.06735 11.1647 5.87209 10.9695L1.45209 6.54947C0.842478 5.93985 0.5 5.11304 0.5 4.25091C0.5 3.38879 0.842478 2.56197 1.45209 1.95236C2.06171 1.34275 2.88852 1.00027 3.75065 1.00027C4.61277 1.00027 5.43958 1.34275 6.0492 1.95236L6.22565 2.12881L6.40201 1.95244C6.40198 1.95247 6.40204 1.95241 6.40201 1.95244C6.7038 1.65053 7.0622 1.41095 7.45657 1.24754ZM8.70064 2C8.40508 2 8.11241 2.05823 7.83936 2.17137C7.56631 2.28451 7.31823 2.45034 7.10928 2.65938L6.5792 3.18947C6.38394 3.38473 6.06735 3.38473 5.87209 3.18947L5.34209 2.65947C4.92001 2.23739 4.34755 2.00027 3.75065 2.00027C3.15374 2.00027 2.58128 2.23739 2.1592 2.65947C1.73712 3.08154 1.5 3.654 1.5 4.25091C1.5 4.84782 1.73712 5.42028 2.1592 5.84236L6.22565 9.90881L10.2921 5.84236C10.5011 5.63341 10.667 5.38525 10.7802 5.11219C10.8933 4.83914 10.9516 4.54648 10.9516 4.25091C10.9516 3.95535 10.8933 3.66268 10.7802 3.38963C10.667 3.11658 10.5012 2.86849 10.2922 2.65955C10.0832 2.45051 9.83498 2.28451 9.56193 2.17137C9.28887 2.05823 8.99621 2 8.70064 2Z"
                  fill="#FCFCFC"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="control">
        <div className="control-button-group">
          <div className="control-left">
            <button className="control-button">
              <img src={ShuffleIcon} />
            </button>
            <button className="control-button">
              <img src={PreviousIcon} />
            </button>
          </div>
          <button className="control-button">
            <img
              src={isPlaying ? PauseIcon : PlayIcon}
              onClick={playingButton}
              style={{ fill: "white" }}
            />
          </button>
          <div className="control-right">
            <button className="control-button">
              <img src={NextIcon} />
            </button>
            <button className="control-button">
              <img src={RepeatIcon} />
            </button>
          </div>
        </div>
        <div className="playback-bar">
          <div className="playback-time">
            {currTime.min}:{currTime.sec}
          </div>
          <div className="playback-progress-wrapper">
            <input
              type="range"
              min={0}
              max={duration / 1000}
              value={seconds}
              className="playback-progress"
              onChange={e => {
                sound.seek([e.target.value as unknown as number]);
              }}
            />
          </div>
          <div className="playback-time">
            {time.min}:{time.sec}
          </div>
        </div>
      </div>
      <div className="option">
        <button className="control-button">
          <img src={ListIcon} />
        </button>
        <div className="volume-control">
          <button className="control-button" onClick={mute}>
            <img src={volume === 0 ? MuteIcon : SoundIcon} />
          </button>
          <div className="volume-bar">
            <div className="volume-progress">
              <input
                type="range"
                min={0}
                max={100}
                value={volume * 100}
                className="slider"
                step={1}
                onChange={e => {
                  console.log("volume e:", e.target.value);
                  console.log("volume:", e.target.value as unknown as number);
                  
                  setVolume(e.target.value as unknown as number / 100);
                }}
                id="volume-controller"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
