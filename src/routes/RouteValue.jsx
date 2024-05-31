import { ImportValue } from "../utils/FileHandle";


export const routes = [
    { path: "/", element: <ImportValue.Home />, isPrivate: false },
    { path: "/card", element: <ImportValue.Card />, isPrivate: true },
    { path: "/signup", element: <ImportValue.Signup />, isPrivate: false },
  
    { path: "/product", element: <ImportValue.ProductPage />, isPrivate: false },
    { path: "/about-us", element: <ImportValue.AboutUs />, isPrivate: false },
    { path: "/payment", element: <ImportValue.Payment />, isPrivate: true },


    { path: "/confirm-product", element: <ImportValue.ConfirmProduct />, isPrivate: false },

    // { path: "/login", element: <ImportValue.Login />, isPrivate: false },
    {
      path: "/product-details/:id/*",
      element: <ImportValue.ProductDetails />,
      children: [
        { path: "", element: <ImportValue.Description />, isPrivate: false },
  
        { path: "description", element: <ImportValue.Description />, isPrivate: false },
        { path: "reviews", element: <ImportValue.Reviews />, isPrivate: false },
        { path: "faq", element: <ImportValue.Fqa />, isPrivate: false },
        { path: "give-review", element: <ImportValue.GiveReview />, isPrivate: false },
  
      ],
      isPrivate: false,
    },
    { path: "/dashboard", element: <ImportValue.DashbBoard />, isPrivate: true },
  ];