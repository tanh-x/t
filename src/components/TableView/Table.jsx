const colorByStatus = {
    "open": "#11F2A0",
    "default": "#9AA396",
}

const Table = (props) => {


    return <div className="table" style={{
        left: props.pos[0] * 3 + "vw",
        top: props.pos[1] * 3 + "vw",
        backgroundColor: colorByStatus[props.status]
    }}>
    </div>
}

export default Table;