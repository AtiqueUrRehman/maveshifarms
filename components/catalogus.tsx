const animals = [
  {
    breed: "Rajanpuri",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/01.jpg",
    color: "White",
    addOns: "Delivery",
    price: 255000,
    currentWeight: 53,
    expectedWeight: 60,
  },
  {
    breed: "Dhanni",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/02.jpg",
    color: "White",
    addOns: null,
    price: 155000,
    currentWeight: 53,
    expectedWeight: 60,
  },
  {
    breed: "Dhanni",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/03.jpg",
    color: "White",
    addOns: "Shelter",
    price: 155000,
    currentWeight: 53,
    expectedWeight: 60,
  },
  {
    breed: "Dhanni",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/04.jpg",
    color: "White",
    addOns: null,
    price: 155000,
    currentWeight: 53,
    expectedWeight: 60,
  },
  {
    breed: "Dhanni",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/05.jpg",
    color: "White",
    addOns: "Food",
    price: 155000,
    currentWeight: 53,
    expectedWeight: 60,
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Catalogue
            </h2>
            <p className="text-xl text-gray-500">
              Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
              ultricies donec risus sodales. Tempus quis et.
            </p>
          </div>
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {animals.map((animal) => (
              <li key={animal.imageUrl}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={animal.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="mt-0">
                      <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <div className="pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Category
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {animal.category}
                          </dd>
                        </div>
                        <div className="pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Breed
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {animal.breed}
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Weight (Current)
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {animal.currentWeight} Kg
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Weight Expected (On Eid)
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {animal.expectedWeight} Kg
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Price
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-red-700">
                            {animal.price} PKR
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Add Ons
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {animal.addOns || "-"}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
