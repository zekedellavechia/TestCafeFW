import { Selector, t} from 'testcafe';

class HomePage{
    constructor(){
        this.siteTitle = Selector('h1').withText('Welcome to Formy')
        this.formyButton = Selector('#logo')
    }
}
export default new HomePage();

