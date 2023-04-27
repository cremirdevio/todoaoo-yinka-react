function App() {
  return (
    <div className="bg-red-200 h-screen flex justify-center items-center">
      <div className="border-red-100 h-max bg-white w-full max-w-[400px]">
        <h1 className="text-center my-2 uppercase font-bold text-gray-600">
          Things To Do
        </h1>

        <div className="px-4 py-4">
          {/* Input */}
          <input
            type="text"
            placeholder="Add New Item"
            className="rounded-none border-[1px] border-solid w-full px-3 py-2 text-xs focus:rounded-none focus:outline-none focus:border-blue-300"
          />

          {/* Todo List with checkbox */}
          <div className="flex  gap-2 py-2 border-b-[0.5px]">
            <input type="checkbox" />
            <p className="text-gray-600 text-sm">Learn Javascript</p>
          </div>

          <div className="flex  gap-2 py-2 border-b-[0.5px]">
            <input type="checkbox" />
            <p className="text-gray-600 text-sm">Learn React</p>
          </div>

          <div className="flex  gap-2 py-2 border-b-[0.5px]">
            <input type="checkbox" />
            <p className="text-gray-600 text-sm">Learn NodeJs</p>
          </div>
        </div>

        <div className="flex justify-between bg-green-200 text-sm py-2 px-2">
          {/* Footer:  */}

          {/* Search Icon | Number of items left | Filter(All, Active, Completed) */}
          <div className="flex gap-2">
            <div>
              <button>All</button>
            </div>
            <p>3 Items left</p>
          </div>

          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
