import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, text]);
      setText("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl p-6 shadow-md"
    >
      <h3 className="text-xl font-bold mb-4">Task List</h3>
      <div className="flex gap-3 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new task..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
        >
          <Plus size={18} />
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <motion.li
            key={index}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg"
          >
            {task}
            <Trash2
              size={18}
              onClick={() => removeTask(index)}
              className="text-red-500 cursor-pointer hover:text-red-700"
            />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
