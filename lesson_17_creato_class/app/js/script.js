"use strict";console.dir($("#welcome"));var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=requestAnimationFrame,$(".partners__list").slick({autoplay:!0,slidesToShow:6,arrows:!1});var form=$("#contactForm");form.on("submit",function(e){e.preventDefault(),getUserData(),showModal()}),$(".modal__close").on("click",function(){closeModal()});var showModal=function(){$(".modal")[0].classList.add("open"),disableScroll()},closeModal=function(){$(".modal")[0].classList.remove("open"),enableScroll()},getUserData=function(){var o={};return Array.prototype.forEach.call(form[0].elements,function(e){e.value&&(o[e.name]=e.value,e.value="")}),console.log(o),o},servicesTexts=$(".grid-item__text"),arr=Array.prototype.map.call(servicesTexts,function(e){var o=e.innerText.split("");if(o.length<85)return e.innerText;var n=o.slice(0,85),t=n.lastIndexOf(" ");return n.slice(0,t).join("")+"..."});Array.prototype.forEach.call(servicesTexts,function(e,o){e.innerText=arr[o]}),document.addEventListener("scroll",function(){setMenuFixed()});var setMenuFixed=function(){var e=document.getElementsByClassName("navigation")[0];34<=window.pageYOffset?e.classList.add("fixed-top"):e.classList.remove("fixed-top")},progress=0;function step(){var e=$("#progressbar")[0],o=Math.floor(100*window.scrollY/(document.body.scrollHeight-window.innerHeight));o<=100&&(e.style.transform="translateX(-".concat(100-o,"%)"))}document.onscroll=function(){requestAnimationFrame(step)};var mobileMenuButton=$(".navbar-toggler"),mobileMenu=$("#navbar");mobileMenuButton.on("click",function(){mobileMenu.toggleClass("open")}),$(".navigation__link").on("click",function(e){e.preventDefault();var o=$($(this).attr("href"))[0].offsetTop;window.scrollTo({top:o,behavior:"smooth"})}),$(".up").on("click",function(){window.scrollTo({top:0,behavior:"smooth"})});var keys={37:1,38:1,39:1,40:1};function preventDefault(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}function preventDefaultForScrollKeys(e){if(keys[e.keyCode])return preventDefault(e),!1}function disableScroll(){window.addEventListener&&window.addEventListener("DOMMouseScroll",preventDefault,!1),window.onwheel=preventDefault,window.onmousewheel=document.onmousewheel=preventDefault,window.ontouchmove=preventDefault,document.onkeydown=preventDefaultForScrollKeys}function enableScroll(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",preventDefault,!1),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwiZGlyIiwiJCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImF1dG9wbGF5Iiwic2xpZGVzVG9TaG93IiwiYXJyb3dzIiwiZm9ybSIsInNsaWNrIiwicHJldmVudERlZmF1bHQiLCJnZXRVc2VyRGF0YSIsIm9uIiwiZSIsInNob3dNb2RhbCIsImNsb3NlTW9kYWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNhYmxlU2Nyb2xsIiwidXNlckRhdGEiLCJuYW1lIiwidmFsdWUiLCJlbCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJlbGVtZW50cyIsInNlcnZpY2VzVGV4dHMiLCJhcnIiLCJtYXAiLCJpbm5lclRleHQiLCJsb2ciLCJzbGljZSIsImluZGV4IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0TWVudUZpeGVkIiwibmV3QSIsImEiLCJsYXN0SW5kZXhPZiIsInBhZ2VZT2Zmc2V0IiwiaWR4IiwibmF2YmFyIiwic3RlcCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcm9ncmVzc2JhciIsInByb2dyZXNzIiwiZmxvb3IiLCJyZW1vdmUiLCJvbnNjcm9sbCIsInNjcm9sbFkiLCJib2R5Iiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNvbmNhdCIsIm1vYmlsZU1lbnUiLCJ0b2dnbGVDbGFzcyIsInRvcCIsImJlaGF2aW9yIiwidGhpcyIsImF0dHIiLCJvZmZzZXRUb3AiLCJzY3JvbGxUbyIsImtleXMiLCJwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMiLCJldmVudCIsInJldHVyblZhbHVlIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsImVuYWJsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbnRvdWNobW92ZSIsIm9ua2V5ZG93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QUFlRyxJQVNSMEQsRUFFUHBDLFNBQUFBLGdCQUNEakMsT0FBQWtDLGtCQUxFbEMsT0FBT2tDLGlCQUFpQixpQkFBa0IxQixnQkFBZ0IsR0FPN0RSLE9BQVNzRSxRQUFBQSxlQUNSdEUsT0FBSUEsYUFBT3VFLFNBQVhGLGFBQ1FFLGVBQ1J2RSxPQUFPcUUsWUFBZXBDLGVBQ3RCakMsU0FBT29FLFVBQVBILDRCQUdBLFNBQUFLLGVBTkl0RSxPQUFPdUUscUJBQ1Z2RSxPQUFPdUUsb0JBQW9CLGlCQUFrQi9ELGdCQUFnQixHQUM5RFIsT0FBT3FFLGFBQWVwQyxTQUFTb0MsYUFBZSxLQUM5Q3JFLE9BQU9vRSxRQUFVLEtBQ2pCcEUsT0FBT3dFLFlBQWMsS0FDckJ2QyxTQUFTd0MsVUFBWSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcdFx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRcdGNvbnNvbGUuZGlyKCQoJyN3ZWxjb21lJykpO1xyXG5cclxuXHRcdGNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcblxyXG5cdFx0JCgnLnBhcnRuZXJzX19saXN0Jykuc2xpY2soe1xyXG5cdFx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzVG9TaG93OiA2LFxyXG5cdFx0XHRhcnJvd3M6IGZhbHNlXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gJCgnI2NvbnRhY3RGb3JtJyk7XHJcblxyXG5cdFx0Zm9ybS5vbignc3VibWl0JywgKGUpID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRnZXRVc2VyRGF0YSgpO1xyXG5cdFx0XHRzaG93TW9kYWwoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJy5tb2RhbF9fY2xvc2UnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNsb3NlTW9kYWwoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuXHRcdFx0JCgnLm1vZGFsJylbMF0uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cdFx0XHRkaXNhYmxlU2Nyb2xsKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuXHRcdFx0JCgnLm1vZGFsJylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHRlbmFibGVTY3JvbGwoKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBnZXRVc2VyRGF0YSA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgdXNlckRhdGEgPSB7fTtcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChmb3JtWzBdLmVsZW1lbnRzLCAoZWwpID0+IHtcclxuXHRcdFx0XHRpZighZWwudmFsdWUpIHJldHVybjtcclxuXHRcdFx0XHR1c2VyRGF0YVtlbC5uYW1lXSA9IGVsLnZhbHVlO1xyXG5cdFx0XHRcdGVsLnZhbHVlID0gJyc7XHJcblx0XHRcdH0pXHJcblx0XHRcdGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcclxuXHRcdFx0cmV0dXJuIHVzZXJEYXRhO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzZXJ2aWNlc1RleHRzID0gJCgnLmdyaWQtaXRlbV9fdGV4dCcpO1xyXG5cclxuXHRcdGNvbnN0IGFyciA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChzZXJ2aWNlc1RleHRzICxlbCA9PiB7XHJcblx0XHRcdGxldCBhID0gZWwuaW5uZXJUZXh0LnNwbGl0KCcnKTtcclxuXHRcdFx0aWYoYS5sZW5ndGggPCA4NSkgcmV0dXJuIGVsLmlubmVyVGV4dDtcclxuXHRcdFx0bGV0IG5ld0EgPSBhLnNsaWNlKDAsIDg1KTtcclxuXHRcdFx0bGV0IGluZGV4ID0gbmV3QS5sYXN0SW5kZXhPZignICcpO1xyXG5cdFx0XHRyZXR1cm4gbmV3QS5zbGljZSgwLCBpbmRleCkuam9pbignJykgKyAnLi4uJztcclxuXHRcdH0pO1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2VydmljZXNUZXh0cywgKGVsLCBpZHgpID0+IHtcclxuXHRcdFx0ZWwuaW5uZXJUZXh0ID0gYXJyW2lkeF07XHJcblx0XHR9KTtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcblx0XHRcdHNldE1lbnVGaXhlZCgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3Qgc2V0TWVudUZpeGVkID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZpZ2F0aW9uJylbMF07XHJcblx0XHRcdGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+PSAzNCl7XHJcblx0XHRcdFx0bmF2YmFyLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkLXRvcCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZC10b3AnKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRsZXQgcHJvZ3Jlc3MgPSAwO1xyXG5cclxuXHRcdGZ1bmN0aW9uIHN0ZXAoKSB7XHJcblx0XHRcdGNvbnN0IHByb2dyZXNzYmFyID0gJCgnI3Byb2dyZXNzYmFyJylbMF07XHJcblx0XHRcdGxldCBwcm9ncmVzcyA9IE1hdGguZmxvb3Iod2luZG93LnNjcm9sbFkgKiAxMDAgLyAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpKTtcclxuXHRcdFx0aWYocHJvZ3Jlc3MgPD0gMTAwKSB7XHJcblx0XHRcdFx0cHJvZ3Jlc3NiYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7MTAwIC0gcHJvZ3Jlc3N9JSlgO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGRvY3VtZW50Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG1vYmlsZU1lbnVCdXR0b24gPSAkKCcubmF2YmFyLXRvZ2dsZXInKTtcclxuXHRcdGNvbnN0IG1vYmlsZU1lbnUgPSAkKCcjbmF2YmFyJyk7XHJcblxyXG5cdFx0bW9iaWxlTWVudUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bW9iaWxlTWVudS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnLm5hdmlnYXRpb25fX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjb25zdCB0b3AgPSAkKCQodGhpcykuYXR0cignaHJlZicpKVswXS5vZmZzZXRUb3A7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbyh7XHJcblx0XHRcdFx0dG9wOiB0b3AsXHJcblx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnLnVwJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCdcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblxyXG5cclxuLy8gbGVmdDogMzcsIHVwOiAzOCwgcmlnaHQ6IDM5LCBkb3duOiA0MCxcclxuLy8gc3BhY2ViYXI6IDMyLCBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsIGVuZDogMzUsIGhvbWU6IDM2XHJcbmNvbnN0IGtleXMgPSB7Mzc6IDEsIDM4OiAxLCAzOTogMSwgNDA6IDF9O1xyXG5cclxuZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xyXG5cdGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHRpZiAoZS5wcmV2ZW50RGVmYXVsdClcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRlLnJldHVyblZhbHVlID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XHJcblx0aWYgKGtleXNbZS5rZXlDb2RlXSkge1xyXG5cdFx0cHJldmVudERlZmF1bHQoZSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xyXG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcclxuICBcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XHJcbiAgd2luZG93Lm9ud2hlZWwgPSBwcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXHJcbiAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IHByZXZlbnREZWZhdWx0OyAvLyBvbGRlciBicm93c2VycywgSUVcclxuICB3aW5kb3cub250b3VjaG1vdmUgID0gcHJldmVudERlZmF1bHQ7IC8vIG1vYmlsZVxyXG4gIGRvY3VtZW50Lm9ua2V5ZG93biAgPSBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcclxuXHRpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpXHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xyXG5cdHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBudWxsO1xyXG5cdHdpbmRvdy5vbndoZWVsID0gbnVsbDtcclxuXHR3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xyXG5cdGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19
