import { NextResponse } from "next/server";
import prisma from "../../../util/db";

export async function GET() {
  try {
    const product = await prisma.productos.findMany();

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
