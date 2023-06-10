/*
  Warnings:

  - You are about to drop the column `id_fm` on the `fminside` table. All the data in the column will be lost.
  - You are about to drop the column `id_fifa` on the `futhead` table. All the data in the column will be lost.
  - You are about to drop the column `id_sofascore` on the `sofascore` table. All the data in the column will be lost.
  - Added the required column `id_fifa` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_fm` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_sofascore` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `fminside` DROP FOREIGN KEY `Fminside_id_fm_fkey`;

-- DropForeignKey
ALTER TABLE `futhead` DROP FOREIGN KEY `Futhead_id_fifa_fkey`;

-- DropForeignKey
ALTER TABLE `sofascore` DROP FOREIGN KEY `Sofascore_id_sofascore_fkey`;

-- AlterTable
ALTER TABLE `fminside` DROP COLUMN `id_fm`;

-- AlterTable
ALTER TABLE `futhead` DROP COLUMN `id_fifa`;

-- AlterTable
ALTER TABLE `player` ADD COLUMN `id_fifa` INTEGER NOT NULL,
    ADD COLUMN `id_fm` INTEGER NOT NULL,
    ADD COLUMN `id_sofascore` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sofascore` DROP COLUMN `id_sofascore`;

-- AddForeignKey
ALTER TABLE `Player` ADD CONSTRAINT `Player_id_sofascore_fkey` FOREIGN KEY (`id_sofascore`) REFERENCES `Sofascore`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Player` ADD CONSTRAINT `Player_id_fifa_fkey` FOREIGN KEY (`id_fifa`) REFERENCES `Futhead`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Player` ADD CONSTRAINT `Player_id_fm_fkey` FOREIGN KEY (`id_fm`) REFERENCES `Fminside`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
