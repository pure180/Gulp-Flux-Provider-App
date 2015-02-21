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
run
```
gulp serve
```

##### What comes Next
* Building templates with jade
* creating css with Less
* JsHint
* Bootstrap 3+
* jQuery
* gulp-watch (build after save)
* livereload with automatic cache clearing
* more
