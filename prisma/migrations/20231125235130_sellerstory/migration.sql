/*
  Warnings:

  - Added the required column `story` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fName" TEXT NOT NULL,
    "lName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "admin" TEXT NOT NULL,
    "story" TEXT NOT NULL
);
INSERT INTO "new_User" ("admin", "fName", "id", "lName", "seller", "username") SELECT "admin", "fName", "id", "lName", "seller", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
