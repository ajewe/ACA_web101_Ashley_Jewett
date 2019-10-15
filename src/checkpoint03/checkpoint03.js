//Every click on cat image, add 1 to score

$('#catimage').click(function() {
  console.log('clicked');
  tallyScore();
});

 function tallyScore() {
  let tallyInnerHTML = $('#tally').val
  let score = parseInt(tallyInnerHTML,10)
  $('#tally').val = score + 1
  console.log('tallyho')
}
