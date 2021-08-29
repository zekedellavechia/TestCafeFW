import HomePage from '../pages/homePage';

fixture `Click on Autocomplete component`
    .page `https://formy-project.herokuapp.com/`;

test('Enter main site and click on Automcomplete component', async t => {
    await t
        .click(HomePage.autocompleteButton)
});