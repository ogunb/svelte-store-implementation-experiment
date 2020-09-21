import { html } from 'lit-html';
import { inputStore } from '../inputStore.js';


export default function Input(property) {
    let initialValue = {};
    let unsubscribe = inputStore.subscribe(value => initialValue = value);
    unsubscribe();

    const setString = (e) => inputStore.update(value => {
        value[property] = e.target.value
        return value;
    });

    return html`
        <input .value=${initialValue[property]} @input=${setString}>
    `
}
