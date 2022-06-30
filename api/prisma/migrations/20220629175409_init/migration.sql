-- CreateTable
CREATE TABLE "trainer" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "gender" TEXT,
    "ph_num" INTEGER NOT NULL,
    "explevel" SMALLINT,

    CONSTRAINT "trainer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "ph_num" INTEGER NOT NULL,
    "age" SMALLINT,
    "height" SMALLINT,
    "weight" SMALLINT,
    "password" TEXT NOT NULL,
    "gender" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "queries" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "is_viewed" BOOLEAN DEFAULT false,

    CONSTRAINT "queries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "training_info" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER,
    "trainer_id" INTEGER,
    "plan" SMALLINT NOT NULL,

    CONSTRAINT "training_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trainer_name_key" ON "trainer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "trainer_ph_num_key" ON "trainer"("ph_num");

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_ph_num_key" ON "user"("ph_num");

-- CreateIndex
CREATE UNIQUE INDEX "training_user_id_key" ON "training_info"("user_id");

-- AddForeignKey
ALTER TABLE "training_info" ADD CONSTRAINT "training_info_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "trainer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "training_info" ADD CONSTRAINT "training_info_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
