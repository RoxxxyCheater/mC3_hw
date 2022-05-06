    // Должна быть возможность пролистывать фото. Например, добавить 2 кнопки вперед и назад (предыдущее, следующее и так далее);
    // При клике «назад» на первом фото должно открываться последнее. При клике «вперед» на последнем фото должно открываться первое;
    // Блок, в котором располагаются изображения, не должен меняться под размер картинок;
    // Добавить анимацию при переключении фото;
    // На входе — массив изображений. Их может быть любое количество;
    // Картинки можно положить в папку asset. Либо использовать стороннее API, сделав GET запрос для получения изображений;
    // Соблюдать семантическую верстку;
    // Использовать селекторы по тегу для задания стилей нельзя. Использовать классы. В случае, когда есть необходимость — селектор по id;
    // Дизайн произвольный. Минимум — застилизовать кнопки (добавить hover) и обеспечить для них accessibility: переключение по tab, outline, cursor.

    const next = document.getElementById('prev');
    const prev = document.getElementById('next');
    const pict = document.getElementById('dispalyed_pict');
    let num = 1;


    function nextp(){
        if (num === 5){
            num = 1;
        }else{ num += 1 }
        pict.innerHTML = `<img src="${num}.png" alt="IMAGE!" id="pict">`
    }
    function prevp(){
        if (num === 1){
            num = 5;
        }else{num -= 1}
        pict.innerHTML = `<img src="${num}.png" alt="IMAGE!" id="pict">`
    }
    next.addEventListener('click', nextp);
    prev.addEventListener('click', prevp);