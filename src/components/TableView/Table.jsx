import {DataAccessService} from "../../Backend/DataAccessService";
import {useEffect, useState} from "react";
import {doc, onSnapshot} from "firebase/firestore";

const Table = (props) => {
    const [myData, changeMyData] = useState({})
    const [isDataLoaded, changeDataStatus] = useState(false)
    useEffect(() => {
        (async () => {
           await DataAccessService.GetTable(props.id, changeMyData)
        })().then(() => {
            changeDataStatus(true);
        })
        // DataAccessService.AddTable(props.id, props.pos[0] ,props.pos[1]).then(console.log)
    }, [myData])

    // const colorByStatus = {
    //     true: ",
    //     false: ,
    // }

    if(!isDataLoaded){
        return null
    }
    return <div className="table" onClick={props.onclick} style={{
        left: props.pos[0] * 3 + "vw",
        top: props.pos[1] * 3 + "vw",
        backgroundColor: (myData?.inUse ?? false) ? "#11F2A0" : "#9AA396"
    }}>
    </div>
}

export default Table;