const colorByStatus = {
    "open": "#08D192",
    "default": "#979D8C",
}

const Table = (props) => {


    return <div className="table" style={{
        left: props.pos[0] * 2.5+ "vw",
        top: props.pos[1] * 2.5 + "vw",
        backgroundColor: colorByStatus[props.status]
    }}>
    </div>
}

export default Table;