/**
 * Ref - https://dev.to/akhil_001/adding-event-listeners-to-the-future-dom-elements-using-event-bubbling-3cp1
 */

//  event listeners of future elements
const rootElement = document.querySelector('body');
rootElement.addEventListener('click', function (event) {
    let targetElement = event.target
    let selector = 'li';
    while (targetElement != null) {
        if (targetElement.match(selector)) {
            //logic for handling the click event of li tag
            return;
        }
        targetElement = targetElement.parentElement;
    }
}, true);


/*
- Generalised function to handle the event listeners of future elements
*/

const addCustomEventListener = function (selector, event, handler) {
    let rootElement = document.querySelector('body');
    //since the root element is set to be body for our current dealings
    rootElement.addEventListener(event, function (evt) {
            var targetElement = evt.target;
            while (targetElement != null) {
                if (targetElement.matches(selector)) {
                    handler(evt);
                    return;
                }
                targetElement = targetElement.parentElement;
            }
        },
        true
    );
}

//adding the Event Listeners to all the li tasks
addCustomEventListener('li#task', 'click', taskClickHandler);