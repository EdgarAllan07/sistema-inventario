import { NextResponse } from "next/server";
import prisma from "../../../util/db";

export async function POST(req) {
  try {
    const body = await req.json(); 
    const { email,  contra } = body;
    
    if (!email || !contra) {
      return NextResponse.json(
        { message: "Email y contraseña son requeridos" },
        { status: 400 }
      );
    }

    const usuario = await prisma.usuarios.findFirst({
      where: {
        email: email,
        contra: contra
      }
    });

    if (!usuario) {
      return NextResponse.json(
        { message: "No se encontró ningún usuario con esas credenciales" },
        { status: 404 }
      );
    }

    return NextResponse.json(usuario);
  } catch (error) {
    console.error("Error al buscar usuario:", error);
    return NextResponse.json({
      message: "Ocurrió un error al buscar usuario",
      error: error.message // Esto proporciona más detalles sobre el error
    }, { status: 500 });
  }
}
