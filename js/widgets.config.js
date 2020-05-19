window._genesys = {
    widgets:{
      webchat: {
        form: {
          wrapper: "<table></table>",
          inputs: [
            {
              id: "cx_firstname",
              name: "firstname",
              placeholder: "@i18n:webchat.ChatFormPlaceholderFirstName",
              label: "@i18n:webchat.ChatFormFirstName"
            }
          ]
        }
      },
      onReady: function(){
        CXBus.command('WebChat.open');
      }
    }
  };