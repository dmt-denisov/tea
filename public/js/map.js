/* eslint-disable no-tabs */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

async function createMark() {
  const response = await fetch('/db');
  const data = await response.json();

  ymaps.ready(init);

  const center = [-2.3037149169538327, 49.5267612326811];

  function init() {
    const map = new ymaps.Map('map', {
      center,
      zoom: 3,
    });
    data.teas.forEach((el) => {
      const placemark = new ymaps.Placemark([Number(el.coordinateX), Number(el.coordinateY)], {
        balloonContent: `
          <article class="card js-tea">
            <h4 class="card__title">
              <a class="cardLink" href=/tea/${el.id} >
              ${el.name}
              </a>
            </h4>
            <img class="card_picture markPic" src=${el.picture} alt=${el.name} />
            <p class="wrapGaming">${el.title} </p>
          </article>   
		`,
      }, {
        iconLayout: 'default#image',
        iconImageHref: '/img/tea.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0],
      });
      map.geoObjects.add(placemark);
    });
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }
}

createMark();
