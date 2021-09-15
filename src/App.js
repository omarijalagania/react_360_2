import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function App() {

  const useStyles = makeStyles({
    root: {
      maxWidth: 630,
      margin: "0 auto"
    },
  });
  
  const click = () => {
    console.log(getConfig());
  }
  const config = {
    autoLoad: true,
    scenes: {
      circle: {
          title: "Mason Circle",
          hfov: 110,
          pitch: -3,
          yaw: 117,
          type: "equirectangular",
          panorama: "/image/arrow-up-circle-outline.svg",
          
      },
      
    },
    hotSpots: [
      {
          pitch: 2.1,
          yaw: 102.9,
          type: "scene",
          text: "გადასვლა ბუჩკებში",
          sceneId: "house"
      }
    ]
  }
  const classes = useStyles();

 

  return (
    
    <Card className={classes.root}>
        <CardContent>
          <ReactPannellum
                  id="1"
                  sceneId="firstScene"
                  imageSource="/image/PANO_20160611_163006.jpg"
                  config={config}
                />
                 
                
                <div onClick={click}>Click me for Properties</div>
                <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          </CardContent>
    </Card>
    
  );

}



export default App;
