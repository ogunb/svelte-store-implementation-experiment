import { render } from 'lit-html';
import { inputStore } from './inputStore.js';
import InputWrapper from './views/InputWrapper.js';

const renderApp = (props) => {
    render(InputWrapper(props), document.querySelector('#app'))
}

let initialValue;
const unsubscribe = inputStore.subscribe(val => {
    initialValue = val;
    renderApp({ value: val, unsubscribe });
});

renderApp({ value: initialValue, unsubscribe });