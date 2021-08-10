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


### Script running issue:
- When running from local using `testcafe chrome testname.js` for example, sometimes an error related to scripts run can pop up, we can skip this error by using:`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted` in the terminal.