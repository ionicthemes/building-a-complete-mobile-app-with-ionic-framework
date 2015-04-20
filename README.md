# JSConfUY

In this workshop we are going to go through the process of building a hybrid mobile app using Ionic Framework.
This repo will serve as a guide and in this README.md you can find all the steps and instructions needed to build the app.

* [Here](http://startapplabs.github.io/starting-with-ionic/#/) you can find the slides of the presentation at the JSConfUY 2015
* [Here](https://jsconfuy2015.herokuapp.com/) you can find a hosted version of the app we are going to build
* You can also deploy your own copy of the app using this button: [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/startapplabs/jsconfuy/tree/master)
* You can download the app from Apple App Store [here]()
* You can download the app from Google Play [here]()
* *[If the app isn't yet approved]* This is the ID (`350a3330`) of the JSConfUY app on [Ionic View](). If you want to test the app in your device you can follow [these steps]() and get the app through Ionic View
* *[If the app isn't yet approved]* And you are an Android user, you can download the `.apk` [here]()

**Notice:**
* This is not a mobile web, after compiled you will get a native app that uses web technologies (JS, CSS, HTML). The hosted example is just for you to see how the app is going to be, but remember that what you are going to see in the hosted version is a pre build example of the app, all the interactions with native mobile APIs (inAppBrowser, Social Share, etc) won't be available.
* Ionic View is ment to provide an easy way to share and try mobile apps built with Ionic. That said, there are some cordova plugins that are not yet integrated in Ionic View. That may cause that some functionalities won't work if you are trying the app on Ionic View.
* For a better experience we recommend you to download the app from the App Store or Google Play or to download the `.apk` if you are an Android user.
* For more information about using Heroku, check out https://devcenter.heroku.com/

## <a name="requirements">Requirements</a>

**Are you using Windows?** It is probable that you will get some errors when running `npm install` because your computer needs some other things in order to use `npm`. Stay calm, you are not alone! If that's the case please look at [these links](#uglify-minify-and-obfuscate "Uglify, minify and obfuscate your code") to fix your issues and then continue with the rest of the installation process below.

### Install Ionic
You can find the Ionic offical installation documentation [here](http://ionicframework.com/docs/guide/installation.html)

1. Make sure you have an up-to-date version of ** _Node.js_ ** installed on your system. If you don't have ** *Node.js* ** installed, you can install it from [here](http://nodejs.org/).
2. Open a terminal (Mac) or a command interpreter (`cmd`, Windows), and install ** *Cordova* ** and ** *Ionic* **:
    - `npm install -g cordova`
    - `npm install -g ionic`
    - On a Mac, you may have to use `sudo` depending on your system configuration: `sudo npm install -g cordova ionic`
3. If you already have ** *Cordova* ** and ** *Ionic* ** installed on your computer, make sure you update to the latest version:
    - `npm update -g cordova`
    - `npm update -g ionic`
    - Or `sudo npm update -g cordova ionic`

Follow this links if you want more information:
* [Ionic Getting started guide](ionicframework.com/getting-started)
* [Ionic Documentation](ionicframework.com/docs)
* [Visit the Ionic Community Forum](forum.ionicframework.com)

## <a name="step-1">Step 1</a>

bla bla bla bla

## <a name="common-issues">Common Issues</a>
### <a name="errors-when-running-npm-install-on-windows">Errors when running npm install on Windows</a>

Please make sure you have `node` version `0.10.36`

You should fix your errors by reading these links:
* [NodeJS - Error installing with NPM](http://stackoverflow.com/questions/21365714/nodejs-error-installing-with-npm/21366601#21366601)
* [Ionic setup sass - error](http://forum.ionicframework.com/t/ionic-setup-sass-error/17843)
