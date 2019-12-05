// Jquery document ready
$(document).ready(function () {
    LoopMenu()
});

// Input nama penjaga kasir
var name = prompt('Enter Your Name')
$('.guard').text(name)

// Holder
const menuHolder = document.getElementById("menuHolder")
const orderanHolder = document.getElementById("orderanHolder")

// let untuk menghitung hasil
let subTotal = 0
let totalHasil = 0
let tax = 0

// array untuk menyimpan data yang sudah diclick
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
        "harga": 10000,
        "gambar_item": "http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-saus-tiram.jpg"
    },
    {
        "Kategori": "MakananBerat",
        "nama_item": "Mie rebus",
        "harga": 10000,
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
    {
        "Kategori": "Minuman",
        "nama_item": "Coffe latte",
        "harga": 12000,
        "gambar_item": "https://majalah.ottencoffee.co.id/wp-content/uploads/2015/07/shutterstock_223511062.jpg"
    },
    {
        "Kategori": "Minuman",
        "nama_item": "Ice leci",
        "harga": 10000,
        "gambar_item": "https://img-global.cpcdn.com/recipes/a12f3af908abbb2c/751x532cq70/es-leci-kelapa-muda-foto-resep-utama.jpg"
    },
    {
        "Kategori": "Minuman",
        "nama_item": "Ice tarro latte",
        "harga": 14000,
        "gambar_item": "https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/Qy2I1SLCxk.jpg"
    },

    // List Dessert
    {
        "Kategori": "Dessert",
        "nama_item": "Ice cream",
        "harga": 9000,
        "gambar_item": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/17/0/WU2207_Mermaid-Ice-Cream_s4x3.jpg.rend.hgtvcom.826.620.suffix/1558112854371.jpeg"
    },
    {
        "Kategori": "Dessert",
        "nama_item": "Waffle + Ice cream",
        "harga": 19000,
        "gambar_item": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/11/27/DV2907_BBB%20Bacon-in-the-Batter-Buttermilk-Waffle-Bourbon-Ice-Cream-Bacon-Toffee_s4x3.jpg.rend.hgtvcom.826.620.suffix/1543329865056.jpeg"
    },
    {
        "Kategori": "Dessert",
        "nama_item": "Pancake",
        "harga": 14000,
        "gambar_item": "https://www.handletheheat.com/wp-content/uploads/2019/02/The-Best-Pancake-Recipe-SQUARE.jpg"
    },
]

// Loop Kategori
function LoopMenu(Kategori) {
    $('#menuHolder').html("")
    menuItem.forEach(obj => {
        console.log("foreach started")
        Object.entries(obj)
        const data = `'${obj["nama_item"]}', '${obj["harga"]}', '${obj["gambar_item"]}'`
        if (Kategori != null) {
            console.log(Kategori)
            // List Item
            if (obj["Kategori"] == "MakananBerat" && Kategori == "MakananBerat") {
                const mknBeratBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#menuHolder").append(mknBeratBind)
            } else if (obj["Kategori"] == "MakananRingan" && Kategori == "MakananRingan") {
                const mknRinganBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#menuHolder").append(mknRinganBind)
            } else if (obj["Kategori"] == "Minuman" && Kategori == "Minuman") {
                const minumanBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#menuHolder").append(minumanBind)
            } else if (obj["Kategori"] == "Dessert" && Kategori == "Dessert") {
                const dessertBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#menuHolder").append(dessertBind)
            }
        } else {
            if (obj["Kategori"] == "MakananBerat") {
                const mknBeratBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#menuHolder").append(mknBeratBind)
            } else if (obj["Kategori"] == "MakananRingan") {
                const mknRinganBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#menuHolder").append(mknRinganBind)
            } else if (obj["Kategori"] == "Minuman") {
                const minumanBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#menuHolder").append(minumanBind)
            } else if (obj["Kategori"] == "Dessert") {
                const dessertBind = ItemHolder(data, obj["nama_item"], obj["harga"], obj["gambar_item"])
                $("#menuHolder").append(dessertBind)
            }
        }
    });
}

