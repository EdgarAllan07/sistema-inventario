-- CreateTable
CREATE TABLE "sysdiagrams" (
    "name" VARCHAR(128) NOT NULL,
    "principal_id" INTEGER NOT NULL,
    "diagram_id" SERIAL NOT NULL,
    "version" INTEGER,
    "definition" BYTEA,
    "trial278" CHAR(1),

    CONSTRAINT "pk__sysdiagr__c2b05b61a59d49c0" PRIMARY KEY ("diagram_id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id_categoria" SERIAL NOT NULL,
    "nombre" VARCHAR(50),
    "id_producto" INTEGER,
    "id_proveedor" INTEGER,
    "trial271" CHAR(1),

    CONSTRAINT "pk_categorias" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id_cliente" SERIAL NOT NULL,
    "nombre" VARCHAR(50),
    "apellido" VARCHAR(50),
    "dui" VARCHAR(50),
    "direccion" VARCHAR(50),
    "telefono" VARCHAR(50),
    "email" VARCHAR(50),
    "trial274" CHAR(1),

    CONSTRAINT "pk_clientes" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "existencia" (
    "id_existencias" SERIAL NOT NULL,
    "id_sucursal" INTEGER,
    "existencias" INTEGER,
    "id_producto" INTEGER,
    "trial274" CHAR(1),

    CONSTRAINT "pk_existencia" PRIMARY KEY ("id_existencias")
);

-- CreateTable
CREATE TABLE "ofertas" (
    "id_oferta" SERIAL NOT NULL,
    "id_producto" INTEGER,
    "descuento" DOUBLE PRECISION,
    "precio_oferta" DOUBLE PRECISION,
    "fecha_inicial" DATE,
    "fecha_fin" DATE,
    "id_categoria" INTEGER,
    "trial274" CHAR(1),

    CONSTRAINT "pk_ofertas" PRIMARY KEY ("id_oferta")
);

-- CreateTable
CREATE TABLE "productos" (
    "id_producto" SERIAL NOT NULL,
    "nombre" VARCHAR(50),
    "descripcion" VARCHAR(100),
    "precio" DOUBLE PRECISION,
    "categoria" VARCHAR(50),
    "existencias" INTEGER,
    "id_categoria" INTEGER,
    "id_proveedor" INTEGER,
    "trial274" CHAR(1),

    CONSTRAINT "pk_productos" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "proveedores" (
    "id_proveedor" SERIAL NOT NULL,
    "nombre" VARCHAR(50),
    "telefono" VARCHAR(50),
    "direccion" VARCHAR(50),
    "email" VARCHAR(50),
    "id_producto" INTEGER,
    "trial271" CHAR(1),

    CONSTRAINT "pk_proveedores" PRIMARY KEY ("id_proveedor")
);

-- CreateTable
CREATE TABLE "sucursal" (
    "id_sucursal" SERIAL NOT NULL,
    "direccion" VARCHAR(50),
    "existencias" INTEGER,
    "trial274" CHAR(1),

    CONSTRAINT "pk_existencias" PRIMARY KEY ("id_sucursal")
);

-- CreateTable
CREATE TABLE "tipo_documento" (
    "id_documento" SERIAL NOT NULL,
    "tipo" VARCHAR(50),
    "trial278" CHAR(1),

    CONSTRAINT "pk_tipo_documento" PRIMARY KEY ("id_documento")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "contra" TEXT,
    "nombre" VARCHAR(50),
    "apellido" VARCHAR(50),
    "email" VARCHAR(25),
    "celular" VARCHAR(10),
    "trial278" CHAR(1),

    CONSTRAINT "pk_usuarios" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "venta" (
    "id_venta" SERIAL NOT NULL,
    "precio" DOUBLE PRECISION,
    "cantidad" INTEGER,
    "id_venta_detalle" INTEGER,
    "trial278" CHAR(1),

    CONSTRAINT "pk_venta" PRIMARY KEY ("id_venta")
);

-- CreateTable
CREATE TABLE "venta_detalle" (
    "id_venta_detalle" SERIAL NOT NULL,
    "fecha_venta" TIMESTAMP(3),
    "id_cliente" INTEGER,
    "id_sucursal" INTEGER,
    "subtotal" DOUBLE PRECISION,
    "total" DOUBLE PRECISION,
    "descuento" DOUBLE PRECISION,
    "iva" DOUBLE PRECISION,
    "id_documento" INTEGER,
    "id_oferta" INTEGER,
    "trial278" CHAR(1),

    CONSTRAINT "pk_venta_detalle" PRIMARY KEY ("id_venta_detalle")
);

-- CreateIndex
CREATE UNIQUE INDEX "uk_principal_name" ON "sysdiagrams"("principal_id", "name");

-- AddForeignKey
ALTER TABLE "categorias" ADD CONSTRAINT "fk_categorias_proveedores" FOREIGN KEY ("id_proveedor") REFERENCES "proveedores"("id_proveedor") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "existencia" ADD CONSTRAINT "fk_existencia_productos" FOREIGN KEY ("id_producto") REFERENCES "productos"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "existencia" ADD CONSTRAINT "fk_existencia_sucursal" FOREIGN KEY ("id_sucursal") REFERENCES "sucursal"("id_sucursal") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ofertas" ADD CONSTRAINT "fk_ofertas_categorias" FOREIGN KEY ("id_categoria") REFERENCES "categorias"("id_categoria") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ofertas" ADD CONSTRAINT "fk_ofertas_productos" FOREIGN KEY ("id_producto") REFERENCES "productos"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "fk_productos_categorias" FOREIGN KEY ("id_categoria") REFERENCES "categorias"("id_categoria") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "fk_productos_proveedores" FOREIGN KEY ("id_proveedor") REFERENCES "proveedores"("id_proveedor") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "venta" ADD CONSTRAINT "fk_venta_venta_detalle" FOREIGN KEY ("id_venta") REFERENCES "venta_detalle"("id_venta_detalle") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "venta_detalle" ADD CONSTRAINT "fk_venta_detalle_clientes" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "venta_detalle" ADD CONSTRAINT "fk_venta_detalle_ofertas" FOREIGN KEY ("id_oferta") REFERENCES "ofertas"("id_oferta") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "venta_detalle" ADD CONSTRAINT "fk_venta_detalle_sucursal" FOREIGN KEY ("id_sucursal") REFERENCES "sucursal"("id_sucursal") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "venta_detalle" ADD CONSTRAINT "fk_venta_detalle_tipo_documento" FOREIGN KEY ("id_documento") REFERENCES "tipo_documento"("id_documento") ON DELETE NO ACTION ON UPDATE NO ACTION;
