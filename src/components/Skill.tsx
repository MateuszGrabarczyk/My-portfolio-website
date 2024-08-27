type SkillProps = {
  name: string;
  icon: React.ReactNode;
};

function Skill({ name, icon }: SkillProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-28 h-28 transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl dark:hover:shadow-teal-500/50 dark:hover:bg-gray-700">
      <div className="text-gray-700 dark:text-teal-400">{icon}</div>
      <span className="mt-2 text-sm text-gray-800 dark:text-gray-300">
        {name}
      </span>
    </div>
  );
}

export default Skill;
