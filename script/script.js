// Jquery document ready
$(document).ready(function () {
    loopMenu()
});


// Input nama yang menjaga kasir
var name = prompt('Enter Your Name')
$('.account').text(name)

// Holder
const menuHolder = document.getElementById("menuHolder")
const orderHolder = document.getElementById("orderHolder")

let orderItem = []

// Item menu di dalam array
let menuItem = [
    // List makanan berat
    {
        "Kategori": "MakananBerat",
        "nama_item": "Nasi goreng",
        "harga": 15000,
        "gambar_item": "https://doyanresep.com/wp-content/uploads/2018/12/cara-membuat-nasi-goreng-telur.jpg"
    },
    {
        "Kategori": "MakananBerat",
        "nama_item": "Mie goreng",
        "harga": 5000,
        "gambar_item": "http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-saus-tiram.jpg"
    },
    {
        "Kategori": "MakananBerat",
        "nama_item": "Mie rebus",
        "harga": 6000,
        "gambar_item": "https://kepotek.com/wp-content/uploads/2019/04/4-Resep-Mie-Kuah-Enak-Dan-Murah-696x471.jpg"
    },
    {
        "Kategori": "MakananBerat",
        "nama_item": "Ayam bakar",
        "harga": 26000,
        "gambar_item": "https://doyanresep.com/wp-content/uploads/2018/12/cara-membuat-ayam-bakar-kecap.jpg"
    },
    {
        "Kategori": "MakananBerat",
        "nama_item": "Ayam geprek",
        "harga": 20000,
        "gambar_item": "https://cdn-brilio-net.akamaized.net/news/2019/10/07/171868/1107923-10-resep-ayam-geprek-crispy-enak.jpg"
    },


    // List makanan ringan
    {
        "Kategori": "MakananRingan",
        "nama_item": "Roti bakar",
        "harga": 9000,
        "gambar_item": "https://selerasa.com/wp-content/uploads/2018/12/roti-bakar-sederhana.jpg"
    },
    {
        "Kategori": "MakananRingan",
        "nama_item": "Kentang goreng",
        "harga": 12000,
        "gambar_item": "https://craftlog.com/m/i/5213567=s1280=h960"
    },
    {
        "Kategori": "MakananRingan",
        "nama_item": "Martabak mie",
        "harga": 13000,
        "gambar_item": "https://kurio-img.kurioapps.com/18/05/17/a6be5fb91b7dfcc1d058117a22ecc788.jpeg"
    },
    {
        "Kategori": "MakananRingan",
        "nama_item": "Pancong Keju",
        "harga": 12000,
        "gambar_item": "https://media.travelingyuk.com/wp-content/uploads/2018/07/Kue-Pancong-Rawa-Belong.jpg"
    },
    {
        "Kategori": "MakananRingan",
        "nama_item": "Waffle + Ice cream",
        "harga": 19000,
        "gambar_item": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/11/27/DV2907_BBB%20Bacon-in-the-Batter-Buttermilk-Waffle-Bourbon-Ice-Cream-Bacon-Toffee_s4x3.jpg.rend.hgtvcom.826.620.suffix/1543329865056.jpeg"
    },

    // List minuman
    {
        "Kategori": "Minuman",
        "nama_item": "Thai tea",
        "harga": 12000,
        "gambar_item": "https://s1.bukalapak.com/img/13012854901/w-1000/Bubuk_minuman_bubuk_thai_tea___Bubble_drink_ice_blended_milk.jpg"
    },
    {
        "Kategori": "Minuman",
        "nama_item": "Iced tea",
        "harga": 7000,
        "gambar_item": "https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea.jpg"
    },

    // List Dessert
    {
        "Kategori": "Dessert",
        "nama_item": "Ice cream",
        "harga": 9000,
        "gambar_item": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/17/0/WU2207_Mermaid-Ice-Cream_s4x3.jpg.rend.hgtvcom.826.620.suffix/1558112854371.jpeg"
    },
]

// Loop Kategori
function loopMenu(Kategori) {
    $('#mknberatHolder').html("")
    $('#mknringanHolder').html("")
    $('#minumanHolder').html("")
    $('#dessertHolder').html("")
    menuItem.forEach(obj => {
        console.log("foreach started")
        Object.entries(obj)
        const data = `'${obj["nama_item"]}', '${obj["harga"]}', '${obj["gambar_item"]}'`
        if (Kategori != null) {
            console.log(Kategori)
            // List Item
            if (obj["Kategori"] == "MakananBerat" && Kategori == "MakananBerat") {
                const mknBeratBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#mknberatHolder").append(mknBeratBind)
            } else if (obj["Kategori"] == "MakananRingan" && Kategori == "MakananRingan") {
                const mknRinganBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#mknringanHolder").append(mknRinganBind)
            } else if (obj["Kategori"] == "Minuman" && Kategori == "Minuman") {
                const minumanBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#minumanHolder").append(minumanBind)
            } else if (obj["Kategori"] == "Dessert" && Kategori == "Dessert") {
                const dessertBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#dessertHolder").append(dessertBind)
            }
        } else {
            if (obj["Kategori"] == "MakananBerat") {
                const mknBeratBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#mknberatHolder").append(mknBeratBind)
            } else if (obj["Kategori"] == "MakananRingan") {
                const mknRinganBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#mknringanHolder").append(mknRinganBind)
            } else if (obj["Kategori"] == "Minuman") {
                const minumanBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#minumanHolder").append(minumanBind)
            } else if (obj["Kategori"] == "Dessert") {
                const dessertBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#dessertHolder").append(dessertBind)
            }
        }
    });
}

// Fuction Holder
function ItemHolder(data, nama_item, harga, gambar_item) {
    const ItemHolder = `<div onclick="MenuClicked(${data})" class="card-group sorot col-md-3 p-3"> <div class="card text-center" style="border: none"> <div class="text-center"> <img style="width: 130px; height:130px; border-radius: 100%" src="${gambar_item}" class="card-img-top" alt=""> </div> <div class="card-body p-0 pt-2"> <h4 class="mb-1 card-title">${nama_item}</h4> </div> <div class="card-body text-secondary p-0"> <p class=" card-title">Rp <span>${harga}</span></p> </div> </div> </div>`
    return ItemHolder;
}

function MenuClicked(nama_item, harga, gambar_item) {
    console.log("menu start")
    for (let i = 0; i < orderItem.length; i++) {
        if (orderItem[i]["nama_item"] == nama) {
            orderItem[i]["qty"] += 1
            LoopOrder()
            return
        }
    }

    let order = {
        "nama_item": nama_item,
        "harga": harga,
        "gambar_item": gambar_item,
        "qty": 1,
    }
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