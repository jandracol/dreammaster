const GalleryComponent = () => {
  const pets = [
    { type: "Kitten", name: "Ollie", age: "12 Weeks" },
    { type: "Puppy", name: "Barney", age: "9 Weeks" },
    { type: "Cat", name: "Walter", age: "5 Years" },
    { type: "Dog", name: "Miss Sunshine", age: "2 Years" },
    { type: "Kitten", name: "Reese", age: "8 Weeks" },
    { type: "Puppy", name: "Bruce", age: "10 Weeks" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Cute Pets Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pets.map((pet, index) => (
          <figure
            key={index}
            className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            {/* Placeholder image */}
            <div className="h-64 bg-gray-200 relative overflow-hidden">
              <img
                src={`/api/placeholder/400/320`}
                alt={`${pet.type} named ${pet.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="p-4 text-center text-gray-700">
              {pet.type}:{" "}
              <strong className="font-bold text-gray-900">{pet.name}</strong> (
              {pet.age})
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
