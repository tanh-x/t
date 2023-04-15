import "./MapView.css";

const MapView = (props) => {
    return (
        <div className="osm-iframe">
            <iframe
                style={{ width: "100vw", height: "100vh" }}
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-93.661848084795%2C42.02137874987738%2C-93.63410331474495%2C42.032560237415204&amp;layer=mapnik" />
            <br />
        </div>
    );
};

export default MapView;