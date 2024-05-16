import React, { useState } from "react";

const Cat = [
  { name: "Free Delivery", value: 30, child: [{ name: "Mango", value: 30 }] },
  { name: "Makeup", value: 30, child: [{ name: "Lipstick", value: 30 }] },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div>
      <p className="my-8">Product Categories</p>
      <hr />
      <div className="">
        {Cat.map((v, index) => (
          <div className="" key={index}>
            <div
              onClick={() => handleCategoryClick(v)}
              className="flex justify-between my-5 w-[73%] cursor-pointer"
            >
              <div>{v.name}</div>
              <div>{v.value}</div>
            </div>
            {selectedCategory === v && (
              <div className="ms-2 w-[70%] cursor-pointer">
                {v.child.map((data, index) => (
                  <div key={index} className="flex justify-between">
                    <div>{data.name}</div>
                    <div>{data.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;