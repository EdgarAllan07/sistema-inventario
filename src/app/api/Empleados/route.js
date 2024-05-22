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
    console.log(cliente)
    return NextResponse.json(cliente);
  } catch (error) {
    console.error("Error al buscar cliente:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar clientes",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}
