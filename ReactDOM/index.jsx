const container = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(container);
const source = "https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?t=st=1788839446~exp=1788843046~hmac=dbf1fb85382b9a244b1b396db772a30b8c476a428a64c3e5d2a62cd5d350043f&w=2000"
const h2 = React.createElement('h2',{style:{color:"red"}},"hello");
const image1 = React.createElement('img',{src:source, style:{height:"100px",width:"100px"}})
const text2 = React.createElement('h2',{style:{color:"greenyellow"}},"ABES ENGINEERING COLLEGE");


const text3 = <h2> Hey my name is Raj</h2>
const div_container = React.createElement('div',{style:{padding:"20px",border:"2px red solid"}},h2,text2,image1,text3);
const div = <div>{div_container}</div>
reactRoot.render(div);