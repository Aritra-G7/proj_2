// Initialize Appwrite SDK
const sdk = new Appwrite();

sdk
  .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite endpoint
  .setProject('6798350000139efbe7dc'); // Replace with your Project ID

// Handle form submission
document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // Create User Account in Appwrite
    const response = await sdk.account.create('unique()', email, password);
    document.getElementById('result').innerText = 'Signup Successful! Please verify your email.';

    // Send Email Verification
    await sdk.account.createVerification('https://your-redirect-url.com'); // Replace with your verification redirect URL
    console.log('Verification email sent.');
  } catch (err) {
    console.error(err); // Handle errors (e.g., email already in use)
    document.getElementById('result').innerText = `Error: ${err.message}`;
  }
});
