import { NextResponse } from "next/server";
import db from "../../../util/db.ts"

export const GET = async ()=>{
  const sucursales = await db.sucursal.findMany({})
  console.log(sucursales)
  return NextResponse.json("Hola")
}


const POST = async (request)=>{
  const data = await request.json
}