export default function Hero() {
  return (
    <>
      <div
        className="hidden lg:block lg:absolute lg:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">MaveshiFarms</span>
                <img className="h-12 w-auto sm:h-16" src="logo.png" />
              </a>
            </div>
          </div>
        </nav>
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-3xl tracking-tight font-extrabold sm:text-4xl xl:text-4xl inline text-gray-900">
                  We know buying and keeping aniamls for Qurbani is hard,
                </span>
              </h1>
              &nbsp;
              <h1>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-5xl">
                  <span className="inline text-gray-900">This Eid, let
                  <span className="inline text-red-600"> MaveshiFarms </span>
                  </span>

                  
                  <span className="inline text-gray-900">
                    take care of that!
                  </span>
                </span>
              </h1>

              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-xl font-medium text-gray-900">
                  Book your animal now to get free shelter till Eid, free food till Eid and free delivery to your doorstep! 
                </p>
                &nbsp;
                <p className="text-lg font-medium text-gray-900">

                  <span className="text-green-500">  </span> 
                  <div className="grid grid-cols-2 place-items-start h-25">
                    <div>WhatsApp</div>
                    <div>0334-5042149</div>
                    <div>Email</div>
                    <div>maveshifarms@gmail.com</div>
                    <div>Instagram</div>
                    <div>instagram.com/maveshifarms</div>
                    <div>Facebook</div>
                    <div>facebook.com/maveshifarms</div>
                  </div>                  
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img className="w-full" src="hero.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
