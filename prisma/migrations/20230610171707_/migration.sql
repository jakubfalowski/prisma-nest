/*
  Warnings:

  - Added the required column `Club` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ClubUrl` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nation` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationUrl` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `player` ADD COLUMN `Club` VARCHAR(191) NOT NULL,
    ADD COLUMN `ClubUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `nation` VARCHAR(191) NOT NULL,
    ADD COLUMN `nationUrl` VARCHAR(191) NOT NULL;
