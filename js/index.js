const URL_BARSDATA = `https://pb-api.herokuapp.com/bars`;

document.addEventListener('DOMContentLoaded', () => {
	var barsData   = null;

	fetchBarsData(URL_BARSDATA, init);

	function init(data) {
		barsData = data;

		if (barsData) {
			generateProgressBarsSelect();
			generateButtons();

		} else {
			document.querySelector('#contents-bars').innerText = 'Unable to load data';
		}
	}

	function fetchBarsData(url, callback) {
	    let xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        let dataJson = JSON.parse(this.responseText);
		        callback(dataJson);
		    }
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

	function generateProgressBarsSelect() {
		let barsHtml   = '', 
			selectHtml = '',
			barsJson   = barsData.bars,
			limit 	   = barsData.limit;

		for (let i = 0; i < barsJson.length; i++) {
			let width 	    = Math.round((barsJson[i] / limit) * 100);
			    barsHtml   += 
				`<div class="progress animated fadeIn">
					<div id="progress${i + 1}" class="progress-bar" role="progressbar" style="width:${width}%;" aria-valuenow="${width}" aria-valuemin="0" aria-valuemax="100">
						<span id="progress${i + 1}-value">${width}%</span>
					</div>
				</div>`;

				selectHtml += 
				`<option value="progress${i + 1}">#progress${i + 1}</option>`;
		}

		document.querySelector('#contents-bars').innerHTML 			= barsHtml;
		document.querySelector('#select-progressbar').innerHTML 	= selectHtml;
		document.querySelector('#select-progressbar').selectedIndex = '0';
	}
	
	function generateButtons() {
		let buttonsHtml = '',
			buttonsJson = barsData.buttons.sort(sortAsc);

		// Render buttons
		for (let i = 0; i < buttonsJson.length; i++) {
			let value = buttonsJson[i] < 0 ? buttonsJson[i] : `+${buttonsJson[i]}`;
			buttonsHtml += `<button id="button${i + 1}" type="button" class="btn btn-default btn-sm" value="${buttonsJson[i]}">${value}</button>`;
		}
		document.querySelector('#contents-btn').innerHTML = buttonsHtml;

		// Add click listeners
		for (let i = 0; i < buttonsJson.length; i++) {
			document.querySelector(`#button${i + 1}`).addEventListener('click', setClickEvent);
		}
	}

	function setClickEvent(e) {
		let selectedId 			= document.querySelector('#select-progressbar').value;
		let selectedProgressBar = document.querySelector(`#${selectedId}`);
		let barValue			= parseInt(selectedProgressBar.style.width.replace('%', ''));
		let value 				= parseInt(e.currentTarget.value);

		barValue += value;

		if (barValue > 100) {
			selectedProgressBar.classList.add('bg-danger');
		}
		else {
			selectedProgressBar.classList.remove('bg-danger');
		}

		selectedProgressBar.style.width = barValue < 0 ? '0%' : `${barValue}%`;
		selectedProgressBar.value 		= barValue;
		document.querySelector(`#${selectedId}-value`).innerText = selectedProgressBar.style.width
	}

	function sortAsc(a, b) {
		return a - b;
	}
});
