import { Selector } from 'testcafe';




fixture `Visit Site Fixture`
    .page `https://demoqa.com/text-box`;

test
    .page `https://demoqa.com/`
    ('Access Demo QA Site', async t => {
        console.log("Site open")
    });