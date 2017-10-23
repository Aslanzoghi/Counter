# Counter
Small Task for FOHM
Already Deployed at following URL


|Dependencies| Version|
|------------|:-------|
|npm         | 5.5.1  |
|Angular CLI | 1.3.1  |
|Asp.net Core| 2.0    |
|Sql Server  | 2016   |

## Server
1. Restore the Database
2. Change Connection string in appsettings.josn
3. Run the application


Note: There is no need to build Client.
Client already built and deployed as static files to the server

## Client
1. Install node package manager
2. open Command Prompt
3. Browse to client\counter folder
2. Run `npm install`
3. Run `npm install -g @angular\cli`
4. Run `ng serve`

## Addressing requirements
* MVC project exposing only web api?s. (Done)
* A HTML page that links to a SCSS file (Done - style.scss)
* A grunt watcher and compiler for SCSS (grunt-sass, grunt-contrib-watch etc. found in package.json).(Not Applicable angular cli handles this)
 ### bonus
 * Use typescript and grunt to watch/compile (Not Applicable Angular 2 is typescript by default and uses webpack to transpile it)
 *  Add two elements to the following, a text input labeled name and a submit button. When clicking the new button have the final number and the name stored via MVC into a database from entity framework (Done)
 *    Create a second single page app that lists the results stored in the point above from WebAPI securely(Done, but it is not secure needs more time to be secured)