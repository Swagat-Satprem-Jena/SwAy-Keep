import React, { useState } from "react";
import './AddNote.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import TaskArr from "./TaskArr";

const AddNote = () => {

    const [task, updTask] = useState({ title: '', work: '' });
    const [arr, updArr] = useState(TaskArr);

    const expand = () => {
        const titEl = document.getElementById('exampleFormControlInput1');
        const btnEl = document.getElementById('btn-div-id');
        titEl.style.display = 'block';
        btnEl.style.display = 'inline-block';
    }

    const chngTask = (event) => {
        updTask((prevTask) => {
            return { ...prevTask, [event.target.name]: event.target.value };
        })
    }

    const addTask = () => {
        updArr((prevArr) => {
            return [...prevArr, { title: task.title, work: task.work }];
        })
        updTask({title : '', work : ''});
    }
    const dltTask = (id) => {
        updArr((prevArr) => {
            return prevArr.filter((value, index) => {
                return index !== id;
            });
        })
    }

    const Task = (props) => {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.work}</p>
                        <div className="dlt-btn">
                            <IconButton aria-label="delete" size="small" onClick={() => props.onSelect(props.id)}>
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="center-add-note-div">
                <div className="fit-add-note">
                    <div class="mb-3">
                        <input type="text" class="form-control tit-ar flt-txt" id="exampleFormControlInput1" placeholder="Title" onChange={chngTask} value={task.title} name='title' />
                    </div>

                    <div class="mb-3">
                        <textarea class="form-control flt-txt txt-ar" placeholder="Write Something" id="exampleFormControlTextarea1" onClick={expand} onChange={chngTask} value={task.work} name='work'></textarea>
                        <div className="add-btn-div">
                            <div className="add-btn" id="btn-div-id">
                                <IconButton aria-label="add" size="small" onClick={addTask}>
                                    <AddIcon fontSize="inherit" />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="display-task-div">
                {arr.map((value, index) => {
                    return <Task key={index} id={index} work={value.work} title={value.title} onSelect={dltTask}></Task>
                })}
            </div>
        </>
    );
}

export default AddNote;