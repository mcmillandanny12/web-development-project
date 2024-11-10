const express = require('express');
const { body, validationResult } = require('express-validator');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/Contact.html'));
});

// Handle form submission with validation
app.post('/submit-inquiry',
    [
        body('name').trim().notEmpty().withMessage('Name is required.'),
        body('email').isEmail().withMessage('Enter a valid email.'),
        body('phone').isMobilePhone().withMessage('Enter a valid phone number.'),
        body('yacht-type').notEmpty().withMessage('Please select a yacht type.'),
        body('budget').isNumeric().withMessage('Budget must be a number.'),
        body('inquiry-type').notEmpty().withMessage('Please select an inquiry type.'),
        body('message').trim().notEmpty().withMessage('Message cannot be empty.')
    ],
    (req, res) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            // Generate a response with error messages
            const errorMessages = errors.array().map(error => `<li>${error.msg}</li>`).join('');
            return res.status(400).send(`
                <h2>Form Submission Failed</h2>
                <p>Please fix the following errors:</p>
                <ul>${errorMessages}</ul>
                <a href="/">Go back to the form</a>
            `);
        }
        
        // If no errors, send a success response
        res.status(200).send(`
            <h2>Inquiry Submitted Successfully!</h2>
            <p>Thank you for your inquiry. We will get back to you soon!</p>
            <a href="/">Submit another inquiry</a>
        `);
    }
);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

