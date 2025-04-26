import React from 'react'

export default function Gallery() {
    return (
      <section style={{backgroundColor: '#3B88AE'}} className="bg-blue-600 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'BalooBhai2' }}>
            Happy Gallery - Chhoti si Muskaan
          </h2>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large Image */}
            <div className="col-span-2 row-span-2">
              <img src="/assets/homepage/gallery-images/image_1.png" alt="Happy kids" className="w-full h-full object-cover rounded-lg" />
            </div>
  
            {/* Smaller Images */}
            <div>
              <img src="/assets/homepage/gallery-images/image_2.png" alt="Kid pointing" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <img src="/assets/homepage/gallery-images/image_3.png" alt="Smiling child" className="w-full h-full object-cover rounded-lg" />
            </div>
  
            {/* Multiple Images Row */}
            <div className="col-span-2 grid grid-cols-3 gap-2">
              <img src="/assets/homepage/gallery-images/image_4.png" alt="Kids" className="w-full h-full object-cover rounded-lg" />
              <img src="/assets/homepage/gallery-images/image_5.png" alt="Kids" className="w-full h-full object-cover rounded-lg" />
              <img src="/assets/homepage/gallery-images/image_6.png" alt="Kids" className="w-full h-full object-cover rounded-lg" />
            </div>
  
            <div>
              <img src="/assets/homepage/gallery-images/image_7.png" alt="Group of kids" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <img src="/assets/homepage/gallery-images/image_8.png" alt="Two girls smiling" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <img src="/assets/homepage/gallery-images/image_9.png" alt="Two girls smiling" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <img src="/assets/homepage/gallery-images/image_7.png" alt="Two girls smiling" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  