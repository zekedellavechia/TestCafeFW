# Test Cafe Framework

### Installing **TestCafe**
- Ensure that Node.js and npm are installed on your computer and run the following command: 

    `npm install -g testcafe`

--------
### Installing Visual Studio Code:
- Visit: https://code.visualstudio.com/Download and dowload the correct version for your OS.

### Installing extension:
- **TestCafe Snippets** can be installed from Visual Studio extensions. Just search it there and installed it.

----
### Docker image install:
- Just do:
`docker pull testcafe/testcafe` in the terminal. This will download the testcafe latest image from docker hub.

### Running tests in dockerized form:
- To run the tests in its dockerized form use this input in terminal: 
`docker run -v ${PWD}/tests:/tests -it testcafe/testcafe firefox tests/session2/*.js`
- This will run all the test cases (the ones that are in tests/session2).