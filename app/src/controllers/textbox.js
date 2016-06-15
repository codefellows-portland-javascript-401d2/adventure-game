textbox.$inject = ['$scope'];

export default function textbox($scope){

  $scope.action = function(text){
    if (text){
      if (text === 'Evade'){
        return text + '.  The monster attacks and misses!';
      }else if (text === 'Stop hitting yourself'){
        return text + '. The monster giggles.';
      }else{
        return text + '.  The monster howls in pain';
      }
    }else{
      return 'Make a move';
    }
  };

}
