const pictures = [
  './img/galeria/1_sudety_pogorze_izerskie_dolnny_slask__wietorowka_milecice_dom_1_agroturystyka.jpg',
  './img/galeria/2_sudety_pogorze_izerskie_dolnny_slask__wietorowka_milecice_dom_1_agroturystyka.jpg',
  './img/galeria/3_sudety_pogorze_izerskie_dolnny_slask__wietorowka_milecice_dom_1_agroturystyka.jpg',
  './img/galeria/4_sudety_pogorze_izerskie_dolnny_slask__wietorowka_milecice_dom_1_agroturystyka.jpg',
  './img/galeria/5_sudety_pogorze_izerskie_dolnny_slask__wietorowka_milecice_dom_1_agroturystyka.jpg',
  './img/galeria/6_sudety_pogorze_izerskie_dolnny_slask_klasztor_lubomierz_wietorowka_milecice_dom_2.jpg',
  './img/galeria/7_sudety_pogorze_izerskie_dolnny_slask_wietorowka_dom1_agroturystyka.jpg',
  './img/galeria/8_sudety_pogorze_izerskie_dolnny_slask_wietorowka_wnetrze_sien.jpg',
  './img/galeria/9_sudety_pogorze_izerskie_dolnny_slask_wietorowka_wnetrze_2.jpg',
  './img/galeria/10_sudety_pogorze_izerskie_dolnny_slask_wietorowka_wnetrze.jpg',
  './img/galeria/11_sudety_pogorze_izerskie_dolnny_slask_wietorowka_wnetrze.jpg',
  './img/galeria/12_sudety_pogorze_izerskie_dolnny_slask_wietorowka_stodola.jpg',
  './img/galeria/13_sudety_pogorze_izerskie_dolnny_slask_wietorowka_stodola.jpg',
  './img/galeria/14_sudety_pogorze_izerskie_dolnny_slask_wietorowka_stodola.jpg',
  './img/galeria/15_sudety_pogorze_izerskie_dolnny_slask_wietorowka_stodola.jpg',
  './img/galeria/16_sudety_pogorze_izerskie_dolnny_slask_wietorowka_zagajnikjpg',
  './img/galeria/17_sudety_pogorze_izerskie_dolnny_slask_3_wietorowka_milecice.jpg',
  './img/galeria/18_sudety_pogorze_izerskie_dolnny_slask_2_wietorowka_milecice_dolnyslask.jpg',
  './img/galeria/19_sudety_pogorze_izerskie_dolnny_slask_4_wietorowka_milecice.jpg',
  './img/galeria/20_sudety_pogorze_izerskie_dolnny_slask_1_wietorowka_milecice.jpg',
  './img/galeria/21_sudety_pogorze_izerskie_dolnny_slask_niebieski_szlak_lubomierz_milecice.jpg',
  './img/galeria/22_sudety_pogorze_izerskie_dolnny_slask_wietorowka_milecice.jpg',
  './img/galeria/24_sudety_pogorze_izerskie_dolnny_slask_6_wietorowka_milecice_na_szlaku.jpg',
  './img/galeria/25_sudety_pogorze_izerskie_dolnny_slask_6_wietorowka_milecice_na_szlaku.jpg',
  './img/galeria/26_sudety_pogorze_izerskie_milecice_wietorowka_zima.jpg',
  './img/galeria/27_sudety_pogorze_izerskie_dolnny_slask_zima.jpg',
  './img/galeria/28_sudety_pogorze_izerskie_dolnny_slask_dom_przyslupowy.jpg',
  './img/galeria/29_sudety_pogorze_izerskie_dolnny_slask_klasztor_lubomierz_2.jpg',
  './img/galeria/30_sudety_pogorze_izerskie_dolnny_slask_klasztor_lubomierz_1.jpg',
  './img/galeria/31_sudety_gory_izerskie_jakuszyce.jpg',
  './img/galeria/31_sudety_pogorze_izerskie_dolnny_slask_klasztor_lubomierz_3.jpg',
  './img/galeria/32_sudety_pogorze_izerskie_dolnny_slask_lubomierz_2.jpg',
  './img/galeria/33_sudety_pogorze_izerskie_dolnny_slask_pasiecznik.jpg',
  './img/galeria/34_sudety_pogorze_izerskie_dolnny_slask_wlen_1.jpg',
  './img/galeria/35_sudety_pogorze_izerskie_dolnny_slask_wlen_2.jpg',
  './img/galeria/36_sudety_pogorze_izerskie_dolnny_slask_siedlecin.jpg',
  './img/galeria/37_sudety_pogorze_izerskie_dolnny_slask_maciejowiec.jpg',
  './img/galeria/38_sudety_dolnny_slask_dolnny_slask_swierzawa_kosciol.jpg',
  './img/galeria/38_sudety_dolnny_slask_dolnny_slask_swierzawa_kosciol.jpg',
  './img/galeria/40_sudety_dolnny_slask_dolnny_slask_bukowiec.jpg',
  './img/galeria/41_sudety_dolnny_slask_jeleniegora.jpg',
  './img/galeria/42_sudety_dolnny_slask_dolnny_slask_rudawy1.jpg',
  './img/galeria/43_sudety_dolnny_slask_rudawy_2.jpg',
  './img/galeria/44_sudety_kotlina klodzka_dolnny_slask_zamek_sarny_2.jpg',
  './img/galeria/45_sudety_kotlina_klodzka_dolnny_slask_zamek_sarny_1.jpg',
  './img/galeria/46_sudety_kotlina_klodzka_dolnny_slask_zamek_sarny_1.jpg',
];
const nextBtn=document.querySelector('.next-icon');
const prevBtn=document.querySelector('.prev-icon');
const closeBtn=document.querySelector('.close-icon');
const row = document.querySelector('#gallery');



