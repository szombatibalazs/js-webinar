/**
 * Create Layout class, which represents a page of
 * the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("body")
 * 2. It has a URL (.url), e.g. "/home" or "https://epam.com"
 * 3. It has a name (.name), e.g. "Document Page"
 * 4. It cannot have a parent element
 * 5. It can have children Elements (.children)
 * 6. It has a method to retrieve the root protractor element
 *    by the locator (.get([name])) or a child element
 *    by name in any depth
 * 7. It has a method to load the page, i.e. Navigates to
 *    the URL of it (.load())
 */

//átnézni, hogy van-e hiba
const Element = require("./Element");
const Browser = require("../test/mock/Browser");

class Layout extends Element{
    constructor(name, url, locator) {
        super(name, locator);
        this.url = url;
    }

    setParent() {
        throw new Error("Can't set parent!");
    }

    load() {
        const browser = new Browser;
        return browser.get(this.url);
    }
}
module.exports = Layout;