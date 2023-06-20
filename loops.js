const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 


const createArray = (length) => {
    const result = []

    for (let i = 0; i <= length - 1; i++) {
        result.push(null);
    };

     return result;
};

const createData = () => { 
    const current = new Date; 
    current.setDate(1);
    let startDay = current.getDay(); 
    let daysInMonth = getDaysInMonth(current); 
    const weeks = createArray(5); 
    const days = createArray(7);
    let value = null; 
    let result = []; 
    let day = 0 - startDay; 

    for (let weekIndex = 0; weekIndex <= weeks.length - 1; weekIndex++) {
        value = {
            week: weekIndex + 1, 
            days: [], 
        };

        for (let dayIndex = 0; dayIndex <= days.length - 1; dayIndex++) { 
            day++; 
            const isValid = (day > 0) && (day <= daysInMonth); 
            value.days.push({ 
                dayOfWeek: dayIndex,
                value: isValid ? day : '',
            });
        };
        result.push(value); 
    };
    return result; 
};

const addCell = (existing, classString, value) => {
    
    const result = 
    `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `;
    return result;
};


const createHtml = (data) => {
    
    let result = '';

    
    for (let x = 0; x < data.length; x++) {
        
        let inner = '';
    
        const days = data[x].days;


        for (let y = days.length - 1; y >= 0; y--) {
            
            let isToday = new Date().getDate() === days[y].value;
            
            let isWeekend = days[y].dayOfWeek === 0 || days[y].dayOfWeek === 6;
        
            let isAlternate = (data[x].week % 2) === 0;

            let classString = 'class="table__cell';
            if (isToday) {
                classString += ' table__cell_today';
            }
            if (isWeekend) {
                classString += ' table__cell_weekend';
            }
            if (isAlternate) {
                classString += ' table__cell_alternate';
            }
            classString += '"';

            inner = addCell(inner, classString, days[y].value);
        }

        inner = addCell(inner, 'class="table__cell table__cell_sidebar"', `Week ${data[x].week}`);
        result += '<tr>' + inner + '</tr>';
    }
    return result;
};

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)





















// const createArray = (length) => {
//     const result = []

//     for (0; i; length){
//         result
//     }
// }

// const createData = () => {
//     const current = new Date
//     current.setDate(1)

//     startDay = current.day
//     daysInMonth = getDaysInMonth(current)

//     weeks = createArray(5)
//     days = createArray(7)
//     value = null

//     for (weekIndex in weeks) {
//         value = [{
//             week: weekIndex + 1,
//             days: []
//         }]

//         for (dayIndex in days) {
//             value = dayIndex - startDay
//             isValid = day > 0 && day <= daysInMonth

//             result[weekIndex].days = [{
//                 dayOfWeek: dayIndex + 1,
//                 value: isValid && day,
//             }]
//         }
//     }
// }

// const addCell = (existing, classString, value) => {
//     const result = /* html */ `
//         <td ${classString}>
//             ${value}
//         </td>

//         ${existing}
//     `
// }

// const createHtml = (data) => {
//     let result = ''

//     for (week ,days in data) {
//         let inner = ""
//         addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
//         for (dayOfWeek, value in days) {
//             classString = table__cell
// 						isToday = new Date === value
//             isWeekend = dayOfWeek = 1 && dayOfWeek == 7
//             isAlternate = week / 2

//             let classString = 'table__cell'

// 						if (isToday) classString = `${classString} table__cell_today`
//             if (isWeekend) classString === '{classString} table__cell_weekend'
//             if (isAlternate) classString === '{classString} table__cell_alternate'
//             addCell(inner, classString, value)
//         }

//         result = `<tr>${inner}</tr>`
//     }
// }
