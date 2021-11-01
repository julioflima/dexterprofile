<p align="center">
	<h1 align="center">
    <span>Dexter Profile👤</span>
  </h1>
</p>
<p align="center">
    <img src="https://user-images.githubusercontent.com/17098382/139630265-2841d90f-7f27-4cb2-9ae8-ddc14b194637.png" height="100" width="175" alt="Logo">
</p>

## [DEMO!!!](https://dexterprofile.herokuapp.com/profile/@julioflima)


## [CodeSandbox!!!](https://codesandbox.io/s/delicate-dew-xpik4)


<p align="justify">
  The name <strong>dexterprofile</strong>, was taken from <strong>doc spec</strong>.
</p>
<p align="justify">
  The base of inspiration of design and UX was the example app, sent in spec document.
</p>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Hosting

### Backend:

<p align="justify">
  The application is hosted on Heroku.
</p>

### Frontend:

<p align="justify">
  The application is hosted on Heroku.
</p>

##### Docker:

`sudo docker ps`

`sudo docker stop "hash"`

`sudo docker build -t dexterprofile .`

`docker run -d dexterprofile`

##### Heroku:

`heroku login`

`heroku container:login`

`heroku container:push web -a dexterprofile`

`heroku container:release web -a dexterprofile`

## Back End

<p align="justify">
By this way, every page called is generated on backend, so no "env" is exposed to save the public base URL.
</p>

## Front End

<p align="justify">
The aplication was developed in NextJS using the most possible otimizations tha the NextJS provides, follow in below more.
</p>
<p align="justify">
Open <a href="http://localhost:3000">http://localhost:3000</a> with your browser to see the result.
<p align="justify">
</p>
You can start editing the page by modifying <strong><i>pages/index.tsx</i></strong>. The page auto-updates as you edit the file.
</p>

### NextJS:

<p align="justify">
NextJS is the best in now days framework for frontend, it provides the productivity of React with a lot of features that could improve a lot the SEO and by consequence the UX. 
</p>
<p align="justify">
The most tecnologies that it provides that put Next in the top is the native SSG (Static Site Generation), like the old PHP, so the are much less time of rendering, and if you need rerender something you could do because Next is made in the base oc CRA (Create React App). So we can build dynamic pages, being pre-render in build.
</p>
<p align="justify">
 Another technologie that Next provides is the Image and Fonts optimization. 
</p>
<p align="justify">
Is good to quote too the ISR (Incremental Static Regeneration), with this you could generate on build some pages, but you could determine when they gonna be revalidated, and even generate pages tha was not generated on build, buy demand.
</p>
