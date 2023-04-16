import "./MapView.css";
import { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import { halls } from "../../scripts/halls";

const MapView = (props) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [long, setLong] = useState(-93.65);
    const [lat, setLat] = useState(42.02653);
    const [zoom, setZoom] = useState(14.8);

    function rotateCamera(timestamp) {
        map.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
        requestAnimationFrame(rotateCamera);
    }

    function rotateCamera(timestamp) {
        // clamp the rotation between 0 -360 degrees
        // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
        map.rotateTo((timestamp / 100) % 360, { duration: 0 });
        // Request the next frame of the animation.
        requestAnimationFrame(rotateCamera);
    }

    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: "https://api.maptiler.com/maps/b3a3ff72-58c6-45c4-94b9-aea1b5b482e8/style.json?key=nsgkxLq2pn7VwkNHWDEJ",
            center: [long, lat],
            zoom: zoom
        });
        Object.entries(halls).map(([k, v], i) => {
            new maplibregl.Marker().setLngLat([v.coords[1], v.coords[0]]).addTo(map.current);
        })
    }, []);

    useEffect(() => {
        if (props.loc == null) {
            map.current.flyTo({
                center: [long, lat],
                zoom: zoom,
                pitch: 0,
                bearing: 0,
            })
        } else {
            const coords = halls[props.loc].coords;
            map.current.flyTo({ 
                center: [coords[1], coords[0]],
                zoom: 17.85,
                pitch: 60,
                bearing: 0,
            })
        }
    }, [props.loc])

    return (
        <div ref={mapContainer} style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0 }} />
    );
};
export default MapView;