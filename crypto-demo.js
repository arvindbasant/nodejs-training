import crypto from 'crypto';


// password protection

const password = 'password1';

const salt = crypto.randomBytes(256).toString('hex');
const hashedPass = crypto.pbkdf2Sync(password, salt, 1000000, 512, 'sha512');

console.log(hashedPass.toString('hex'));


// protecting data at REST

const algorithm = 'aes-256-cbc'; // cipher block chaining
const password = 'strong password';
const salt = crypto.randomBytes(32);

const key = crypto.scryptSync(password, salt, 32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);

let aadhar = '567-783-793-683'; // ssn / pan / acc no/ tran id/ amount/ 
let encrypted = cipher.update(aadhar, 'utf8', 'hex');

encrypted += cipher.final('hex');

console.log('encrypted', encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('decrypted', decrypted);

// adapter design pattern -> allows you easily change session vendor or libs


const arvind = crypto.createDiffieHellman(2048);
const arvindKeys = arvind.generateKeys();

const ankit = crypto.createDiffieHellman(arvind.getPrime(), arvind.getGenerator());
const ankitKeys = ankit.generateKeys();

const arvindSecret = arvind.computeSecret(ankitKeys);
const ankitSecret = ankit.computeSecret(arvindKeys);

console.log(arvindSecret.toString('hex'));
console.log(ankitSecret.toString('hex'));

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {})


// // HMAC ->

const hmac = crypto.createHmac('sha256', 'a secret');
hmac.update('some data to update in network');

console.log(hmac.digest('hex'));












