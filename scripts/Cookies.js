(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open({
        // Modal configuration object properties
        })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();