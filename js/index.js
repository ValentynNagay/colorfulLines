const data = {
    lines: [
      {
        background: "#00f",
        updateTime: 1000,
        elements: [
          {
            background: "#00f",
            width: 25
          },
          {
            background: "#f00",
            width: 50
          },
          {
            background: "#0f0",
            width: 25
          }
        ]
      },
      {
        background: "#000",
        updateTime: 700,
        elements: [
          {
            background: "#000",
            width: 70
          },
          {
            background: "palevioletred",
            width: 30
          }
        ]
      },
      {
        background: "#0f0"
      }
    ]
  };

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
  const setRandomColor = (element, interval = 500) => {
    setInterval(() => {
      element.style.backgroundColor = getRandomColor();
    }, interval);
  };
  
  data.lines.forEach(({ elements, background, updateTime }) => {
    const lineToAdd = document.createElement("div");
  
    lineToAdd.setAttribute(
      "style",
      `
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: ${window.innerHeight / data.lines.length}px;
      background-color: ${background};
      transition: background-color .3s ease-in-out;
    `
    );
  
    if (elements) {
      elements.forEach(({ background: subDivBackground, width }) => {
        const subDiv = document.createElement("div");
        subDiv.setAttribute(
          "style",
          `
          height: 100%;
          width: ${width}%;
          background-color: ${subDivBackground};
          transition: background-color .3s ease-in-out;
        `
        );
  
        lineToAdd.appendChild(subDiv);
        setRandomColor(subDiv, updateTime);
      });
    }
  
    document.body.appendChild(lineToAdd);
    setRandomColor(lineToAdd, updateTime);
  });