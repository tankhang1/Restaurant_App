const DataRestaurant=[
    {
        id:1,
        type:"Breakfast",
        name: "Bento Delichi",
        image: require('../../assets/Data_restaurant_image/BreakFast/GaXoiMamToi.png'),
        menu: [{
            id :1.1,
            name:"Cơm Gà Sốt Chua Cay",
            subtitle: "Đùi Gà Góc Tư size Lớn sốt chua cay hoà hợp, ăn với cơm thơm ngon càng thêm đậm đà, có dưa chua tặng kèm. Vị lạ lạ mà ngon ngất ngây!",
            image: require('../../assets/Data_restaurant_image/BreakFast/GaSotChuaCay.png'),
            money:62,
            quality:1
        },
        {
            id:1.2,
            name:"Cơm gà xối mắm tỏi",
            subtitle:"Đùi Gà Góc Tư khổng lồ xối mắm tỏi phi, có dưa chua ăn kèm, bao ngon!",
            image: require('../../assets/Data_restaurant_image/BreakFast/GaXoiMamToi.png'),
            money:62,
            quality:1,
        }   ,
        {
            id:1.3,
            name:"Cơm gà sốt chao",
            subtitle:"Đùi Gà Góc Tư Size Lớn sốt chao đậm đà, béo béo từ môn, được chế biến với công thức đặc biệt, ăn cùng cơm vàng, dưa chua vô cùng hoà hợp. Vị lạ lạ mà thơm ngon nên thử bạn nhé!",
            image:require('../../assets/Data_restaurant_image/BreakFast/GaSotChao.png'),
            money:62,
            quality:1,
        },
        {
            id:1.4,
            name:"Cơm gà xối mỡ",
            subtitle:"Đùi Gà Góc Tư to bự, giòn rụm, cơm thơm mỡ gà, tặng kèm dưa chua ăn siêu ngon.",
            image:require('../../assets/Data_restaurant_image/BreakFast/GaXoiMo.png'),
            money:62,
            quality:1,
        },
        {
            id :1.5,
            name:"Cơm gà sốt me",
            subtitle:"Đùi Gà Góc Tư siêu bự, sốt me vị chua chua ngọt ngọt, hoà cùng cơm thơm mỡ gà, có dưa chua ăn kèm, vị ngon khó cưỡng!",
            image: require('../../assets/Data_restaurant_image/BreakFast/GaSotMe.png'),
            money:62,
            quality:1,
        }
    ],
    rating: 4.4,
    TimeOperate: "9h30 - 21h30",
    },
    {
        id:2,
        type:"Breakfast",
        name:"Cơm Phố - Đào Tấn",
        image: require('../../assets/Data_restaurant_image/BreakFast/BoSotTieu.png'),
        menu:[
            {
                id:2.1,
                name:"Cơm gà sốt nấm",
                subtitle:"gà tươi mềm sốt vừa vị rễ ăn,tặng kèm 1 trứng ốp hồng đào",
                image: require('../../assets/Data_restaurant_image/BreakFast/GaSotNam.png'),
                money:44,
                quality:1,
            },
            {
                id:2.2,
                name:"Bò sốt tiêu",
                subtitle:"bò tươi vừa vị hơi cay nhẹ tặng kèm 1 trứng ốp hồng đào",
                image: require('../../assets/Data_restaurant_image/BreakFast/BoSotTieu.png'),
                money:47.2,
                quality:1,
            },
            {
                id:2.3,
                name:"Cơm cá kho",
                subtitle:'cơm được tặng 2 trứng ốp hồng đào ăn cùng với rau canh theo mùa',
                image: require('../../assets/Data_restaurant_image/BreakFast/ComCaKho.png'),
                money:47.2,
                quality:1,
            },
            {
                id:2.4,
                name:"Cơm ba chỉ rang cháy cạnh",
                subtitle:'tặng kèm 1 trứng ốp hồng đào',
                image: require('../../assets/Data_restaurant_image/BreakFast/CamBaChiRang.png'),
                money:44,
                quality:1,
            }
        ],
        rating:4.6,
        TimeOperate: "10h-22h",
    },
    {
        id:3,
        type:"Breakfast",
        name:"Cháo Lòng Gia Truyền Chai_en",
        image: require('../../assets/Data_restaurant_image/BreakFast/DauLongLuoc.png'),
        menu:[
            {
                id:3.1,
                name:"Đầu lòng luộc",
                subtitle:'Gồm 2 lạng đầu lòng non, ngon giòn như lòng xe điếu!',
                image: require('../../assets/Data_restaurant_image/BreakFast/DauLongLuoc.png'),
                money:120,
                quality:1,
            },
            {
                id:3.2,
                name:"Lòng thập cẩm",
                subtitle:'Gồm : Lòng non , Gan , Họng , Dạ Dày , Dải , Nõn Đuôi , Dồi Mỡ ChaiEn + Rau Sống Tươi Xanh + Nước Chấm Đậm Đà <3',
                image: require('../../assets/Data_restaurant_image/BreakFast/LongThapCam.png'),
                money:189,
                quality:1,
            },
            {
                id:3.3,
                name:"Dồi mỡ",
                subtitle:'Dồi làm từ lòng già ngâm muối sơ chế sạch sẽ, mỡ sạch , tiết sạch tạo lên thương hiệu dồi mỡ nhà Chai-En <3',
                image: require('../../assets/Data_restaurant_image/BreakFast/DoiMo.png'),
                money:69,
                quality:1,
            },
            {
                id:3.4,
                name:'Nem tai',
                subtitle:'Thơm Ngon - Giòn Rụm <3',
                image: require('../../assets/Data_restaurant_image/BreakFast/NemTai.png'),
                money:79,
                quality:1,
            }
        ],
        rating:5,
        TimeOperate: "8h-23h",
    },
    {
        id:4,
        type:"Ramen",
        name:"Ramen Nhật Bản",
        image: require('../../assets/Data_restaurant_image/Ramen/Ramen.png'),
        menu:[
            {
                id:4.1,
                name:"Mì Ramen",
                subtitle:'Mì Ramen là một trong những món ăn ngon nức tiếng của đất nước Nhật Bản. Đây cũng là một món ăn truyền thống mà người Nhật rất ưa chuộng và tự hào.',
                image: require('../../assets/Data_restaurant_image/Ramen/MiRamen.png'),
                money:100,
                quality:1,
            },
            {
                id:4.2,
                name:"Shio Ramen",
                subtitle:'Nước dùng của món Shio Ramen được xem là loại lâu đời nhất và trên thực tế, shio cũng có nghĩa là “muối”.',
                image: require('../../assets/Data_restaurant_image/Ramen/ShinoRamen.png'),
                money:189,
                quality:1,
            },
            {
                id:4.3,
                name:"Miso Ramen",
                subtitle:"Nước dùng của món Miso Ramen này có vị hơi ngọt, mùi thơm hấp dẫn là sản phẩm của sự kết hợp mỡ gà hay nước dùng cá, hay đôi khi có cả mỡ lợn. ",
                image: require('../../assets/Data_restaurant_image/Ramen/MisoRamen.png'),
                money:120,
                quality:1,
            },
        ],
        rating:4.8,
        TimeOperate: "18h-23h",
    },
]
export default DataRestaurant;