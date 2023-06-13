/*
  Warnings:

  - You are about to drop the `player` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[faceUrl]` on the table `Futhead` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Club` to the `Futhead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ClubUrl` to the `Futhead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `faceUrl` to the `Futhead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nation` to the `Futhead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationUrl` to the `Futhead` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `player` DROP FOREIGN KEY `Player_id_fifa_fkey`;

-- DropForeignKey
ALTER TABLE `player` DROP FOREIGN KEY `Player_id_fm_fkey`;

-- DropForeignKey
ALTER TABLE `player` DROP FOREIGN KEY `Player_id_sofascore_fkey`;

-- AlterTable
ALTER TABLE `futhead` ADD COLUMN `Club` VARCHAR(191) NOT NULL,
    ADD COLUMN `ClubUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `faceUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `nation` VARCHAR(191) NOT NULL,
    ADD COLUMN `nationUrl` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `player`;

-- CreateIndex
CREATE UNIQUE INDEX `Futhead_faceUrl_key` ON `Futhead`(`faceUrl`);
