export const MenuNavigator = [
  {
    title: "All Products",
    navigation: "ProductsDrawer",
  },
  {
    title: "Categories",
    submenu: [
      {
        title: "Shoes",
        navigation: "Category/Shoes",
      },
      {
        title: "Clothing",
        navigation: "Category/Clothing",
      },
    ],
  },
  {
    title: "Men",
    navigation: "MenDrawer",
    submenu: [
      {
        title: "Shoes",
        navigation: "Men/Shoes",
      },
      {
        title: "Clothing",
        navigation: "Men/Clothing",
      },
    ],
  },
  {
    title: "Women",
    navigation: "WomenDrawer",
    submenu: [
      {
        title: "Shoes",
        navigation: "Women/Shoes",
      },
      {
        title: "Clothing",
        navigation: "Women/Clothing",
      },
    ],
  },
];
