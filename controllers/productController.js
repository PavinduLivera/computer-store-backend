import Product from "../models/Product.js";

export function createProduct(req,res){
    if(req.user == null) {
        res.status(401).json({
            message : "Unauthorized"
    })
    return

    }
    if(req.user.role != "admin"){
        res.status(403).json({
            message : "Forbidden"
        })
        return
    }

    const product = new Product(req.body)

    product.save().then(
        ()=>{
            res.json({
                message : "Product created successfully"
            })
        }
    ).catch(
        (error)=>{
            res.status(500).json({
                message : "Error creating product",
                error : error.message
            })
        }
    )
}