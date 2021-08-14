import FormPage from '../pages/formPage';

fixture `Fill forms and submit`
    .page `https://formy-project.herokuapp.com/form`;

test('Fill form one', async t => {
    await t
        .typeText(FormPage.firstName, 'Zeke')
        .typeText(FormPage.lastName, 'Dellavechia')
        .typeText(FormPage.jobTitle, 'QA Automation')
        .click(FormPage.radioButton2)
        .click(FormPage.checkbox1)
        .click(FormPage.selectMenu)
        .click(FormPage.option.withText('10+'))
        .typeText(FormPage.dateSelect, '10/10/1988')
        .click(FormPage.formGroup)
        .click(FormPage.buttonSubmit)
});

test('Verify form can be submitted', async t => {
    await t
        .click(FormPage.buttonSubmit)
        .expect(FormPage.successText.textContent).eql('Thanks for submitting your form');
});    

test('Verify user can go to "Formy" main site', async t => {
    await t
    .click(FormPage.formyButton)
    .expect(FormPage.successText.textContent).eql('Welcome to Formy');
});