import React from "react";

const page = () => {
  return (
    <section className="h-[92vh] justify-center flex items-center flex-col">
      <h1 className="text-3xl font-semibold text-gray-400">Connexion</h1>
      <form action="" className="flex flex-col justify-center  items-center p-10 border-2 border-gray-400 rounded-md h-1/2 w-1/4">
        <div className="flex flex-col gap-5">
          <div className="relative">
            <input id="email" type="email" name="email" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="Password" />
            <label for="email" class="absolute cursor-text  left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
              Email
            </label>
          </div>
          <div className="relative">
            <input id="password" type="password" name="password" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="Password" />
            <label for="password" class="absolute cursor-text left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
              Password
            </label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default page;
