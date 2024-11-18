"use client";

import { useState } from "react";

type Task = {
    task: string;
    id: number;
};

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([
        { task: "Complete the project", id: 1 },
        { task: "Read the documentation", id: 2 },
    ]);
    const [inputVal, setInputVal] = useState<string>("");
    const [id, setId] = useState<number>(0);

    const AddItem = () => {
        const obj: Task | undefined = tasks.find((item) => item.id === id);

        if (obj) {
            const newArray = tasks.filter((item) => item.id !== obj.id);
            setTasks([...newArray, { task: inputVal, id }]);
            setInputVal("");
            setId(0);
            return;
        }
        setTasks([...tasks, { task: inputVal, id }]);
        setInputVal("");
        setId(0);
    };

    const deleteItem = (id: number) => {
        const newArray = tasks.filter((item) => item.id !== id);
        setTasks([...newArray]);
    };

    const EditItem = (id: number) => {
        const obj: Task | undefined = tasks.find((item) => item.id === id);
        if (obj) {
            setInputVal(obj.task);
            setId(obj.id);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-5 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-600 underline mb-5">
                To-Do Application
            </h1>

            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="w-full md:w-[60%] p-3 text-sm md:text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your task here"
                />
                <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(Number(e.target.value))}
                    className="w-[30%] sm:w-[20%] md:w-[15%] p-3 text-sm md:text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ID"
                />
                <button
                    onClick={AddItem}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded shadow w-full md:w-auto"
                >
                    Add Task
                </button>
            </div>

            <h2 className="text-center text-2xl md:text-3xl font-semibold text-blue-700 mb-5 underline">
                To-Do List
            </h2>

            <div className="grid gap-6">
                {tasks.map((item: Task, i: number) => (
                    <div
                        className="bg-white shadow-md rounded-lg p-4 md:p-6 transition-transform transform hover:scale-105"
                        key={item.id}
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium text-sm md:text-lg">
                                Task {i + 1}
                            </span>
                            <span
                                onClick={() => deleteItem(item.id)}
                                className="text-red-600 cursor-pointer text-sm md:text-lg font-semibold"
                            >
                                X
                            </span>
                        </div>
                        <p className="mt-4 text-gray-800 text-sm md:text-xl font-medium">
                            {item.task}
                        </p>
                        <div className="mt-3 text-right">
                            <button
                                onClick={() => EditItem(item.id)}
                                className="text-green-600 font-semibold text-sm md:text-lg hover:underline"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
