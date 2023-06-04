import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Kantin() {
  return (
    <div className="container mx-30 px-4 my-20">
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
            Stand ini menjadi Top 1 untuk area kantin hijau. Stand ini
              menyediakan nasi serta katsu dengan berbagai varian
              seperti, Chicken Katsu, Onion Sauce Chicken, Honey Lemon
              Chicken dan masih banyak varian lainnya. Stand ini juga
              menyediakan Sandwich, Mini Corndog dan juga keripik untuk
              cemilan ringan.{" "}
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
            Stand ini menjadi Top 2 untuk area kantin hijau. Stand ini
              menyediakan banyak sekali varian nasi dan ayam crispy
              dengan saus dan topping tambahan. Tak hanya nasi dan ayam
              crispy saja, Stand ini pun juga menjual minuman seperti
              Green tea dan Thai Tea.
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
            Stand ini menjadi Top 3 untuk area kantin hijau. Stand ini
              menyediakan berbagai Jus buah lokal yang sangat nikmat
              jika dinikmati pada siang hari. Tak hanya jus, Stand ini
              juga menyediakan minuman bubuk instan yang segar.
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
            Stand ini menjadi Top 1 untuk area kantin kuning karena
              menyediakan minuman-minuman yang bervariasi dan harganya
              ramah di kantong mahasiswa. Stand ini menyediakan minuman
              kopi dan non-kopi yang hangat dan dingin.
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
            Stand ini menjadi Top 2 untuk area kantin kuning. Stand
              ini menyediakan bervariasi menu tetapi, menu yang paling
              top untuk stand ini yaitu Cocoanya yang tersedia dingin
              dan hangat. Tidak hanya menyediakan cocoa, Stand ini juga
              menjual Roti, Churros dan soya.
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
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Stand ini menjadi Top 3 untuk area kantin kuning. Stand ini
            menyediakan makananan dan minuman yang menjadi makanan ketika kita
            tidak ingin terlalu makan berat. Stand ini menyediakan Kebab dengan
            berbagai varian, burger dan minuman segar seperti Mocktail dan
            Mojito.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Kantin;
