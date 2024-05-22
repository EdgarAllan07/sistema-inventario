import { NextResponse } from "next/server";
import prisma from "../../../util/db";

export async function GET() {
  try {
    const proveedor = await prisma.proveedores.findMany();

    if (!proveedor || proveedor.length === 0) {
      return NextResponse.json(
        { message: "No se encontró ningún producto o el endpoint está malo" },
        { status: 404 }
      );
    }
    console.log(proveedor)
    return NextResponse.json(proveedor);
  } catch (error) {
    console.error("Error al buscar proveedores:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar proveedores",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}
