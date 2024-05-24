import { NextResponse } from "next/server";
import prisma from "../../../../util/db";

export async function DELETE(req,context) {
  try {
    // Obtener el ID de la categoría que se desea eliminar
    const id  = context.params.id;
    // Eliminar la categoría con el ID proporcionado
      if(id){
        const sucursal = await prisma.sucursal.delete({
          where: {
            id_sucursal: parseInt(id)
          },
        });
    
        if (!sucursal) {
          return NextResponse.json(
            { message: "No se encontró ninguna sucursal con el ID proporcionado" },
            { status: 404 }
          );
        }
    
        return NextResponse.json(sucursal);
      }else{
        return NextResponse.json({
          message: "El valor del ID es "+id
        })
      }
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return NextResponse.json({
      message: "Ocurrió un error al eliminar la sucursal",
      error: error.message,
    }, { status: 500 });
  }
}