// Fuction Holder
function ItemHolder(data, nama_item, harga, gambar_item) {
    const itemHolder = ` <div onclick="MenuClicked(${data})" class="col-md-2 card mb-2 mr-2" style="height: 13rem;">
    <img src="${gambar_item}" class="card-img-top" alt="..." style="height: 120px; margin-bottom: -10px">
    <div class="card-body text-center">
        <h5 class="card-title mb-0"><b>${nama_item}</b></h5>
        <p class="card-text">Rp. ${harga}</p>
    </div>
</div>`
    return itemHolder;
}

// Fuction apabila menu diclick
function MenuClicked(nama_item, harga, gambar_item) {
    console.log("menu start")
    for (let i = 0; i < orderItem.length; i++) {
        if (orderItem[i]["nama_item"] == nama_item) {
            orderItem[i]["kelipatan"] += 1
            LoopOrder()
            return
        }
    }
    let order = {
        "nama_item": nama_item,
        "harga": harga,
        "gambar_item": gambar_item,
        "kelipatan": 1,
    }
    orderItem.push(order)
    LoopOrder()
}

// Function untuk menampilkan menu yang sudah diclick
function LoopOrder() {
    $('#orderanHolder').html("")
    for (let i = 0; i < orderItem.length; i++) {
        const itemHolder = `
        <div class="media p-2 mb-1">
        <div class="media-body">
            <h5 class="mt-0 mb-2"><b>${orderItem[i]["nama_item"]}</b></h5>
            <p style="margin: 0"><span>Unit Price : Rp. </span>${orderItem[i]["harga"]}<span></span></p>
        </div>
        <div>
            <h5 class="mb-1">Rp ${(orderItem[i]["harga"] * orderItem[i]["kelipatan"])}</h5>
            <p class="mb-0 mr-1">Quantity : ${orderItem[i]["kelipatan"]}</p>
        </div>
        <div class="destroy">
            <img src="asset/img/Icon awesome-trash-alt.png" class="ml-3 mt-2" alt="..."
                style="width: 25px">
        </div>
    </div>`
        $("#orderanHolder").append(itemHolder);
    }
    Counting()
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

function Counting() {
    if (orderItem.length >= 1) {
        subTotal = 0
        for (let i = 0; i < orderItem.length; i++) {
            let menghitung = (orderItem[i]["harga"] * orderItem[i]["kelipatan"])
            subTotal += menghitung
        }
        tax = subTotal * 10 / 100
        totalHasil = subTotal + tax

        $("#subTotal").text(subTotal)
        $("#tax").text(tax)
        $("#total").text(totalHasil)
    } else if (orderItem.length == 0) {
        $("#subTotal").text(0)
        $("#tax").text(0)
        $("#total").text(0)
    }
};

$("#btnpayment").click(function () {
    console.log("payment : Clicked")
    $("#paymentHolder").html("")
    for (let i = 0; i < orderItem.length; i++) {
        const itemHolder = `
        <div class="media p-2 mb-1">
        <div class="media-body d-flex">
            <h5 class="col-8 align-baseline mt-0 mb-0">${orderItem[i]["nama_item"]}</h5>
            <h6 class=""><span class="badge align-baseline badge-success">x${orderItem[i]["kelipatan"]}</span></h6>
            <h6 class="col-sm align-baseline mb-0 ml-2">Rp ${(orderItem[i]["harga"] * orderItem[i]["kelipatan"])}</}</h6>
        </div>
        </div>`
        $("#paymentHolder").append(itemHolder)
    }
    $("#TotalSub").text(subTotal)
    $("#Denda").text(tax)
    $("#Total").text(totalHasil)
})

$("#btnBayar").on('click', function () {
    alert("Terimakasih telah membeli")
    orderItem = []
    LoopOrder()
})

function removeOrder() {
    orderItem = []
    LoopOrder()
}