const makeImg = (x) => {
  div = document.createElement('div');
  row.appendChild(div);
  document.querySelectorAll('div');
  div.classList.add('col-md-3', 'col-sm-4', 'gallery', 'gal');
  div.setAttribute('style', `background-image: url(${x});`);

}
pictures.forEach((picture) => makeImg(picture));

const gal = document.querySelectorAll('.gal');
const pop = document.querySelector('.popup-image');

const clickEventGallery = (e) => {
  gal.forEach((galvar) => removeEventListener('click', clickEventGallery));
  console.log(pop.classList);
  pop.classList.add('popup-image-active');
  pop.classList.remove('popup-image-inactive');  const img = document.querySelector('img');

  let bgattr = e.target.getAttribute('style');
  if (bgattr !== null){
  let newurl = bgattr.slice(22, -2);
  img.setAttribute('src', newurl);


  
  
  // nawigacja
  let currentTarget = e.target;
  
  nextBtnFn =() => {
    let checkNext = currentTarget.nextSibling



    if(checkNext == null){
      return
      }
    currentTarget=currentTarget.nextSibling
    bgattrAlt = currentTarget.getAttribute('style');
    let nextUrl = bgattrAlt.slice(22, -2);
    img.setAttribute('src', nextUrl);


    }

  prevBtnFn =() => {
    let checkPrev = currentTarget.previousSibling
    if(checkPrev == null){
      return
      }
    currentTarget=currentTarget.previousSibling
    bgattrAlt = currentTarget.getAttribute('style');
    let prevUrl = bgattrAlt.slice(22, -2);
    img.setAttribute('src', prevUrl);

    }


  nextBtn.addEventListener("click", nextBtnFn)
  prevBtn.addEventListener("click", prevBtnFn)
  
  // koniec nawigacji

}

closeBtnFn = () =>{

  location.reload()
}
closeBtn.addEventListener("click", closeBtnFn)

};

const width = window.innerWidth
console.log(width)
if(width > 576){
gal.forEach((galvar) => addEventListener('click', clickEventGallery));
}



