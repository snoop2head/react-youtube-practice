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

* [x] Make upload page
* [x] Make uploading page route
* [x] Make uploading page header tab button
* [x] Make form template
* [x] Make drop zone in the form tempalte
* [x] Make onChange function

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



### Download dropzone

* --save argument is to reflect dependency description on package.json

```shell
cd client
npm install react-dropzone --save
cd ..
npm run dev
```

