const subBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real = document.getElementById("temp_real");

const datahide = document.querySelector(".data_hide");


const getInfo = async (event) => {
    event.preventDefault();

    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = `Please Write The Name Before Search`;
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0a87e5ddbbd0032f4d802270274f6837`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;

            console.log(arrData);
            const tempStat = arrData[0].weather[0].main;

            if (tempStat == "Clear") {
                temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color: #eccc68"></i>`;
            }
            else if (tempStat == "Clouds") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud" style="color: #dfe4ea"></i>`;
            }
            else if (tempStat == "Rain") {
                temp_status.innerHTML = `<i class="fa-solid fa-rain" style="color: #a4b0be"></i>`;
            }
            else {
                temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color: #eccc68"></i>`;
            }
            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = `Please Enter City Name Properly`;
            datahide.classList.add('data_hide');
        }

    }
}

subBtn.addEventListener('click', getInfo);