// Method for scrolling to an element based on the id of the element, or jumping to the element if on another page
export function scrollToElement(id: string) {
  return (event: React.MouseEvent) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };
}
