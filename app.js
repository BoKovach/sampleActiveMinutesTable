window.addEventListener("load", solve)

function solve() {

    let typeElement = document.getElementById('type');
    let intensityElement = document.getElementById('intensity');
    let caloriesElement = document.getElementById('calories');
    let durationElement = document.getElementById('duration');
    let dateElement = document.getElementById('date');
    let btnElement = document.getElementById('add-activity');
    let previewActivityEl = document.getElementById('preview-activity');
    let activitiesTableEl = document.getElementById('activities-table');

    btnElement.addEventListener('click', (event) => {
        event.preventDefault();

        if (
            typeElement.value == "" ||
            intensityElement.value == "" ||
            caloriesElement.value == "" ||
            durationElement.value == "" ||
            dateElement.val == ""
        ) {
            return
        }

        let prevActivLi = document.createElement('li');
        let articleEl = document.createElement('article');
        let btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'btn-container');

        let activity = document.createElement('p');
        activity.textContent = `Activity: ${typeElement.value}`;
        articleEl.appendChild(activity);

        let intensity = document.createElement('p');
        intensity.textContent = `Intensity: ${intensityElement.value}`;
        articleEl.appendChild(intensity)

        let duration = document.createElement('p');
        duration.textContent = `Duration: ${durationElement.value} min.`;
        articleEl.appendChild(duration)

        let date = document.createElement('p');
        date.textContent = `Date: ${dateElement.value}`;
        articleEl.appendChild(date);

        let calories = document.createElement('p');
        calories.textContent = `Calories: ${caloriesElement.value}`;
        articleEl.appendChild(calories);

        let btnEdit = document.createElement('button');
        btnEdit.setAttribute('class', 'edit-btn');
        btnEdit.textContent = 'Edit';
        btnContainer.appendChild(btnEdit);

        let btnNext = document.createElement('button');
        btnNext.setAttribute('class', 'next-btn');
        btnNext.textContent = 'Next';
        btnContainer.appendChild(btnNext);

        prevActivLi.appendChild(articleEl);
        prevActivLi.appendChild(btnContainer);

        previewActivityEl.appendChild(prevActivLi);

        let editActivity = typeElement.value;
        let editIntensity = intensityElement.value;
        let editDuration = durationElement.value;
        let editDate = dateElement.value;
        let editCalories = caloriesElement.value;

        typeElement.value = "";
        intensityElement.value = "";
        durationElement.value = "";
        dateElement.value = "";
        caloriesElement.value = "";

        btnElement.disabled = true;

        btnEdit.addEventListener('click', () => {
            typeElement.value = editActivity;
            intensityElement.value = editIntensity;
            durationElement.value = editDuration;
            dateElement.value = editDate;
            caloriesElement.value = editCalories;

            prevActivLi.remove();
            btnElement.disabled = false;
        })

        btnNext.addEventListener('click', () => {
            let trElement = document.createElement('tr');

            let tdTypeElement = document.createElement('td');
            tdTypeElement.setAttribute('class', 'type-cell');
            tdTypeElement.textContent = editActivity;

            let tdDurationElement = document.createElement('td');
            tdDurationElement.setAttribute('class', 'duration-cell');
            tdDurationElement.textContent = editDuration;

            let tdCaloriesElement = document.createElement('td');
            tdCaloriesElement.setAttribute('class', 'calories-cell');
            tdCaloriesElement.textContent = editCalories;

            let tdDateElement = document.createElement('td');
            tdDateElement.setAttribute('class', 'date-cell');
            tdDateElement.textContent = editDate;

            let tdIntensityElement = document.createElement('td');
            tdIntensityElement.setAttribute('class', 'intensity-cell');
            tdIntensityElement.textContent = editIntensity;

            let tdBtnElement = document.createElement('td');
            tdBtnElement.setAttribute('class', 'btn-cell');

            let btnDeleteElement = document.createElement('button');
            btnDeleteElement.setAttribute('class', 'delete-btn');
            btnDeleteElement.textContent = 'Delete';

            tdBtnElement.appendChild(btnDeleteElement);

            trElement.appendChild(tdTypeElement);
            trElement.appendChild(tdDurationElement);
            trElement.appendChild(tdCaloriesElement);
            trElement.appendChild(tdDateElement);
            trElement.appendChild(tdIntensityElement);
            trElement.appendChild(tdBtnElement);

            activitiesTableEl.appendChild(trElement);

            prevActivLi.remove();
            btnElement.disabled = false;

            btnDeleteElement.addEventListener('click', () => {
                trElement.remove();
            })

        })
    })
}
