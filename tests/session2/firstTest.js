fixture `FirstTest`
    .page `https://demoqa.com/text-box`;

test
    .page `https://demoqa.com/`
    ('My test', async t => {
        console.log("Demo")
    });