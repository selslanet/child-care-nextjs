// pages/api/login.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Placeholder for your authentication logic
    // For example, verify the username and password against your database
    if (username === 'user' && password === 'pass') {
      // Authentication successful
      res.status(200).json({ status: 'success', message: 'Logged in successfully' });
    } else {
      // Authentication failed
      res.status(401).json({ status: 'error', message: 'Invalid credentials' });
    }
  } else {
    // Not a POST request
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
