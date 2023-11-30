/*
  Warnings:

  - Added the required column `sellerId` to the `SellerReview` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SellerReview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "rvwText" TEXT NOT NULL,
    "sellerId" INTEGER NOT NULL
);
INSERT INTO "new_SellerReview" ("id", "productId", "rating", "rvwText", "userId") SELECT "id", "productId", "rating", "rvwText", "userId" FROM "SellerReview";
DROP TABLE "SellerReview";
ALTER TABLE "new_SellerReview" RENAME TO "SellerReview";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
