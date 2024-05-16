import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

let value = [
  {
    name: "Description",
    link: "/product-details/:id/description",
  },
  {
    name: "Reviews",
    link: "/product-details/:id/reviews",
  },
  {
    name: "FAQ",
    link: "/product-details/:id/faq",
  },
  {
    name: "Give Reviews",
    link: "/product-details/:id/give-review",
  },
];

function Review() {
  const [valueS, setValueS] = useState("Description");

  return (
    <div>
      <div className="flex gap-4 justify-center">
        {value.map((v, i) => (
          <Link to={v.link}>
            <div key={i} className="px-7 py-2 shadow border-2 rounded-lg ">
              {v.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Review;
