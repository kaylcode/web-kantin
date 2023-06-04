import React from "react";

function About() {
  return (
    <div>
      <section>
        <div class="flex justify-center items-center w-screen h-screen bg-white my-20">
          <div class="container mx-auto my-4 px-4 lg:px-20">
            <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex flex-wrap text-center justify-center">
                <div className="w-80">
                  <h2 className="text-xl font-serif text-slate-800 bg-yellow-200">
                    Kantin UIB
                  </h2>

                  <p class="text-gray-500 dark:text-gray-400 align-centre font-sans text-ellipsis">
                    Kantin uib memiliki berbagai jenis makanan mulai dari
                    snacks,minuman,dan juga makanan berat.Pada stand didepan
                    bangku kuning menjual snacks,sedangkan dikantin biru menjual
                    makanan yang mengenyangkan.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-cyan-300 rounded-2xl">
              <div class="flex flex-col text-white">
                <h2 class="font-bold text-2xl my-4 text-justify">Our Time</h2>
                <p class="text-gray-400">Monday 08:00 AM - 9:30 PM</p>
                <p class="text-gray-400">Tuesday 08:00 AM - 9:30 PM</p>
                <p class="text-gray-400">Wednesday 08:00 AM - 9:30 PM</p>
                <p class="text-gray-400">Thursday 08:00 AM - 9:30 PM</p>
                <p class="text-gray-400">Friday 08:00 AM - 09:30 PM</p>
                <p class="text-gray-400">saturday 08:00 AM - 05:30 PM</p>

                <div class="flex my-4 w-2/3 lg:w-1/2">
                  <div class="flex flex-col">
                    <i class="fas fa-map-marker-alt pt-2 pr-2" />
                  </div>
                  <div class="flex flex-col">
                    <h2 class="font-bold text-2xl my-4 text-justify">Location</h2>
                    <p class="text-gray-400">
                      Baloi-Sei Ladi, Jl. Gajah Mada, Tiban Indah, Kec.
                      Sekupang, Kota Batam, Kepulauan Riau 29426
                    </p>
                  </div>
                </div>

                <div class="flex my-4 w-2/3 lg:w-1/2">
                  <div class="flex flex-col">
                    <i class="fas fa-phone-alt pt-2 pr-2" />
                  </div>
                  <div class="flex flex-col">
                    <h2 class="font-bold text-2xl my-4 text-justify">Call Us</h2>
                    <p class="text-gray-400">Tel:(0778) 7437111</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
