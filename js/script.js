var
	openMenu    = q('#open_menu'),
	menuPlace   = q('.page-header .page-menu'),
	openFilters = q('#open_filters'),
	filtersItem = q('.page-content .filters');

openMenu.addEventListener('click', () => {

	menuPlace.classList.toggle('active');

});

openFilters.addEventListener('click', () => {

	filtersItem.classList.toggle('more-active');

});

function q(selector)
{
	return document.querySelector(selector);
}

function qA(selector)
{
	return document.querySelectorAll(selector);
}

// SLIDER

var
	slideItems = qA('.slider .item'),
	pagination = q('.slider .paginations'),
	slidePrev  = q('.slider .switch.prev'),
	slideNext  = q('.slider .switch.next'),
	slideCount = slideItems.length;

for (var i = 0; i < slideCount; i++)
{
	var
		pag = document.createElement('span');

	slideItems[i].setAttribute('data-num', i + 1);
	pag.setAttribute('data-num', i + 1);

	if ( slideItems[i].classList.value.indexOf('visible') > -1 )
	{
		pag.setAttribute('class', 'ctrl on cp');
	}
	else
	{
		pag.setAttribute('class', 'ctrl cp');
	}

	pag.addEventListener('click', function() {

		var
			curItem = q('.slider .item.visible'),
			curNum  = +(this.getAttribute('data-num')) - 1,
			allPags = q('.slider .paginations .ctrl.on');

		curItem.classList.remove('visible');
		allPags.classList.remove('on');

		slideItems[curNum].classList.add('visible');
		this.classList.add('on');

	});

	pagination.appendChild(pag);
}

slidePrev.addEventListener('click', toggleSlide);
slideNext.addEventListener('click', toggleSlide);

function toggleSlide()
{
	var
		cur  = q('.slider .item.visible'),
		pag  = q('.slider .paginations .ctrl.on'),
		pags = qA('.slider .paginations .ctrl'),
		num  = +(cur.getAttribute('data-num')) - 1,
		all  = slideCount - 1;

	cur.classList.remove('visible');
	pag.classList.remove('on');

	if ( this.classList.value.indexOf('prev') > -1 )
	{
		num--;

		( num < 0 ) ? ( num = all ) : ( num = num );
	}
	else if ( this.classList.value.indexOf('next') > -1 )
	{
		num++;

		( num > all ) ? ( num = 0 ) : ( num = num );
	}

	slideItems[num].classList.add('visible');
	pags[num].classList.add('on');
}