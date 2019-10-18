
//Every click on cat image, add 1 to score

$('#catimage').click(function() {
  console.log('clicked');
  tallyScore();
  scoreHit();
  catShake();
});

function catShake() {
  $('#catimage').effect('bounce', 'slow');
};

function tallyScore() {
  let tally = $('#tally').html()
  score = parseInt(tally,10)
  scoreScore(score + 1)
}

function scoreScore(s) {
  //set tally to what just got passed
  $('#tally').html(s)
  scoreHit();
}

//if score hits X, boxes get "activated"

function scoreHit() {
  score = $('#tally').html()

  if (score > 9) {
    $('#buy1').css('pointer-events', 'auto');
    $('#buy1').css('background-color', 'red');
    $('#fact-list1').css('background-color', 'red');
  } else {
    $('#buy1').css('pointer-events', 'none');
    $('#buy1').css('background-color', '');
    $('#fact-list1').css('background-color', '');
  }

  if (score > 99) {
    $('#buy2').css('pointer-events', 'auto');
    $('#buy2').css('background-color', 'pink');
    $('#fact-list2').css('background-color', 'pink');
  } else {
    $('#buy2').css('pointer-events', 'none');
    $('#buy2').css('background-color', '');
    $('#fact-list2').css('background-color', '');
  }

  if (score > 999) {
    $('#buy3').css('pointer-events', 'auto');
    $('#buy3').css('background-color', 'orange');
    $('#fact-list3').css('background-color', 'orange');
  } else {
    $('#buy3').css('pointer-events', 'none');
    $('#buy3').css('background-color', '');
    $('#fact-list3').css('background-color', '');
  }

  if (score > 9999) {
    $('#buy4').css('pointer-events', 'auto');
    $('#buy4').css('background-color', 'yellow');
    $('#fact-list4').css('background-color', 'yellow');
  } else {
    $('#buy4').css('pointer-events', 'none');
    $('#buy4').css('background-color', '');
    $('#fact-list4').css('background-color', '');
  }

  if (score > 99999) {
    $('#buy5').css('pointer-events', 'auto');
    $('#buy5').css('background-color', 'green');
    $('#fact-list5').css('background-color', 'green');
  } else {
    $('#buy5').css('pointer-events', 'none');
    $('#buy5').css('background-color', '');
    $('#fact-list5').css('background-color', '');
  }
}

// when click on box, score increases n per sec

$('#buy1').click(function() {
  incRate(10, 1);
});

$('#buy2').click(function() {
  incRate(100, 10);
});

$('#buy3').click(function() {
  incRate(1000, 100);
});

$('#buy4').click(function() {
  incRate(10000, 1000);
});

$('#buy5').click(function() {
  incRate(100000, 10000);
});

function incRate(cost, rateInc) {
  let tally = $('#tally').html()
  score = parseInt(tally,10)

  if (score >= cost) {
    // have money
    score = score - cost;
    // set new talley 
    scoreScore(score)
    //new rate value 
    let rate = $('#loverate').html()
    rate = parseInt(rate,10)
    $('#loverate').html(rate+rateInc)
    //inc score every sec
    var intervalId = setInterval(function(){
      let tally = $('#tally').html()
      score = parseInt(tally,10)
      scoreScore(score + rateInc)
    }, 1000);
  }
}
