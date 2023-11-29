-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fName" TEXT NOT NULL,
    "lName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "seller" TEXT DEFAULT '',
    "admin" TEXT DEFAULT '',
    "story" TEXT DEFAULT '',
    "password" TEXT NOT NULL,
    "rating" INTEGER DEFAULT 0
);
INSERT INTO "new_User" ("admin", "fName", "id", "lName", "password", "rating", "seller", "story", "username") SELECT "admin", "fName", "id", "lName", "password", "rating", "seller", "story", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
