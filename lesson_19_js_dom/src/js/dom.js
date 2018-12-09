const playList = [{
    author: "led zeppelin",
    song: "stairway to heaven",
    duration: "2:03"
},
{
    author: "queen",
    song: "bohemian rhapsody",
    duration: "2:30"
},
{
    author: "lynyrd skynyrd",
    song: "free bird",
    duration: "1:56"
},
{
    author: "deep purple",
    song: "smoke on the water",
    duration: "3:03"
},
{
    author: "jimi hendrix",
    song: "all along the watchtower",
    duration: "2:53"
},
{
    author: "AC/DC",
    song: "back in black",
    duration: "2:43"
},
{
    author: "queen",
    song: "we will rock you",
    duration: "2:13"            
},
{
    author: "metallica",
    song: "enter sandman",
    duration: "3:03"            
}
];


const main = document.createElement('main');

const baContainer = document.createElement('div');
baContainer.classList.add('ba-container');
main.appendChild(baContainer);

const baPlaylist = document.createElement('div');
baPlaylist.classList.add('ba-playlist');
baContainer.appendChild(baPlaylist);

const baPlaylistTitle = document.createElement('h3');
baPlaylistTitle.classList.add('ba-playlist__title');
baPlaylistTitle.innerText = 'PlayList';
baPlaylist.appendChild(baPlaylistTitle);

const baPlaylistList = document.createElement('ul');
baPlaylistList.classList.add('ba-playlist__list');
baPlaylist.appendChild(baPlaylistList);

for (let i=0; i<playList.length; i++) {
    const baTune = document.createElement('li');
    baTune.classList.add('ba-tune');
    baPlaylistList.appendChild(baTune);

/*    const baTuneLike = document.createElement('svg');
    baTuneLike.setAttribute('width', '10');
    baTuneLike.setAttribute('height', '10');
    baTuneLike.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    baTuneLike.setAttribute('viewBox', '0 0 32 32');
    baTuneLike.classList.add('ba-tune__like');*/
    /*   baTuneLike.innerHTML = '<path fill="currentcolor" d="M29.193 5.265c-3.629-3.596-9.432-3.671-13.191-0.288-3.76-3.383-9.561-3.308-13.192 0.288-3.741 3.704-3.741 9.709 0 13.415 1.069 1.059 11.053 10.941 11.053 10.941 1.183 1.172 3.096 1.172 4.278 0 0 0 10.932-10.822 11.053-10.941 3.742-3.706 3.742-9.711-0.001-13.415zM27.768 17.268l-11.053 10.941c-0.393 0.391-1.034 0.391-1.425 0l-11.053-10.941c-2.95-2.92-2.95-7.671 0-10.591 2.844-2.815 7.416-2.914 10.409-0.222l1.356 1.22 1.355-1.22c2.994-2.692 7.566-2.594 10.41 0.222 2.95 2.919 2.95 7.67 0.001 10.591zM9.253 7.501c0.277 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.001c-1.794 0-3.249 1.455-3.249 3.249v0.001c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v0c0-2.346 1.901-4.247 4.246-4.249 0.002 0 0.002-0.001 0.004-0.001z"></path>'*/
    const baTuneLike = document.createElement('img');
    baTuneLike.setAttribute('src', 'img/icon-heart.svg');
    baTuneLike.classList.add('ba-tune__like');
    baTune.appendChild(baTuneLike);



    /*const baTuneLikeUse = document.createElement('use');
    baTuneLikeUse.setAttribute('xlink:href', 'img/icon-heart.svg#icon-heart');
    baTuneLike.appendChild(baTuneLikeUse);*/
    
    const baTuneTop = document.createElement('div');
    baTuneTop.classList.add('ba-tune__top');
    baTune.appendChild(baTuneTop);

    const baTuneDuration = document.createElement('span');
    baTuneDuration.classList.add('ba-tune__duration');
    baTuneDuration.innerText = playList[i]['duration']
    baTuneTop.appendChild(baTuneDuration);

    const baTuneAuthor = document.createElement('span');
    baTuneAuthor.classList.add('ba-tune__author');
    baTuneAuthor.innerText = playList[i]['author']
    baTuneTop.appendChild(baTuneAuthor);

    const baTuneSong = document.createElement('div');
    baTuneSong.classList.add('ba-tune__song');
    baTuneSong.innerText = playList[i]['song']
    baTune.appendChild(baTuneSong);





}                               

/*<li class="ba-tune">
<svg class="ba-tune__like" width="10" height="10">
<use xlink:href="#icon-heart">
</use></svg>

<!-- BEGIN ba-tune__top -->
<div class="ba-tune__top">
<span class="ba-tune__duration">2:03</span>
<span class="ba-tune__author">led zeppelin</span>
</div>
<!-- END ba-tune__top -->
<!-- BEGIN ba-tune__name -->
<div class="ba-tune__song">
stairway to heaven
</div>
<!-- END ba-tune__name -->
</li>*/


/*
const baHiden = document.createElement('svg');
baHiden.classList.add('ba-hiden');
baHiden.innerHTML = '<symbol id="icon-heart" viewBox="0 0 32 32"><title>heart</title><path d="M29.193 5.265c-3.629-3.596-9.432-3.671-13.191-0.288-3.76-3.383-9.561-3.308-13.192 0.288-3.741 3.704-3.741 9.709 0 13.415 1.069 1.059 11.053 10.941 11.053 10.941 1.183 1.172 3.096 1.172 4.278 0 0 0 10.932-10.822 11.053-10.941 3.742-3.706 3.742-9.711-0.001-13.415zM27.768 17.268l-11.053 10.941c-0.393 0.391-1.034 0.391-1.425 0l-11.053-10.941c-2.95-2.92-2.95-7.671 0-10.591 2.844-2.815 7.416-2.914 10.409-0.222l1.356 1.22 1.355-1.22c2.994-2.692 7.566-2.594 10.41 0.222 2.95 2.919 2.95 7.67 0.001 10.591zM9.253 7.501c0.277 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.001c-1.794 0-3.249 1.455-3.249 3.249v0.001c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v0c0-2.346 1.901-4.247 4.246-4.249 0.002 0 0.002-0.001 0.004-0.001z"></path></symbol>';
main.appendChild(baHiden);*/





document.body.appendChild(main);

