const bulls = [
  {
    breed: "Dhanni",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/01.jpg",
    color: "White",
    addOns: "Delivery, Butcher, Shelter",
    price: 225000,
    currentWeight: 320,
    expectedWeight: 340,
  },
  {
    breed: "Dhanni",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/02.jpg",
    color: "White",
    addOns: "Delivery, Butcher, Shelter",
    price: 205000,
    currentWeight: 300,
    expectedWeight: 320,
  },
  {
    breed: "Desi",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/03.jpg",
    color: "Black",
    addOns: "Delivery, Shelter",
    price: 135000,
    currentWeight: 240,
    expectedWeight: 260,
  },
  {
    breed: "Desi cross",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/04.jpg",
    color: "White and Black",
    addOns: "Delivery, Shelter",
    price: 145000,
    currentWeight: 370,
    expectedWeight: 390,
  },
  {
    breed: "Sahiwal",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/05.jpg",
    color: "Brown",
    addOns: "Delivery, Shelter",
    price: 125000,
    currentWeight: 200,
    expectedWeight: 230,
  },
  {
    breed: "Sahiwal",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/06.jpg",
    color: "Brown",
    addOns: "Delivery, Shelter",
    price: 125000,
    currentWeight: 200,
    expectedWeight: 230,
  },
  {
    breed: "Sahiwal",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/07.jpg",
    color: "Brown",
    addOns: "Delivery, Shelter",
    price: 125000,
    currentWeight: 200,
    expectedWeight: 230,
  },
  {
    breed: "Sahiwal",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/08.jpg",
    color: "Brown",
    addOns: "Delivery, Shelter",
    price: 140000,
    currentWeight: 200,
    expectedWeight: 230,
  },
];

const goats = [
  {
    breed: "Rajanpuri",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/bull/101.jpg",
    color: "White",
    addOns: "Delivery, Butcher, Shelter",
    price: 55000,
    currentWeight: 53,
    expectedWeight: 59,
  },
  {
    breed: "Rajanpuri",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/bull/102.jpg",
    color: "White",
    addOns: "Delivery, Butcher, Shelter",
    price: 55000,
    currentWeight: 49,
    expectedWeight: 54,
  },
  {
    breed: "Desi",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/bull/103.jpg",
    color: "Black and white",
    addOns: "Delivery, Shelter",
    price: 35000,
    currentWeight: 32,
    expectedWeight: 35,
  },
];

export default function Catalogue() {
  return (
    <div className="bg-white z-0 relative">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
              Catalogue
            </h2>
            <p className="text-xl text-gray-500">
              All our animals are raised on organic food from our own farms and are vaccinated to make sure they healthy.
            </p>
          </div>
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-3xl">
              Bulls
            </h3>
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {bulls.map((bull) => (
              <li key={bull.imageUrl}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={bull.imageUrl}
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
                            {bull.category}
                          </dd>
                        </div>
                        <div className="pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Breed
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {bull.breed}
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Weight (Current)
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {bull.currentWeight} Kg
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Weight Expected (On Eid)
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {bull.expectedWeight} Kg
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Price
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-red-700">
                            {bull.price} PKR
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Add Ons
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {bull.addOns || "-"}
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
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-3xl">
              Goats
            </h3>
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {goats.map((goat) => (
              <li key={goat.imageUrl}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={goat.imageUrl}
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
                            {goat.category}
                          </dd>
                        </div>
                        <div className="pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Breed
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.breed}
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Weight (Current)
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.currentWeight} Kg
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Weight Expected (On Eid)
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.expectedWeight} Kg
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Price
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-red-700">
                            {goat.price} PKR
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Add Ons
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.addOns || "-"}
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
    </div>
  );
}
