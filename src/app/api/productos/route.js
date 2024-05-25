import { NextResponse } from "next/server";
import prisma from "../../../util/db";

export async function GET() {
  try {
    const product = await prisma.productos.findMany(
      {
        orderBy: {
          id_producto: 'asc',
        },
      }
    );


    if (!product || product.length === 0) {
      return NextResponse.json(
        { message: "No se encontró ningún producto o el endpoint está malo" },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error al buscar productos:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar productos",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}

export async function POST(req){
  try {

    const body = await req.json(); 
    const { nombre, descripcion, precio, categoria,existencias,id_categoria,id_proveedor } = body;

    const productos = await prisma.productos.create({
     data:{
     nombre,
     descripcion,
     precio:parseFloat(precio),
     categoria,
     existencias:parseInt(existencias),
     id_categoria:parseInt(id_categoria),
     id_proveedor:parseInt(id_proveedor)
     }
    });

    if (!productos || productos.length === 0) {
      return NextResponse.json(
        { message: "No se encontró ningún producto o el endpoint está malo" },
        { status: 404 }
      );
    }
    return NextResponse.json(productos);
  } catch (error) {
    console.error("Error al buscar producto:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar productos",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}
