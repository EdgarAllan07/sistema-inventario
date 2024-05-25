import { NextResponse } from "next/server";
import prisma from "../../../util/db";

export async function GET() {
  try {
    const cliente = await prisma.clientes.findMany();

    if (!cliente || cliente.length === 0) {
      return NextResponse.json(
        { message: "No se encontró ningún producto o el endpoint está malo" },
        { status: 404 }
      );
    }
  
    return NextResponse.json(cliente);
  } catch (error) {
    console.error("Error al buscar cliente:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar clientes",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}


export async function POST(req){
  try {

    const body = await req.json(); 
    const { nombre,  apellido,dui,direccion,telefono,email} = body;

    const clientes = await prisma.clientes.create({
     data:{
      nombre,
      apellido,
      dui,
      direccion,
      telefono,
      email
     }
    });

    if (!clientes || clientes.length === 0) {
      return NextResponse.json(
        { message: "No se encontró ningún empleado o el endpoint está malo" },
        { status: 404 }
      );
    }
    return NextResponse.json(clientes);
  } catch (error) {
    console.error("Error al buscar empleado:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar empleado",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}
