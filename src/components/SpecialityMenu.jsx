import { useNavigate } from "react-router-dom";

const specialties = [
  {
    name: "General Physician",
    image: "https://i.pinimg.com/736x/cf/2d/b6/cf2db6eb080bd3f8f04fd61cb23dc8b2.jpg",
    path: "general-physician",
  },
  {
    name: "Gynecologist",
    image: "https://i.pinimg.com/736x/8d/45/e1/8d45e1fa1413fe1979bebbb854de9926.jpg",
    path: "gynecologist",
  },
  {
    name: "Pediatrician",
    image: "https://i.pinimg.com/736x/eb/ee/c8/ebeec8e5d0fbdae7c253c6d1fbebddcd.jpg",
    path: "pediatrician",
  },
  {
    name: "Neurologist",
    image: "https://i.pinimg.com/736x/ce/f1/6f/cef16f80717548b206665def5cd7eff6.jpg",
    path: "neurologist",
  },
  {
    name: "Dermatologist",
    image: "https://i.pinimg.com/736x/64/61/18/646118af06978925cb35520e860527bb.jpg",
    path: "dermatologist",
  },
  {
    name: "Gastroenterologist",
    image: "https://i.pinimg.com/736x/f1/9d/ed/f19dedbac8d29fd488adb0dce4a3247b.jpg",
    path: "gastroenterologist",
  },
];

function SpecialityMenu() {
  const navigate = useNavigate();

  return (
    <section id="speciality" className="py-14 bg-gradient-to-b from-white to-blue-200">

      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Find by Speciality
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Choose your preferred medical speciality and connect with experienced doctors instantly.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {specialties.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/doctors/${item.path}`)}
            className="group cursor-pointer bg-white border border-gray-100 rounded-2xl p-5 
            flex flex-col items-center text-center shadow-sm 
            hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 
            transition-all duration-300"
          >
            
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-3 group-hover:bg-blue-100 transition">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition">
              {item.name}
            </h3>

          </div>
        ))}

      </div>
    </section>
  );
}

export default SpecialityMenu;