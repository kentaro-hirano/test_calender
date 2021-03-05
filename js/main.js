'user strict'

{
    const year = 2020;
    const month = 4; // 5月

    function getCalenderHead() {
        const dates = [];
        const d = new Date(year, month + 1, 0).getDate();
        const n = new Date(year, month, 1).getDay();

        for (let i = 0; i < n; i++) {
            dates.unshift({
                date: d - i,
                isToday: false,
                isDisabled: true
            });
        }
        return dates;
    }

    function getCalenderBody() {
        const dates = []; //date: 日付, day: 曜日
        const lastDate = new Date(year, month + 1, 0).getDate();


        for (let i = 1; i <= lastDate; i++) {
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
        const lastDay = new Date(year, month + 1, 0).getDay();
        for (let i = 1; i < 7 - lastDay; i++) {
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
        console.log(weeks);
    }

    createCalender();
    // getCalenderBody();
    // getCalenderHead();

}