import { Selector } from 'testcafe';

const firstName = Selector('#first-name')
const lastName = Selector('#last-name')
const jobTitle = Selector('#job-title')
const radioButton1 = Selector('#radio-button-1')
const radioButton2 = Selector('#radio-button-2')
const radioButton3 = Selector('#radio-button-3')
const checkbox1 = Selector('#checkbox-1')
const checkbox2 = Selector('#checkbox-2')
const selectMenu = Selector('#select-menu')
const option = Selector('option')
const dateSelect = Selector('#datepicker')
const formGroup = Selector('.form-group')
const buttonSubmit = Selector('a').withText('Submit')
const successText = Selector('h1')

fixture `Fill forms and submit`
    .page `https://formy-project.herokuapp.com/form`;

test('Fill form one', async t => {
    await t
        .typeText(firstName, 'Zeke')
        .typeText(lastName, 'Dellavechia')
        .typeText(jobTitle, 'QA Automation')
        .click(radioButton2)
        .click(checkbox1)
        .click(selectMenu)
        .click(option.withText('10+'))
        .typeText(dateSelect, '10/10/1988')
        .click(formGroup)
        .click(buttonSubmit)
});



test('Verify form can be submitted', async t => {
    await t
        .click(buttonSubmit)
        .expect(successText.textContent).eql('Thanks for submitting your form');
});    