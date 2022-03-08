export const AddTask = ({
  nameTask,
  listTask,
  handleChangeNameTask,
  handleAddTask,
  deleteTask,
}) => {
  return (
    <div className="pt-10">
      <form id="add-task">
        <input
          className="w-[600px] h-[40px] pl-2 text-[20px] outline-none rounded-lg font-bold"
          type="text"
          placeholder="new item"
          value={nameTask}
          onChange={handleChangeNameTask}
        />
        <button
          className="w-[60px] h-[40px] text-[20px] font-bold bg-slate-300 rounded-lg ml-4 active:opacity-70"
          form="add-task"
          type="submit"
          onClick={handleAddTask}
        >
          Add
        </button>
        <div>
          {listTask.map((task) => (
            <div
              key={task.id}
              className="w-[600px] h-[50px] text-[20px] text-white font-bold rounded-lg bg-[#4eb9cd] m-auto my-5 leading-[50px]"
            >
              {task.name}
              <button
                className="font-bold float-right pr-4 active:opacity-70"
                onClick={() => deleteTask(task.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}
