import React, { useRef, useState } from "react";

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    house: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const houseRef = useRef();

  const isEmpty = (value) => value.trim().length !== 0;

  const submitHandler = (e) => {
    e.preventDefault();

    const nameVal = nameRef.current.value;
    const streetVal = streetRef.current.value;
    const cityVal = cityRef.current.value;
    const houseVal = houseRef.current.value;

    const nameIsValid = isEmpty(nameVal);
    const streetIsValid = isEmpty(streetVal);
    const cityIsValid = isEmpty(cityVal);
    const houseIsValid = isEmpty(houseVal);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      house: houseIsValid,
    });

    const isFormValid =
      nameIsValid && streetIsValid && cityIsValid && houseIsValid;

    if (!isFormValid) {
      return;
    }

    props.onConfirm({
      name:nameVal,
      street:streetVal,
      city:cityVal,
      house:houseVal, 
    })

  };

  const classLabel = "font-bold mb-1 block";
  const classInput = "border border-black rounded w-80 max-w-full px-2";
  return (
    <form className="my-4 max-h-64 overflow-auto" onSubmit={submitHandler}>
      <div className={`mb-2 ${formValidity ? "" : "bg-red-900"}`}>
        <label htmlFor="name" className={classLabel}>
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className={`${classInput} ${
            formValidity.name ? "" : "bg-red-700 bg-opacity-60 border-red-900"
          }`}
          ref={nameRef}
        />
        {!formValidity.name && (
          <p className="text-red-700 font-semibold">Enter a Valid name</p>
        )}
      </div>
      <div className="mb-2 bg ">
        <label htmlFor="street" className={classLabel}>
          Street
        </label>
        <input
          type="text"
          id="street"
          className={`${classInput} ${
            formValidity.street
              ? ""
              : "bg-red-700 bg-opacity-60 border-red-900 "
          }`}
          ref={streetRef}
        />
        {!formValidity.street && (
          <p className="text-red-700 font-semibold">Enter a valid street</p>
        )}
      </div>
      <div className="mb-2">
        <label htmlFor="city" className={classLabel}>
          City
        </label>
        <input
          type="text"
          id="city"
          className={`${classInput} ${
            formValidity.city ? "" : "bg-red-700 bg-opacity-60 border-red-900"
          }`}
          ref={cityRef}
        />
        {!formValidity.city && (
          <p className="text-red-700 font-semibold">Enter a valid city</p>
        )}
      </div>
      <div className="mb-2">
        <label htmlFor="house" className={classLabel}>
          House No.
        </label>
        <input
          type="text"
          id="house"
          className={`${classInput} ${
            formValidity.house ? "" : "bg-red-700 bg-opacity-60 border-red-900"
          }`}
          ref={houseRef}
        />
        {!formValidity.house && (
          <p className="text-red-700 font-semibold">Enter a valid house</p>
        )}
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={props.onCancel}
          className="cursor-pointer border-none rounded-3xl py-2 px-8 bg-orange-800 text-white"
        >
          Cancel
        </button>
        <button className="cursor-pointer bg-transparent border-none rounded-3xl py-2 px-8 text-orange-800 ">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
