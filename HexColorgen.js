let main = document.querySelector("main");
const input = document.querySelector(".input");

const button = document.querySelector(".button");
button.addEventListener("click", generateDivs);

function getColor() {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
}

function generateDivs(number) {
  number = input.value;

  for (let i = 0; i < number; i++) {
    let colorDiv = document.createElement("div");
    let color = getColor();
    main.appendChild(colorDiv);
    colorDiv.classList.add("colorDiv-style");
    colorDiv.innerHTML = "";

    colorDiv.style.background = color;
    colorDiv.innerHTML = color;
    colorDiv.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
    });

    main.appendChild(colorDiv);
  }
}
