export const MenuNavigator = [
    {
        title: "All Products",
        navigation: "ProductStack",
        icon: 'home-outline'
    },
    {
        title: "Categories",
        icon: 'albums-outline',
        submenu: [
            {
                title: "Shoes",
                navigation: "Category/Shoes"

            },
            {
                title: "Clothing",
                navigation: "Category/Clothing"
            }
        ],
    },
    {
        title: "Men",
        navigation: "MenStack",
        icon: 'male',
        submenu: [
            {
                title: "Shoes",
                navigation: "Men/Shoes"

            },
            {
                title: "Clothing",
                navigation: "Men/Clothing"
            }
        ]
    },
    {
        title: "Women",
        navigation: "WomenStack",
        icon: 'female',
        submenu: [
            {
                title: "Shoes",
                navigation: "Women/Shoes"

            },
            {
                title: "Clothing",
                navigation: "Women/Clothing"
            }
        ]
    }
];