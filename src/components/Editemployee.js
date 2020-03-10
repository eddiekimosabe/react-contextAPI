import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";

export const Editemployee = (route) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [designation, setDesignation] = useState('');
    const { employees } = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        console.log(employees);
        const routeId = route.match.params.id;
        const Id = employees.filter(x => x.id === routeId);
        console.log(routeId, Id)
        //update list
        //redirect to /home
        history.push('/');
    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name of employee
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter location" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                            Designation
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={designation} onChange={(e) => setDesignation(e.target.value)} type="text" placeholder="Enter designation" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Done
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}