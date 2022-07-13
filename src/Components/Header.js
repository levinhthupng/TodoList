import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="text-center pt-3 pb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                     alt="Check" width="60"/>
                    <h2 className="my-4">Task List</h2>
            </div>
        )
    }
}

export default Header;