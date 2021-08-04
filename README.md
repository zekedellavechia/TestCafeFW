# TestCafeFW
TestCafe Framework


First steps:
Install node.js
nodejs.org > dowloads

Open CMD:
node -v (will show that is installed)


Install Visual Studio Code:
https://code.visualstudio.com/Download

Install extension:
TestCafe Snippets

Look for TestCafe Docs > Guides > install testcafe
https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe

Do
npm install -testcafe

For docker:

Install docker image: docker pull testcafe/testcafe

Then run it:
docker run -v ${PWD}/tests:/tests -it testcafe/testcafe firefox tests/session2/*.js   
PWD refers to origin folder, tests: the folder to copy in /tests -it here we define the browser the folder and the js to execute