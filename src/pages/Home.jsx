import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "90vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/3xk55VZ5/banner1.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-transparent"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    KANTIN UIB
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    "Part of the secret of success is to eat what you like and
                    let the food fight it out inside."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "30px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-cyan-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-cyan-300 -mt-24">
          <div className="container mx-auto px-2">
            <div className="flex flex-auto">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-yellow-100 hover:bg-orange-100 text-slate-600 font-bold py-2 px-4 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-15 h-15 mb-5 shadow-lg rounded-full bg-white">
                      <img
                        class="w-12 h-12 rounded-full"
                        src={require("../Img/icons8-rice-bowl-48.png")}
                        alt="Rounded avatar"
                      />
                    </div>
                    <h6 className="text-xl font-semibold">Foods</h6>
                    <p className="mt-2 mb-4 text-slate-600 text-sm">
                      There are many variations of food.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-orange-100 hover:bg-yellow-100 text-slate-600 font-bold py-2 px-4 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-15 h-15 mb-5 shadow-lg rounded-full bg-white">
                      <img
                        class="w-12 h-12 rounded-full"
                        src={require("../Img/icons8-green-tea-48.png")}
                        alt="Rounded avatar"
                      />
                    </div>
                    <h6 className="text-xl font-semibold">Drinks</h6>
                    <p className="mt-2 mb-4 text-slate-600">
                      There are many variations of drink.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-yellow-100 hover:bg-orange-100 text-slate-600 font-bold py-2 px-4 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-15 h-15 mb-5 shadow-lg rounded-full bg-white">
                      <img
                        class="w-12 h-12 rounded-full"
                        src={require("../Img/icons8-potato-chips-48.png")}
                        alt="Rounded avatar"
                      />
                    </div>
                    <h6 className="text-xl font-semibold">snacks</h6>
                    <p className="mt-2 mb-4 text-slate-600">
                      There are many variations of snack.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-2 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Welcome To Our Page{" "}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Selamat Datang di website kantin UIB buatan kelompok IOT dari
                  kelas 2SIPA.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Di Website ini Teman-teman dapat melihat stand dan menu yang
                  ada di UIB.Kantin ini terbagi menjadi 2 yaitu kantin hijau dan
                  kantin kuning.{" "}
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <img
                  alt="..."
                  src={require("../Img/ce676bc5-f049-41c6-8628-41b18fbad4e9 1 (1).jpg")}
                  className="relative flex flex-col rounded-xl  "
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Here Our Canteen</h2>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto justify-center">
              <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-grey-700 font-bold py-2 px-4 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src={require("../Img/3.jpg")}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Bento bento
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {/* Stand ini menjadi Top 1 untuk area kantin hijau. Stand ini
                      menyediakan nasi serta katsu dengan berbagai varian
                      seperti, Chicken Katsu, Onion Sauce Chicken, Honey Lemon
                      Chicken dan masih banyak varian lainnya. Stand ini juga
                      menyediakan Sandwich, Mini Corndog dan juga keripik untuk
                      cemilan ringan.{" "} */}
                  </p>
                </div>
              </div>

              <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-grey-700 font-bold py-2 px-4 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110">
                <a href="/kantin">
                  <img
                    class="rounded-t-lg"
                    src={require("../Img/2.jpg")}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Dallas Chicken
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {/* Stand ini menjadi Top 2 untuk area kantin hijau. Stand ini
                      menyediakan banyak sekali varian nasi dan ayam crispy
                      dengan saus dan topping tambahan. Tak hanya nasi dan ayam
                      crispy saja, Stand ini pun juga menjual minuman seperti
                      Green tea dan Thai Tea. */}
                  </p>
                </div>
              </div>

              <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-grey-700 font-bold py-2 px-4 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src={require("../Img/1.jpg")}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Juice
                  </h5>

                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {/* Stand ini menjadi Top 3 untuk area kantin hijau. Stand ini
                      menyediakan berbagai Jus buah lokal yang sangat nikmat
                      jika dinikmati pada siang hari. Tak hanya jus, Stand ini
                      juga menyediakan minuman bubuk instan yang segar. */}
                  </p>
                </div>
              </div>

              <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-grey-700 font-bold py-2 px-4 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src={require("../Img/5_1.jpg")}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Beringin signature drink
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {/* Stand ini menjadi Top 1 untuk area kantin kuning karena
                      menyediakan minuman-minuman yang bervariasi dan harganya
                      ramah di kantong mahasiswa. Stand ini menyediakan minuman
                      kopi dan non-kopi yang hangat dan dingin. */}
                  </p>
                </div>
              </div>

              <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-grey-700 font-bold py-2 px-4 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src={require("../Img/4_1.jpg")}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Luv Cocoa
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {/* Stand ini menjadi Top 2 untuk area kantin kuning. Stand
                      ini menyediakan bervariasi menu tetapi, menu yang paling
                      top untuk stand ini yaitu Cocoanya yang tersedia dingin
                      dan hangat. Tidak hanya menyediakan cocoa, Stand ini juga
                      menjual Roti, Churros dan soya. */}
                  </p>
                </div>
              </div>

              <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-grey-700 font-bold py-2 px-4 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110">
                <p
                 
                >
                  <img
                    class="rounded-t-lg"
                    src={require("../Img/6.jpg")}
                    alt=""
                  />
                </p>
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Hoyya Kebab & Meal
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <button
                 onClick={() => {
                  navigate("/kantin");
                }}
              className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-400 rounded-lg hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </section>

        <section className="pb-20 relative block bg-cyan-300">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-cyan-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="pt-20 pb-48">
            <div className="container mx-auto px-2">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-2">
                  <h2 className="text-4xl font-semibold">Here are our dev</h2>
                </div>
              </div>
              <div className="flex flex-auto">
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-2">
                  <div className="px-2">
                    {/* <img
                      alt="..."
                      src={require("").default}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{ maxWidth: "120px" }}
                    /> */}
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Aisyah</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        Web Dev
                      </p>
                      <div className="mt-6">
                        <a
                          href="https://instagram.com/aisyahkyl?igshid=NTc4MTIwNjQ2YQ=="
                          type="button"
                          class="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mx-auto h-full w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    {/* <img
                      alt="..."
                      src={require("").default}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{ maxWidth: "120px" }}
                    /> */}
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Syasya</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        web dev
                      </p>
                      <div className="mt-6">
                        <a
                          href="https://instagram.com/syasyatpd?igshid=ZDdkNTZiNTM="
                          type="button"
                          class="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mx-auto h-full w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    {/* <img
                      alt="..."
                      src={require("").default}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{ maxWidth: "120px" }}
                    /> */}
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Joantika</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        web dev
                      </p>
                      <div className="mt-6">
                        <a
                          href="https://instagram.com/joanntika?igshid=YmMyMTA2M2Y="
                          type="button"
                          class="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mx-auto h-full w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    {/* <img
                      alt="..."
                      src={require("").default}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{ maxWidth: "120px" }}
                    /> */}
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Leon</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        web dev
                      </p>
                      <div className="mt-6">
                        <a
                          href="https://instagram.com/sun.dex?igshid=ZDdkNTZiNTM="
                          type="button"
                          class="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mx-auto h-full w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    {/* <img
                      alt="..."
                      src={require("").default}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{ maxWidth: "120px" }}
                    /> */}
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Juan</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        web dev
                      </p>
                      <div className="mt-6">
                        <a
                          href="https://instagram.com/juannrezaaa?igshid=YmMyMTA2M2Y="
                          type="button"
                          class="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mx-auto h-full w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
