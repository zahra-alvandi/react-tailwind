import { motion } from "framer-motion";
import { Home, User, Settings } from "lucide-react";

export default function Sidebar() {
  const menu = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <User size={20} />, label: "Profile" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-56 bg-white shadow-md p-5 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold">MyPanel</h2>
      <ul className="space-y-4">
        {menu.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 cursor-pointer hover:text-blue-500"
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}
