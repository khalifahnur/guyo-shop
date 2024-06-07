import React from "react";

const IntroSection = () => {
  return (
    <section class="flex flex-col px-20 py-10 space-x-10 lg:flex-row items-center justify-center h-1/2 bg-gray-100">
      <div class="text-center lg:text-left lg:w-1/2 justify-center">
        <h1 class="text-5xl font-bold mb-6">
          Shop your favorite items in <span class="text-red-600">Easy</span>{" "}
          steps.
        </h1>
        <p class="text-lg mb-6">
          Discover the best products at unbeatable prices
        </p>
      </div>
      <div class="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="home-img.jpeg"
          alt="Car Image"
          class="max-w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default IntroSection;
