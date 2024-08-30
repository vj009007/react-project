function TableLayout({crudList,handleUpdate,handleDelete}) {


  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="relative text-left px-4 py-3.5">
                      Id
                    </th>
                    <th scope="col" className="relative text-left px-4 py-3.5">
                      Name
                    </th>
                    <th scope="col" className="relative text-left px-4 py-3.5">
                      Email
                    </th>
                    <th scope="col" className="relative text-left px-4 py-3.5">
                      Designation
                    </th>
                    <th scope="col" className="relative text-left px-4 py-3.5">
                      Salary
                    </th>
                    <th scope="col" className="relative text-left px-4 py-3.5">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {crudList.map((user) => (
                    <tr key={user.id}>
                      <td className="whitespace-nowrap px-4 py-4">{user.id}</td>
                      <td className="whitespace-nowrap px-4 py-4">
                        {user.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        {user.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        {user.designation}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        {user.salary}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="flex items-center gap-3">
                          <button
                            id={user.id}
                            className="w-auto rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            onClick={() => handleUpdate(user)}
                          >
                            Edit
                          </button>
                          <button
                            id={user.id}
                            className="w-auto rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableLayout;
