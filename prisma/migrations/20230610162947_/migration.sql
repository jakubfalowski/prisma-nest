/*
  Warnings:

  - Added the required column `date` to the `Matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `round` to the `Matches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `matches` ADD COLUMN `date` VARCHAR(191) NOT NULL,
    ADD COLUMN `round` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Player` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `faceUrl` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Player_name_key`(`name`),
    UNIQUE INDEX `Player_faceUrl_key`(`faceUrl`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sofascore` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_sofascore` INTEGER NOT NULL,
    `Dribbling` INTEGER NOT NULL,
    `BeingFouled` INTEGER NOT NULL,
    `PercentHeader` INTEGER NOT NULL,
    `PercentGround` INTEGER NOT NULL,
    `Goals` INTEGER NOT NULL,
    `Shots` INTEGER NOT NULL,
    `Interceptions` INTEGER NOT NULL,
    `Tackles` INTEGER NOT NULL,
    `Clearances` INTEGER NOT NULL,
    `Assists` INTEGER NOT NULL,
    `KeyPasses` INTEGER NOT NULL,
    `DangerousSituation` INTEGER NOT NULL,
    `PercentAccuracyPasses` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Futhead` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fifa` INTEGER NOT NULL,
    `Overall` INTEGER NOT NULL,
    `Pace` INTEGER NOT NULL,
    `Shooting` INTEGER NOT NULL,
    `Passing` INTEGER NOT NULL,
    `Dribbling` INTEGER NOT NULL,
    `Defense` INTEGER NOT NULL,
    `Physical` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fminside` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fm` INTEGER NOT NULL,
    `Overall` INTEGER NOT NULL,
    `Pace` INTEGER NOT NULL,
    `Shooting` INTEGER NOT NULL,
    `Passing` INTEGER NOT NULL,
    `Dribbling` INTEGER NOT NULL,
    `Defense` INTEGER NOT NULL,
    `Physical` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sofascore` ADD CONSTRAINT `Sofascore_id_sofascore_fkey` FOREIGN KEY (`id_sofascore`) REFERENCES `Player`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Futhead` ADD CONSTRAINT `Futhead_id_fifa_fkey` FOREIGN KEY (`id_fifa`) REFERENCES `Player`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fminside` ADD CONSTRAINT `Fminside_id_fm_fkey` FOREIGN KEY (`id_fm`) REFERENCES `Player`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
