import { Selector, t} from 'testcafe';

class FormPage{
    constructor(){
        this.firstName = Selector('#first-name')
        this.lastName = Selector('#last-name')
        this.jobTitle = Selector('#job-title')
        this.radioButton1 = Selector('#radio-button-1')
        this.radioButton2 = Selector('#radio-button-2')
        this.radioButton3 = Selector('#radio-button-3')
        this.checkbox1 = Selector('#checkbox-1')
        this.checkbox2 = Selector('#checkbox-2')
        this.selectMenu = Selector('#select-menu')
        this.option = Selector('option')
        this.dateSelect = Selector('#datepicker')
        this.formGroup = Selector('.form-group')
        this.buttonSubmit = Selector('a').withText('Submit')
        this.successText = Selector('h1')
        this.formyButton = Selector('#logo')
    }
}
export default new FormPage();

