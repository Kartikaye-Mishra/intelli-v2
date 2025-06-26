import type { LeaderCardProps } from "../../lib/types";

const LeaderCard: React.FC<LeaderCardProps> = ({ name, title, role, image, handle }) => (
  <div className="bg-white shadow-md border rounded-lg p-4 w-full h-[230px] flex flex-col justify-between">
    <div>
      <h3 className="font-semibold text-sm md:text-2xl mb-1">{name}</h3>
      <p className="text-base md:text-md text-gray-700 mb-2 leading-snug line-clamp-3">{title}</p>
      <p className="text-sm md:text-lg font-semibold text-primary mb-1">{role}</p>
    </div>
    <div className="flex items-center gap-2 mt-2">
      <img src={image} alt={name} className="w-8 h-8 rounded-full object-cover border border-gray-300" />
      <span className="text-sm md:text-md text-gray-500">{handle}</span>
    </div>
  </div>
);

export default LeaderCard;
