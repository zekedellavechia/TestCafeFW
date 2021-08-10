import { Selector } from 'testcafe';

fixture `Visit Test site`
    .page `https://formy-project.herokuapp.com/form`;

test('Fill form', async t => {
    await t
        .typeText(Selector('#first-name'), 'Zeke')
        .typeText(Selector('#last-name'), 'Della')



        console.log("Form filled")
    });