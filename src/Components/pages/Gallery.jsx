import React from 'react'

export default function Gallery() {
    return (
      <section className="bg-blue-600 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-6">
            Happy Gallery - Chhoti si Muskaan
          </h2>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large Image */}
            <div className="col-span-2 row-span-2">
              <img src="/images/gallery1.jpg" alt="Happy kids" className="w-full h-full object-cover rounded-lg" />
            </div>
  
            {/* Smaller Images */}
            <div>
              <img src="/images/gallery2.jpg" alt="Kid pointing" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <img src="/images/gallery3.jpg" alt="Smiling child" className="w-full h-full object-cover rounded-lg" />
            </div>
  
            {/* Multiple Images Row */}
            <div className="col-span-2 grid grid-cols-3 gap-2">
              <img src="/images/gallery4.jpg" alt="Kids" className="w-full h-full object-cover rounded-lg" />
              <img src="/images/gallery4.jpg" alt="Kids" className="w-full h-full object-cover rounded-lg" />
              <img src="/images/gallery4.jpg" alt="Kids" className="w-full h-full object-cover rounded-lg" />
            </div>
  
            <div>
              <img src="/images/gallery5.jpg" alt="Group of kids" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <img src="/images/gallery6.jpg" alt="Two girls smiling" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  