const Element = require('../../pop/Element');
const ElementFinder = require('../mock/ElementFinder');
const HomePage = require('../../pop/HomePage');
const expect = require('chai').expect;

describe('HomePage Class', () => {
    // TODO: write tests
    const page = new HomePage();

    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });

    it('should have stored name', () => {
        expect(page.name).not.to.be.undefined;
        expect(page.name).to.equal('Home');
    });

    it('should have stored locator', () => {
        expect(page.locator).not.to.be.undefined;
        expect(page.locator.css).to.equal('body');
    });

    it('should have stored URL', () => {
        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal('http://epam.com');
    });

    describe('Methods', () => {
        it('should have get element by name method', () => {
            const header = new Element('Header', { css: 'header' });
            
            page.addChildren(header);
            expect(page.get()).not.to.be.undefined;
            const getElem = page.get('Header');

            expect(getElem).to.be.instanceOf(ElementFinder);
            expect(getElem.locator().css).to.equal('header');
        });

        it('should throw error if cannot find element', () => {
            const titleElement = new Element('Title', { css: 'h1' });
            
            page.addChildren(titleElement);

            expect(() => page.get('Footer')).to.throw();
        });

        it('should have load by URL method', () => {
            expect(page.load).not.to.be.undefined;
            expect(page.load()).to.equal('http://epam.com');
        });
    });

    describe('Page Elements', () => {
        it('should have Header element', () => {
            const header = new Element('Header', { css: 'header' });
            
            //page.addChildren(header);
            const getElem = page.get(header.name);

            expect(getElem).to.be.instanceOf(ElementFinder);
            expect(getElem.locator().css).to.equal('header');
        });

        it('should have Logo element in Header', () => {
            const header = new Element('Header', { css: 'header' });
            const logoElem = new Element('Logo', { css: '.header__logo' });
            
            header.addChildren(logoElem);
            const getElem = header.get(logoElem.name);

            expect(getElem).to.be.instanceOf(ElementFinder);
            expect(getElem.locator().css).to.equal('.header__logo');
        });

        it('should have Menu Items element', () => {
            const menuElem = new Element('Menu Items', { css: '.top-navigation__item-link' });
            
            page.addChildren(menuElem);
            const getElem = page.get(menuElem.name);

            expect(getElem).to.be.instanceOf(ElementFinder);
            expect(getElem.locator().css).to.equal('.top-navigation__item-link');
        });

        it('should have Contact Us element', () => {
            const contactElem = new Element('Contact Us', { css: '.top-navigation__sub-link' });
            
            page.addChildren(contactElem);
            const getElem = page.get(contactElem.name);

            expect(getElem).to.be.instanceOf(ElementFinder);
            expect(getElem.locator().css).to.equal('.top-navigation__sub-link');
        });

        it('should have Body element', () => {
            const bodyElem = new Element('Body', { css: 'body' });
            
            page.addChildren(bodyElem);
            const getElem = page.get(bodyElem.name);

            expect(getElem).to.be.instanceOf(ElementFinder);
            expect(getElem.locator().css).to.equal('body');
        });

        it('should have Slider Section element', () => {
            const sliderElem = new Element('Slider Section', { css: 'slider-section' });
            
            page.addChildren(sliderElem);
            const getElem = page.get(sliderElem.name);

            expect(getElem).to.be.instanceOf(ElementFinder);
            expect(getElem.locator().css).to.equal('slider-section');
        });

        it('should have Title Slider element', () => {
            const titleSliderElem = new Element('Title Slider', { css: 'title-slider' });
            
            page.addChildren(titleSliderElem);
            const getElem = page.get(titleSliderElem.name);

            expect(getElem).to.be.instanceOf(ElementFinder);
            expect(getElem.locator().css).to.equal('title-slider');
        });

        it('should have Button element', () => {
            const buttonElem = new Element('Button', { css: 'button' });
            
            page.addChildren(buttonElem);
            const getElem = page.get(buttonElem.name);

            expect(getElem).to.be.instanceOf(ElementFinder);
            expect(getElem.locator().css).to.equal('button');
        });

        it('should have Footer element', () => {
            const footerElem = new Element('Footer', { css: 'footer' });
            
            page.addChildren(footerElem);
            const getElem = page.get(footerElem.name);

            expect(getElem).to.be.instanceOf(ElementFinder);
            expect(getElem.locator().css).to.equal('footer');
        });

        it('should have Our Brands element in Footer', () => {
            const footer = new Element('Footer', { css: 'footer' });
            const brandsFooterElem = new Element('Our Brands', { css: '.footer__brands' });
            
            //page.addChildren(footer);
            footer.addChildren(brandsFooterElem);
            const getElem = footer.get(brandsFooterElem.name);

            expect(getElem).to.be.instanceOf(ElementFinder);
            expect(getElem.locator().css).to.equal('.footer__brands');
        });
    });
});