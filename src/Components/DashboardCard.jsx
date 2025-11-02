import { motion } from "framer-motion";

export default function DashboardCard({ title, value, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-2xl text-white ${color} shadow-lg`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </motion.div>
  );
}
