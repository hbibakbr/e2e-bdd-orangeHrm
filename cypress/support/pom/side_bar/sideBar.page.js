require('cypress-xpath');

class SideBar {
    static clickAdminMenu () {
        return cy.xpath('//a[@class="oxd-main-menu-item"]/span[text()="Admin"]').click();
    }
}
export default SideBar;