import { NextResponse } from "next/server";
import prisma from "../../../../util/db";

export async function DELETE(req,context) {
  try {
    // Obtener el ID de la categoría que se desea eliminar
    const id  = context.params.id;
    // Eliminar la categoría con el ID proporcionado
      if(id){
        const proveedor = await prisma.proveedores.delete({
          where: {
            id_proveedor: parseInt(id)
          },
        });
    
        if (!proveedor) {
          return NextResponse.json(
            { message: "No se encontró ninguna proveedor con el ID proporcionado" },
            { status: 404 }
          );
        }
    
        return NextResponse.json(proveedor);
      }else{
        return NextResponse.json({
          message: "El valor del ID es "+id
        })
      }
  } catch (error) {
    console.error("Error al eliminar proveedor:", error);
    return NextResponse.json({
      message: "Ocurrió un error al eliminar el proveedor",
      error: error.message,
    }, { status: 500 });
  }
}
