import React from "react";
import Item from "./Item";


class List extends React.Component{
    render() {
        return(
            <table className="table text-white mb-0">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task Name</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Time</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <Item />
            </table>
        )
    }
}

export default List;