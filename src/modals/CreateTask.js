import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { toast } from 'react-toastify';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)
    }

    toast.configure()
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            <div class="ui form">
                <div class="field">
                    <label>Task Name</label>
                        <textarea rows="2" value = {taskName} onChange = {handleChange} name = "taskName"></textarea>
                </div>

                <div class="field">
                    <label>Description</label>
                        <textarea value = {description} onChange = {handleChange} name = "description"></textarea>
                </div>
            </div>
        
            </ModalBody>
            <button class="ui inverted green button" onClick={handleSave}>Create</button>{' '}
            <button class="ui inverted red button" onClick={handleSave}>Cancel</button>{' '}
      </Modal>
    );
};

export default CreateTaskPopup;