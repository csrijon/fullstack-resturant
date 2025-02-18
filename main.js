const express = require("express")

const app = express()
const port = 3000

app.set("view engine","ejs")
app.use(express.static("static"))

app.get("/",(req,res) => {
  res.render("index")
})

app.listen(port,() => {
  console.log(`app is listen in port ${port}`)
})

app.get("/menu", (req, res) => {
  res.json([
    { name: "pizza", price: "$14.95", img: "/images/image1.jpg" },
    { name: "pepperoni", price: "$9.95", img: "/images/image2.jpg" },
    { name: "hawaiian", price: "$12.95", img: "/images/image3.jpg" }
  ]);
});

app.get("/breakfast",(req,res) => {
  res.json([
    { name: "eggs", price: "$4.95", img: "/images/breakfast1.jpg"},
    {
      name: "pancakes",
      price: "$5.95",
      img: "/images/breakfast2.jpg"
    },
    {
      name: "waffles",
      price: "$6.95",
      img: "/images/breakfast3.jpg"
    },
    {
      name: "toast",
      price: "$3.95",
      img: "/images/breakfast4.jpg"
    },
    {
      name: "oatmeal",
      price: "$4.95",
      img: "/images/breakfast5.jpg"
    },
    {
      name: "pancakes",
      price: "$5.95",
      img: "/images/breakfast2.jpg"
    }
  ])
})
app.get("/lunch",(req,res) => {
  res.json([
    {
      name: "sandwich",
      price: "$4.95",
      img: "/images/launch1.jpg"
    },
    {
      name: "salad",
      price: "$5.95",
      img: "/images/launch2.jpg"
    },
    {
      name: "pasta",
      price: "$6.95",
      img: "/images/launch3.jpg"
    },
    {
      name: "chicken",
      price: "$3.95",
      img: "/images/launch4.jpg"
    },
    {
      name: "steak",
      price: "$4.95",
      img: "/images/launch5.jpg"
    }
  ])
})