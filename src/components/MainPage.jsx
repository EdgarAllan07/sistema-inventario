import React from "react";

function MainPage() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-5xl overflow-auto ml-52">
          <h1 className="text-xl font-semibold text-center mb-5">Productos</h1>
          <div
            className="relative overflow-x-auto h-full "
            style={{ maxHeight: "32rem" }}
          >
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
