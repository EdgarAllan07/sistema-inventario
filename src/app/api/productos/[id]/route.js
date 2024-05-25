import { NextResponse } from "next/server";
import prisma from "../../../../util/db";

export async function DELETE(req,context) {
  try {
    // Obtener el ID de la categoría que se desea eliminar
    const id  = context.params.id;
    // Eliminar la categoría con el ID proporcionado
      if(id){
        const producto = await prisma.productos.delete({
          where: {
            id_producto: parseInt(id)
          },
        });
    
        if (!producto) {
          return NextResponse.json(
            { message: "No se encontró ninguna categoría con el ID proporcionado" },
            { status: 404 }
          );
        }
    
        return NextResponse.json(producto);
      }else{
        return NextResponse.json({
          message: "El valor del ID es "+id
        })
      }
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return NextResponse.json({
      message: "Ocurrió un error al eliminar el producto",
      error: error.message,
    }, { status: 500 });
  }
}


export async function GET(req,context) {
  try {
    // Obtener el ID de la categoría que se desea eliminar
    const id  = context.params.id;
    // Eliminar la categoría con el ID proporcionado
      if(id){
        const producto = await prisma.productos.findFirst({
          where: {
            id_producto: parseInt(id)
          },
        });
    
        if (!producto) {
          return NextResponse.json(
            { message: "No se encontró ninguna categoría con el ID proporcionado" },
            { status: 404 }
          );
        }
    
        return NextResponse.json(producto);
      }else{
        return NextResponse.json({
          message: "El valor del ID es "+id
        })
      }
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return NextResponse.json({
      message: "Ocurrió un error al eliminar el producto",
      error: error.message,
    }, { status: 500 });
  }
}

export async function PATCH(req,context) {
  try {
    // Obtener el ID de la categoría que se desea eliminar
    const id  = context.params.id;
    // Eliminar la categoría con el ID proporcionado
    const body = await req.json(); 
    const { nombre, descripcion, precio, categoria,existencias,id_categoria,id_proveedor } = body;
    
      if(id){
        const producto = await prisma.productos.update({
          where: {
            id_producto: parseInt(id)
          },
          data:{
            nombre,
            descripcion,
            precio:parseFloat(precio),
            categoria,
            existencias:parseInt(existencias),
            id_categoria:parseInt(id_categoria),
            id_proveedor:parseInt(id_proveedor)
            }
        });
    
        if (!producto) {
          return NextResponse.json(
            { message: "No se encontró ninguna categoría con el ID proporcionado" },
            { status: 404 }
          );
        }
    
        return NextResponse.json(producto);
      }else{
        return NextResponse.json({
          message: "El valor del ID es "+id
        })
      }
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return NextResponse.json({
      message: "Ocurrió un error al eliminar el producto",
      error: error.message,
    }, { status: 500 });
  }
}