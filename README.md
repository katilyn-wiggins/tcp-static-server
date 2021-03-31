## Solution

Using TCP we will create our own static HTTP server. This server will utilize the 'net' and 'http' node modules to deploy. The server should be located at localhost port 7890. To received and send requests we will need two functions, createResponse, and parseRequest. parseRequest will take in the incoming request from the client and turn the code from a string into an object. createResponse will format our object to a string in order for the client to understand. After the TCP handshake has been completed, the server will utilize promises to ensure that responses and requests are being sent.

## Steps

1. Fork repo from previous lab that includes two created functions, createResponse and parseRequest
2. Create node-server.js which creates our server
3. Edit existing code and remove if(else) statements to create a clean template
4. import fs and use promises
5. create get routes for accessing our public directory
6. test get routes
