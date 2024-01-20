const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const multer = require('multer');
const app = express();
const PORT = 3001;
const mongoose=require('mongoose');
const UserData=require('./models/data1');
const UserData2=require('./models/data2');
const UserData3=require('./models/data3');
const File = require('./models/file');
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

//// Advocate signup
app.post('/signup/advocate', async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ status: 'error', message: 'Password and Confirm Password do not match' });
    }

    

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
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
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
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ status: 'error', message: 'Password and Confirm Password do not match' });
    }

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



///// Administrator signup
app.post('/signup/administrator', async (req, res) => {
  console.log(req.body);
  try {
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ status: 'error', message: 'Password and Confirm Password do not match' });
    }

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
    const { cnr,title, date, description } = req.body;

    if (!cnr || !title || !date || !description) {
      return res.status(400).json({ error: 'Please provide all details.' });
    }

    // Assuming you have a Detail model defined
    const detail = new Detail({
      cnr,
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

app.get('/api/user', async (req, res) => {
  const { email } = req.query;

  try {
    const user = await UserData3.findOne({ email });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ status: 'error', message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

app.get('/api/user1', async (req, res) => {
  const { email } = req.query;

  try {
    const user = await UserData2.findOne({ email });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ status: 'error', message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});
////





app.get('/api/cd', async (req, res) => {
  const { cnr } = req.query;

  try {
    const users = await Detail.find({ cnr });

    if (users && users.length > 0) {
      res.json(users);
    } else {
      res.status(404).json({ status: 'error', message: 'No users found for the given CNR' });
    }
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});


app.post('/api/checkCNR', async (req, res) => {
  console.log(req.body);
  console.log('Received login request:', req.body);
  try {
    const { cnr} = req.body;
    const user = await Detail.findOne({ cnr });

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }
    
    res.json({ status: 'ok', user });

  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

////docs
const db= mongoose.connection;

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// API endpoint for file uploads
app.post('/upload', upload.array('fileUpload'), async (req, res) => {
  try {
    const cnr= req.body.cnr;
    const currentDate = new Date().toLocaleDateString();
    const fileName = req.body.fileName;

    // Iterate through uploaded files and save to database
    for (let i = 0; i < req.files.length; i++) {
      const file = new File({
        date: currentDate,
        name: fileName,
        filename: req.files[i].originalname,
        content: req.files[i].buffer.toString("base64"),
        fileType: req.files[i].mimetype.split('/')[0],
      });
      await file.save();
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint for retrieving files
app.get('/files', async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Add a new API endpoint for fetching file content
app.get('/files/:filename', async (req, res) => {
  try {
    const filename = req.params.filename;
    const file = await File.findOne({ filename });

    if (file && file.content) {
      res.send(file.content.toString());
    } else {
      res.status(404).send('File not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});