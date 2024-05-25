import { NextResponse } from "next/server";
import prisma from "../../../util/db";

export async function GET() {
  try {
    const categoria = await prisma.categorias.findMany();

    if (!categoria || categoria.length === 0) {
      return NextResponse.json(
        { message: "No se encontró ningún producto o el endpoint está malo" },
        { status: 404 }
      );
    }
    return NextResponse.json(categoria);
  } catch (error) {
    console.error("Error al buscar categoria:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar categorias",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}

export async function POST(req){
  try {

    const body = await req.json(); 
    const { nombre,  id_proveedor } = body;

    const categoria = await prisma.categorias.create({
     data:{
      nombre:nombre,
      id_proveedor:parseInt(id_proveedor) 
     }
    });

    if (!categoria || categoria.length === 0) {
      return NextResponse.json(
        { message: "No se encontró ningún producto o el endpoint está malo" },
        { status: 404 }
      );
    }
    return NextResponse.json(categoria);
  } catch (error) {
    console.error("Error al buscar categoria:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar categorias",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}
