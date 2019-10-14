
  let block = null;
  
  function checkIfValidMove() {
    //if blue block, can be placed on any row
    //if green block, can be placed on row unless prev block is blue
    //if red block, can be placed on row unless prev block is blue or green
    //if yellow block, can be placed on row if no prev block
  }

  $('[data-row]').click(function() {

    if (block) {
      console.log('dropping', block.attr('id'))
      console.log('dropping on row', $(this).attr('class'))
      console.log('row already has blocks', $(this).children().toArray())
      for (let block of $(this).children().toArray()) {
        console.log('row has block', block.id)
      }
      $(this).append(block);
      block = null;

    } else {
      block = $(this).children().last().detach();
    }
  })



