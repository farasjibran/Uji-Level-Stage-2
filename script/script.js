var name = prompt('your name')
$('.name').text(name)
const menuHolder = document.getElementById("menuHolder")
const orderHolder = document.getElementById("orderHolder")

let orderList = []

let menuData = [{
        "name": "French fries",
        "price": 12000,
        "image": "https://craftlog.com/m/i/5213567=s1280=h960"
    },
    {
        "name": "Iced tea",
        "price": 7000,
        "image": "https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea.jpg"
    },
    {
        "name": "Fried rice",
        "price": 15000,
        "image": "https://doyanresep.com/wp-content/uploads/2018/12/cara-membuat-nasi-goreng-telur.jpg"
    },
    {
        "name": "Roti bakar",
        "price": 9000,
        "image": "https://selerasa.com/wp-content/uploads/2018/12/roti-bakar-sederhana.jpg"
    },
    {
        "name": "Mie goreng",
        "price": 5000,
        "image": "http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-saus-tiram.jpg"
    },
    {
        "name": "Mie rebus",
        "price": 6000,
        "image": "https://cdn2.tstatic.net/manado/foto/bank/images/mie_20180331_140834.jpg"
    },
    {
        "name": "Thai tea",
        "price": 12000,
        "image": "https://s1.bukalapak.com/img/13012854901/w-1000/Bubuk_minuman_bubuk_thai_tea___Bubble_drink_ice_blended_milk.jpg"
    },
    {
        "name": "Ice Cream",
        "price": 9000,
        "image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/17/0/WU2207_Mermaid-Ice-Cream_s4x3.jpg.rend.hgtvcom.826.620.suffix/1558112854371.jpeg"
    },
]

class Order {
    constructor(name, price, image, qty) {
        this._name = name
        this._price = price
        this._image = image
        this._qty = qty
    }

    get getname() {
        return this._name
    }

    get getprice() {
        return this._price
    }

    get getimage() {
        return this._image
    }
    get getqty() {
        return this._qty
    }

    set setname(name) {
        this._name = name
    }

    set setprice(price) {
        this._price = price
    }

    set setimage(image) {
        this._image = image
    }
    set setqty(qty) {
        this._qty = qty
    }
}

menuData.forEach(obj => {
    console.log("foreach started")
    Object.entries(obj)
    const data = `'${obj["name"]}', '${obj["price"]}', '${obj["image"]}'`
    const bindHolder = '<div onclick="MenuClicked(' + data + ')" class="card-group sorot col-md-3 p-3"> <div class="card text-center" style="border: none"> <div class="text-center"> <img style="width: 130px; height:130px; border-radius: 100%" src="' + obj["image"] + '" class="card-img-top" alt=""> </div> <div class="card-body p-0 pt-2"> <h4 class="mb-1 card-title">' + obj["name"] + '</h4> </div> <div class="card-body text-secondary p-0"> <p class=" card-title">Rp <span>' + obj["price"] + '</span></p> </div> </div> </div>'
    $("#menuHolder").append(bindHolder)
});

function MenuClicked(name, price, image) {
    console.log("menu start")
    for (let i = 0; i < orderList.length; i++) {
        if (orderList[i].getname == name) {
            orderList[i].setqty = 1 + orderList[i].getqty
            LoopOrder()
            return
        }
    }

    let order = new Order
    order.setname = name
    order.setimage = image
    order.setprice = price
    order.setqty = 1
    orderList.push(order)

    LoopOrder()
}

function LoopOrder() {
    orderHolder.innerHTML = ""

    for (let i = 0; i < orderList.length; i++) {
        $("#orderHolder").append(' <div class="media p-2 mb-1"> <img src="' + orderList[i].getimage + '" class="gambar-item mr-3"alt="..."><div class="media-body"><h5 class="mt-0 mb-0">' + orderList[i].getname + '</h5><p style="margin: 0">Rp <span id="harga">' + orderList[i].getprice + '</span></p> <span class="badge badge-success">' + orderList[i].getqty + '</span></div><div> <br><h5 class="mb-0 mr-1">Rp <span id="totalQty">' + (orderList[i].getprice * orderList[i].getqty) + '</span></h5></div><div class="destroy"><img src="img/Icon ionic-ios-close-circle.png" alt="" class="closedimg"></div></div>');
    }
    Count()
    OnDelete();
}

function OnDelete() {
    for (let position = 0; position < $(".destroy").length; position++) {
        $(`.destroy:eq(${position})`).on('click', function () {
            orderList.splice(position, 1)
            LoopOrder()
        })
    }
}

function Count() {
    if (orderList.length >= 1) {
        let rawCount = 0
        for (let i = 0; i < orderList.length; i++) {
            let price = Number(orderList[i].getprice)
            let qty = Number(orderList[i].getqty)
            rawCount += price * qty
        }
        let tax = rawCount * 10 / 100
        let totalCount = rawCount + tax

        $("#subTotal").text(rawCount)
        $("#tax").text(tax)
        $("#total").text(totalCount)
    } else if (orderList.length == 0) {
        $("#subTotal").text(0)
        $("#tax").text(0)
        $("#total").text(0)
    }
};