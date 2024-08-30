import { useEffect, useState } from 'react';


const About = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [filteredData, setFilteredData] = useState([]);


  // const fecthApi = ()=>{
  //   fetch("https://dummyjson.com/todos")
  //   .then(res=> res.json())
  //   .then(todoList=>{
  //     setData(todoList.todos)
  //   }
  // )
  // .catch(error=>console.log("error" , error))
  // }
  const fecthApi = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://dummyjson.com/todos')
      const todo = await response.json()
      setData(todo.todos);
      setFilteredData(todo.todos);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log("error", error);
    } 
  };

  useEffect(() => {
    fecthApi();
  }, []);

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setFilteredData(updatedData);
    setData(updatedData);
  };

  const handleChange = (e)=>{
    const { value } = e.target;
    setSearchVal(value);
    const updatedData = data.filter(item => 
      item.todo.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(updatedData);
  }

  if (isLoading) {
    return (
      <button
        type="button"
        className="bg-cyan-700 flex items-center gap-4 text-white py-3 px-5 rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Processing...
      </button>
    );
  }


  return (
    <div className='container mx-auto px-4 py-10'>
      <div className="w-full md:w-1/3 mx-auto mb-8">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="Search"
      >
        Search Here
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Search Value here"
        id="name"
        value={searchVal}
        onChange={(e)=>handleChange(e)}
      ></input>
    </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {
          filteredData?.map(item => (
            <div className="rounded-md border border-black" key={item.id}>
              <div className="p-4 flex flex-col gap-4 items-center text-center">
                <p>{item.userId}</p>
                <h1 className="text-lg font-semibold">{item.todo}</h1>
                {item.completed ? <p>Task is Completed</p> : <p>Task isn't completed</p>}
                <button
                  type="button"
                  className="rounded-sm px-2.5 py-1 text-xs font-semibold text-white shadow-s focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  style={{
                    backgroundColor: item.completed ? 'red' : 'black',
                  }}
                  onClick={()=>item.completed && handleDelete(item.id)}
                >
                 {item.completed ? 'Delete' : 'Pending'}
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default About;
