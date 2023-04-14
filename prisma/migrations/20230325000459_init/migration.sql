/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Image";

-- CreateTable
CREATE TABLE "Imagem" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Imagem_pkey" PRIMARY KEY ("id")
);
