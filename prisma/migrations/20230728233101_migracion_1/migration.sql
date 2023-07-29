/*
  Warnings:

  - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `example` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verificationtoken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `account` DROP FOREIGN KEY `Account_userId_fkey`;

-- DropForeignKey
ALTER TABLE `session` DROP FOREIGN KEY `Session_userId_fkey`;

-- DropTable
DROP TABLE `account`;

-- DropTable
DROP TABLE `example`;

-- DropTable
DROP TABLE `session`;

-- DropTable
DROP TABLE `user`;

-- DropTable
DROP TABLE `verificationtoken`;

-- CreateTable
CREATE TABLE `City` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `info` JSON NULL,
    `district` VARCHAR(191) NOT NULL,
    `countryCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Country` (
    `code` CHAR(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `capital` INTEGER NULL,
    `code2` CHAR(2) NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CountryInfo` (
    `id` VARCHAR(191) NOT NULL,
    `doc` JSON NOT NULL,
    `json_schema` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CountryLanguage` (
    `countryCode` VARCHAR(191) NOT NULL,
    `language` VARCHAR(191) NOT NULL,
    `isOfficial` ENUM('T', 'F') NOT NULL,
    `percentage` DOUBLE NOT NULL,

    PRIMARY KEY (`countryCode`, `language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `City` ADD CONSTRAINT `City_countryCode_fkey` FOREIGN KEY (`countryCode`) REFERENCES `Country`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;
