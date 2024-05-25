/*
  Warnings:

  - You are about to drop the column `id_producto` on the `categorias` table. All the data in the column will be lost.
  - You are about to drop the column `trial271` on the `categorias` table. All the data in the column will be lost.
  - You are about to drop the column `trial274` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `trial274` on the `existencia` table. All the data in the column will be lost.
  - You are about to drop the column `trial274` on the `ofertas` table. All the data in the column will be lost.
  - You are about to drop the column `trial274` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `trial271` on the `proveedores` table. All the data in the column will be lost.
  - You are about to drop the column `trial274` on the `sucursal` table. All the data in the column will be lost.
  - You are about to drop the column `trial278` on the `sysdiagrams` table. All the data in the column will be lost.
  - You are about to drop the column `trial278` on the `tipo_documento` table. All the data in the column will be lost.
  - You are about to drop the column `trial278` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `trial278` on the `venta` table. All the data in the column will be lost.
  - You are about to drop the column `trial278` on the `venta_detalle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categorias" DROP COLUMN "id_producto",
DROP COLUMN "trial271",
ADD COLUMN     "trial963" CHAR(1);

-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "trial274",
ADD COLUMN     "trial963" CHAR(1);

-- AlterTable
ALTER TABLE "existencia" DROP COLUMN "trial274",
ADD COLUMN     "trial966" CHAR(1);

-- AlterTable
ALTER TABLE "ofertas" DROP COLUMN "trial274",
ADD COLUMN     "trial966" CHAR(1);

-- AlterTable
ALTER TABLE "productos" DROP COLUMN "trial274",
ADD COLUMN     "trial966" CHAR(1);

-- AlterTable
ALTER TABLE "proveedores" DROP COLUMN "trial271",
ADD COLUMN     "trial963" CHAR(1);

-- AlterTable
ALTER TABLE "sucursal" DROP COLUMN "trial274",
ADD COLUMN     "trial966" CHAR(1);

-- AlterTable
ALTER TABLE "sysdiagrams" DROP COLUMN "trial278",
ADD COLUMN     "trial966" CHAR(1);

-- AlterTable
ALTER TABLE "tipo_documento" DROP COLUMN "trial278",
ADD COLUMN     "trial966" CHAR(1);

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "trial278",
ADD COLUMN     "trial966" CHAR(1);

-- AlterTable
ALTER TABLE "venta" DROP COLUMN "trial278",
ADD COLUMN     "trial969" CHAR(1);

-- AlterTable
ALTER TABLE "venta_detalle" DROP COLUMN "trial278",
ADD COLUMN     "trial969" CHAR(1);
