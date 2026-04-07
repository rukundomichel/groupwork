const express = require('express');
const app = express();
const sequelize = require('./config/db');

const applicationRoutes = require('./routes/applicationRoutes');
const admissionRoutes = require('./routes/admissionRoutes');
const programRoutes = require('./routes/programRoutes');

app.use(express.json());

app.use('/applications', applicationRoutes);
app.use('/admissions', admissionRoutes);
app.use('/programs', programRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

sequelize.sync() 
  .then(() => {
    console.log('Database connected');

    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });

  })
  .catch((err) => {
    console.log('Error:', err);
  });