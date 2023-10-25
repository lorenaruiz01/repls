# 2.7: Non-Relational Databases & MongoDB

### Intro
- you should strive for the same type of uniformity required in SQL databases even within your NoSQL databases.
- the key advantage to using non-relational databases is the flexibility it provides for changing up your database if you need to (without having to perform complex modifications on your current database).

### MongoDB
 - MongoDB Community Server: This is the Mongo server that interacts with incoming commands over the network, processes the commands, and stores data. You’ll be using the “community” edition, since it’s free and sufficient for your project, rather than the “enterprise” edition.
- MongoDB Shell (mongosh): This is where you run commands and make queries that will allow you to create and update a database.
- MongoDB Database Tools: MongoDB comes with a lot of important tools that can be used for various purposes in your project, for instance, exporting and importing your databases, which is useful for creating and sharing backups.
- uninstalled and reinstalled homebrew using the terminal
- installed MongoDB using the terminal

### Starting and Using MongoDB
- start the (community) server with `brew services start mongodb-community`
- launch the shell by typing `mongosh`
- quit the server with `brew services stop mongodb-community`
- once launched, the mongo shell allows you to type commands for performing CRUD operations on your data. With MongoDB, you'll be writing your commands in JavaScript rather than SQL

### Using CRUD operations in MongoDB
- name of my database: mySpookyFlixDB

#### Database Schema

Collections:
    Movies
        - id
        - title
        - release year
        - director
            - name
            - bio
            - birthdate/birthyear
        - description
        - genre
            - genreName:
            - genreDescription
        - cover image (link)
        - feature (t/f)

    Genres
        - id
        - genreName
        - genreDescription