const bulls = [
  {
    code: "B01",
    show_price : "true",
    availability: "In stock",
    breed: "Dhanni",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/01.jpg",
    color: "White",
    addOns: "Delivery, Butcher, Shelter",
    price: 269000,
    currentWeight: 320,
    expectedWeight: 340,
  },
  {
    code: "B02",
    show_price : "true",
    availability: "In stock",
    breed: "Dhanni",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/02.jpg",
    color: "White",
    addOns: "Delivery, Butcher, Shelter",
    price: 229000,
    currentWeight: 300,
    expectedWeight: 320,
  },
  {
    code: "B03",
    show_price : "true",
    availability: "Sold",
    breed: "Desi",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/03.jpg",
    color: "Black",
    addOns: "Delivery, Shelter",
    price: 140000,
    currentWeight: 240,
    expectedWeight: 260,
  },
  {
    code: "B04",
    show_price : "true",
    availability: "In stock",
    breed: "Desi cross",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/04.jpg",
    color: "White and Black",
    addOns: "Delivery, Shelter",
    price: 150000,
    currentWeight: 370,
    expectedWeight: 390,
  },
  {
    code: "B05",
    show_price : "true",
    availability: "In stock",
    breed: "Sahiwal",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/05.jpg",
    color: "Brown",
    addOns: "Delivery, Shelter",
    price: 120000,
    currentWeight: 200,
    expectedWeight: 230,
  },
  {
    code: "B06",
    show_price : "true",
    availability: "In stock",
    breed: "Sahiwal",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/06.jpg",
    color: "Brown",
    addOns: "Delivery, Shelter",
    price: 120000,
    currentWeight: 200,
    expectedWeight: 230,
  },
  {
    code: "B07",
    show_price : "true",
    availability: "In stock",
    breed: "Sahiwal",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/07.jpg",
    color: "Brown",
    addOns: "Delivery, Shelter",
    price: 120000,
    currentWeight: 200,
    expectedWeight: 230,
  },
  {
    code: "B08",
    show_price : "true",
    availability: "In stock",
    breed: "Sahiwal",
    category: "Bull",
    imageUrl: "/assets/img/catalogue/bull/08.jpg",
    color: "Brown",
    addOns: "Delivery, Shelter",
    price: 140000,
    currentWeight: 200,
    expectedWeight: 290,
  },
];

