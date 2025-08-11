# Express JS

# npm init -y

# npm install express

# Cases

1. Sentence case: Hello World
2. Camel case: helloWorld
3. Pascal case: HelloWorld
4. kebab case: hello-world
5. snake case: hello_world

# Model

- Class built from schema, interact with the database
- semantics: Always singular, pascal case
- For e.g. Product, ProductOrder

# Mongoose

- ODM of Mongoose for Node.js
- Schema validation
- Models
- Middleware
- Relationship

# Schema

- id, name, age, email, phone, isActive
- Structure/rule of a document/data

# Model

- Class built from schema, interact with the database
-

# Encryption and Decryption

- Encryption: Converting normal readable text to cipher (unreadable) text.
- for e.g: hello => asas87549843\*7jsdkekan$

-Decryption: Converting cipher text to readable form.

# Types

1. Symmetric: Same key is used for encryption and decryption.

2. Asymmetric: Different Key are used into encryption and decryption for private RSA algorithm. 

 # Hashing 


- Type of encryption, this is one way encryption. 
-Register: Test1111 => aasmndasnmda@3mmmamam(store)
-Login: Test1111 => aasmndasnmda@3mmmamam(compare)

# Salt
- Adding random texts in the hash value

# Auth 
1. Login success 
2. Token generated - JWT
3. store token
4. Append this token in every request to handle auth 

# JWT - JSON Web Token
- Used for auth
- Self verified 
- Tamper-proof 

### Structure
1. Header: which algorithms  is used.
2. Payload: 
3. Signature: check any things was changed or not.

