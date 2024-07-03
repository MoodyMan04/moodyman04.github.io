import React from "react";

// Logic for dealing with channels

// Channel number variable (can be channel 0 - channel 6, loops onward or backward)
export var channelNum: number = 0;

// Method for incrementing the channel num, done by '>' button
export function channelNumForward() {
  return (event: React.MouseEvent) => {
    channelNum++;
    if (channelNum >= 7) {
      channelNum = 0;
    }
    document.getElementById("channelNum")!.innerHTML = "Channel 0".concat(
      String(channelNum)
    );
    setVideo(channelNum);
  };
}

export function channelNumBackward() {
  return (event: React.MouseEvent) => {
    channelNum--;
    if (channelNum <= -1) {
      channelNum = 6;
    }
    document.getElementById("channelNum")!.innerHTML = "Channel 0".concat(
      String(channelNum)
    );
    setVideo(channelNum);
  };
}

/* 
Method for setting the background video based on the channel number
This method is called whenever the channelNum is increased or decreased
*/
function setVideo(channelNum: number) {
  // LOGIC FOR CHANGING THE CHANNEL VIDEO HERE
}
