const container = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(container);

const h2 = React.createElement('h2',{style:{color:"red"}},"hello");

reactRoot.render(h2);