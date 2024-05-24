import { NextResponse } from "next/server";
import prisma from "../../../util/db";

export async function GET() {
  try {
    const sucursal = await prisma.sucursal.findMany();

    if (!sucursal || sucursal.length === 0) {
      return NextResponse.json(
        { message: "No se encontró ningún producto o el endpoint está malo" },
        { status: 404 }
      );
    }
    return NextResponse.json(sucursal);
  } catch (error) {
    console.error("Error al buscar sucursal:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar sucursales",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}
