// make the like icon animate when clicked

$('.like-button').on('click', function() {
  $(this).toggleClass('is-active')
});

// make the quantity buttons work

// remove button

$('.remove-button').on('click', function() {
  e.preventDefault();
  var $this = %(this);
  var $input = $this.closest('div').find('input');
  var $value = parseInt($input.val());

  if (value &amp;amp;gt; 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);
})
