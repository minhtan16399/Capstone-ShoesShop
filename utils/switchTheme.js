
function addDarkmodeWidget() {
    const options = {
        label: '🌓', // default: ''
    };
    new Darkmode(options).showWidget();
};

window.addEventListener('load', addDarkmodeWidget);