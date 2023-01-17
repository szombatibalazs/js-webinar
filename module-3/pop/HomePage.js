/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */
const Layout = require('./Layout');
const Element = require('./Element');
const Elements = require('./Elements');

module.exports = class HomePage extends Layout {
    constructor() {
        super('Home', 'http://epam.com', { css: 'body' });

        this.header = new Element('Header', { css: 'header' });
        this.header.addChildren(new Element('Logo', { css:'.header__logo' }));
        this.menuItems = new Elements('Menu Items', { css:'.top-navigation__item-link' });
        this.contactUs = new Elements('Contact Us', { css: '.top-navigation__sub-link' });
        this.titleElement = new Element('Title', { css: 'h1' });
        
        this.body = new Element('Body', { css: 'body' });
        this.body.addChildren(new Element('Slider Section', { css: 'slider-section' }));
        this.body.addChildren(new Element('Title Slider', { css: 'title-slider' }));
        this.body.addChildren(new Element('Button', { css: 'button'}));

        this.footer = new Element('Footer', { css: 'footer' });
        this.footer.addChildren(new Element('Our Brands', { css: '.footer__brands' }));
    }
}