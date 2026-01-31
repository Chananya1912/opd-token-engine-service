const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Doctor = require("./models/Doctor");
const Slot = require("./models/Slot");

(async () => {
  await connectDB();
  await Doctor.deleteMany();
  await Slot.deleteMany();

  const d1 = await Doctor.create({ name: "Dr. Sharma", department: "General" });
  const d2 = await Doctor.create({ name: "Dr. Mehta", department: "Ortho" });
  const d3 = await Doctor.create({ name: "Dr. Khan", department: "ENT" });

  await Slot.insertMany([
    { doctorId: d1._id, time: "09-10", capacity: 5 },
    { doctorId: d2._id, time: "09-10", capacity: 5 },
    { doctorId: d3._id, time: "10-11", capacity: 5 }
  ]);

  console.log("Seed complete");
  process.exit();
})();