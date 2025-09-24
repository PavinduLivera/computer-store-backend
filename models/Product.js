import mongoose from "mongoose";

const productsSchema = new mongoose.Schema (
    {
        productID : {
            type : String,
            required : true,
            unique : true
        },
        name : {
            type : String,
            required : true
        },
        altNames : {
            type : [String],
            default : []
        },
        description : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        labledPrice : {
            type : Number,
            required : true
        },
        images : {
            type : [String],
            required : true
        },
        category : {
            type : String,
            required : true
        },
        brand : {
            type : String,
            required : true,
            default : "No brand"
        },
        stock : {
            type : Number,
            required : true,
            default : 0
        },
        isAvailable : {
            type : Boolean,
            default : true
        }

    }
)

const Product = mongoose.model("Product", productSchema)

export default Product;