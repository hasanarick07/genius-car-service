import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="w-4/5 shadow-2xl	">
      <img className="rounded m-auto" src={img} alt="" />
      <p>{name}</p>
      <p className="w-4/5 m-auto">
        <small>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          distinctio consectetur doloribus maiores, quae totam animi.
          Consectetur quae suscipit alias?
        </small>
      </p>
      <button
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md 
            w-full px-20 py-2.5 text-center dark:bg-blue-600 
            dark:hover:bg-blue-700 dark:focus:ring-blue-700"
      >
        Hire : {name}
      </button>
    </div>
  );
};

export default Expert;
