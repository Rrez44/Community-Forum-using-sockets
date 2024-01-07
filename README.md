This is a project that serves as an intro to web-programming,

We have created a basic webpage that uses node.js as the backend to allow us communication through sockets. We used the sockets to emmit data to all users connected which helped us achieve our vision of connecting people through our chat application.
This is not designed with security in mind, there is no email or password validation so do not input your personal data as we are using http instead of https (the s stands for secure so you get where im going with this) putting you at risk of cyber attacks!
With that out of the way you can run the app yourself to test it out, by following these steps:

1. Clone the repository 

2. Run $ npm install

3. run $ node app.js

You can find the site in your localhost:4000/home or if you want another port or this isnt working for you follow these steps

1. Edit app.js by changing the enviroment port.

2. Edit connect.js by changing the connection socket. (its defined twice, once at the very top of the file and secondly in the youtube iframe player emmiter)

Enjoy!
