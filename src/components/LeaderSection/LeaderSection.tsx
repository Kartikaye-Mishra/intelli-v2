import LeaderCard from "./LeaderCard";
import { leaders } from "../../constants/general";

const LeadersSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 max-w-7xl 2xl:max-w-full 2xl:px-32 mx-auto">
      <h2 className="text-2xl font-bold mb-8">Intelliinsights <span className="text-primary">Leaders</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {leaders.map((leader, index) => (
          <LeaderCard key={index} {...leader} />
        ))}
      </div>
    </section>
  );
};

export default LeadersSection;
