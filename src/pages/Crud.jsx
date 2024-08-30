import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { crudData } from "../utils/crudData";

function Crud() {
    const initialValue = {
        name: "",
        email: "",
        designation: "",
        salary: "",
    };

    

    const [data, setData] = useState(()=>JSON.parse(localStorage.getItem("user")) || crudData); 
    const [user, setUser] = useState(initialValue); 
    const [formError, setFormError] = useState({});
    const [isEdit, setEdit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
        delete formError[name];
    };

    //Using Local Storage

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(data)) 
    }, [data]);

    const formValidation = () => {
        const regexForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexForName = /^[a-zA-Z ]{2,40}$/;
        const salaryRegex = /^[0-9\b]+$/;

        const error = {};

        if (!user.name) {
            error.name = "Enter your name";
        } else if (!regexForName.test(user.name)) {
            error.name = "Please enter a valid name";
        }

        if (!user.email) {
            error.email = "Enter your email";
        } else if (!regexForEmail.test(user.email)) {
            error.email = "Please enter a valid email";
        }

        if (!user.designation) {
            error.designation = "Enter your designation";
        }

        if (!user.salary) {
            error.salary = "Enter your salary";
        } else if (!salaryRegex.test(user.salary)) {
            error.salary = "Please enter a valid salary";
        }

        setFormError(error);
        return Object.keys(error).length < 1;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();

        if (isValid) {
            if (isEdit) {
                setData(data.map(item => item.id === user.id ? user : item));
                toast.success("User details updated");
                setEdit(false);
            } else {
                setData((prev) => [...prev, { ...user, id: Date.now() }]); 
                toast.success("User details submitted");
            }
            setUser(initialValue); 
        } else {
            toast.warning("Please fill all required fields");
        }
    };

    const handleUpdate = (user) => {
        setEdit(true);
        setUser(user);
    };

    const handleDelete = (id) => {
        const updatedUsers = data.filter((user) => user.id !== id);
        setData(updatedUsers);
        toast.info("User deleted successfully");
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid">
                <div className="max-w-xl mx-auto w-full">
                    <form className="flex gap-6 flex-col" onSubmit={handleSubmit}>
                        <div className="grid w-full gap-6">
                            <div className="grid w-full items-center gap-1.5 relative">
                                <label className="text-sm font-medium leading-none text-gray-900" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                                    type="text"
                                    id="name"
                                    placeholder="Full Name"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                />
                                <div className='error_msg'>{formError.name}</div>
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-1.5 relative">
                            <label className="text-sm font-medium leading-none text-gray-900" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                                type="text"
                                id="email"
                                placeholder="Email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                            <div className='error_msg'>{formError.email}</div>
                        </div>
                        <div className="grid w-full items-center gap-1.5 relative">
                            <label className="text-sm font-medium leading-none text-gray-900" htmlFor="designation">
                                Designation
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                                type="text"
                                id="designation"
                                placeholder="Enter your Designation"
                                name="designation"
                                value={user.designation}
                                onChange={handleChange}
                            />
                            <div className='error_msg'>{formError.designation}</div>
                        </div>
                        <div className="grid w-full items-center gap-1.5 relative">
                            <label className="text-sm font-medium leading-none text-gray-900" htmlFor="salary">
                                Salary
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                                type="text"
                                id="salary"
                                placeholder="Enter your Salary"
                                name="salary"
                                value={user.salary}
                                onChange={handleChange}
                            />
                            <div className='error_msg'>{formError.salary}</div>
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-auto rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                {isEdit ?  "Update" : "Submit" }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="relative text-left px-4 py-3.5">Id</th>
                                            <th scope="col" className="relative text-left px-4 py-3.5">Name</th>
                                            <th scope="col" className="relative text-left px-4 py-3.5">Email</th>
                                            <th scope="col" className="relative text-left px-4 py-3.5">Designation</th>
                                            <th scope="col" className="relative text-left px-4 py-3.5">Salary</th>
                                            <th scope="col" className="relative text-left px-4 py-3.5">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {data.map((user) => (
                                            <tr key={user.id}>
                                                <td className="whitespace-nowrap px-4 py-4">{user.id}</td>
                                                <td className="whitespace-nowrap px-4 py-4">{user.name}</td>
                                                <td className="whitespace-nowrap px-4 py-4">{user.email}</td>
                                                <td className="whitespace-nowrap px-4 py-4">{user.designation}</td>
                                                <td className="whitespace-nowrap px-4 py-4">{user.salary}</td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            id={user.id}
                                                            className="w-auto rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                            onClick={()=>handleUpdate(user)}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            id={user.id}
                                                            className="w-auto rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                            onClick={()=>handleDelete(user.id)}
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
        </div>
    );
}

export default Crud;
