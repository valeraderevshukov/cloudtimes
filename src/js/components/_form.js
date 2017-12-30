import { OPEN, BODY } from '../_constants';
;(() => {
  const form = $('.js-form');
  const closeBtn = $('.js-close-form');
  const openBtn = $('.js-open-form');
	
  openBtn.on('click', e => {
    e.preventDefault();
    form.addClass(OPEN);
  });

  closeBtn.on('click', e => {
    form.removeClass(OPEN);
  });

  BODY.on('click', (e) => {
    const target = $(e.target);
    if ( target.closest('.js-form').length || target.closest('.js-open-form').length ) return;
    closeBtn.trigger('click');
  });

})();
