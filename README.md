<h1 align="center">
  MeetApp
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/lyandeveloper/MeetApp">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/top/lyandeveloper/MeetApp">

  <a href="https://github.com/lyandeveloper/MeetApp/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lyandeveloper/MeetApp">
  </a>

  <a href="https://github.com/lyandeveloper/MeetApp/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lyandeveloper/MeetApp">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  
  <a href="https://github.com/lyandeveloper/">
    <img alt="Author" src="https://img.shields.io/badge/author-Elian%20Campos-blue">
  </a>
</p>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#arrow_forward-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
</p>

<br>

## 💻 Project

MeetApp is a video conference made with NodeJS.<br>
<<<<<<< HEAD
=======

# Features

On MeetApp you can create rooms, also you can copy the room ID and share with people that you want in your room.<br/>
<img src=".github/gif1.gif">
<br/>

Also you have a chat where you can send messages to your friends.<br/>
<img src=".github/gif2.gif">
<br/>
>>>>>>> 3afae3f1e42902e7e2382bfb11ea705edbb1f1ae

## Technology

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [PeerJS](https://peerjs.com/)
- [WebRTC](https://webrtc.org/)
- [SocketIO](https://socket.io/)

## :arrow_forward: How to run
- Fork the project and clone
- In your project folder, open your terminal and run `yarn install or npm install` to install dependencies
- Be sure that you have Postgres installed
- Then in your project folder copy the `.env.example` content, and create a `.env` file then paste the content.
- Create a new database with wherever name you want, then fill the `.env` file with required fields.
- In your terminal run `yarn sequelize db:migrate` or `npm sequelize db:migrate` to run the database migrations.
- Then run `yarn dev or npm dev` to start the server and in another terminal run `yarn peer or npm peer` to start peer server.

If all goes well, the backend of application will be available at: **http://localhost:3000**

---

Made By ♥ [Elian Campos](https://github.com/lyandeveloper). Add me on [LinkedIn](https://www.linkedin.com/in/elian-campos/) :wave:
