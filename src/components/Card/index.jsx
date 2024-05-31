import QtyValue from "../../common/QtyValue";
import useCartStore from "../../store";
import PhoneInputComponent from "../../utils/PremiumMobileInput";
// import PremiumMobileInput from "../../utils/PremiumMobileInput";
import AddCard from "./AddCard";
import OderSummery from "./OderSummery";
import Badge from "@mui/material/Badge";

function Card() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="bg-zinc-200 py-16">
      <div className="w-[95%] ml-auto mr-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <AddCard value={cart}></AddCard>
          </div>
          <div className="">
            <OderSummery value={cart}></OderSummery>
          </div>
        </div>
      </div>

      {/* <PremiumMobileInput></PremiumMobileInput> */}
    </div>
  );
}

export default Card;
