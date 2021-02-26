$('#gallery').owlCarousel({
	item: 3,
	margin: 20,
	singleItem: true,
	autoplay: true,
	autoplayTimeout: 4000,
	loop: true,
	nav: true,
	dots: false,
	navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	responsiveClass: true,
	responsive:{
		0:{
		items: 1,
			},
		320:{
			items: 1,
		},
		450:{
			items: 1,
		},
		576:{
			items: 1,
		},
		600:{
			items: 2,
		},
		768:{
			items: 3,
		},
		992:{
			items: 3,
		},
		1200:{
			items: 3,
		}
	}
});