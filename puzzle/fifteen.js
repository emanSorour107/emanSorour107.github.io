$(document).ready(function() {
    Puzzle.init();
    Puzzle.clickMoveInit();
  });
  
  var Puzzle = (function() {
    var init = function() {
      var divs = $("#puzzlearea div");
  
      $.each(divs, function(i, value) {
        var div = divs[i];
  
        var x = (i % 4) * 100;
        var y = Math.floor(i / 4) * 100;
  
        div.className = "puzzlepiece";
        div.style.left = x + "px";
        div.style.top = y + "px";
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + "px " + -y + "px";
  
        div.x = x;
        div.y = y;
      });
      empty.setRow(3);
      empty.setCol(3);
    };
    var clickMoveInit = function() {
      $("#puzzlearea div").click(function() {
        var left = parseInt($(this).css("left"));
        var top = parseInt($(this).css("top"));
        var emptyLeft = empty.getRow() * 100;
        var emptyTop = empty.getCol() * 100;
  
        if (canMove(left, emptyLeft, top, emptyTop)) {
          empty.setRow(parseInt(left) / 100);
          empty.setCol(parseInt(top) / 100);
          $(this).css("left", emptyLeft + "px");
          $(this).css("top", emptyTop + "px");
        }
      });
      $("#puzzlearea div")
        .hover(function() {
          var left = parseInt($(this).css("left"));
          var top = parseInt($(this).css("top"));
          var emptyLeft = empty.getRow() * 100;
          var emptyTop = empty.getCol() * 100;
  
          if (canMove(left, emptyLeft, top, emptyTop)) {
            $(this).addClass("movablepiece");
          }
        })
        .mouseout(function() {
          $(this).removeClass("movablepiece");
        });
      $("#shufflebutton").click(function() {
        var randomArr = [];
        var divs = $("#puzzlearea div");
        var size = divs.length;
  
        function contains(a, obj) {
          for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
              return true;
            }
          }
          return false;
        }
        while (size >= 0) {
          while (true) {
            var randomNum = parseInt(Math.random() * 16);
            if (!contains(randomArr, randomNum)) {
              randomArr.push(randomNum);
              break;
            }
          }
          size--;
        }
  
        var x = randomArr[divs.length] % 4;
        var y = Math.floor(randomArr[divs.length] / 4);
        empty.setRow(x);
        empty.setCol(y);
  
        $.each(divs, function(i, value) {
          var x = (randomArr[i] % 4) * 100;
          var y = Math.floor(randomArr[i] / 4) * 100;
          $(value).css("left", x + "px");
          $(value).css("top", y + "px");
        });
      });
    };
  
    var shuffle = function(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
  
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      return array;
    };
    var canMove = function(tileLeft, emptyLeft, tileTop, emptyTop) {
      if (Math.abs(tileLeft - emptyLeft) == 100 && tileTop == emptyTop) {
        return true;
      }
      if (Math.abs(tileTop - emptyTop) == 100 && tileLeft == emptyLeft) {
        return true;
      }
      return false;
    };
  
    return {
      init: init,
      clickMoveInit: clickMoveInit
    };
  })();
  
  var empty = (function() {
    var row;
    var col;
    var setCol = function(col) {
      this.col = col;
    };
    var setRow = function(row) {
      this.row = row;
    };
    var getCol = function() {
      return this.col;
    };
    var getRow = function() {
      return this.row;
    };
    return {
      getRow: getRow,
      setRow: setRow,
      getCol: getCol,
      setCol: setCol
    };
  })();
  