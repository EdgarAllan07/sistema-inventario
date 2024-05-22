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
    console.log(categoria)
    return NextResponse.json(categoria);
  } catch (error) {
    console.error("Error al buscar categoria:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar categorias",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}
