window.onload = function (e) {

    let indicatedDate = document.querySelectorAll('.tally');
    let term = document.querySelectorAll('.name');
    let now = Date.now();
    let msUTC = Date.parse('2019-05-30T13:51:50.417Z');
    let time = parseInt((msUTC - now) / 1000);
    let classClose = document.querySelector('.action-top');
    let timer = setInterval(function () {
        time = time - 1;

        function splitTime() {
            let parts = {};
            parts.d = parseInt(time / 86400);
            let d_s = time % 86400;
            parts.h = parseInt(d_s / 3600);
            let h_s = d_s % 3600;
            parts.m = parseInt(h_s / 60);
            parts.s = h_s % 60;

            return parts;
        }

        if (time < 0) {
            clearTimeout(timer);
            /*TODO скократить класс */
            classClose.classList.add("action-topcloce");
        }
        else {
            render();
            for (let i = 0; i < indicatedDate.length; i++) {
                let parts = splitTime();



                indicatedDate[0].innerHTML = `${parts.d}`;
                indicatedDate[1].innerHTML = `${parts.h}`;
                indicatedDate[2].innerHTML = `${parts.m}`;
                indicatedDate[3].innerHTML = `${parts.s}`;
            }
        }


        function getEnding(num, var1, var2, var3) {
            let i1 = num % 100;
            let i0 = num % 10;
            if (i1 >= 5 && i1 < 20) {
                return var1;
            }
            else if (i0 >= 2 && i0 <= 4) {
                return var2;
            }
            else if (i0 == 1) {
                return var3;
            }
            else {
                return var1;
            }
        }

        function render() {
            let parts = splitTime();
            let dw = getEnding(parts.d, 'дней', 'дня', 'день');
            let hw = getEnding(parts.h, 'часов', 'часа', 'час');
            let mw = getEnding(parts.m, 'минут', 'минуты', 'минута');
            let sw = getEnding(parts.s, 'секунд', 'секунды', 'секунда');

            for (let i = 0; i < term.length; i++) {

                term[0].innerHTML = `${dw}`;
                term[1].innerHTML = `${hw}`;
                term[2].innerHTML = `${mw}`;
                term[3].innerHTML = `${sw}`;

            }
        }
    }, 1000);
};
