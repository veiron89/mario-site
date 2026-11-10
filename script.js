document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("calc-btn");
    
    if (btn) {
        btn.addEventListener("click", function() {
            // Получаем значения
            const length = document.getElementById("length").value;
            const width = document.getElementById("width").value;
            const height = document.getElementById("height").value;
            const resultBox = document.getElementById("result");

            // Переводим в числа
            const l = parseFloat(length);
            const w = parseFloat(width);
            const h = parseFloat(height);

            // Проверка
            if (isNaN(l) || isNaN(w) || isNaN(h)) {
                resultBox.innerHTML = '<span style="color: red; font-size: 1.2rem;">Ошибка: заполните все поля!</span>';
                return;
            }

            // Расчет
            const perimeter = 2 * (l + w);
            const wallArea = perimeter * h;
            const pipeLength = wallArea * 1.1;

            // Вывод
            resultBox.innerHTML = `Примерный метраж: <span style="font-size: 1.5rem; color: #e11d48;">${pipeLength.toFixed(1)} м</span>`;
        });
    } else {
        console.log("Кнопка не найдена!");
    }
});