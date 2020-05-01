# React to clone youtube

## Configuration

* [Lecture Source](https://www.youtube.com/playlist?list=PL9a7QRYt5fqnlSRu--re7N_1Ean5jFsh3)
* [Boilerplate Source](https://github.com/jaewonhimnae/boilerplate-mern-stack)

### Utilizing boilerplate

```shell
npm install
cd client
npm install
```

Downloading dependency of boilerplate, for both server and for client./

* [Making cluster on mongodb](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/)

## Making Video Upload Form

* [ ] Make upload page
* [ ] Make uploading page route
* [ ] Make uploading page header tab button
* [ ] Make form template
* [ ] Make drop zone in the form tempalte
* [ ] Make onChange function

### Running server

```shell
npm run dev
```

* This script is referred from [package.json](./package.json)
* nodemon is to re-run server whenever changes are made

```json
"scripts": {
    "start": "node server/index.js",
    "backend": "nodemon server/index.js",
    "frontend": "npm run start --prefix client",
    "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\""
  }
```

