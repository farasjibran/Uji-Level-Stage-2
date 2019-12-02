// Input nama yang menjaga kasir
var name = prompt('your name')
$('.name').text(name)

// Holder
const menuHolder = document.getElementById("menuHolder")
const orderHolder = document.getElementById("orderHolder")

let orderItem = []

// Item menu di dalam array
let menuItem = [{
        "nama_item": "French fries",
        "harga": 12000,
        "gambar_item": "https://craftlog.com/m/i/5213567=s1280=h960"
    },
    {
        "nama_item": "Iced tea",
        "harga": 7000,
        "gambar_item": "https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea.jpg"
    },
    {
        "nama_item": "Fried rice",
        "harga": 15000,
        "gambar_item": "https://doyanresep.com/wp-content/uploads/2018/12/cara-membuat-nasi-goreng-telur.jpg"
    },
    {
        "nama_item": "Roti bakar",
        "harga": 9000,
        "gambar_item": "https://selerasa.com/wp-content/uploads/2018/12/roti-bakar-sederhana.jpg"
    },
    {
        "nama_item": "Mie goreng",
        "harga": 5000,
        "gambar_item": "http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-saus-tiram.jpg"
    },
    {
        "nama_item": "Mie rebus",
        "harga": 6000,
        "gambar_item": "https://cdn2.tstatic.net/manado/foto/bank/images/mie_20180331_140834.jpg"
    },
    {
        "nama_item": "Thai tea",
        "harga": 12000,
        "gambar_item": "https://s1.bukalapak.com/img/13012854901/w-1000/Bubuk_minuman_bubuk_thai_tea___Bubble_drink_ice_blended_milk.jpg"
    },
    {
        "nama_item": "Ice Cream",
        "harga": 9000,
        "gambar_item": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/17/0/WU2207_Mermaid-Ice-Cream_s4x3.jpg.rend.hgtvcom.826.620.suffix/1558112854371.jpeg"
    },
]


// Getter And Setter
class Order {
    constructor(nama_item, harga, gambar_item, kelipatan) {
        this._nama_item = nama_item
        this._harga = harga
        this._gambar_item = gambar_item
        this._kelipatan = kelipatan
    }

    get getnama() {
        return this._nama_item
    }

    get getharga() {
        return this._harga
    }

    get getgambar() {
        return this._gambar_item
    }
    get getkelipatan() {
        return this._kelipatan
    }

    set setnama(nama_item) {
        this._nama_item = nama_item
    }

    set setharga(harga) {
        this._harga = harga
    }

    set setgambar(gambar_item) {
        this._gambar_item = gambar_item
    }
    set setkelipatan(kelipatan) {
        this._kelipatan = kelipatan
    }
}

menuItem.forEach(obj => {
    console.log("foreach started")
    Object.entries(obj)
    const data = `'${obj["nama_item"]}', '${obj["harga"]}', '${obj["gambar_item"]}'`
    const bindHolder = '<div onclick="MenuClicked(' + data + ')" class="card-group efek col-md-3 p-3"> <div class="card text-center" style="border: none"> <div class="text-center"> <img style="width: 130px; height:130px; border-radius: 100%" src="' + obj["gambar_item"] + '" class="card-img-top" alt=""> </div> <div class="card-body p-0 pt-2"> <h4 class="mb-1 card-title">' + obj["nama_item"] + '</h4> </div> <div class="card-body text-secondary p-0"> <p class=" card-title">Rp <span>' + obj["harga"] + '</span></p> </div> </div> </div>'
    $("#menuHolder").append(bindHolder)
});

function MenuClicked(nama_item, harga, gambar_item) {
    console.log("menu start")
    for (let i = 0; i < orderItem.length; i++) {
        if (orderItem[i].getnama == nama_item) {
            orderItem[i].setkelipatan = 1 + orderItem[i].getkelipatan
            LoopOrder()
            return
        }
    }

    let order = new Order
    order.setnama = nama_item
    order.setgambar = gambar_item
    order.setharga = harga
    order.setkelipatan = 1
    orderItem.push(order)

    LoopOrder()
}

function LoopOrder() {
    orderHolder.innerHTML = ""

    for (let i = 0; i < orderItem.length; i++) {
        $("#orderHolder").append(' <div class="media p-2 mb-1"> <img src="' + orderItem[i].getgambar + '" class="gambar-item mr-3"alt="..."><div class="media-body"><h5 class="mt-0 mb-0">' + orderItem[i].getnama + '</h5><p style="margin: 0">Rp <span id="harga">' + orderItem[i].getharga + '</span></p> <span class="badge badge-success">' + orderItem[i].getkelipatan + '</span></div><div> <br><h5 class="mb-0 mr-1">Rp <span id="totalQty">' + (orderItem[i].getharga * orderItem[i].getkelipatan) + '</span></h5></div><div class="destroy"><img src="img/Icon ionic-ios-close-circle.png" alt="" class="closedimg"></div></div>');
    }
    Count()
    OnDelete();
}

function OnDelete() {
    for (let position = 0; position < $(".destroy").length; position++) {
        $(`.destroy:eq(${position})`).on('click', function () {
            orderItem.splice(position, 1)
            LoopOrder()
        })
    }
}

function Count() {
    if (orderItem.length >= 1) {
        let itungCount = 0
        for (let i = 0; i < orderItem.length; i++) {
            let harga = Number(orderItem[i].getharga)
            let kelipatan = Number(orderItem[i].getkelipatan)
            itungCount += harga * kelipatan
        }
        let pajak = itungCount * 10 / 100
        let totalCount = itungCount + pajak

        $("#subTotal").text(itungCount)
        $("#tax").text(pajak)
        $("#total").text(totalCount)
    } else if (orderItem.length == 0) {
        $("#subTotal").text(0)
        $("#tax").text(0)
        $("#total").text(0)
    }
};

function Payment() {
    $('#payment')
}