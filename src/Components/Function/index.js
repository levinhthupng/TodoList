import React from "react";
import AddItem from "./AddItem";
import FormAdd from "./FormAdd";

const Function = () => {
    const {isShowing, toggle} = AddItem();
    return (
        <nav className="navbar d-block navbar-expand-lg">
            <div className="row m-0 ">
                <div className="col-12 col-sm-6 col-lg-2 order-3 order-sm-1">
                    <button onClick={toggle} type="button"
                            className="btn btn-outline-info my-2 my-sm-0 btn-block" data-toggle="modal"
                            data-target="#exampleModal">Add Item
                    </button>
                    <FormAdd
                        isShowing={isShowing}
                        hide={toggle}
                    />
                </div>

            </div>
        </nav>
    )
}

export default Function;