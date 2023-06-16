import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"
const orderCollection = "orders"

const orderSchema = mongoose.Schema({
    name: "String",
    size: {
        type: String,
        emun: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: Date
})

orderSchema.plugin(mongoosePaginate)

const ordelModel = mongoose.model(orderCollection, orderSchema)
export default ordelModel

