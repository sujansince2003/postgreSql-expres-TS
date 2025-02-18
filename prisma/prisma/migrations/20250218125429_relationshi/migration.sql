-- AlterTable
ALTER TABLE "course" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
