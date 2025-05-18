import Address from "../../../../models/Address";
import connectDB from "../../../../config/db";
import { getAuth } from "@clerk/nextjs/server";
import Product from "../../../../models/Product";
import OOrder from "../../../../models/Order";
import { NextResponse } from "next/server";



export async function GET(request){
    try {

        const {userId} = getAuth(request)

        await connectDB();

        Address.length
        Product.length

        const orders = await OOrder.find({userId}).populate('address items.product')

        return NextResponse.json({success:true, orders})

    } catch (error) {
        return NextResponse.json({success:false, message: error.message})
    }
}