import "./TableView.css";
import Table from "./Table";
import {useEffect, useState} from "react";
import TableModal from "./TableModal";

const tables = [
  {
    id: "1",
    status: "open",
  },
  {
    id: "2",
    status: "default"
  },
  {
    id: "3",
    status: "default"
  },
  {
    id: "4",
    status: "default"
  },
  {
    id: "5",
    status: "default"
  },
  {
    id: "6",
    status: "default"
  },
  {
    id: "7",
    status: "default"
  },
  {
    id: "8",
    status: "default"
  },
  {
    id: "9",
    status: "default"
  },
  {
    id: "10",
    status: "default"
  },
  {
    id: "11",
    status: "default"
  },
  {
    id: "12",
    status: "default"
  },
  {
    id: "13",
    status: "default"
  },
  {
    id: "14",
    status: "default"
  },
  {
    id: "15",
    status: "open"
  },
  {
    id: "16",
    status: "default"
  },
]

const positionById = {
    "1": [4, 8],
    "2": [8, 8],
    "3": [10, 8],
    "4": [12, 8],
    "5": [9, 8],
    "6": [11, 8],
    "7": [2, 3],
    "8": [4, 5],
    "9": [5, 5],
    "10": [8, 4],
    "11": [8, 2],
    "12": [8, 5],
    "13": [3, 5],
    "14": [8, 3],
    "15": [1, 5],
    "16": [2, 5]

}

const TableView = (props) => {
    const [selectedTableId, changeSelectedTableId] = useState(null)

    const handleClick = (id) => {
        changeSelectedTableId(id)
    }

    const handleClose = () => {
        changeSelectedTableId(null);
    };

    return (
        <div className="table-view">
            {
                tables.map((value, i) =>
                    <Table key={i} id={value.id} pos={positionById[value.id]} status={value.status}
                           onclick={() => handleClick(value.id)}/>
                )
            }
            {selectedTableId && (
                <TableModal
                    show={true}
                    handleClose={handleClose}
                    tableId={selectedTableId}
                />
            )}
        </div>);
};

export default TableView;
