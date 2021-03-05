'use strict'

{
    let year = 2020;
    let month = 4; //5月

    function getCalenderHead() {
        const dates = [];
        const d = new Date(year, month, 0).getDate();
        const n = new Date(year, month, 1).getDay();

        for (let i = 0; i < n; i++) {
            dates.unshift({
                date: d - i,
                isToday: false,
                isDisabled: true
            })
        }

        return dates;
    }

    function getCalenderBody() {
        const dates = []; //date:日付, day:曜日
        const lastDates = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i <= lastDates; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: false
            });
        }
        return dates;
    }

    function getCalenderTail() {
        const dates = [];
        const lastday = new Date(year, month + 1, 0).getDay();

        for (let i = 1; i < 7 - lastday; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true
            });
        }

        return dates;
    }

    function createCalender() {
        const dates = [
            ...getCalenderHead(),
            ...getCalenderBody(),
            ...getCalenderTail()
        ];

        const weeks = [];
        const weeksCount = dates.length / 7;

        for (let i = 0; i < weeksCount; i++) {
            weeks.push(dates.splice(0, 7));
        }

        weeks.forEach(week => {
            const tr = document.createElement('tr');
            week.forEach(date => {
                const td = document.createElement('td');
                td.textContent = date.date;
                if (date.is_Today) {
                    td.classList.add('today');
                }
                if (date.isDisabled) {
                    td.classList.add('disabled');
                }
                tr.appendChild(td);
            });
            document.querySelector('tbody').appendChild(tr);
        });

    }

    document.getElementById('prev').addEventListener('click', () => {
        month--;
        if (month < 0) {
            year--;
            month = 11;
        }
        createCalender();
    });

    document.getElementById('next').addEventListener('click', () => {
        month++;
        if (month > 11) {
            year++;
            month = 0;
        }
        createCalender();
    });
    createCalender();
}