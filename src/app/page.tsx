import React from "react";
import prisma from "../lib/db";
import { addTask } from "@/actions/actions";

const Page: React.FC = async () => {
  const tasks = await prisma.task.findMany();

  return (
    <div className="relative container mx-auto px-6 py-4">
      <h1>Your Tasks</h1>

      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <div key={task.id}>
            <h1>{task.title}</h1>
          </div>
        ))}
      </div>

      <form action={addTask} className="space-y-2 space-x-2">
        <input
          type="text"
          name="title"
          className="px-3 py-1 rounded text-black border-none outline-none"
        />

        <button
          type="submit"
          className="bg-blue-500 px-3 py-1 text-white rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Page;