const goats = [
  {
    code: "G04",
    show_price : "true",
    availability: "In stock",
    breed: "Makhi Cheena",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/goats/104.jpg",
    color: "White cheena",
    addOns: "Delivery, Shelter",
    price: 66000,
    currentWeight: 63,
    expectedWeight: 67,
  },
  {
    code: "G06",
    show_price : "true",
    availability: "In stock",
    breed: "Makhi Cheena",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/goats/106.jpg",
    color: "Brown Cheena",
    addOns: "Delivery, Shelter",
    price: 66000,
    currentWeight: 62,
    expectedWeight: 67,
  },
  {
    code: "G05",
    show_price : "true",
    availability: "Sold",
    breed: "Makhi Cheena",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/goats/105.jpg",
    color: "Brown cheena",
    addOns: "Delivery, Shelter",
    price: 69000,
    currentWeight: 67,
    expectedWeight: 73,
  },
  {
    code: "G01",
    show_price : "true",
    availability: "Sold",
    breed: "Rajanpuri",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/goats/101.jpg",
    color: "White",
    addOns: "Delivery, Butcher, Shelter",
    price: 55000,
    currentWeight: 57,
    expectedWeight: 64,
  },
  {
    code: "G02",
    show_price : "true",
    availability: "Sold",
    breed: "Rajanpuri",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/goats/102.jpg",
    color: "White",
    addOns: "Delivery, Shelter",
    price: 55000,
    currentWeight: 55,
    expectedWeight: 60,
  },
  {
    code: "G03",
    show_price : "true",
    availability: "Sold",
    breed: "Desi",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/goats/103.jpg",
    color: "Black and white",
    addOns: "Delivery, Shelter",
    price: 33000,
    currentWeight: 32,
    expectedWeight: 35,
  },
  {
    code: "G07",
    show_price : "true",
    availability: "Sold",
    breed: "Talagang",
    category: "Ram (Chakki Dumba)",
    imageUrl: "/assets/img/catalogue/goats/107.jpg",
    color: "White",
    addOns: "Delivery, Shelter",
    price: 57000,
    currentWeight: 77,
    expectedWeight: 82,
  },
  {
    code: "G08",
    show_price : "true",
    availability: "Sold",
    breed: "Talagang",
    category: "Ram (Chakki Dumba)",
    imageUrl: "/assets/img/catalogue/goats/108.jpg",
    color: "White",
    addOns: "Delivery, Shelter",
    price: 54000,
    currentWeight: 67,
    expectedWeight: 72,
  },
  {
    code: "G09",
    show_price : "true",
    availability: "Sold",
    breed: "Desi",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/goats/109.jpg",
    color: "Black dabba",
    addOns: "Delivery, Shelter",
    price: 39000,
    currentWeight: 42,
    expectedWeight: 45,
  },
  {
    code: "G10",
    show_price : "true",
    availability: "Sold",
    breed: "Desi",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/goats/110.jpg",
    color: "Black",
    addOns: "Delivery, Shelter",
    price: 39000,
    currentWeight: 42,
    expectedWeight: 45,
  },
  {
    code: "G11",
    show_price : "true",
    availability: "In stock",
    breed: "Makhi Cheena",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/goats/111.jpg",
    color: "Brown Cheena",
    addOns: "Delivery, Shelter",
    price: 49000,
    currentWeight: 52,
    expectedWeight: 55,
  },
  {
    code: "G12",
    show_price : "true",
    availability: "In stock",
    breed: "Makhi Cheena",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/goats/112.jpg",
    color: "Brown Cheena",
    addOns: "Delivery, Shelter",
    price: 49000,
    currentWeight: 52,
    expectedWeight: 55,
  },
  {
    code: "G13",
    show_price : "true",
    availability: "In stock",
    breed: "Desi",
    category: "Goat",
    imageUrl: "/assets/img/catalogue/goats/113.jpg",
    color: "White",
    addOns: "Delivery, Shelter",
    price: 39000,
    currentWeight: 42,
    expectedWeight: 45,
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
              All our animals are <span className="text-green-600 text font-extrabold"> vaccinated</span>,
               <span className="text-green-600 text font-extrabold"> dewormed </span> and are raised on <span className="text-green-600 text font-extrabold"> organic food </span> from our own farms to make sure they are healthy and the meat is not harmfull.
               You would'nt get that gaurantee from mandi would you ?
              And not only that, we also take complete responsibility that our animals fulfill the requirements for Qurbani.
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
                            Availability
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {bull.availability}
                           
                          </dd>
                        </div>
                        <div className="pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Code
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {bull.code} 
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Category
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {bull.category}
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
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
                          <dd className="text-base font-bold tracking-tight">
                          {
                            bull.show_price == "true" &&                              
                             <span className="">
                               {bull.price} PKR <br></br>

                                {bull.availability != "Sold" &&  
                                  <a className="hover:underline text-blue-700" target="_blank" href={`https://api.whatsapp.com/send?phone=+923130794980&text=Hi, I would link to know more about ${bull.category} : ${bull.code}`}>
                                  Tap to more info
                                  </a>
                                }
                              </span>
                            }
                            {bull.show_price == "false" &&
                              <a className="hover:underline" target="_blank" href={`https://api.whatsapp.com/send?phone=+923130794980&text=Hi, may I know the price of ${bull.category} : ${bull.code}`}>
                              <span className="text-red-700">Tap to inquire</span>
                              </a>
                            }  
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
            <p className="text-xl font-medium text-gray-900">What you are looking for is already sold? <a className="underline text-red-500" target="_blank" href={`https://api.whatsapp.com/send?phone=+923130794980&text=Hi, I have a custom request`}> Tap here</a> to request and we will arrange one for you!
            </p>
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
                            Availability
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.availability}
                          </dd>
                        </div>
                        <div className="pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Code
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.code}
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Category
                          </dt>
                          <dd className="text-base font-bold tracking-tight text-gray-900">
                            {goat.category}
                          </dd>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-2">
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
                          <dd className="text-base font-bold tracking-tight">
                            {
                            goat.show_price == "true" &&                              
                             <span className="">
                               {goat.price} PKR <br></br>

                                {goat.availability != "Sold" &&  
                                  <a className="hover:underline text-blue-700" target="_blank" href={`https://api.whatsapp.com/send?phone=+923130794980&text=Hi, I would link to know more about ${goat.category} : ${goat.code}`}>
                                  Tap to more info
                                  </a>
                                }
                              </span>
                            }
                            {goat.show_price == "false" &&
                              <a className="hover:underline" target="_blank" href={`https://api.whatsapp.com/send?phone=+923130794980&text=Hi, may I know the price of ${goat.category} : ${goat.code}`}>
                              <span className="text-red-700">Tap to inquire</span>
                              </a>
                            }  
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
          <hr></hr>
          <p className=" text-xl font-medium text-gray-900">What you are looking for is already sold? <a className="underline text-red-500" target="_blank" href={`https://api.whatsapp.com/send?phone=+923130794980&text=Hi, I have a custom request`}> Tap here</a> to request and we will arrange one for you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
