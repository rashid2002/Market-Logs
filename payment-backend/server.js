require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())

const corsorgin={
    origin:"http://localhost:3000"
};
app.use(
    cors(corsorgin)
)

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

app.post("/create-checkout-session", async (req, res)=>{
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            mode:"payment",
            line_items: req.body.items.map(item => {        // josn given to stripe
                return{
                    price_data:{
                        currency:"inr",
                        product_data:{
                            name: item.name
                        },
                        unit_amount: (item.price)*100,

                    },
                    quantity: item.quantity
                }
            }),
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://127.0.0.1:3000/cancel'
        })

        res.json({url: session.url})

    }catch(e){
     res.status(500).json({error:e.message})
    }
})

app.listen(3001,()=>{
    console.log("server is running");
})