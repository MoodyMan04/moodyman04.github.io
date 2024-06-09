import React from "react";

// Method for scrolling to an element based on the id of the element
export function scrollToElement(id: string) {
  return (event: React.MouseEvent) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
}
