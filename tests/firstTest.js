import { Selector } from 'testcafe';

fixture `Visit Test site`
    .page `https://formy-project.herokuapp.com/form`;

test('Fill form 1', async t => {
    await t
        .typeText(Selector('#first-name'), 'Zeke')
        .typeText(Selector('#last-name'), 'Dellavechia')
        .typeText(Selector('#job-title'), 'QA Automation')
        .click(Selector('#radio-button-2'))
        .click(Selector('#checkbox-1'))
        .click(Selector('#select-menu'))
        .click(Selector('option').withText('10+'))
        .typeText(Selector('#datepicker'), '10/10/1988')
        .click(Selector('.form-group'))
        .click(Selector('a').withText('Submit'))
    });

    test('Fill form 2', async t => {
        await t
            .typeText(Selector('#first-name'), 'Licha')
            .typeText(Selector('#last-name'), 'Navarrete')
            .typeText(Selector('#job-title'), 'QA Engineer')
            .click(Selector('#radio-button-3'))
            .click(Selector('#checkbox-1'))
            .click(Selector('#select-menu'))
            .click(Selector('option').withText('5-9'))
            .typeText(Selector('#datepicker'), '11/11/1994')
            .click(Selector('.form-group'))
            .click(Selector('a').withText('Submit'))
        });