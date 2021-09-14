import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";



function App() {

  const click = () => {
    console.log(getConfig());
  }
  const config = {
    autoRotate: -2,
  };
  return (
    
    <div>
       <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource="/image/PANO_20160611_163006.jpg"
          config={config}
        />
        <div onClick={click}>Click me</div>
    </div>
  );
}

export default App;
