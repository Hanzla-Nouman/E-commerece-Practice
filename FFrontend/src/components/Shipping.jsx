import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Country, State } from "country-state-city";

import { saveShippingInfo } from "../store/cartActions.js";
import Steppers from "./Steppers.jsx";
import { useNavigate } from "react-router";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cartReducer);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const handleFormSubmit=()=>{
    dispatch(saveShippingInfo({address,city,state,country,pinCode,phoneNo}))
    navigate("/order/confirm")
  }
  return (
    <>
      <Steppers step={0} />

      <div
        className="flex flex-col justify-center mb-2  "
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div
          className="bg-slate-300"
          style={{
            width: "700px",
            borderRadius: "10px",
            paddingBottom: "60px",
          }}
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
            <h2 className="mt-3 text-center text-2xl font-bold  text-gray-900">
              Shipping Details
              <div className="divider" style={{marginTop:"60x"}}></div>
            </h2>
          </div>

          <div
            className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm"
          
          >
            <form className="shippingForm" onSubmit={handleFormSubmit}>
              <label
                //   htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 text-left"
              >
                Address
              </label>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>

<div className="flex">
              <div className="mb-2">
                <label
                  //   htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mb-2" style={{marginLeft:"30px"}}>
                <label
                  //   htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Pin Code
                </label>
                <input
                  type="number"
                  placeholder="Pin Code"
                  required
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  className="block w-24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              <div className="mb-3">
                <label
                  //   htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Phone No.
                </label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  required
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  size="10"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                //   htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 text-left"
              >
                Country
              </label>
              <div className="mb-3">
                <select
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Country</option>
                  {Country &&
                    Country.getAllCountries().map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              {country && (
                <div>
              <label
                //   htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 text-left"
              > 
                State / Province
              </label>
                  <select
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="">State</option>
                    {State &&
                      State.getStatesOfCountry(country).map((item) => (
                        <option key={item.isoCode} value={item.isoCode}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
              )}

              <button
                type="submit"
                className=" mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
