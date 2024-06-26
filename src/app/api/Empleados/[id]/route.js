import { NextResponse } from "next/server";
import prisma from "../../../../util/db";

export async function DELETE(req,context) {
  try {
    // Obtener el ID de la categoría que se desea eliminar
    const id  = context.params.id;
    // Eliminar la categoría con el ID proporcionado
      if(id){
        const cliente = await prisma.clientes.delete({
          where: {
            id_cliente: parseInt(id)
          },
        });
    
        if (!cliente) {
          return NextResponse.json(
            { message: "No se encontró ninguna empleado con el ID proporcionado" },
            { status: 404 }
          );
        }
    
        return NextResponse.json(cliente);
      }else{
        return NextResponse.json({
          message: "El valor del ID es "+id
        })
      }
  } catch (error) {
    console.error("Error al eliminar Empleado:", error);
    return NextResponse.json({
      message: "Ocurrió un error al eliminar el empleado",
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
        const cliente = await prisma.clientes.findFirst({
          where: {
            id_cliente: parseInt(id)
          },
        });
    
        if (!cliente) {
          return NextResponse.json(
            { message: "No se encontró ninguna empleado con el ID proporcionado" },
            { status: 404 }
          );
        }
    
        return NextResponse.json(cliente);
      }else{
        return NextResponse.json({
          message: "El valor del ID es "+id
        })
      }
  } catch (error) {
    console.error("Error al eliminar Empleado:", error);
    return NextResponse.json({
      message: "Ocurrió un error al eliminar el empleado",
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
    const { nombre,  apellido,dui,direccion,telefono,email} = body;

      if(id){
        const cliente = await prisma.clientes.update({
          where: {
            id_cliente: parseInt(id)
          },
          data:{
            nombre,
            apellido,
            dui,
            direccion,
            telefono,
            email
           }
        });
    
        if (!cliente) {
          return NextResponse.json(
            { message: "No se encontró ninguna empleado con el ID proporcionado" },
            { status: 404 }
          );
        }
    
        return NextResponse.json(cliente);
      }else{
        return NextResponse.json({
          message: "El valor del ID es "+id
        })
      }
  } catch (error) {
    console.error("Error al eliminar Empleado:", error);
    return NextResponse.json({
      message: "Ocurrió un error al eliminar el empleado",
      error: error.message,
    }, { status: 500 });
  }
}