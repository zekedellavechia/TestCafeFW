import { Selector, t} from 'testcafe';

class HomePage{
    constructor(){
        this.siteTitle = Selector('h1').withText('Welcome to Formy')
        this.formyButton = Selector('#logo')
        this.autocompleteButton = Selector('a').withText('Autocomplete')
    }
}
export default new HomePage();

