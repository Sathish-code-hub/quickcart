import Address from "../../../../models/Address";
import connectDB from "../../../../config/db";
import authSeller from "../../../../lib/authSeller";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OOrder from "../../../../models/Order";



export async function GET(request) {
    try {

        const { userId } = getAuth(request)

        const isSeller = await authSeller(userId)

        if (!isSeller) {
            return NextResponse.json({success: false, message:"Not authorized"})            
        }

        await connectDB()
        Address.length

        const orders = await OOrder.find({}).populate('address items.product')
        return NextResponse.json({success:true, orders})

    }catch (error) {
            return NextResponse.json({success: false, message:error.message})
        } 

    }