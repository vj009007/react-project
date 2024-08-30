import React, { useEffect, useState } from "react";
import TableLayout from "../components/table/Table";
import { toast } from 'react-toastify';
import { crudData } from "../utils/crudData";

function CrudMain() {
    const initialValue = {
        name: "",
        email: "",
        designation: "",
        salary: "",
    };
    const [data, setData] = useState(()=>JSON.parse(localStorage.getItem("myList")) || crudData);
    const [user, setUser] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
        delete formError[name];
    };

    useEffect(()=>{
        localStorage.setItem("myList" , JSON.stringify(data))
    },[data])

    const validation = () => {
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
        const isValid = validation();
        if (isValid) {
            if(isEdit){
                setData(data.map((item)=>(item.id === user.id ? user : item)))
                toast.info("User details Updated");
                setIsEdit(!isEdit)
                setUser(initialValue)
            }else{
                setData((prev) => [...prev, { ...user, id: Date.now() }]);
                toast.success("User details submitted");
                setUser(initialValue)
            }
        } else {
            toast.warning("Please fill all required fields");
        }
    };

    const handleUpdate = (user) => {
        setIsEdit(!isEdit)
        setUser(user);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter((item)=>{
            return item.id !== id;
        })
        setData(updatedData)
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid">
                <div className="max-w-xl mx-auto w-full">
                    <form className="flex gap-6 flex-col" onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-1.5 relative">
                            <label
                                className="text-sm font-medium leading-none text-gray-900"
                                htmlFor="name"
                            >
                                Full Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid w-full items-center gap-1.5 relative">
                            <label
                                className="text-sm font-medium leading-none text-gray-900"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                                type="text"
                                id="email"
                                placeholder="Enter your email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid w-full items-center gap-1.5 relative">
                            <label
                                className="text-sm font-medium leading-none text-gray-900"
                                htmlFor="designation"
                            >
                                Designation
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                                type="text"
                                id="designation"
                                placeholder="Enter your designation"
                                name="designation"
                                value={user.designation}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid w-full items-center gap-1.5 relative">
                            <label
                                className="text-sm font-medium leading-none text-gray-900"
                                htmlFor="salary"
                            >
                                Salary
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                                type="text"
                                id="salary"
                                placeholder="Enter your salary"
                                name="salary"
                                value={user.salary}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-auto rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                {isEdit? "Update" : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-8">
                <TableLayout
                    crudList={data}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
}

export default CrudMain;
