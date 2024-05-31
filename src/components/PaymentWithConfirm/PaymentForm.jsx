

async function PaymentForm() {

  


    const buyProduct = await buyBkash(productWithAddress);

    
    if (buyProduct.statusCode == 200) {
      window.location.replace(buyProduct.data.gateway);
    } else {
      alert("Something went wrong");
    }
  

  return (
    <div className="bg-zinc-200 py-5">
      <div>
        <p className="text-center text-xl font-bold">
          Select Your Payment Method
        </p>
      </div>
      <div className="w-[40%]  ml-auto mr-auto grid grid-cols-2 ">
        <div className="py-5 shadow m-4 bg-white grid content-center justify-center hover:text-xl hover:text-red-600">
          <button type="button" onClick={() => cashOne()}>Cash On Delivery</button>
        </div>

        <div className="py-5 shadow m-4 bg-white grid content-center justify-center hover:text-xl hover:text-red-600">
          <button type="button" onClick={() => bashOrCredit()}>Bkash/Credit Card</button>
        </div>
      </div>

      <div className="text-center text-green-700">
        Please select which mathod  preferences you want to.
      </div>
    </div>
  );
}

export default PaymentForm;
