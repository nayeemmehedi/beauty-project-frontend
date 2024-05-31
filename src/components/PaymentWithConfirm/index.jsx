import React, { useState } from "react";
import { buyBkash } from "../../Api/FetchValue";

const Payment = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const { name, email, phone, address, city, country, zipCode } = userInfo;

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  //   const { initialize, makePayment } = useSSLCommerzConfiguration({
  //     store_id: 'your_store_id',
  //     store_password: 'your_store_password',
  //     is_live: false, // Set to true for production
  //   });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await initialize();
      makePayment(data);
    } catch (error) {
      console.log(error);
    }
  };

  async function bashOrCredit() {
    const productWithAddress = {
      location: "Dhaka",
      product: "Lipstic",
      userEmail: "boyneel79@gmail.com",
      paymentOptions: "gateway",
    };

    const buyProduct = await buyBkash(productWithAddress);

    if (buyProduct.statusCode == 200) {
      window.location.replace(buyProduct.data.gateway);
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <div className="bg-red-100">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8 my-6 ">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Please provide your contact details.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <form
              onSubmit={handleSubmit}
              className="px-4 py-6 space-y-8 sm:p-6"
            >
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    value={zipCode}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  {/* <PaymentForm /> */}
                  <button className="border-2 border-green-600 text-green-400 px-3 py-2" onClick={bashOrCredit}>Payment with Bkash</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
