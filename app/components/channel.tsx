"use client";

import React, { useState } from "react";

/* 
Component for the display of the buttons to change the channel, as well as handling the functionality of channels.
*/
export default function Channel() {
  // Constant for number of channels for website (When adding a channel, change this value).
  const numChannel: number = 4;

  // Constants for current channel (channels go from 00 - 06), and if video is muted.
  const [currChannel, setCurrChannel] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Methods to increment and decrement channels, as well as toggle audio.
  const incrementChannel = () => {
    setCurrChannel((prev) => (prev + 1) % (numChannel + 1));
  };

  const decrementChannel = () => {
    setCurrChannel((prev) => prev - 1);
    if (currChannel <= 0) setCurrChannel(numChannel);
  };

  const changeMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div>
      <br className="my-1 md:hidden" />
      <div className="float-left md:float-right flex add-margin md:no-margin blur">
        <button
          className="hover:text-blue-400 pr-2 md:px-2 ml-4 md:ml-0 xl:mr-2 chromatic"
          onClick={() => decrementChannel()}
        >
          <h2>&lt;</h2>
        </button>
        <p className="mx-1.5 xl:mx-2 chromatic" id="channelNum">
          Channel 0{currChannel}
        </p>
        <button
          className="hover:text-blue-400 pl-2 md:px-2 md:mr-6 xl:mx-2 chromatic"
          onClick={() => incrementChannel()}
        >
          <h2>&gt;</h2>
        </button>
      </div>
      <br className="my-1 md:hidden" />
      <div className="float-left md:float-right flex add-margin md:no-margin blur">
        <button
          className={`hover:text-blue-400 mx-4 md:mx-2 ${
            isMuted ? "text-red-400 line-through" : ""
          } chromatic`}
          onClick={() => changeMute()}
        >
          <h2>Audio</h2>
        </button>
      </div>
      <ChannelVideo currChannel={currChannel} isMuted={isMuted} />
    </div>
  );
}

// Helping function components for channel videos
function ChannelVideo({
  currChannel,
  isMuted,
}: {
  currChannel: number;
  isMuted: boolean;
}) {
  return (
    <div>
      <video
        className="channel-videos"
        id={`channel-0${currChannel}`}
        src={`videos/channel-0${currChannel}.mp4`}
        muted={isMuted}
        poster="loading.gif"
        autoPlay
        loop
      ></video>
    </div>
  );
}
