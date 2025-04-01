const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt'); // Import bcrypt for hashing passwords
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose'); 
const User = require('./models/User');
// Import Admin model
const Admin = require('./models/Admin'); // Import Admin model
const router = express.Router(); 
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3001; 







const app = express();
app.use(cors());
app.use(express.json());


app.use(bodyParser.json());  // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));  // Handle URL-encoded form data
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files (e.g., images, documents)


mongoose.connect('mongodb://localhost:27017/RTO', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null,`${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

//login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email using Mongoose
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found. Please sign up first.' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    res.json({ success: true, message: 'Login Successful!' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Login failed. Please try again.' });
  }
});


const fcDetailsSchema = new mongoose.Schema({
  vehicleNumber: String,
  rcNumber: String,
  phoneNumber: String,
  emailId: String,
  fcIssuedDate: Date,
  fcExpiryDate: Date
});


const FCDetails = mongoose.model('FCDetails', fcDetailsSchema);

// Define the API endpoint to fetch FC details
app.get('/RTO/FCDetails', async (req, res) => {
  try {
    const details = await FCDetails.find(); // Fetch all records from the collection
    res.json(details);
  } catch (error) {
    console.error('Error fetching FCDetails:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});


 
// 📌 Signup Route (Uses Mongoose correctly)
app.post('/signup', async (req, res) => {
  const { name, email, phoneNum, password } = req.body;

  console.log('Received Signup Request:', req.body); // Debugging

  if (!name || !email || !phoneNum || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists. Use a different email.' });
    }

    // Generate unique application number
    const applicationNumber = Math.floor(100000 + Math.random() * 900000).toString();

    // Hash the password (✅ Secure)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      phoneNum,
      password: hashedPassword, // Use hashed password
      applicationNumber,
    });

    // Save the user to the database
    await newUser.save();
    
    console.log('User successfully saved:', newUser); // Debugging

    res.json({
      applicationNumber,
      message: 'User signed up successfully!',
    });

  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Failed to sign up. Please try again.' });
  }
});

//admin-login
app.post('/admin-login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Admin Login Attempt:", email);

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      console.log("Admin not found in DB");
      return res.status(401).json({ success: false, message: 'Admin not found. Please contact support.' });
    }

    console.log("Admin found:", admin);

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    console.log("Password comparison result:", isPasswordValid);

    if (!isPasswordValid) {
      console.log("Incorrect password for:", email);
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    console.log("Admin Login Successful:", email);
    res.json({ success: true, message: 'Admin Login Successful!' });

  } catch (error) {
    console.error('Error during admin login:', error);
    res.status(500).json({ success: false, message: 'Login failed. Please try again.' });
  }
});


   
   
app.get('/vehicle-owners', async (req, res) => {
  try {
    const vehiclesCollection = db.collection('vehicles');
    const vehicleOwners = await vehiclesCollection.find({}, {
      projection: {
        ownerName: 1,
        ownerContact: 1,
        ownerAadhar: 1,
        vehicleIDNumber: 1,
      }
    }).toArray();

    // Respond with the vehicle owners' data
    res.json({ success: true, data: vehicleOwners });
  } catch (error) {
    console.error('Error fetching vehicle owners:', error);
    res.status(500).json({ success: false, message: 'Error fetching vehicle owners data' });
  }
});
app.get('/drivers-license-applicants', async (req, res) => {
  try {
    // ✅ Use `DriverLicense` (not `Driver`)
    const applicants = await DriverLicense.find({}, { 
      firstName: 1, lastName: 1, phoneNumber: 1, email: 1 
    });

    res.json({ success: true, data: applicants });
  } catch (error) {
    console.error('❌ Error fetching applicants:', error);
    res.status(500).json({ success: false, message: 'Error fetching applicants data' });
  }
});


// Example Express.js route for updating fine status by vehicleNumber
app.put('/api/fines/pay/:vehicleNumber', async (req, res) => {
  const { vehicleNumber } = req.params;
  const { status } = req.body;

  try {
    const fine = await Fine.findOneAndUpdate(
      { vehicleNumber },
      { status },
      { new: true }
    );
    if (fine) {
      res.json(fine);
    } else {
      res.status(404).send('Fine not found');
    }
  } catch (error) {
    res.status(500).send('Error updating fine status');
  }
});




// ✅ Define Mongoose Schema & Model for Learner's License
const learnerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  address: String,
  city: String,
  state: String,
  aadhar: String,
  photo: String,
  idProof: String,
});

const LearnerLicense = mongoose.model("LearnerLicense", learnerSchema);

//  Learner's License Route (Fixed)
app.post('/learners-license', upload.fields([{ name: 'photo' }, { name: 'idProof' }]), async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, address, city, state, aadhar } = req.body;
    if (!req.files || !req.files['photo'] || !req.files['idProof']) {
      return res.status(400).json({ success: false, message: "Photo and ID proof are required." });
    }

    const photo = req.files['photo'][0].path;
    const idProof = req.files['idProof'][0].path;

    const newLearnerLicense = new LearnerLicense({
      firstName, lastName, phoneNumber, email, address, city, state, aadhar, photo, idProof,
    });

    await newLearnerLicense.save();

    res.json({ success: true, message: "Learner's license form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ success: false, message: "Error submitting form" });
  }
});

// ✅ Define Mongoose Schema & Model for Driver's License
const driverSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  address: String,
  city: String,
  state: String,
  aadhar: String,
  photo: String,
  idProof: String,
});

const DriverLicense = mongoose.model("DriverLicense", driverSchema);

// ✅ Driver's License Route
app.post('/drivers-license', upload.fields([{ name: 'photo' }, { name: 'idProof' }]), async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, address, city, state, aadhar } = req.body;
    
    // ✅ Check if files are uploaded
    if (!req.files || !req.files['photo'] || !req.files['idProof']) {
      return res.status(400).json({ success: false, message: "Photo and ID proof are required." });
    }

    const photo = req.files['photo'][0].path;
    const idProof = req.files['idProof'][0].path;

    // ✅ Create new Driver's License record
    const newDriverLicense = new DriverLicense({
      firstName, lastName, phoneNumber, email, address, city, state, aadhar, photo, idProof,
    });

    // ✅ Save to MongoDB
    await newDriverLicense.save();

    res.json({ success: true, message: "Driver's license form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ success: false, message: "Error submitting form" });
  }
});




// ✅ Define Schema & Model (Example)
const duplicateLicenseSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  email: String,
  address: String,
  licenseNumber: String,
  issueDate: String,
  licenseType: String,
  reason: String,
  policeReportNumber: String,
  declaration: Boolean,
});

const DuplicateLicense = mongoose.model("DuplicateLicense", duplicateLicenseSchema);

// ✅ Insert Sample Data (Only if Necessary)
async function insertSampleData() {
  try {
    const sample = new DuplicateLicense({
      fullName: "Test User",
      phoneNumber: "9876543210",
      email: "test@example.com",
      address: "123 Sample Street",
      licenseNumber: "DL123456",
      issueDate: "2025-03-03",
      licenseType: "Four-Wheeler",
      reason: "Lost",
      policeReportNumber: "PR1234",
      declaration: true,
    });

    await sample.save();
    console.log("✅ Sample data inserted successfully");
  } catch (error) {
    console.error("❌ Failed to insert sample data:", error);
  }
}

// ✅ Duplicate License Route
app.post('/duplicate-license', async (req, res) => {
  console.log("Received data:", req.body);

  const {
    fullName,
    phoneNumber,
    email,
    address,
    licenseNumber,
    issueDate,
    licenseType,
    reason,
    policeReportNumber,
    declaration,
  } = req.body;

  if (!email || !address) {
    return res.status(400).json({ success: false, message: "Email and Address are required." });
  }

  try {
    const newDuplicateLicense = new DuplicateLicense({
      fullName,
      phoneNumber,
      email,
      address,
      licenseNumber,
      issueDate,
      licenseType,
      reason,
      policeReportNumber,
      declaration,
    });

    await newDuplicateLicense.save();
    res.json({ success: true, message: 'Duplicate license application submitted successfully!' });
  } catch (error) {
    console.error('Error submitting duplicate license application:', error);
    res.status(500).json({ success: false, message: 'Error submitting application.' });
  }
});


// Route to fetch all fines
app.get('/api/fines', async (req, res) => {
  try {
    const fines = await db.collection('fines').find({}).toArray(); // Fetch all fines
    res.json(fines); // Respond with the fines
  } catch (error) {
    console.error('Error fetching fines:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch fines' });
  }
});

// Vehicle Permit route
app.post('/vehicle-permit', upload.fields([{ name: 'idProof' }, { name: 'insurance' }]), (req, res) => {
  const {
    applicantName,
    vehicleMake,
    vehicleModel,
    yearOfManufacture,
    vehicleVIN,
    licensePlate,
    vehicleColor,
    ownerName,
    phoneNumber,
    email,
    address,
    city,
    state,
    odometerReading
  } = req.body;

  const idProof = req.files['idProof'] ? req.files['idProof'][0].path : null;
  const insurance = req.files['insurance'] ? req.files['insurance'][0].path : null;

  // Create a vehicle permit data object
  const vehiclePermitData = {
    applicantName,
    vehicleMake,
    vehicleModel,
    yearOfManufacture,
    vehicleVIN,
    licensePlate,
    vehicleColor,
    ownerName,
    phoneNumber,
    email,
    address,
    city,
    state,
    odometerReading,
    idProof,
    insurance,
  };

  const permitsCollection = db.collection('vehicle_permits');

  permitsCollection.insertOne(vehiclePermitData)
    .then(() => res.json({ success: true, message: 'Vehicle permit submitted successfully!' }))
    .catch(err => res.status(500).json({ success: false, message: 'Error submitting vehicle permit' }));
});

// Vehicle registration route

// Define Mongoose Schema for Vehicle
const vehicleSchema = new mongoose.Schema({
  ownerName: String,
  ownerCategory: String,
  ownerAddress: String,
  ownerContact: String,
  ownerEmail: String,
  ownerAadhar: String,
  ownerPAN: String,
  vehicleType: String,
  vehicleModel: String,
  yearOfManufacture: Number,
  insuranceDetails: String,
  vehicleIDNumber: String,
  engineNumber: String,
  fuelType: String,
  photo: String, // File path for uploaded image
  idProof: String, // File path for uploaded document
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

// Multer Storage for File Uploads



// Vehicle Registration Route
app.post('/vehicle-registration', upload.fields([{ name: 'photo' }, { name: 'idProof' }]), async (req, res) => {
  const {
    ownerName, ownerCategory, ownerAddress, ownerContact, ownerEmail, ownerAadhar,
    ownerPAN, vehicleType, vehicleModel, yearOfManufacture, insuranceDetails,
    vehicleIDNumber, engineNumber, fuelType
  } = req.body;

  const photo = req.files['photo'] ? req.files['photo'][0].path : null;
  const idProof = req.files['idProof'] ? req.files['idProof'][0].path : null;

  try {
    const newVehicle = new Vehicle({
      ownerName, ownerCategory, ownerAddress, ownerContact, ownerEmail, ownerAadhar,
      ownerPAN, vehicleType, vehicleModel, yearOfManufacture, insuranceDetails,
      vehicleIDNumber, engineNumber, fuelType, photo, idProof
    });

    await newVehicle.save();
    res.json({ success: true, message: 'Vehicle registration completed successfully!' });
  } catch (err) {
    console.error('Error submitting vehicle registration form:', err);
    res.status(500).json({ success: false, message: 'Error submitting vehicle registration form', error: err.message });
  }
});



// Route to retrieve all fines for a specific vehicle
app.get('/api/fines/:vehicleNumber', async (req, res) => {
  const { vehicleNumber } = req.params;
  try {
    const fines = await Fine.find({ vehicleNumber });
    res.json(fines);
  } catch (error) {
    console.error('Error fetching fines:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve fines' });
  }
});

const fineSchema = new mongoose.Schema({
  vehicleNumber: { type: String, required: true },
  fineAmount: { type: Number, required: true },
  reason: { type: String, required: true },
  dateIssued: { type: Date, default: Date.now },
  status: { type: String, default: "Unpaid" },
});

const Fine = mongoose.model("Fine", fineSchema);

// ✅ Route to issue a new fine
app.post("/api/fines", async (req, res) => {
  try {
    const { vehicleNumber, fineAmount, reason, dateIssued } = req.body;

    const newFine = new Fine({
      vehicleNumber,
      fineAmount,
      reason,
      dateIssued: dateIssued || new Date(),
    });

    await newFine.save();

    res.json({ success: true, message: "Fine issued successfully" });
  } catch (error) {
    console.error("❌ Error issuing fine:", error);
    res.status(500).json({ success: false, message: "Failed to issue fine" });
  }
});

// Route to mark a fine as paid
app.put('/api/fines/:fineId/pay', async (req, res) => {
  const { fineId } = req.params;
  try {
    await db.collection('fines').updateOne(
      { _id: new MongoClient.ObjectID(fineId) },
      { $set: { status: 'Paid' } }
    );
    res.json({ success: true, message: 'Fine marked as paid' });
  } catch (error) {
    console.error('Error marking fine as paid:', error);
    res.status(500).json({ success: false, message: 'Failed to mark fine as paid' });
  }
});
app.put('/api/fines/pay/:vehicleNumber', async (req, res) => {
  try {
    const { vehicleNumber } = req.params;
    const { status } = req.body; // Make sure the body contains the correct 'status' field

    // Update the status of the fine in the database
    const updatedFine = await Fine.findOneAndUpdate(
      { vehicleNumber },         // Match by vehicleNumber
      { status },                // Update the status field
      { new: true }              // Return the updated document
    );

    if (!updatedFine) {
      return res.status(404).json({ message: 'Fine not found' });
    }

    res.status(200).json(updatedFine); // Send the updated fine back
  } catch (error) {
    console.error('Error updating fine status:', error);
    res.status(500).json({ message: 'Failed to update fine status' });
  }
});



// Route to get violations of a specific driver
app.get('/api/violations/:driverId', async (req, res) => {
  const { driverId } = req.params;
  try {
    const violations = await db.collection('violations').find({ driverId }).toArray();
    res.json(violations);
  } catch (error) {
    console.error('Error fetching violations:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve violations' });
  }
});
const uri = 'mongodb://localhost:27017'; // Update with your MongoDB URI if needed

async function insertSampleData() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    



    // Select the "RTO" database
    const db = client.db('RTO');

    const finesData = [
      {
        vehicleNumber: 'KA01AB1234',
        fineAmount: 500,
        reason: 'Speeding',
        status: 'Unpaid',
        dateIssued: '2024-10-22',
      },
      {
        vehicleNumber: 'TN38AB1234',
        fineAmount: 1000,
        reason: 'Speeding',
        status: 'Paid',
        dateIssued: '2024-09-15',
      },
      {
        vehicleNumber: 'TN38CD1234',
        fineAmount: 1000,
        reason: 'Speeding',
        status: 'Unpaid',
        dateIssued: '2024-10-01',
      },
      {
        vehicleNumber: 'TN38EF1234',
        fineAmount: 1500,
        reason: 'Overloading',
        status: 'Unpaid',
        dateIssued: '2024-08-30',
      }
    ];

    const violationsData = [
      {
        vehicleNumber: 'ABC123',
        violationType: 'Speeding',
        date: '2024-10-20',
      },
      {
        vehicleNumber: 'XYZ789',
        violationType: 'Running a Red Light',
        date: '2024-10-21',
      },
      {
        vehicleNumber: 'LMN456',
        violationType: 'Parking in a No-Parking Zone',
        date: '2024-10-22',
      }
    ];

    const finesCollection = db.collection('fines');
    const violationsCollection = db.collection('violations');

    // Insert sample fines
    await finesCollection.insertMany(finesData);
    

    // Insert sample violations
    await violationsCollection.insertMany(violationsData);
   
  } catch (error) {
    console.error('Failed to insert sample data:', error);
  } 
}

// Call the function to insert sample data
insertSampleData();

app.get('/api/fines', async (req, res) => {
  try {
    const fines = await db.collection('fines').find({}).toArray(); // Fetch all fines
    res.json(fines); // Respond with the fines
  } catch (error) {
    console.error('Error fetching fines:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch fines' });
  }
});
app.put('/api/fines/pay/:vehicleNumber', async (req, res) => {
  const { vehicleNumber } = req.params;
  const { status } = req.body; // Expect status in the request body ('Paid' or 'Unpaid')

  try {
    const result = await db.collection('fines').updateOne(
      { vehicleNumber: vehicleNumber },  // Match by vehicleNumber
      { $set: { status: status } }       // Set the new status based on the request
    );

    if (result.modifiedCount > 0) {
      res.json({ success: true, message: `Fine status updated to ${status}` });
    } else {
      res.status(404).json({ success: false, message: 'Fine not found for this vehicle' });
    }
  } catch (error) {
    console.error('Error updating fine status:', error);
    res.status(500).json({ success: false, message: 'Failed to update fine status' });
  }
});
// API endpoint to fetch violations
app.get('/api/violations', async (req, res) => {
    try {
        const violations = await db.collection('violations').find({}).toArray(); // Fetch all violations
        console.log('Fetched Violations:', violations); // Print the fetched violations to console
        res.json(violations); // Respond with the violations
    } catch (error) {
        console.error('Error fetching violations:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch violations' });
    }
});


// Define a Mongoose Schema for Appointments
const appointmentSchema = new mongoose.Schema({
  ownerName: String,
  phoneNumber: String,
  vehicleNumber: String,
  vehicleModel: String,
  OverallCondition: String,
  enginePerformance: String,
  appointmentDate: String,
  appointmentTime: String,
});

// Create a Model
const Appointment = mongoose.model('Appointment', appointmentSchema);
app.post('/appointments', async (req, res) => {
  
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json({ success: true, message: 'Appointment stored successfully!' });
  } catch (error) {
    console.error('Error storing appointment:', error);
    res.status(500).json({ success: false, message: 'Error storing appointment.' });
  }
});

// Fetch all appointments
app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find(); // Fetch all appointments from MongoDB
    res.json({ success: true, data: appointments });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ success: false, message: 'Error fetching appointments.' });
  }
});


// Define the schema for payments
const paymentSchema = new mongoose.Schema({
  vehicleNumber: String,
  paymentStatus: String,
  date: { type: Date, default: Date.now }, // Automatically stores the current date/time
});

// Create the Payment model
const Payment = mongoose.model('Payment', paymentSchema);app.post('/api/payments', async (req, res) => {
  try {
    const { vehicleNumber, paymentStatus } = req.body;

    const newPayment = new Payment({
      vehicleNumber,
      paymentStatus,
    });

    await newPayment.save(); // Use Mongoose to insert data

    res.json({ success: true, message: 'Payment recorded successfully!' });
  } catch (error) {
    console.error('Error recording payment:', error);
    res.status(500).json({ success: false, message: 'Error recording payment' });
  }
});


// Start the server
app.listen(3001, () => {
  console.log('Backend server is running on port 3001');
});

app.use(router);
