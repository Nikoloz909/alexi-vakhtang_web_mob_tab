var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});







// multi language




//define language reload onclick illiteration
function clickedReload() {


	// define language reload anchors

	var dataReload = document.querySelectorAll("[data-reload]");
	var langChanged = document.querySelectorAll("[data-lang]");

	//language translations

	var language = {
		eng: {
			alexi: "Alexi",
			vakhtang: "Vakhtang",
			foundation: "Foundation",
			projects: "Projects",
			contact: "Contact",
			homeheadline: "Alexi And Vakhtang Matchavariani Charity Found",
			homeheadline2: "Alexi Matchavariani",
			homeheadline3: "Vakhtang Matchavariani",
			ourmissiontxt: "Our Mission",
			aboutus: "About Us",
			photos: "Photos",
			team: "Team",
			namelastname: "Name Lastname",
			socialmedia: "Social Media",
			location: "Location Street",
			
			learnmore: "Learn More",
			biography: "Biography",
			manuscripts: "Manuscripts",
			presse: "Presse",
			audiosamples: "Video & Audio Samples",
			information: "Information",
			manuscriptname: "Name #1",
			manuscriptdescription: "The Study Of The Writing In Surviving Manuscripts",
			concoursename: "Concourse Name",
			concoursemini: "Contemporary business and science",
			concoursedescription: "Tasks To Be Executed Over A Fixed Period",
			register: "apply",
			sendbtn: "send",
			//team member biography
			teammemberbiography: "A biography, or simply bio, is a detailed description of a person's life. It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality"

		},
		geo: {
			alexi: "ალექსი",
			vakhtang: "ვახტანგ",
			foundation: "ფონდი",
			projects: "პროექტები",
			contact: "კონტაქტი",
			homeheadline: "ალექსი და ვახტანგ მაჭავარიანის საქველმოქმედო ფონდი",
			homeheadline2: "ალექსი მაჭავარიანი",
			homeheadline3: "ვახტანგ მაჭავარიანი",
			ourmissiontxt: "ჩვენი მისია",
			aboutus: "ჩვენს შესახებ",
			photos: "ფოტოები",
			team: "გუნდი",
			namelastname: "სახელი გვარი",
			socialmedia: "სოციალური მედია",
			location: "ლოკაცია",
			
			learnmore: "გაიგეთ მეტი",
			biography: "ბიოგრაფია",
			manuscripts: "მანუსკრიპტები",
			presse: "პრესა",
			audiosamples: "ვიდეო და აუდიო ნამუშევრები",
			information: "ინფორმაცია",
			manuscriptname: "სახელი",
			manuscriptdescription: "ხელნაწერი, უმთავრესად ძველი",
			concoursename: "კონკურსის სახელი",
			concoursemini: "შეჯიბრება, რომელიც ტარდება",
			concoursedescription: "საუკეთესო მონაწილეების ან საუკეთესო ნამუშევრების გამოვლენის მიზნით",
			register: "რეგისტრაცია",
			sendbtn: "გაგზავნა",
			//team member biography
			teammemberbiography: " ადამიანის ცხოვრების აღწერა. ბიოგრაფია ლიტერატურისა და ზოგიერთი მედიის (მაგ. კინოს) ერთ-ერთი ჟანრია, რომელსაც ინდივიდუალური ცხოვრების წერილობითი აღწერა უდევს საფუძვლად. ბიოგრაფია ძირითადად დოკუმენტურ წყაროებს ეყრდნობა და გამოგონილი არ არის. კურიკულიმ-ვიტას ან პროფილისგან განსხვავებით ბიოგრაფია კომპლექსურად აღწერს ადამიანის პერსონალურ მახასიათებლებს, რომელიც მისი გამოცდილების ინტიმურ დეტალებსაც ეყრდნობა."
		}
	}


	// define language via window hash
	const langHash = window.location.hash;
	if (langHash) {
		dataReload.forEach(e => {
			if (langHash === '#geo') {
				e.textContent = language.geo[e.id];
				document.querySelector('.btn--geo').classList.add('btn--active');
				document.querySelector('.btn--eng').classList.remove('btn--active');
			} else {
				e.textContent = language.eng[e.id];
				document.querySelector('.btn--eng').classList.add('btn--active');
				document.querySelector('.btn--geo').classList.remove('btn--active');
			}
		});
	} else {
		window.location.hash = "#eng";
		window.location.reload();
	}
	langChanged.forEach(e => {
		e.onclick = () => {
			let newUrl = '';
			if (e.innerText === 'ENG') {
				newUrl = window.location.href.replace('#geo', '#eng');
			} else {
				newUrl = window.location.href.replace('#eng', '#geo');
			}
			window.location.href = newUrl;
			window.location.reload();
		}
	})

};

document.addEventListener("DOMContentLoaded", () => clickedReload());



// Scrolling



$('.js--scroll-to-biography').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-biography').offset().top}, 1000); 
	});	

$('.js--scroll-to-photos').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-photos').offset().top}, 1000); 
	});	
	

$('.js--scroll-to-manuscripts').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-manuscripts').offset().top}, 1000); 
	});	

$('.js--scroll-to-presse').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-presse').offset().top}, 1000); 
	});	
			
$('.js--scroll-to-audiosamples').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-audiosamples').offset().top}, 1000); 
	});	

$('.js--scroll-to-information').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-information').offset().top}, 1000); 
	});	

$('.js--scroll-to-team').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-team').offset().top}, 1000); 
	});		



// Carousel

const carouselImages = document.querySelector('.carousel__images');
const carouselButtons = document.querySelectorAll('.carousel__button');

// number of images

const numberOfImages = document.querySelectorAll('.carousel__images img').length;

//tells us currently which image are we on
let imageIndex = 1;

let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.id === 'previous'){
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += 248;
            }
        } else {
            if (imageIndex !== numberOfImages) {
                imageIndex++;
                translateX -= 248;
            }
        }

        carouselImages.style.transform = `translateX(${translateX}px)`;
    });
});
	

