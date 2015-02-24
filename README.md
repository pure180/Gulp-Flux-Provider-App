# Typo3 Flux Provider
## Creates a Typo3 Flux Provider Extension with Gulp

### Setup
#### Requirements

* nodejs
* npm
* gulp

#### Install
* Download NodeJs from [http://nodejs.org/download/] and install it.
* Install gulp global, run > `npm install gulp -g`

#### Build instructions.
Getting startet in Commandline/Terminal

##### 1. Clone git repository.
Clone the repositiory to the "typo3conf" folder of your typo3 environment
```
git clone git@github.com:pure180/DefaultTemplate.git
```
##### 2. Install applikation dependencies
Run:
```
npm install
```
This will install all needed packages  

##### 3. Configure the Extension
Open the file `config.json` "./gulp-tasks/config.json" and adjust it to your needs.
```json
{
  "extkey" : "ExtName",
  "briefTitle" : "Brief title",
  "description" : "Brief description",
  "language" : "en",
  "type" : "template",
  "name": "fluidtypo3/flux",
  "homepage": "",

  "category" : "misc",
	"shy" : "0",
	"version" : "0.0.1",
	"dependencies" : "cms,extbase,fluid,flux,fluidpages,fluidcontent,vhs",
	"conflicts" : "",
	"priority" : "",
	"loadOrder" : "",
	"module" : "",
	"state" : "experimental",
	"uploadfolder" : "0",
	"createDirs" : "",
	"modify_tables" : "",
	"clearcacheonload" : "1",
	"lockType" : "",
	"author" : "Your Name",
	"author_email" : "your@email.io",
	"author_company" : "",
	"CGLcompliance" : "",
	"CGLcompliance_note" : "",
	"constraints" : {
	   "depends" : {
			"typo3" : "4.5-6.2.99",
			"cms" : "",
			"extbase" : "",
			"fluid" : "",
			"flux" : "",
			"fluidpages" : "",
			"fluidcontent" : "",
			"vhs" : ""
		},
		"conflicts" : {
		},
		"suggests" : {
		}
	},
	"_md5_values_when_last_written" : "",
	"suggests" : {
  }
}
```
##### 4. Build your extension
**run**
```
gulp serve
```
#### Compile Fluid Templates with jade
To build your fluid templates, just edit the files located in: `./src/Provider/Resources/Private`.

Note the normal fluid syntax does not match the jade syntax. To parse working fluid syntax you will need to proceed as follows.
If you want to write something typical fluid/flux like this:

```html
<f:uri.action action="show" />
```
or
```html
<f:uri.action action="show">
  Your Linktext
</f:uri.action>
```
so that .jade can compile your fluid syntax properly you need to write your code as following:
```jade
f:uri::action(action="show")/
```
or
```jade
f:uri::action(action="show")
  | Your Linktext
```
The two double points (::), are the word separations of the respective view-helper. With them we tell jade to compile our fluid syntax correctly.
#####Some examples:
**Normal Fluid Syntax:**
```html
<f:if condition="{myvar}">
  Condition if met
</f:if>
```
**Jade Syntax:**
```jade
f:if(condition="{myvar}")
  | Condition if met
```
**Normal Fluid Syntax:**
```html
<f:format.html>
  foo bar. Some text.
</f:format.html>
```
**Jade Syntax:**
```jade
f:format::html
  | foo bar. Some text.
```

If you need to know how to write jade and/or fluid syntax, take look here:
* [jade Language Reference](http://jade-lang.com/reference/)
* [Typo3 Fluid ViewHelper reference](https://fluidtypo3.org/viewhelpers.html)

##### What comes Next
* ~~Building templates with jade~~
* creating css with Less
* JsHint
* Bootstrap 3+
* jQuery
* gulp-watch (build after save)
* livereload with automatic cache clearing
* more
