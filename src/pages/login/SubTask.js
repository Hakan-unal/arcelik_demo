import React, { useEffect, useState } from 'react';
import { Button, Input, Checkbox } from "antd";



const SubTask = (props) => {
    const [isFirstPage, setIsFirstPage] = useState(true)

    const [tasks, setTasks] = useState([])
    const [subTasks, setSubTasks] = useState([])
    const [uniqueSubTasks, setUniqueSubTasks] = useState([])

    const [taskInput, setTaskInput] = useState("")
    const [activeTaskId, setActiveTaskId] = useState(null)

    const [subTaskInput, setSubTaskInput] = useState("")



    const loading = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks"))
        const subTasks = JSON.parse(localStorage.getItem("subTasks"))

        if (tasks === null) setTasks([])
        else setTasks(tasks)
        if (subTasks === null) setSubTasks([])
        else setSubTasks(subTasks)

    }

    const handleGetSubtaskCount = (taskID) => {
        const tempArr = subTasks.filter(data => data.taskID === taskID && data.check === false)
        return tempArr.length

    }

    const handleTaskDetail = (id) => {
        setIsFirstPage(false)
        setActiveTaskId(id)
        const tempArr = subTasks.filter(data => data.taskID === id)
        setUniqueSubTasks(tempArr)
    }

    const handleSaveTask = () => {
        const tempArr = [...tasks];
        const obj = {
            id: parseInt(Math.random() * 1000000),
            name: taskInput,
        }
        tempArr.push(obj)
        setTasks(tempArr)
        localStorage.setItem("tasks", JSON.stringify(tempArr))
        setTaskInput("")
    }

    const handleSaveSubTask = () => {
        const tempArr = [...subTasks];
        const uniqueTempArr = [...uniqueSubTasks];

        const obj = {
            id: parseInt(Math.random() * 1000000),
            name: subTaskInput,
            taskID: activeTaskId,
            check: false
        }
        tempArr.push(obj)
        uniqueTempArr.push(obj)
        setSubTasks(tempArr)
        setUniqueSubTasks(uniqueTempArr)
        localStorage.setItem("subTasks", JSON.stringify(tempArr))
        setSubTaskInput("")
    }

    const handleGetSubtaskCountOnlyCheck = (id) => {
        const tempArr1 = subTasks.filter(data => data.taskID === id)
        const tempArr2 = subTasks.filter(data => data.taskID === id && data.check === true)
        const tempArr3 = subTasks.filter(data => data.taskID === id && data.check === false)

        if (tempArr1.length === 0) return 1
        if (tempArr1.length === tempArr2.length) return 0
        if (tempArr1.length !== tempArr2.length) return 1

    }


    const handleSubTaskCheckbox = (check, id) => {
        const tempArr = [...subTasks];
        const uniqueTempArr = [...uniqueSubTasks];


        const tempIndex = tempArr.findIndex(data => data.id === id)
        const uniqueIndex = uniqueTempArr.findIndex(data => data.id === id)

        tempArr[tempIndex] = {
            ...tempArr[tempIndex],
            check: check
        }

        uniqueTempArr[uniqueIndex] = {
            ...uniqueTempArr[uniqueIndex],
            check: check
        }

        setUniqueSubTasks(uniqueTempArr)
        setSubTasks(tempArr)


    }
    useEffect(() => {
        loading()
    }, [])



    return <div>
        {isFirstPage ?
            <>
                TODO
                <ul>
                    {tasks.map((task, index) => {
                        return (<li key={index}>{handleGetSubtaskCountOnlyCheck(task.id) === 0 ? <del>{task.name}</del> : task.name} <Button onClick={() => handleTaskDetail(task.id)}>Detay({handleGetSubtaskCount(task.id)})</Button></li>)
                    })}
                </ul>
                <Input onChange={(event) => setTaskInput(event.target.value)} value={taskInput} type="text" />
                <Button onClick={() => handleSaveTask()}>Ekle</Button>
            </>
            :
            <>
                <Button onClick={() => setIsFirstPage(true)}>Geri Dön</Button>
                <ul>
                    {uniqueSubTasks.map((uniqueSubTask, index) => {
                        if (uniqueSubTask.check === false) {
                            return (<li key={index}>{uniqueSubTask.name} <Checkbox defaultChecked={uniqueSubTask.check} onChange={(event) => handleSubTaskCheckbox(event.target.checked, uniqueSubTask.id)} /> </li>)
                        } else {
                            return null
                        }
                    })}
                </ul>
                <ul>
                    -Completed-
                    {uniqueSubTasks.map((uniqueSubTask, index) => {
                        if (uniqueSubTask.check === true) {
                            return (<li key={index}>{uniqueSubTask.name} <Checkbox defaultChecked={uniqueSubTask.check} onChange={(event) => handleSubTaskCheckbox(event.target.checked, uniqueSubTask.id)} /> </li>)
                        } else {
                            return null
                        }
                    })}
                </ul>
                <Input onChange={(event) => setSubTaskInput(event.target.value)} value={subTaskInput} type="text" />
                <Button onClick={() => handleSaveSubTask()}>Ekle</Button>
            </>
        }
    </div>

}



export default SubTask