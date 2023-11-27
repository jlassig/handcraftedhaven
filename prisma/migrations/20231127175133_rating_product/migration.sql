-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagepath" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Product" ("description", "id", "imagepath", "price", "title") SELECT "description", "id", "imagepath", "price", "title" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fName" TEXT NOT NULL,
    "lName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "admin" TEXT NOT NULL,
    "story" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rating" INTEGER NOT NULL
);
INSERT INTO "new_User" ("admin", "fName", "id", "lName", "password", "rating", "seller", "story", "username") SELECT "admin", "fName", "id", "lName", "password", "rating", "seller", "story", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
