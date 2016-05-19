# JSMicro - Is Boolean

### **`isBoolean(object)`**

Check does the given Javascript Object (array, object, string, etc) is a boolean.

### **`isNotBoolean(object)`**

Check does the given Javascript Boolean (array, object, string, etc) is not a boolean.

## Browser Usage

```bash
bower install --save jsmicro-is-boolean
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-boolean/index.js">
<script type="text/javascript">
    var obj = true;
    var nbr = 200;

    // Available in the window object.
    isBoolean(obj);      // true
    isBoolean(nbr);      // false
    isNotBoolean(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save jsmicro-is-boolean
```

```js
const obj = require('jsmicro-is-boolean');

// Available in the global object.
isBoolean(false); // true
isBoolean(23322333); // false
isNotBoolean(23234); // true

// Also available in the export object.
obj.isBoolean(true); // true
obj.isBoolean(23322333); // false
obj.isNotBoolean(23333); // true
```

## Changelogs

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
