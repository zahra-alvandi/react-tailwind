// import logo from './logo.svg';
import './App.css';
// import ProfileCard from './ProfileCard/profileCard';
// import Naav from './Naav/navbar'
// import AuthForm from './AuthForm/authForm';
import { motion } from "framer-motion";
import Sidebar from './Components/Sidebar';
import DashboardCard from "./Components/DashboardCard";
import TaskList from "./Components/TaskList";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold"
        >
          Dashboard
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard title="Users" value="1,245" color="bg-blue-500" />
          <DashboardCard title="Sales" value="$23,800" color="bg-green-500" />
          <DashboardCard title="Feedback" value="320" color="bg-yellow-500" />
        </div>

        <TaskList />
      </main>
    </div>
  );
}

