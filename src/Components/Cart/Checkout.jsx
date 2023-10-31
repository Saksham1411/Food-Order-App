import React from "react";

const Checkout = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const classLabel = "font-bold mb-1 block";
  const classInput = "border border-black rounded w-80 max-w-full px-2";
  return (
    <form className="my-4 max-h-64 overflow-auto" onSubmit={submitHandler}>
      <div className="mb-2">
        <label htmlFor="name" className={classLabel}>
          Your Name
        </label>
        <input type="text" id="name" className={classInput} />
      </div>
      <div className="mb-2">
        <label htmlFor="street" className={classLabel}>
          Street
        </label>
        <input type="text" id="street" className={classInput} />
      </div>
      <div className="mb-2">
        <label htmlFor="city" className={classLabel}>
          City
        </label>
        <input type="text" id="city" className={classInput} />
      </div>
      <div className="mb-2">
        <label htmlFor="postal" className={classLabel}>
          Postal Code
        </label>
        <input type="text" id="postal" className={classInput} />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" onClick={props.onCancel} className="cursor-pointer border-none rounded-3xl py-2 px-8 bg-orange-800 text-white">
          Cancel
        </button>
        <button className="cursor-pointer bg-transparent border-none rounded-3xl py-2 px-8 text-orange-800 ">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
