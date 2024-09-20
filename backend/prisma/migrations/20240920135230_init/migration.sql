/*
  Warnings:

  - You are about to drop the column `job_lcation` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "job_lcation",
ADD COLUMN     "job_location" TEXT;
