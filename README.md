# task-1

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Thu Sep 17 2020 15:20:35 GMT+0530 (IST) using Sails v1.2.3.

## Steps to run the application

1. clone the repository in your system at a desired place
2. Once cloned change directory (cd) to file name.
3. run npm install to install the dependencies (external dependency is sails-mongo which is a mongodb adapter).
4. You need to have mongodb locally installed and running as a service. You can check the same by giving command mongod in the terminal.
5. If you have password for your mongodb instance then go to projectFolder > config > datastores.js and check the url section to update username and password.
6. Once done run sails lift and open the browser and type localhost:1337
7. A register form will open enter the details and submit.
8. First user will always be a ADMIN and the rest User will be USER.
9 I have attached the screenshot of the same.

# Screenshot

form screenshot 


<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

