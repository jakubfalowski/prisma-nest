/*
  Warnings:

  - You are about to alter the column `Dribbling` on the `sofascore` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `PercentHeader` on the `sofascore` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `PercentGround` on the `sofascore` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `PercentAccuracyPasses` on the `sofascore` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - Added the required column `Minutes` to the `Sofascore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rating` to the `Sofascore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sofascore` ADD COLUMN `Minutes` INTEGER NOT NULL,
    ADD COLUMN `Rating` DOUBLE NOT NULL,
    MODIFY `Dribbling` DOUBLE NOT NULL,
    MODIFY `PercentHeader` DOUBLE NOT NULL,
    MODIFY `PercentGround` DOUBLE NOT NULL,
    MODIFY `PercentAccuracyPasses` DOUBLE NOT NULL;
