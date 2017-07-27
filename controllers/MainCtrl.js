(function() {
  function MainCtrl(Room, Message, $uibModal, $cookies) {
   
    this.chatrooms = Room.getRooms().all;
      
    
      
    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', '$cookies', MainCtrl]);
})();