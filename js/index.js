var params = {
    lines: [
        {
            background: 'red',
            updateTime: 1000,
            elements: [
                {
                    background: getRandomColor(),
                    width: 25
                },
                {
                    background: getRandomColor(),
                    width: 50
                },
                {
                    background: getRandomColor(),
                    width: 25
                }
            ]
        },
        {
            background: 'yellow',
            updateTime: 1000,
            elements: [
                {
                    background: getRandomColor(),
                    width: 25
                },
                {
                    background: getRandomColor(),
                    width: 50
                },
                {
                    background: getRandomColor(),
                    width: 25
                }
            ]
        },
        {
            background: 'green',
            updateTime: 1000,
            elements: [{
                background: getRandomColor(),
                width: 25
            },
                {
                    background: getRandomColor(),
                    width: 50
                },
                {
                    background: getRandomColor(),
                    width: 25
                }]
        }]
};

params.lines.forEach(({ background, elements }) => {
    const lineToAdd = document.createElement('div');
    for (let index = 0; index < 3; index++) {
        lineToAdd.appendChild(document.createElement('div'));
    }

    const firstColumn = lineToAdd.getElementsByTagName('div')[0];
    firstColumn.setAttribute('style', `
            float: left;
            width: ${elements[0].width}%;
            background-color: ${elements[0].background};
            height: ${window.innerHeight / params.lines.length}px
        `);
       

    const secondColumn = lineToAdd.getElementsByTagName('div')[1];
    secondColumn.setAttribute('style', `
            float: left;
            width: ${elements[1].width}%;
            background-color: ${elements[1].background};
            height: ${window.innerHeight / params.lines.length}px
        `);

    const thirdColumn = lineToAdd.getElementsByTagName('div')[2];
    thirdColumn.setAttribute('style', `
            float: left;
            width: ${elements[2].width}%;
            background-color: ${elements[2].background};
            height: ${window.innerHeight / params.lines.length}px
        `);

    document.body.appendChild(lineToAdd)
});

window.onload = setupRefresh;

function setupRefresh() {
    setTimeout("refreshPage();", 3000); // milliseconds
}
function refreshPage() {
    window.location = location.href;
}

function getRandomColor(updateTime) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}