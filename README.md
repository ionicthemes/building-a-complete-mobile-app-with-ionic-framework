# JSConfUY

In this workshop, we are going to go through the process of building a hybrid mobile app using **_Ionic Framework_**.
This repo will serve as a guide and in this `README.md`, you can find all the steps and instructions needed to build the app.

* [Here](http://startapplabs.github.io/starting-with-ionic/#/) you can find the **_slides_** of the presentation at the JSConfUY 2015
* [Here](https://jsconfuy2015.herokuapp.com/) you can find a hosted version of the app we are going to build
* You can also **_deploy_** your own copy of the app using this button: [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/startapplabs/jsconfuy/tree/master)
* This is the ID (`7364750e`) of the JSConfUY app on [**_Ionic View_**](http://view.ionic.io/). If you want to test the app in your device, you can follow [these steps](http://blog.ionic.io/view-app-is-alive/) and get the app through Ionic View
* If you are an Android user, you can download the `.apk` [here](https://dl.dropboxusercontent.com/u/30675090/jsconfuy/JSConfUY.apk)

**Notice:**
* This is not a mobile web; after compiled, you will get a native app that uses web technologies (JS, CSS, HTML). The hosted example is just for you to see how the app is going to be, but remember that what you are going to see in the hosted version is a pre-build example of the app; all the interactions with native mobile APIs (inAppBrowser, Social Share, etc.) won't be available.
* **_Ionic View_** is meant to provide an easy way to share and try mobile apps built with Ionic. That said, there are some Cordova plugins that are not yet integrated in Ionic View. That may cause some functionalities to not work if you are trying the app on Ionic View.
* For a better experience, we recommend you download the app from the **_App Store_** or **_Google Play_** or to download the `.apk` if you are an Android user.
* For more information about using **_Heroku_**, check out https://devcenter.heroku.com/

## <a name="requirements">Requirements</a>

**Are you using Windows?** It is probable that you will get some errors when running `npm install` because your computer needs some other things to use `npm`. Stay calm, you are not alone! If that's the case, please look at [these links](#errors-when-running-npm-install-on-windows "Errors when running npm install on Windows") to fix your issues and then continue with the rest of the installation process below.

### Install Ionic
You can find the **_Ionic_** official installation documentation [here](http://ionicframework.com/docs/guide/installation.html).

1. Make sure you have an up-to-date version of **_Node.js_** installed on your system. If you don't have **_Node.js_** installed, you can install it from [here](http://nodejs.org/).
2. Open a terminal (Mac) or a command interpreter (`cmd`, Windows), and install **_Cordova_** and **_Ionic_**:
	- `npm install -g cordova`
	- `npm install -g ionic`
	- `npm install -g bower`
	- On a Mac, you may have to use `sudo` depending on your system configuration: `sudo npm install -g cordova ionic`
3. If you already have **_Cordova_** and **_Ionic_** installed on your computer, make sure you update to the latest version:
	- `npm update -g cordova`
	- `npm update -g ionic`
	- `npm update -g bower`
	- Or `sudo npm update -g cordova ionic`

Follow these links if you want more information:
* [Ionic **_Getting started_** guide](http://ionicframework.com/getting-started)
* [Ionic **_Documentation_**](http://ionicframework.com/docs)
* [Visit the Ionic **_Community Forum_**](http://forum.ionicframework.com)

## <a name="step-1">Step 1 - Git & `ionic start`</a>

This step corresponds with [this](http://startapplabs.github.io/starting-with-ionic/#/28) slide of the **_presentation_**.

First we need to link this new Ionic project with our reference repo on github. Clone and checkout the **_initial commit_** ([`e37d84e`](https://github.com/startapplabs/jsconfuy/commit/e37d84e49b3c46c2c04e2da436e8370e90578e33)) of this repo so we can start working on the app:
- `git clone https://github.com/startapplabs/jsconfuy.git`
- `cd jsconfuy`
- `git checkout e37d84e`

After this, we need to set up some stuff before starting working on the **_Ionic_** project. To do so, run these commands:
- `npm install`
- `bower install`
- `ionic setup sass`

**Note:** If you are starting a brand new project with **_Ionic_**, run these commands instead:
- `ionic start jsconfuy sidemenu`
- `cd jsconfuy`
- `ionic setup sass`

Finally, to see the current state of the project, run:
- `ionic serve`

If you followed the procedure above, after serving the app, you can see that the **_Ionic dev server_** is running on `http://localhost:8100` and there, you will see one of Ionic's starter projects, which showcases an app with a side menu.

<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2020.4.2015%2020.56.55.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2020.4.2015%2020.56.50.png" style="width:45%; border:1px solid #ccc;">

### What we have learned so far:
- Bind the project to an existing **_Github repo_**
- Start and perform basic configurations for your Ionic project using the powerful **_Ionic CLI_**
- Serve and see your app running on **_Ionic dev server_** which includes:
- **_Live reload:_** every time you change a file, you will see the changes without refreshing
- **_Tasks and watchers:_** every time you change a file, **_Gulp_** tasks running on the background will perform certain procedures that will ease the development (for example **_sass compilation and minification_**)


## <a name="step-2">Step 2 - Ionic templates & AngularJS navigation</a>

This step corresponds with [this](http://startapplabs.github.io/starting-with-ionic/#/30) slide of the **_presentation_**, and this **_commit_** ([`e8d787b`](https://github.com/startapplabs/jsconfuy/commit/e8d787b489c7f29e2b11a58169be4d16a70e1914)) represents the starting point of this step. Please checkout this commit so we are all on the same page: `git checkout e8d787b`

In this step, we are going to remove all the example files that came with the **_Ionic starter project_** and add our own starter files.

This app will have information about Uruguay's Javascript Conference 2015 (JSConfUY 2015). To serve that purpose, the content will be the following:
- 3 main views containing
	- **_Speakers_** information
	- **_Venue_** information
	- **_Agenda_** information
- 1 **_side menu_** for a clear navigation
- 1 sub view to show extended information of **_events_** such as keynotes, talks, workshops, coffee breaks, etc.

This image illustrates the navigation between views
<div style="text-align:center;">
<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/CommunicationDiagram1.png" style="border:1px solid #ccc;">
</div>

To achieve this, we are going to:
- Add `www/templates/agenda.html` with basic agenda view layout
- Add `www/templates/speakers.html` with basic speakers view layout
- Add `www/templates/venue.html` with basic venue view layout
- Add `www/templates/event.html` with basic event view layout
- Update `www/templates/menu.html` with navigation layout to the other views
- Update `www/js/app.js` with app's desired routing
- Update `www/js/controllers.js` with a basic controller for each view

The final point of this step is this **_commit_** ([`296941e`](https://github.com/startapplabs/jsconfuy/commit/296941e4424e3f3a4b4c0bd8d3b1d9f24e807dc1)). Run `git checkout 296941e` and you will see the implementation of the instructions above.

Serve the app with `ionic serve` and look at the **_Ionic dev server_** running on `http://localhost:8100`. There you will see our JSConfUY app with the navigation DONE.

<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2020.4.2015%2022.57.52.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2020.4.2015%2022.57.49.png" style="width:45%; border:1px solid #ccc;">

<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2020.4.2015%2022.57.41.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2020.4.2015%2022.57.56.png" style="width:45%; border:1px solid #ccc;">

If you want to see more details of what we have done, take a look at [this comparison](https://github.com/startapplabs/jsconfuy/compare/e8d787b...296941e) between the initial commit ([`e8d787b`](https://github.com/startapplabs/jsconfuy/commit/e8d787b489c7f29e2b11a58169be4d16a70e1914)) and the final commit ([`296941e`](https://github.com/startapplabs/jsconfuy/commit/296941e4424e3f3a4b4c0bd8d3b1d9f24e807dc1)) of this step.

### What we have learned so far:
- Define custom routing for our app using **_AngularJS `ui-route`_**
- Change the layout of our views using **_HTML_**

## <a name="step-3">Step 3 - Speakers Layout</a>

This step corresponds with [this](http://startapplabs.github.io/starting-with-ionic/#/31) slide of the **_presentation_**, and this **_commit_** ([`296941e`](https://github.com/startapplabs/jsconfuy/commit/296941e4424e3f3a4b4c0bd8d3b1d9f24e807dc1)) represents the starting point of this step. Please checkout this commit so we are all on the same page: `git checkout 296941e`

In this step we are going to work on the layout of the **_speakers view_**. For this view, we need to:
- Show a **_list_** with all the speakers of the conference
- Show **_information_** about the speaker
- Provide a quick link to the speaker's **_talk_**
- Provide a link to the speaker's **_social profiles_**

Luckily, Ionic provides awesome **_components_** that will help us layout the content. Ionic [avatar list](http://ionicframework.com/docs/components/#item-avatars) or [thumbnails list](http://ionicframework.com/docs/components/#item-thumbnails) may be good options, but I think Ionic [cards](http://ionicframework.com/docs/components/#card-showcase) are the best choice for this view because we can fit all the information we have within one clean component.

The final point of this step is this **_commit_** ([`fb02948`](https://github.com/startapplabs/jsconfuy/commit/fb029480b5d67126ceabf632a608cbd3f2b33dcc)). Run `git checkout fb02948` and you will see the implementation of the instructions above.

Serve the app with `ionic serve` and look at the **_Ionic dev server_** running on `http://localhost:8100`. There, you will see our JSConfUY app with the **_speakers view_** DONE.

<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2020.4.2015%2023.49.50.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">

If you want to see more details of what we have done, take a look at [this comparison](https://github.com/startapplabs/jsconfuy/compare/296941e...fb02948) between the initial commit ([`296941e`](https://github.com/startapplabs/jsconfuy/commit/296941e4424e3f3a4b4c0bd8d3b1d9f24e807dc1)) and the final commit ([`fb02948`](https://github.com/startapplabs/jsconfuy/commit/fb029480b5d67126ceabf632a608cbd3f2b33dcc)) of this step.

### What we have learned so far:
- Explore **_Ionic components_**
- Compose different components to get the **_UI_** we want


## <a name="step-4">Step 4 - Venue Layout</a>

This step corresponds with [this](http://startapplabs.github.io/starting-with-ionic/#/32) slide of the **_presentation_**, and this **_commit_** ([`fb02948`](https://github.com/startapplabs/jsconfuy/commit/fb029480b5d67126ceabf632a608cbd3f2b33dcc)) represents the starting point of this step. Please checkout this commit so we are all on the same page: `git checkout fb02948`

In this step, we are going to work on the layout of the **_venue view_**. For this view, we need to:
- Show a **_map_** pointing the location of the venue
- Show **_information_** about the location of the venue

As we mentioned before, one of the reasons Ionic is awesome is because it's built using the web stack. In this case, that means that we don't have to reinvent the wheel for the map we need for this view. We can easily reuse any angular map directive and it will work like a charm.

[Angularjs-Google-Maps](https://ngmap.github.io/) will do the trick. We just need to add the dependency using **_bower:_**
- `bower install ngmap --save`

The final point of this step is this **_commit_** ([`7bfcf29`](https://github.com/startapplabs/jsconfuy/commit/7bfcf293a82be70489849e58306e80afb5aca697)). Run `git checkout -f 7bfcf29` and you will see the implementation of the instructions above.

Serve the app with `ionic serve` and look at the **_Ionic dev server_** running on `http://localhost:8100`. There, you will see our JSConfUY app with the **_venue view_** and its map DONE.

<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2021.4.2015%200.16.54.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">

If you want to see more details of what we have done, take a look at [this comparison](https://github.com/startapplabs/jsconfuy/compare/fb02948...7bfcf29) between the initial commit ([`fb02948`](https://github.com/startapplabs/jsconfuy/commit/fb029480b5d67126ceabf632a608cbd3f2b33dcc)) and the final commit ([`7bfcf29`](https://github.com/startapplabs/jsconfuy/commit/7bfcf293a82be70489849e58306e80afb5aca697)) of this step.

### What we have learned so far:
- Use the **_web stack_** to build mobile apps
- Reuse **_AngularJS directives_** in our app


## <a name="step-5">Step 5 - Agenda Layout</a>

This step corresponds with [this](http://startapplabs.github.io/starting-with-ionic/#/33) slide of the **_presentation_**, and this **_commit_** ([`7bfcf29`](https://github.com/startapplabs/jsconfuy/commit/7bfcf293a82be70489849e58306e80afb5aca697)) represents the starting point of this step. Please checkout this commit so we are all on the same page: `git checkout -f 7bfcf29`

In this step we are going to work on the layout of the **_agenda view_**. For this view we need to:
- Show the **_schedule for both days_** of the conference
- Show **_information_** about each event

Again, Ionic has awesome components; in this case, [**_tabs_**](http://ionicframework.com/docs/components/#striped-style-tabs) will work perfectly for displaying both days' schedule in a clean and organized manner.

The final point of this step is this **_commit_** ([`9d797d7`](https://github.com/startapplabs/jsconfuy/commit/9d797d7ebad844e8cb376e710c9ac05db3cecf32)). Run `git checkout 9d797d7` and you will see the implementation of the instructions above.

Serve the app with `ionic serve` and look at the **_Ionic dev server_** running on `http://localhost:8100`. There, you will see our JSConfUY app with the **_agenda view_** and a tabs component showing both days' schedule.

<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2021.4.2015%200.38.19.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2021.4.2015%200.38.22.png" style="width:45%; border:1px solid #ccc;">

If you want to see more details of what we have done, take a look at [this comparison](https://github.com/startapplabs/jsconfuy/compare/7bfcf29...9d797d7) between the initial commit ([`7bfcf29`](https://github.com/startapplabs/jsconfuy/commit/7bfcf293a82be70489849e58306e80afb5aca697)) and the final commit ([`9d797d7`](https://github.com/startapplabs/jsconfuy/commit/9d797d7ebad844e8cb376e710c9ac05db3cecf32)) of this step.

### What we have learned so far:
- Use **_advanced components_** such as tabs for our mobile app layout


## <a name="step-6">Step 6 - AngularJS data access</a>

This step corresponds with [this](http://startapplabs.github.io/starting-with-ionic/#/34) slide of the **_presentation_**, and this **_commit_** ([`9d797d7`](https://github.com/startapplabs/jsconfuy/commit/9d797d7ebad844e8cb376e710c9ac05db3cecf32)) represents the starting point of this step. Please checkout this commit so we are all on the same page: `git checkout 9d797d7`

In this step, we are going to remove all hard coded data and replace it with data we get from our data source (in this case, a simple JSON). We are going to:
- Define the structure and set all the data of the **_agenda.json_** data source
- Define the structure and set all the data of the **_speakers.json_** data source
- Grab **_images_** and resources from jsconf.uy website so we have rich content for our app
- Add `www/js/services.js` to get data from JSON data sources using AngularJS $http service
- Add `www/js/filters.js` to display raw html
- Add `www/js/directives.js` to use directive templates for agenda events
- Update `www/js/controllers.js` to use the AngularJS services we defined in `www/js/services.js`

In this step, we are using all the power of AngularJS **_controllers_**, **_directives_**, **_services_**, and **_filters_** to give real value to our app.

We are going to use [underscore.js](http://underscorejs.org/) to ease our work; we just need to add the dependency using **_bower:_**
- `bower install underscore --save`

Now we have an app that gets data from a data source and displays it dynamically to the users. In this case, we are using two JSON files as data sources, but you could easily use any other backend. The way many apps communicate with backend is through an **_API_**.

Having that in mind, in my opinion, you have three alternatives here:

1. You can use almighty **WordPress** as your backend
	- WordPress is very flexible and you can use it in many ways, as a blog, a cms, or ecommerce (using woocommerce, for example), etc. Also, there are tons of plugins that will help you add different functionalities.
	- You can easily access your WordPress content through its JSON API.
	- This is a fast and general solution, so depending on what you are planning to build, you may need something more powerful and custom.
2. Use **Parse** or **Firebase** (both “backend as a service”)
	- [Firebase](https://www.firebase.com/) is a great service that will help you build your app’s backend with ease. (Owned by Google)
	- [Parse](https://www.parse.com/) is also another option that offers some of the same features as Firebase. (Owned by Facebook)
	- Again, depending on what you are planning to build, you may need something more powerful.
3. If you are one of those who like to have strict control over the backend implementation, I suggest you to try **Strongloop**.
	- [Strongloop](https://strongloop.com/) is a perfect solution if you need full control and custom functionalities on your backend. Basically, it is a platform that enables you to easily (I would say VERY easily) build custom API’s for your backend needs. (This is the solution I use for my clients' production apps).

The final point of this step is this **_commit_** ([`14dd74a`](https://github.com/startapplabs/jsconfuy/commit/14dd74ae27b03eaedc518e53663472938d6f6861)). Run `git checkout 14dd74a` and you will see the implementation of the instructions above.

Serve the app with `ionic serve` and look at the **_Ionic dev server_** running on `http://localhost:8100`. There, you will see our JSConfUY app with real data for the event.

<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2021.4.2015%201.25.59.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2021.4.2015%201.26.07.png" style="width:45%; border:1px solid #ccc;">

If you want to see more details of what we have done, take a look at [this comparison](https://github.com/startapplabs/jsconfuy/compare/9d797d7...14dd74a) between the initial commit ([`9d797d7`](https://github.com/startapplabs/jsconfuy/commit/9d797d7ebad844e8cb376e710c9ac05db3cecf32)) and the final commit ([`14dd74a`](https://github.com/startapplabs/jsconfuy/commit/14dd74ae27b03eaedc518e53663472938d6f6861)) of this step.

### What we have learned so far:
- Reuse what we already know from AngularJS (controllers, services, directives, filters) in our Ionic app
- Get data from different data sources


## <a name="step-7">Step 7 - Cordova plugins + Ionic UX</a>

This step corresponds with [this](http://startapplabs.github.io/starting-with-ionic/#/35) slide of the **_presentation_**, and this **_commit_** ([`14dd74a`](https://github.com/startapplabs/jsconfuy/commit/14dd74ae27b03eaedc518e53663472938d6f6861)) represents the starting point of this step. Please checkout this commit so we are all on the same page: `git checkout 14dd74a`

In this step, we are going to integrate some mobile native functionality using Cordova plugins and some Ionic UX components that will improve our app. We are going to:
- Add Cordova [social sharing](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin) plugin to easily share talks with your friends
- Add Cordova [inAppBrowser](https://github.com/apache/cordova-plugin-inappbrowser) plugin to open social profiles of speakers
- Add [Ionic loader](http://ionicframework.com/docs/api/service/$ionicLoading/)
- Add [Ionic slide box](http://ionicframework.com/docs/api/directive/ionSlideBox/) for speaker images

These are part of the so-called "ionic superpowers". Using Ionic to develop hybrid apps gives you the advantage of accessing the native API’s of devices, including the geolocation, social sharing, inAppBrowser, device camera, touchID, push notification, and so on. When developing an Ionic app, you can have several device API’s integrated using ngCordova or other Cordova plugins. That’s the difference between mobile web and hybrid apps.

To install these plugins, you just need to run:
- `cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git`
- `cordova plugin add org.apache.cordova.inappbrowser`

The final point of this step is this **_commit_** ([`73cec82`](https://github.com/startapplabs/jsconfuy/commit/73cec828737e7f72d8f8d478a80de4aa9c206ed1)). Run `git checkout 73cec82` and you will see the implementation of the instructions above.

Serve the app with `ionic serve` and look at the **_Ionic dev server_** running on `http://localhost:8100`. There, you will see our JSConfUY app with the Ionic loader and slide box integrated but as you are accessing the app through the browser, you won't see either the social sharing plugin or the inAppBroswer plugin. You will need to install and test the app in your phone to see those in action.

<img src="https://dl.dropboxusercontent.com/u/30675090/jsconfuy/share.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30675090/jsconfuy/inAppBrowser.png" style="width:45%; border:1px solid #ccc;">

If you want to see more details of what we have done, take a look at [this comparison](https://github.com/startapplabs/jsconfuy/compare/14dd74a...73cec82) between the initial commit ([`14dd74a`](https://github.com/startapplabs/jsconfuy/commit/14dd74ae27b03eaedc518e53663472938d6f6861)) and the final commit ([`73cec82`](https://github.com/startapplabs/jsconfuy/commit/73cec828737e7f72d8f8d478a80de4aa9c206ed1)) of this step.

### What we have learned so far:
- Give superpowers to your app using Cordova plugins
- Give a more polished look to your app using Ionic UX components


## <a name="step-8">Step 8 - Sass</a>

This step corresponds with [this](http://startapplabs.github.io/starting-with-ionic/#/36) slide of the **_presentation_**, and this **_commit_** ([`73cec82`](https://github.com/startapplabs/jsconfuy/commit/73cec828737e7f72d8f8d478a80de4aa9c206ed1)) represents the starting point of this step. Please checkout this commit so we are all on the same page: `git checkout 73cec82`

In this step, we are going to take care of the app styles using **_CSS_** with the help of **_Sass_**. We are going to:
- Use Sass **_mixins_**
- Define and use Sass **_variables_** for fast customization

**_Mixins_** will ease our styles development by helping us with prefixing vendor properties, defining functions, etc., which will help us reuse our styles across the app.

This is the structure of the mixins we are going to use:
``` css
@mixin cssCalc($property, $expression) {
  #{$property}: calc(#{$expression});
}

@mixin flexbox() {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

@mixin flex-wrap($value) {
  flex-wrap: $value;
  -webkit-flex-wrap: $value;
}
```

Other awesome features are **_Sass variables_**. These will enable us to reuse variables across our style sheets. This is particularly useful, for example, when defining colors that will be spread across the app.

Here, you can see the variables we defined for our app, and how easily we can change those and immediately change the UI color scheme of the whole app.
``` css
$content-bg: #EAEAEA;
$content-color: #444444;

$top-bar-bg: #254164;
$top-bar-color: #FFFFFF;

$loading-color: #FFFFFF;

$main-menu-bg: #FFC900;
$main-menu-color: #FFFFFF;

$loading-color: #FFFFFF;

$speaker-actions-bg: #FFFFFF;

$workshop-bg-color: #00B454;
$talk-bg-color: #FF7C00;
$keynote-bg-color: #FF3900;
$global-bg-color: #DDDDDD;
$event-color: #FFFFFF;

$get-directions-btn-bg: #419e61;
$get-directions-btn-color: #FFFFFF;
```

<img src="https://dl.dropboxusercontent.com/u/30675090/jsconfuy/sass1.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30675090/jsconfuy/sass2.png" style="width:45%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30675090/jsconfuy/sass3.png" style="width:45%; border:1px solid #ccc;">

The final point of this step is this **_commit_** ([`6eaea0f`](https://github.com/startapplabs/jsconfuy/commit/6eaea0f704084d18f7c643f1aed5819136fd7cc3)). Run `git checkout 6eaea0f` and you will see the implementation of the instructions above.

Serve the app with `ionic serve` and look at the **_Ionic dev server_** running on `http://localhost:8100`. There, you will see our JSConfUY finished with a professional and polished look.

<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2021.4.2015%202.50.50.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2021.4.2015%202.50.47.png" style="width:45%; border:1px solid #ccc;">

<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2021.4.2015%202.50.36.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2021.4.2015%202.51.12.png" style="width:45%; border:1px solid #ccc;">

<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2021.4.2015%202.51.19.png" style="width:45%; margin-right:8%; border:1px solid #ccc;">
<img src="https://dl.dropboxusercontent.com/u/30873364/ionWorkshop/iOS%20Simulator%20Screen%20Shot%2021.4.2015%202.51.25.png" style="width:45%; border:1px solid #ccc;">

If you want to see more details of what we have done, take a look at [this comparison](https://github.com/startapplabs/jsconfuy/compare/73cec82...6eaea0f) between the initial commit ([`73cec82`](https://github.com/startapplabs/jsconfuy/commit/73cec828737e7f72d8f8d478a80de4aa9c206ed1)) and the final commit ([`6eaea0f`](https://github.com/startapplabs/jsconfuy/commit/6eaea0f704084d18f7c643f1aed5819136fd7cc3)) of this step.

### What we have learned so far:
- Give a **_professional_** and polished look to our app
- Use some of the cool features of **_Sass_** (mixins, variables, etc.)


## <a name="common-issues">Common Issues</a>
### <a name="errors-when-running-npm-install-on-windows">Errors when running npm install on Windows</a>

Please make sure you have `node` version `0.10.36`

You should fix your errors by reading these links:
* [NodeJS - Error installing with NPM](http://stackoverflow.com/questions/21365714/nodejs-error-installing-with-npm/21366601#21366601)
* [Ionic setup sass - error](http://forum.ionicframework.com/t/ionic-setup-sass-error/17843)
