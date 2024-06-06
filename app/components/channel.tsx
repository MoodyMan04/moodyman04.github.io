import React from "react";

// Logic for dealing with channels

export var channelNum: number = 0;

export function channelNumForward() {
  return (event: React.MouseEvent) => {
    channelNum++;
    if (channelNum >= 7) {
      channelNum = 0;
    }
    document.getElementById("channelNum")!.innerHTML = "Channel ".concat(
      String(channelNum)
    );
    document
      .getElementById("channelNum")!
      .setAttribute("data-text", "Channel ".concat(String(channelNum)));
  };
}

export function channelNumBackward() {
  return (event: React.MouseEvent) => {
    channelNum--;
    if (channelNum <= -1) {
      channelNum = 6;
    }
    document.getElementById("channelNum")!.innerHTML = "Channel ".concat(
      String(channelNum)
    );
    document
      .getElementById("channelNum")!
      .setAttribute("data-text", "Channel ".concat(String(channelNum)));
  };
}
