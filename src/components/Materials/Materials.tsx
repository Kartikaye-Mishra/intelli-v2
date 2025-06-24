import { materials } from "../../constants/general";

export default function Materials() {
 return (
    <section id="materials" className="py-16 px-4 md:px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-gray-800">Our </span>
        <span className="text-primary">Materials</span>
      </h2>
      <div className="grid grid-cols-1 mobMd:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {materials.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img src={item.imgSrc} alt={item.title} className="h-24 md:h-32 object-contain" />
            <p className="mt-4 font-semibold text-gray-800 text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
