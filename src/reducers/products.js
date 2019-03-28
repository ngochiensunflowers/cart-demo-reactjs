var initialState = [
    {
        id : 1,
        name : 'Samsung Galaxy Watch Rose Gold  ',
        image : 'https://cdn.tgdd.vn/Products/Images/7077/197483/samsung-galaxy-watch-42mm-rose-gold-nt-600x600.jpg',
        description : 'Phong cách riêng của phái nữ',
        price : 650000,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Samsung Galaxy watch 46mm',
        image : 'https://cdn.tgdd.vn/Products/Images/7077/197089/samsung-galaxy-watch-46mm-bac-nt-400x400.jpg',
        description : 'Chuẩn mực thời trang mới',
        price : 7490000,
        inventory : 15,
        rating : 4
    },
    {
        id : 3,
        name : 'Apple Watch S4 GPS 40mm viền nhôm',
        image : 'https://cdn.tgdd.vn/Products/Images/7077/194329/apple-watch-s4-gps-40mm-vien-nhom-day-vai-mau-hong-nt-600x600.jpg',
        description : 'Thiết kế mới với dây vải',
        price : 10450000,
        inventory : 5,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;