# Test Cafe Framework
![image](https://user-images.githubusercontent.com/67669609/128807399-77f9c804-c5e4-4f73-ba23-e7a45d0bb759.png)

---
## Installing **TestCafe**
Ensure that Node.js and npm are installed on your computer and run the following command: 
```bash
npm install -g testcafe
```
--------
## Installing Visual Studio Code:
Visit: https://code.visualstudio.com/Download and dowload the correct version for your OS.

### Installing extension:
**TestCafe Snippets** can be installed from       Visual Studio extensions. Just search it there and installed it.

----
## Running tests from Visual Studio Terminal:
¿To run the tests from terminal just put **npm run** and the script name created in the **package.json** like:
```bash
npm run <script_name>
```
This will run all the test cases under the script.
    
----
![image](https://user-images.githubusercontent.com/67669609/128807943-443f7c9c-c808-4e2c-b715-b8379cc08d99.png)

## Docker image install:
Make sure docker is correctly installed in your **OS** then just do:
```bash
docker pull testcafe/testcafe
```
This will download the testcafe latest image from docker hub.

### Running tests in dockerized form:
- To run the tests in its dockerized form use this input in terminal: 
```bash
docker run -v ${PWD}/tests:/tests -it testcafe/testcafe firefox tests/*.js
```
This will run all the test cases (the ones that are in **tests** folder).

-------

## Other ways to run tests:
Running the tests locally in different **browsers** (they have to be installed):
```bash
testcafe chrome firstTest.js
testcafe edge firstTest.js
testcafe safari firstTest.js
testcafe firefox firstTest.js
```
Running the tests in **headless** mode:
Simply add **headless** after the browser name like in this example:
```bash
testcafe chrome:headless firstTest.js
```
Running **multiple tests** at the same time:
To run the tests in different windows we have to specify before the browser with `-c` parameter and the number of windows we want to, for example:
```bash
testcafe -c 3 chrome firstTest.js
```
We can also convine with headless like this:
```bash
testcafe -c 3 firefox:headless firstTest.js
```
Running **multiple browsers** at the same time:
You can run in multiple browsers at the same time by adding then together in the same line like this example:
- testcafe chrome,firefox firstTest.js

-----
### Reporter Install:
To install the report simple type this command:
```bash
npm install testcafe-reporter-html
```

-----
### Known Issues:
When running from local using `testcafe chrome testname.js` for example, sometimes an error related to scripts run can pop up, we can skip this error by using this command in the **terminal**:
```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```
---