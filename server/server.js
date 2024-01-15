const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors=require('cors');
const app = express();
const PORT = 3001;
const mongoose=require('mongoose');
const UserData=require('./models/data1');
const UserData2=require('./models/data2');
const UserData3=require('./models/data3');

const Detail = require('./models/Detail'); 


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Nyaaaya', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};


//// Advocate signup
app.post('/signup/advocate', async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ status: 'error', message: 'Password and Confirm Password do not match' });
    }

    const hashedPassword = await hashPassword(password);

    await UserData.create({
      name: req.body.name,
      state: req.body.state,
      gender: req.body.gender,
      dob: req.body.dob,
      barRegistrationNumber: req.body.barRegistrationNumber,
      courtType: req.body.courtType,
      courtName: req.body.courtName,
      phone: req.body.phone,
      email: req.body.email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      otp: req.body.otp,
    });

    res.json({ status: 'ok' });

  } catch (err) {
    if (err.code === 11000) {
      if (err.keyPattern.email) {
        res.status(400).json({ status: 'error', message: " Email already exists" });
      } else {
        res.status(500).json({ status: 'error', error: err.message });
      }
    } else {
      res.status(500).json({ status: 'error', error: err.message });
    }
  }
});

///////// Advocate login
app.post('/login/advocate', async (req, res) => {
  console.log(req.body);
  console.log('Received login request:', req.body);
  try {
    const { email, password } = req.body;
    const user = await UserData.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }
    if (password !== user.password) {
      return res.status(401).json({ status: 'error', message: 'Invalid password' });
    }
    res.json({ status: 'ok', user });

  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

////// Litigant signup
app.post('/signup/litigant', async (req, res) => {
  console.log(req.body);
  try {

    await UserData2.create({
    name: req.body.name, 
    state:req.body.state,
    gender: req.body.gender,
    dob: req.body.dob,
    
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    otp: req.body.otp,

    });
    res.json({ status: 'ok' });
  } catch (err) {
    if(err.code=== 11000)
    {
     if(err.keyPattern.email){
      res.status(400).json({status: 'error',message: " Email already exists" });}
      

    else {
      
      res.status(500).json({ status: 'error', error: err.message });
   }}
   else{
    res.status(500).json({ status: 'error', error: err.message });}
   }
});
//// Litigant login

app.post('/login/litigant', async (req, res) => {
  console.log(req.body);
  console.log('Received login request:', req.body);
  try {
    const { email, password } = req.body;
    const user = await UserData2.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }
    if (password !== user.password) {
      return res.status(401).json({ status: 'error', message: 'Invalid password' });
    }
    res.json({ status: 'ok', user });

  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});


// udayaddedcode
app.get('/details', async (req, res) => {
  try {
    // Assuming you have a Detail model defined
    const details = await Detail.find();

    res.status(200).json(details);
  } catch (error) {
    console.error('Error fetching details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


///// Administrator signup
app.post('/signup/administrator', async (req, res) => {
  console.log(req.body);
  try {


    await UserData3.create({
    name: req.body.name, 
    state:req.body.state,
    gender: req.body.gender,
    dob: req.body.dob,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    otp: req.body.otp,

    });
    res.json({ status: 'ok' });
  } catch (err) {
    if(err.code=== 11000)
    {
     if(err.keyPattern.email){
      res.status(400).json({status: 'error',message: " Email already exists" });}

    else {
      
      res.status(500).json({ status: 'error', error: err.message });
  }}
    
    else{
    res.status(500).json({ status: 'error', error: err.message });}
  
    
  }
});
//////////// Adminstrator login

app.post('/login/administrator', async (req, res) => {
  console.log(req.body);
  console.log('Received login request:', req.body);
  try {
    const { email, password } = req.body;
    const user = await UserData3.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }
    if (password !== user.password) {
      return res.status(401).json({ status: 'error', message: 'Invalid password' });
    }
    res.json({ status: 'ok', user });

  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});



app.post('/details', async (req, res) => {
  try {
    const { title, date, description } = req.body;

    if (!title || !date || !description) {
      return res.status(400).json({ error: 'Please provide all details.' });
    }

    // Assuming you have a Detail model defined
    const detail = new Detail({
      title,
      date,
      description,
    });

    // Save the detail to the database
    const savedDetail = await detail.save();

    res.status(201).json({ message: 'Details stored successfully.', detail: savedDetail });
  } catch (error) {
    console.error('Error saving detail:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});