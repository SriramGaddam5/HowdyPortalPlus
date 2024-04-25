const loginBackground = document.querySelector("#portalPageBody");
if (loginBackground) {
  loginBackground.style.backgroundImage = ""; // Remove the background image
  loginBackground.style.backgroundColor = "#eaeaea"; // Set the background color
}

const allBorders = document.querySelectorAll("div");
allBorders.forEach((border) => {
  border.style.borderRadius = "0";
  border.style.border = "none";
});

// change border roundness
const portlets = document.querySelectorAll("[id^='portlet_']"); // Select elements with ID starting with "portlet_"
portlets.forEach((portlet) => {
  portlet.style.boxShadow = "0 0 10px 0 rgba(0,0,0,.1)";
});

const portletTitle = document.querySelectorAll("[id^='toolbar_']"); // Select elements with ID starting with "toolbar_"
portletTitle.forEach((title) => {
  title.style.backgroundImage = "none";
  title.style.backgroundColor = "rgb(255, 255, 255)";
  title.style.borderRadius = "0";
  title.style.borderLeft = "1rem solid #003C71";

  const titleChild = title.querySelector("a");
  if (titleChild) {
    titleChild.style.color = "#500000";
    titleChild.style.fontWeight = "bold";
  }
});
