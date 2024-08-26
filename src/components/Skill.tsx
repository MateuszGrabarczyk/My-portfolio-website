type SkillProps = {
  name: string;
  icon: React.ReactNode;
};

function Skill({ name, icon }: SkillProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-28 h-28 transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
      {icon}
      <span className="mt-2 text-sm dark:text-black">{name}</span>
    </div>
  );
}

export default Skill;
