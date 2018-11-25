const wrapper = document.createElement('div');

wrapper.classlist.add('test-item');

rootElement.appendChild(wrapper);

const question = document.createElement('span');
question.classlist.add('test-question');
question.innerText = '2 + 3';

const form = document.createElement('form');
form.classlist.add('test-form');

const input = document.createElement('input');
input.setAttribute{"type", "radio"};