# JSConfUY

In this workshop we are going to go through the process of building a hybrid mobile app using **_Ionic Framework_**.
This repo will serve as a guide and in this `README.md` you can find all the steps and instructions needed to build the app.

* [Here](http://startapplabs.github.io/starting-with-ionic/#/) you can find the **_slides_** of the presentation at the JSConfUY 2015
* [Here](https://jsconfuy2015.herokuapp.com/) you can find a hosted version of the app we are going to build
* You can also **_deploy_** your own copy of the app using this button: [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/startapplabs/jsconfuy/tree/master)
* You can download the app from **_Apple App Store_** [here]()
* You can download the app from **_Google Play_** [here]()
* *[If the app isn't yet approved]* This is the ID (`350a3330`) of the JSConfUY app on [**_Ionic View_**](). If you want to test the app in your device you can follow [these steps]() and get the app through Ionic View
* *[If the app isn't yet approved]* And you are an Android user, you can download the `.apk` [here]()

**Notice:**
* This is not a mobile web, after compiled you will get a native app that uses web technologies (JS, CSS, HTML). The hosted example is just for you to see how the app is going to be, but remember that what you are going to see in the hosted version is a pre build example of the app, all the interactions with native mobile APIs (inAppBrowser, Social Share, etc) won't be available.
* **_Ionic View_** is ment to provide an easy way to share and try mobile apps built with Ionic. That said, there are some cordova plugins that are not yet integrated in Ionic View. That may cause that some functionalities won't work if you are trying the app on Ionic View.
* For a better experience we recommend you to download the app from the **_App Store_** or **_Google Play_** or to download the `.apk` if you are an Android user.
* For more information about using **_Heroku_**, check out https://devcenter.heroku.com/

## <a name="requirements">Requirements</a>

**Are you using Windows?** It is probable that you will get some errors when running `npm install` because your computer needs some other things in order to use `npm`. Stay calm, you are not alone! If that's the case please look at [these links](#errors-when-running-npm-install-on-windows "Errors when running npm install on Windows") to fix your issues and then continue with the rest of the installation process below.

### Install Ionic
You can find the **_Ionic_** offical installation documentation [here](http://ionicframework.com/docs/guide/installation.html)

1. Make sure you have an up-to-date version of **_Node.js_** installed on your system. If you don't have **_Node.js_** installed, you can install it from [here](http://nodejs.org/).
2. Open a terminal (Mac) or a command interpreter (`cmd`, Windows), and install **_Cordova_** and **_Ionic_**:
    - `npm install -g cordova`
    - `npm install -g ionic`
    - On a Mac, you may have to use `sudo` depending on your system configuration: `sudo npm install -g cordova ionic`
3. If you already have **_Cordova_** and **_Ionic_** installed on your computer, make sure you update to the latest version:
    - `npm update -g cordova`
    - `npm update -g ionic`
    - Or `sudo npm update -g cordova ionic`

Follow this links if you want more information:
* [Ionic **_Getting started_** guide](ionicframework.com/getting-started)
* [Ionic **_Documentation_**](ionicframework.com/docs)
* [Visit the Ionic **_Community Forum_**](forum.ionicframework.com)

## <a name="step-0">Step 0</a>

This step corresponds with [this](http://startapplabs.github.io/starting-with-ionic/#/28) slide of the **_presentation_**.

### Git & `ionic start`
First we need to link this new Ionic project with our reference repo on github. Clone and checkout the initial commit of this repo so we can start working on the app:
- `git clone https://github.com/startapplabs/jsconfuy.git`
- `cd jsconfuy`
- `git checkout e37d84e`

After this, we need to set up some stuff before starting working on the **_Ionic_** project. To do so, run these commands:
- `npm install`
- `bower install`
- `ionic setup sass`

**Note:** If you are starting a brand new project with **_Ionic_** run these commands instead:
- `ionic start jsconfuy sidemenu`
- `cd jsconfuy`
- `ionic setup sass`

Finally to see the current state of the project run:
- `ionic serve`

If you followed the procedure above, after serving the app you can see that the **_Ionic dev server_** is running on `http://localhost:8100` and there you should see one of Ionics starter projects which showcases an app with a side menu.

<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2020.4.2015%2020.56.55.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2020.4.2015%2020.56.50.png" style="width:45%; border:1px solid #ccc;">

### What we have lerned so far:
- Bind the project to an existing **_Github repo_**
- Start and perform basic configurations for your Ionic project using the powerfull **_Ionic CLI_**
- Serve and see your app running on **_Ionic dev server_** which includes:
    - **_Live reload:_** every time you change a file you will see the changes without refreshing
    - **_Tasks and watchers:_** every time you change a file, **_Gulp_** tasks running on the background will perform certain procedures that will ease the development (for example **_sass compilation and minification_**)



## <a name="step-1">Step 1</a>

This step corresponds with [this](http://startapplabs.github.io/starting-with-ionic/#/30) slide of the **_presentation_**, and this **_commit_** ([`e8d787b`](https://github.com/startapplabs/jsconfuy/commit/e8d787b489c7f29e2b11a58169be4d16a70e1914)) represents the starting point of this step. Please checkout this commit so we are all in the same page: `git checkout e8d787b`

In this step we are going to remove all the example files that came with the **_Ionic starter project_** and add our own starter files.

This app will have information about Uruguay's Javascript Conference 2015 (JSConfUY 2015). To serve that pourpose the content will be the following:
- 3 main views containing
    - **_Speakers_** information
    - **_Venue_** information
    - **_Agenda_** information
- 1 **_side menu_** for a clear navigation
- 1 sub view to show extended information of **_events_** such as keynotes, talks, workshops, cofee breaks, etc

This table ilustrates the navigation between views






## <a name="common-issues">Common Issues</a>
### <a name="errors-when-running-npm-install-on-windows">Errors when running npm install on Windows</a>

Please make sure you have `node` version `0.10.36`

You should fix your errors by reading these links:
* [NodeJS - Error installing with NPM](http://stackoverflow.com/questions/21365714/nodejs-error-installing-with-npm/21366601#21366601)
* [Ionic setup sass - error](http://forum.ionicframework.com/t/ionic-setup-sass-error/17843)
