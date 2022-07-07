import React,{useEffect,useRef} from 'react';
import { loadModules } from 'esri-loader';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Map(props){

    const MapE1e = useRef(null);
    useEffect(() => {
   
        let view;
        loadModules(["esri/views/MapView", "esri/WebMap"],{
            css:true
        }).then(([MapView, WebMap])=>{

            const wmap = new WebMap({
                basemap: "satellite"
              });
            view = new MapView({
                map: wmap,
                container:MapE1e.current
            })

            view.scale = 24000;
            view.center = [-112, 38];  // Sets the center point of the view at a specified lon/lat
            view.zoom = 13;  // Sets the zoom LOD to 13
        })
        return()=>{
        if(!!view){
            view.destrow()
            view=null
        }
    }
})
    return(
        <div style={{height:800}} ref={MapE1e}>

            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Your Citie"  value={props.value} />
           
            </Form.Group>

            <Button onClick={props.onClick} variant="success" type="submit" value={props.value}>
             Suchen
            </Button>
            </Form>


        </div>   

    )

}

export default Map;
