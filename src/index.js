import { ElementPicker } from "pick-dom-element";
import { finder } from '@medv/finder'
window._QResult = {};
const picker = new ElementPicker();

picker.start({
    onClick: (el) => {
        picker.stop();
        window._QResult["css"] = finder(el);
        console.log(`Picked: ${el}`);
    },
});