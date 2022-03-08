import { Header } from "./components/Header"
import { AddTask } from "./components/AddTask"
import { useState } from "react"

const data = []

const App = () => {
  const [nameTask, setNameTask] = useState("")
  const [listTask, setListTask] = useState(data)

  const handleChangeNameTask = (e) => {
    setNameTask(e.target.value)
  }
  const renderId = () => {
    let maxId = 0

    for (let i = 0; i < listTask.length; i++) {
      if (maxId < listTask[i].id) {
        maxId = listTask[i].id
      }
    }
    return maxId + 1
  }
  const handleAddTask = (e) => {
    e.preventDefault()

    if (nameTask) {
      const newTask = {
        id: renderId(),
        name: nameTask,
        done: false,
      }

      listTask.unshift(newTask)
      setListTask([...listTask])
      setNameTask("")
    } else {
      alert("please enter the job")
    }
  }

  const deleteTask = (id) => {
    const indexId = listTask.findIndex((element) => element.id === id)

    if (indexId > -1) {
      listTask.splice(indexId, 1)
      setListTask([...listTask])
    }
  }

  return (
    <div className="w-[full] text-center mt-[50px]">
      <Header />
      <AddTask
        nameTask={nameTask}
        listTask={listTask}
        handleChangeNameTask={handleChangeNameTask}
        handleAddTask={handleAddTask}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default App
// https://www.niemvuilaptrinh.com/article/to-do-list-css-javascript
