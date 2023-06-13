/*
  Warnings:

  - Added the required column `Name` to the `Fminside` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Futhead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Sofascore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fminside` ADD COLUMN `Name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `futhead` ADD COLUMN `Name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `sofascore` ADD COLUMN `Name` VARCHAR(191) NOT NULL;
