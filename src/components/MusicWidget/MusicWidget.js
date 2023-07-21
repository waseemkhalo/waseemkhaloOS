import "./MusicWidget.scss";
import kissland from "../../assets/music/kissland-cover.png";
import kisslandsong from "../../assets/music/kissland.mp3";
import React, { useEffect, useRef, useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import fastforward from "../../assets/icons/fastforward.svg";
import rewind from "../../assets/icons/rewind.svg";
import { grey } from "@mui/material/colors";

function MusicWidget() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
  };

  useEffect(() => {

    const audioElement = audioRef.current;

    // Update progress bar as song plays
    const updateProgress = () => {
      const audioElement = audioRef.current;
      const currentTime = audioElement.current.currentTime;
      const duration = audioElement.current.duration;
      const progressPercent = (currentTime / duration) * 100;
      setProgress(progressPercent);
      setDuration(currentTime);
    };

    audioElement.current.addEventListener("timeupdate", updateProgress);

    // Cleanup function to remove event listener
    return () => {
      const audioElement = audioRef.current;
      audioElement.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  // Play or pause the audio
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Rewind 15 seconds
  const rewind15Seconds = () => {
    audioRef.current.currentTime -= 15;
  };

  // Fast forward 15 seconds
  const fastForward15Seconds = () => {
    audioRef.current.currentTime += 15;
  };

  return (
    <div className="music">
        <div className="music__details">
          <img className="music__cover" src={kissland} alt="kissland album cover" />
          <div className="music__container">
            <h1 className="music__song">Kiss Land</h1>
            <h2 className="music__song-details">Kiss Land • The Weeknd</h2>
          </div>
      </div>

      <div className="music__player">
        <audio ref={audioRef} src={kisslandsong} />

        <div className="controls__progress">
          <button className="controls__button" onClick={rewind15Seconds}>
            <img src={rewind} alt="rewind button" />
          </button>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <button className="controls__button" onClick={fastForward15Seconds}>
            <img src={fastforward} alt='fast forward button'/>
          </button>

          <p className="controls__time">{formatTime(duration)}</p>

          <button className="controls__button" onClick={togglePlay}>
            {isPlaying ? (
              <PauseCircleFilledIcon
                fontSize="large"
                sx={{ color: grey[50] }}
              />
            ) : (
              <PlayCircleFilledIcon fontSize="large" sx={{ color: grey[50] }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MusicWidget;
