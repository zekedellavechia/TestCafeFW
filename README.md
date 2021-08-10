# Test Cafe Framework

### Installing **TestCafe**
- Ensure that Node.js and npm are installed on your computer and run the following command: 

    `npm install -g testcafe`

--------
### Installing Visual Studio Code:
- Visit: https://code.visualstudio.com/Download and dowload the correct version for your OS.

### Installing extension:
- **TestCafe Snippets** can be installed from       Visual Studio extensions. Just search it there and installed it.

----
### Running tests from Visual Studio Terminal:
- To run the tests from terminal just put **npm run** and the script name created in the **package.json** like:

    `npm run <script_name>`

    This will run all the test cases under the script.
    
----
### Docker image install:
- Make sure docker is correctly installed in your **OS** then just do:

    `docker pull testcafe/testcafe` 
    
    This will download the testcafe latest image from docker hub.

### Running tests in dockerized form:
- To run the tests in its dockerized form use this input in terminal: 

    `docker run -v ${PWD}/tests:/tests -it testcafe/testcafe firefox tests/session2/*.js`

    This will run all the test cases (the ones that are in tests/session2).

### Several ways to run tests:
Running the tests locally in different **browsers** (they have to be installed):
- testcafe chrome firstTest.js
- testcafe edge firstTest.js
- testcafe safari firstTest.js
- testcafe firefox firstTest.js

Running the tests in **headless** mode:
Simply add **headless** after the browser name like in this example:
- testcafe chrome:headless firstTest.js

Running **multiple tests** at the same time:
To run the tests in different windows we have to specify before the browser with `-c` parameter and the number of windows we want to, for example:
- testcafe -c 3 chrome firstTest.js

We can also convine with headless like this:
- testcafe -c 3 firefox:headless firstTest.js

Running **multiple browsers** at the same time:
You can run in multiple browsers at the same time by adding then together in the same line like this example:
- testcafe chrome,firefox firstTest.js

### Script running issue:
- When running from local using `testcafe chrome testname.js` for example, sometimes an error related to scripts run can pop up, we can skip this error by using:`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted` in the terminal.