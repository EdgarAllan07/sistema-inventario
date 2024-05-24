import { NextResponse } from "next/server";
import prisma from "../../../../util/db";

export async function DELETE(req,context) {
  try {
    // Obtener el ID de la categoría que se desea eliminar
    const  id  =context.params.id;

    // Eliminar la categoría con el ID proporcionado
    const categoria = await prisma.categorias.delete({
      where: {
        id_categoria: parseInt(id), // Asegúrate de convertir el ID a un número si es necesario
      },
    });

    if (!categoria) {
      return NextResponse.json(
        { message: "No se encontró ninguna categoría con el ID proporcionado" },
        { status: 404 }
      );
    }

    return NextResponse.json(categoria);
  } catch (error) {
    console.error("Error al eliminar categoría:", error);
    return NextResponse.json({
      message: "Ocurrió un error al eliminar la categoría",
      error: error.message,
    }, { status: 500 });
  }
}
