import React, {useEffect, useState} from "react";
import {httpGet} from "../../api/base-service";

const Item = () => {
    // array listTodo and set value in listTodo
    const [listToDo, setListToDo] = useState([
    ]);

    //call api get listtodo
    useEffect(() => {
        httpGet("/api/TodoItems/")
            .then((res) => {
                setListToDo(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    //check status task: 1 = Low priority, , 2= Middle priority, 3 = High priority
    function showStatus(status) {
        let elmStatus = null;
        if (status === "1") {
            elmStatus = <span className="badge bg-success">Low priority</span>;
        } else if ( status === "2") {
            elmStatus = <span className="badge bg-warning">Middle priority</span>;
        } else if ( status === "3") {
            elmStatus = <span className="badge bg-danger">High priority</span>;
        }
        return elmStatus;
    }
    return (
        <tbody>
            {listToDo.map((list) => (
                <tr className="fw-normal">
                    <td>
                        <span className="ms-2">{list.id}</span>
                    </td>
                    <td className="align-middle">{list.taskName}</td>
                    <td className="align-middle">
                        <h6 className="mb-0">{showStatus(list.status)}</h6>
                    </td>
                    <td className="align-middle"><span className="badge bg-black text-end">{list.time}</span></td>
                    <td className="align-middle">
                        <a href="" data-mdb-toggle="tooltip" title="Done"><i
                            className="fas fa-pencil fa-lg text-success me-3"></i></a>
                        <a href="" data-mdb-toggle="tooltip" title="Remove"><i
                            className="fas fa-trash-alt fa-lg text-warning"></i></a>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default Item;