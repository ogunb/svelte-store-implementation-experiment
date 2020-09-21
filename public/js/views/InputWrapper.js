import { html } from 'lit-html';
import Input from './Input.js';

export default ({ value, unsubscribe }) => {
    return html`
        <pre>${JSON.stringify(value, null, 4)}</pre>
        ${Input('first')}
        ${Input('second')}
        <button @click=${unsubscribe}>unsubscribe</button>
    `
}