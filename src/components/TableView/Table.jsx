import {DataAccessService} from "../../Backend/DataAccessService";
import {useEffect} from "react";

const colorByStatus = {
    "open": "#11F2A0",
    "default": "#9AA396",
}

const Table = (props) => {
    useEffect(() => {

        // DataAccessService.AddTable(props.id, props.pos[0] ,props.pos[1]).then(console.log)
    })

    return <div className="table" onClick={props.onclick} style={{
        left: props.pos[0] * 3 + "vw",
        top: props.pos[1] * 3 + "vw",
        backgroundColor: colorByStatus[props.status]
    }}>
    </div>
}

export default Table;