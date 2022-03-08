export const Header = () => {
  return (
    <div>
      <h1 className="text-[50px] text-white font-bold my-3">To-Do-List</h1>
      <h4 className="text-[25px] text-[#ffcd5d] my-3">
        Enter text into the input field to add items to your list.
      </h4>
      <h4 className="text-[25px] text-[#51df70] my-3">
        Click the item to mark it as complete.
      </h4>
      <h4 className="text-[25px] text-[#025f70] my-3">
        Click the "X" to remove the item from your list.
      </h4>
    </div>
  )
}
