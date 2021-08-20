import HomePage from '../pages/homePage';

fixture `Fill forms and submit`
    .page `https://formy-project.herokuapp.com/`;

test('Verify main site contains correct title and button', async t => {
    await t
        .expect(HomePage.formyButton.exists).ok()
        .expect(HomePage.formyButton.exists).ok();
});