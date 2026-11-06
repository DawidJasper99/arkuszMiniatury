let licznikCookie = localStorage.getItem("licznik");
function licznik(){
    licznik = Number(licznikCookie) + 1;
    localStorage.setItem("licznik", licznik);
    document.querySelector(".paragrafLicznika").innerHTML = `liczba wejść na stronę: ${licznik}`;
};
