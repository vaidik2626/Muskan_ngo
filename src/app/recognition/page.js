export default function CertificatesSection() {
    const certificates = [
      { title: "Official Ngo Certificate", img: "/Assets/recognision/certy.png" },
      { title: "Official Ngo Certificate", img: "/Assets/recognision/certy.png" },
      { title: "Official Ngo Certificate", img: "/Assets/recognision/certy.png" },
    ];
  
    return (
      <section className="bg-[#fdf5ec] py-12 px-4 md:px-10 lg:px-24 text-center text-gray-800" style={{ fontFamily: 'BalooBhai2' }}>
        {/* Official Documents */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b-4 border-yellow-600 inline-block">
            Official Documents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {certificates.map((item, index) => (
              <div key={index} className="bg-[#fbe7d2] p-4 rounded-lg shadow">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded"
                />
                <p className="mt-2 font-bold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Awards */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b-4 border-yellow-600 inline-block">
            Awards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {certificates.map((item, index) => (
              <div key={index + 3} className="bg-[#fbe7d2] p-4 rounded-lg shadow">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded"
                />
                <p className="mt-2 font-bold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  