let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 100 },
    { t: "{_}", ms: 100 },
    { t: "{ }", ms: 100 },
    { t: "{_}", ms: 100 },
    { t: "{M_}", ms: 120 },
    { t: "{MN_}", ms: 120 },
    { t: "{MNH_}", ms: 120 },
    { t: "{MNHW_}", ms: 120 },
    { t: "{MNHWT_}", ms: 100 },
    { t: "{MNHWT }", ms: 100 },
    { t: "{MNHWT_}", ms: 150 },
    { t: "{MNHWT }", ms: 150 },
    { t: "{MNHWT_}", ms: 150 },
    { t: "{MNHWT}", ms: 250 },
    { t: "{MNHWT}", ms: 250 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();