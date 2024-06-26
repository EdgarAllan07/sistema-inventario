import { NextResponse } from "next/server";
import prisma from "../../../util/db";

export async function GET() {
  try {
    const proveedor = await prisma.proveedores.findMany( {
      orderBy: {
        id_proveedor: 'asc',
      },
    });

    if (!proveedor || proveedor.length === 0) {
      return NextResponse.json(
        { message: "No se encontró ningún producto o el endpoint está malo" },
        { status: 404 }
      );
    }

    return NextResponse.json(proveedor);
  } catch (error) {
    console.error("Error al buscar proveedores:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar proveedores",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}

export async function POST(req){
  try {

    const body = await req.json(); 
    const { nombre,  telefono, direccion, email } = body;

    const proveedores = await prisma.proveedores.create({
     data:{
     nombre,
     telefono,
     direccion,
     email
     }
    });

    if (!proveedores || proveedores.length === 0) {
      return NextResponse.json(
        { message: "No se encontró ningún producto o el endpoint está malo" },
        { status: 404 }
      );
    }
    return NextResponse.json(proveedores);
  } catch (error) {
    console.error("Error al buscar proveedor:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar proveedores",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}
