import './App.css';
import React from "react";
import Header from "./Components/Header";
import List from "./Components/ListTodo/List";
import Function from "./Components/Function";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        }
    }
    handleToggleForm = () => {
        this.setState({
            showForm: !this.state.showForm,
            itemSelected: null
        })
    }

    render() {
        return (
            <div className="App">
                <section className="vh-100 gradient-custom-2">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-12 col-xl-10">
                                <div className="card mask-custom">
                                    <div className="card-body p-4 text-white">
                                        <div className="text-center pt-3 pb-2">
                                            <Header/>
                                            <Function
                                                onClickAdd={this.handleToggleForm}
                                            />
                                            <List/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;