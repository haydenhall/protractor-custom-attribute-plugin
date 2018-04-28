# protractor-custom-attribute-plugin
A plugin for Protractor (https://www.protractortest.org) to allow locating elements with a custom attribute.

## Setup

#### protractor.conf.js

Modify your protractor.conf.js file(s) to add the plugin as below, where **attributeName** is the name of your desired custom attribute.

```javascript
plugins: [{
    {
        package: "protractor-custom-attribute-plugin",
        config: {
            attributeName: "my-custom-attribute"
    }
}]
```

## Usage 

#### my-custom-attribute-view.html

In your html files, decorate your elements with your custom attribute, in our case **my-custom-attribute**.

```html
<button my-custom-attribute="primary-button" type="button" class="btn btn-primary">Primary</button>
```

**my-custom-attribute-view-test.ts**

In your test files you should be able to import the plugin and use protractor as usual, with the addition of the **by.customAttribute** method.

```javascript
import { by, element, ElementFinder, Locator } from "protractor-custom-attribute-plugin/protractor";

let locator: Locator = by.customAttribute("primary-button");
let elementFinder: ElementFinder = element(locator);

// User the ElementFinder as you would any other
```