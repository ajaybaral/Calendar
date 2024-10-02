import React, { useState } from 'react';
import axios from 'axios';


const TaskForm = () => {
    const [task, setTaskState] = useState({
        title: '',
        date: '',
        category: 'exam', // default category
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Task added:', task);
        await axios
        .post("http://localhost:8000/api/addTask", task)
        .then((response) => {
          toast.success(response.data.message, { position: "top-right" });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });

        
       
    };

    return (
        <div className="flex justify-around p-8  ">
            <div className="p-6 rounded-lg shadow-lg w-full  bg-white">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Add Task</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={task.title}
                        onChange={(e) => setTaskState({ ...task, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                        type="date"
                        value={task.date}
                        onChange={(e) => setTaskState({ ...task, date: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <select
                        value={task.category}
                        onChange={(e) => setTaskState({ ...task, category: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        <option value="exam">Exam</option>
                        <option value="submission">Submission</option>
                        <option value="event">Event</option>
                    </select>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;
