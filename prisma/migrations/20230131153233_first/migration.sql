-- CreateTable
CREATE TABLE "Parking_Slot" (
    "id" SERIAL NOT NULL,
    "slot_number" INTEGER NOT NULL,
    "is_reserved_regular_customer" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Parking_Slot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parking_Slot_Reservation" (
    "id" SERIAL NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "duration_in_minute" INTEGER NOT NULL,
    "booking_date" TIMESTAMP(3) NOT NULL,
    "parking_slotId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "Parking_Slot_Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "vehicle_number" TEXT NOT NULL,
    "contact_number" INTEGER NOT NULL,
    "is_regular_customer" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Regular_Pass" (
    "id" SERIAL NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "duration_in_day" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "Regular_Pass_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_name_key" ON "Customer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_vehicle_number_key" ON "Customer"("vehicle_number");

-- AddForeignKey
ALTER TABLE "Parking_Slot_Reservation" ADD CONSTRAINT "Parking_Slot_Reservation_parking_slotId_fkey" FOREIGN KEY ("parking_slotId") REFERENCES "Parking_Slot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parking_Slot_Reservation" ADD CONSTRAINT "Parking_Slot_Reservation_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Regular_Pass" ADD CONSTRAINT "Regular_Pass_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
