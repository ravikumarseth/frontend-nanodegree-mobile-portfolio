# Website Performance Optimization Portfolio Project
The challenge of this project was to Optimize a web page for **PageSpeed Insights Score** and another page for **Frames per Second**.

## Getting Started

### Installations
For this project we will be using **GULP** as our build tools. [Click here](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) to get started with GULP.
**NOTE**: If you have not installed NodeJS or NPM you will need to install it first before installing Gulp. You can download and install NodeJS and NPM by going to [Nodes official site](https://nodejs.org/en/download/) and downloading the latest version of NodeJS.
In addition to GULP following other pakages are also needed. Follow links for install instructions and to know more about the packages.
  1. [Uglify](https://www.npmjs.com/package/gulp-uglify)
  2. [HtmlMin](https://www.npmjs.com/package/gulp-htmlmin)
  3. [AutoPrefixer](https://www.npmjs.com/package/gulp-autoprefixer)
  4. [ImageMin](https://www.npmjs.com/package/gulp-imagemin)
  5. [PNGQuant](https://www.npmjs.com/package/imagemin-pngquant)
  6. [UglifyCSS](https://www.npmjs.com/package/gulp-uglifycss)
 
### Usage
Navigate to the project directory using command-line and run the command **gulp**. This should generate a **dist** directory contaning the production ready code. The **src** directory contains source files which are meant for developers and the **dist** directory contains minified *HTML*, *CSS* and *JavaScript* codes which is not meant to used by developers.

In order to check [PageSpeed Insights score][1] the page must be hosted on a server, the files must be hosted on a server. To do so one can use [ngrok](https://ngrok.com/), [GitHub Pages](https://pages.github.com/) or personal server. After hosting the page open [PageSpeedInsights score page][1] and enter the url of the index.html and notice the PageSpeed Insights score for mobile and desktop. You can also [click Here](https://developers.google.com/speed/pagespeed/insights/?url=ravikumarseth-e0dae.firebaseapp.com%2Fudacity%2Ffrontend-nanodegree-mobile-portfolio-master%2F) for seeing the PageSpeed Insight score.

In order to check Optimizations in pizza.html, navigate to *views* directory in *src* directory and open it in Google Chrome. Press ***ctrl + shift + I*** or ***Select the Chrome menu at the top-right of your browser window, then select Tools > Developer Tools*** for opening the Chrome Developer Tools then click on the console tab. For getting info of FPS notice the console message with time of average scripting time for last 10 frames or use Timeline Tab of Chrome Developer Tools to generate timeline of page while scrolling it. [Click here](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool) for learning how to use Timeline tool. For checking Computational Efficiency of Pizza Size Slider, resize the pizza using slider and notice the console message with time taken to resize pizzas.

## Optimizations Steps Taken
### Part 1: Optimize PageSpeed Insights score for index.html
  1. To fix render-blocking CSS, all the styles were minified and inlined in index.html file.
  2. Google font *Open Sans* was loaded asynchronously using [**WebFontLoader**](https://github.com/typekit/webfontloader).
  3. Render-blocking javascript was loaded asynchronously using the *async* tag.
  4. Profile-pic image was compressed using ImageMin package of GULP.
### Part 2: Optimizations in pizza.html
#### Frame-rate Optimization
  1. ***backface-visibility: hidden*** and ***will-change: transform*** properties were added to **styles.css** for **mover** class.
  2. In ***DOMContentLoaded*** function, Window Size is now used to calculate the number of pizzas to be drawn on screen instead of a fixed 200.
  3. In ***updatePositions*** function, **scrollTop** value is now calculated once outside *for* loop and is used in the loop instead of calculating it everytime in the loop and 5 possible values of *phase* are stored in an array and used instead of calcuating them again and again.
  4. In ***DOMContentLoaded*** function, 8 *basisLeft* values are now stored in the an array and used instead of calculating them agian and again.
  
#### Computational Efficiency of Pizza Size Slider
  1. ***determineDx*** function is removed and parts of it is added  in ***changePizzaSizes*** function.
  2. The switch inside ***sizeSwitcher*** function is added to ***changePizzaSizes*** function and instead or returning values the switch now assigns the value of *newWidth* in percentage.
  3. A variable with name *randomPizzaContainer* is defined which replaces the calls made to select class items with class-name *randomPizzaContainer*.
  
[1]: (https://developers.google.com/speed/pagespeed/insights/)