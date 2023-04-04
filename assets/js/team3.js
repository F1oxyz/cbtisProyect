
// -------------------------------------------------
//                   objetivo 9                     
// -------------------------------------------------
const info1btn = document.querySelector("#infobtn");
const abrir1ods = document.querySelector("#abrirBtn");
const cerrar1ods = document.querySelector("#cerrarBtn");
// -------------------------------------------------
//                   objetivo 10                   
// -------------------------------------------------
const info2btn = document.querySelector("#info2btn");
const abrir2btn = document.querySelector("#abrir2Btn");
const cerrar2btn = document.querySelector("#cerrar2Btn");
// -------------------------------------------------
//                   objetivo 11                     
// -------------------------------------------------
const info3btn = document.querySelector("#info3btn");
const abrir3ods = document.querySelector("#abrir3Btn");
const cerrar3ods = document.querySelector("#cerrar3Btn");
// -------------------------------------------------
//                   objetivo 12                    
// -------------------------------------------------
const info4btn = document.querySelector("#info4btn");
const abrir4ods = document.querySelector("#abrir4Btn");
const cerrar4ods = document.querySelector("#cerrar4Btn");
// -------------------------------------------------
//                   objetivo 13                     
// -------------------------------------------------
const info5btn = document.querySelector("#info5btn");
const abrir5ods = document.querySelector("#abrir5Btn");
const cerrar5ods = document.querySelector("#cerrar5Btn");





// -------------------------------------------------
//                   objetivos                   
// -------------------------------------------------


info1btn.classList.add("invisible");
abrir1ods.addEventListener("click",() =>{
    info1btn.classList.remove("invisible");
});
cerrar1ods.addEventListener("click",() =>{
    info1btn.classList.add("invisible");
});

info2btn.classList.add("invi2btn");
abrir2btn.addEventListener("click",() =>{
    info2btn.classList.remove("invi2btn");
});
cerrar2btn.addEventListener("click",() =>{
    info2btn.classList.add("invi2btn");
});

info3btn.classList.add("clasebtn");
abrir3ods.addEventListener("click",() =>{
    info3btn.classList.remove("clasebtn");
});
cerrar3ods.addEventListener("click",() =>{
    info3btn.classList.add("clasebtn");
});


info4btn.classList.add("otraclase");
abrir4ods.addEventListener("click",() =>{
    info4btn.classList.remove("otraclase");
});
cerrar4ods.addEventListener("click",() =>{
    info4btn.classList.add("otraclase");
});


info5btn.classList.add("claseinvi");
abrir5ods.addEventListener("click",() =>{
    info5btn.classList.remove("claseinvi");
});
cerrar5ods.addEventListener("click",() =>{
    info5btn.classList.add("claseinvi");
});