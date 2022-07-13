import React from 'react';

const FormAdd = ({isShowing, hide}) => isShowing ? (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">AddItem</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">Task Name:</label>
                            <input type="text" className="form-control" id="taskname"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message-text" className="col-form-label">Status:</label>
                            <div className="text-center">
                                <select value="" onChange="" name="task_level" className="form-control">
                                    <option value={0}>High priority</option>
                                    <option value={1}>Low priority</option>
                                    <option value={2}>Middle priority</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">AddItem</button>
                </div>
            </div>
        </div>
    </div>
) : null;

export default FormAdd;