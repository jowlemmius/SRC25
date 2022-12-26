const date = new Date()

let selectDate = new Date()


const renderCalendar = function (){
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

    const firstDayIndex = new Date(date.getMonth(), 1).getDay() + 1

    const monthDays = document.querySelector(".days")

    let  nextDays = 7 - ((lastDate + firstDayIndex) % 7)

    if(nextDays < 7 && firstDayIndex % 7 + nextDays <= 7){
        nextDays += 7
    }

    const months = [
        "JANUARY",
        "FEBUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER"
    ]


    document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear()
    document.querySelector(".datestring").innerHTML = selectDate.toDateString();

    let days = ""

    for(let i = firstDayIndex % 7; i > 0; i--){
        days += `<div class="prev-date">${prevLastDay - i + 1}</div>`
    }

    for(let i = 1; i <= lastDate; i++){
        if(i === selectDate.getDate() && date.getMonth() === selectDate.getMonth() && date.getFullYear() === selectDate.getFullYear()){
            days += `<div class="select">${i}</div>` 
        } else {
            days += `<div>${i}</div>`
        }
    }

    

    for(let i = 1; i <= nextDays; i++){
        days += `<div class="next-date">${i}</div>`
    }
    monthDays.innerHTML = days

    document.querySelectorAll('.days div').forEach(item => {item.addEventListener('click', () => {
        const elements = document.getElementsByClassName('select')
        for(i = 0; i < elements.length; i++){
            elements[0].classList.remove('select')
        }
        item.classList.add('select')
        selectDate = selectedToString(item)
    })
    })
}

renderCalendar()

const selectedToString = function (item){
    let monthsDictionary = {
        "JANUARY ": 0,
        "FEBUARY ": 1,
        "MARCH ": 2,
        "APRIL ": 3,
        "MAY ": 4,
        "JUNE ": 5,
        "JULY ": 6,
        "AUGUST ": 7,
        "SEPTEMBER ": 8,
        "OCTOBER ": 9,
        "NOVEMBER ": 10,
        "DECEMBER ": 11
    }
    let date = parseInt(item.innerHTML)
    let month = document.querySelector(".date h1").innerHTML
    let year = month
    month = monthsDictionary[month.replace(/[0-9]/g, '')]
    year = parseInt(year.match(/\d/g).join(''))
    selectedDate = new Date(year, month, date)
    document.querySelector(".datestring").innerHTML = selectedDate.toDateString();
    return selectedDate
}
document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
})

const pages = document.querySelectorAll(".page");
    const translateAmount = 100; 
    let translate = 0;

slide = (direction) => {

    direction === "next" ? translate -= translateAmount : translate += translateAmount;

    pages.forEach(pages => (pages.style.transform = `translateX(${translate}%)`));
}

function eventdate(){
    
}
