import "./MapView.css";
import { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";

const MapView = (props) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [long, setLong] = useState(-93.65);
    const [lat, setLat] = useState(42.02653);
    const [zoom, setZoom] = useState(14.8);

    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: "https://api.maptiler.com/maps/b3a3ff72-58c6-45c4-94b9-aea1b5b482e8/style.json?key=nsgkxLq2pn7VwkNHWDEJ",
            center: [long, lat],
            zoom: zoom
        });

    }, []);

    return (
        <div ref={mapContainer} style={{ width: "100vw", height: "100vh" }} />
    );
};
export default MapView;