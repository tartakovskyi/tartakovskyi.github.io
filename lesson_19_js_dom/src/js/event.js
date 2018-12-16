document.onkeydown = keyboardEvent;

const heading = document.querySelector('h1');
const oldDiv = document.querySelector('div');

function createTextArea () {
	const textArea = document.createElement('textarea');
	textArea.setAttribute('name', 'text');
	textArea.setAttribute('cols', '70');
	textArea.setAttribute('rows', '15');
	const note = document.createElement('p');
	note.classList.add('note');
	note.innerText = '*Для того, чтобы сохранить введенный текст, нажмите Ctrl+S. Для того, чтобы выйти без сохранения, нажмите Esc';
	heading.innerText = 'Введите и сохраните текст';
	oldDiv.style.display = 'none';
	document.body.appendChild(textArea);
	document.body.appendChild(note);
	
}

function saveText () {
	const savedText = document.querySelector('textarea');
	const note = document.querySelector('p');
	const newDiv = document.createElement('div');
	newDiv.classList.add('old-div');
	newDiv.innerText = savedText.value;
	heading.innerText = 'Поздравляем! Ваш текст успешно сохранен!'
	document.body.appendChild(newDiv);
	document.body.removeChild(savedText);
	document.body.removeChild(note);
}

function returnToBegin () {
	heading.innerText = 'Хотите попробовать еще раз?'
	oldDiv.style.display = 'block';
	const savedText = document.querySelector('textarea');
	const note = document.querySelector('p');
	document.body.removeChild(savedText);
	document.body.removeChild(note);
}

function keyboardEvent (e) {

	if (e.keyCode === 69 && e.ctrlKey) {
		event.preventDefault();
		createTextArea();
	}

	else if (e.keyCode === 83 && e.ctrlKey) {
		e.preventDefault();
		saveText();
	}

	else if (e.keyCode === 27) {
		e.preventDefault();
		returnToBegin();
	}
}