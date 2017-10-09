Source code for [my personal site](http://www.stefanmiodrag.com/), built using plain HTML and (S)CSS.

## Install

This project uses the following dependencies:<br/>
[Valet](https://laravel.com/docs/5.5/valet#installation)<br/>
[Ruby](https://www.ruby-lang.org/en/downloads/)<br/>
[npm.js](https://www.npmjs.com/get-npm)<br/>
[Sass](http://sass-lang.com/)<br/>


## Usage

Once the dependencies have been downloaded, you may download this repository. Alternatively, you may clone this repository using the following command.
```sh
$ git clone https://github.com/stefanmiodrag/stefanmiodrag.com.git
```

If you're using Laravel Valet as your development environment, make sure that the downloaded repository is in your serving sites  directory.

Run the following commands to auto refresh any changes made to `.scss` files in the `/scss` directory. 
```sh
$ cd <sites directory>
# navigate to /sites directory
$ npm run watch
# auto refreshes any changes made to .scss files in the /scss directory
# generated .css files will be located in the /css directory
```

By default, Valet serves your projects using the `.dev` extension. Open `stefanmiodrag.com[.dev]` on your browser to visit the site.
