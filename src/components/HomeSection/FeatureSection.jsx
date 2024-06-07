import Image from "next/image";

const categories = [
  {
    id: 1,
    category: "Books",
    img: "/assets/categories/books.jpeg",
  },
  {
    id: 2,
    category: "Toys",
    img: "/assets/categories/toys.jpeg",
  },
  {
    id: 3,
    category: "Football Kits",
    img: "/assets/categories/footballkits.jpeg",
  },
  {
    id: 4,
    category: "Stationary",
    img: "/assets/categories/stationary.jpeg",
  },
  {
    id: 5,
    category: "Cyber",
    img: "/assets/categories/otherservices.jpeg",
  },
];

const CategorySection = () => {
  return (
    <section className="bg-[#f8f8f8] py-16 mt-3 cursor-pointer">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-5 text-3xl text-center font-semibold text-[#000]">
          Shop By Category
        </h2>
        <h3 className="text-lg font-light mb-12 ">
          Visit Our Shop To See Amazing Products
          <hr className="border border-[#797373] w-20 items-center m-auto mt-2"/>
        </h3>
        
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-12">
          {categories.map((item) => (
            <div
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300"
              key={item.id}
              style={{ width: '200px', height: '300px' }} // Adjust the width and height as per your requirement
            >
              <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={item.img}
                  alt={item.category}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-lg font-bold">{item.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
