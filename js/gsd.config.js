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

  window._genesys = {
    widgets: {
        main: {
            debug: false,
            preload: ['sidebar', 'webchat'],
						theme: 'dark'
        },
        webchat: {
            form: {
                wrapper: "<table></table>",
                inputs: [
                    {
                        id: "cx_webchat_form_email",
                        name: "email", 
                        maxlength: "100",
                        placeholder: "@i18n:webchat.ChatFormPlaceholderFirstName",
                        label: "@i18n:webchat.ChatFormEmail",
                        validate: function(e, ndWrapper, ndInput, ndLabel, $, CXBus, Common){
                            if(ndInput && ndInput.val() && ndInput.val().trim() != "")return true;
                            return false;
                        },
                    }
                ]
            },
            autoInvite: {
                enabled: true,
                timeToInviteSeconds: 20,
                inviteTimeoutSeconds: 30
            },
        },
        sidebar: {
            showOnStartup: true,
            position: 'right',
            expandOnHover: true,
            channels:
            [
                {
                name: 'WebChat',
                clickCommand: 'WebChat.open', 
                displayName: 'Chat', 
                displayTitle: 'Get live help',
                icon: 'chat'
                }
            ]
        }    
    }
};

// var widgetBaseUrl = 'https://apps.mypurecloud.com/widgets/9.0/',
//         widgetScriptElement = document.createElement('script');
           
//     widgetScriptElement.setAttribute('src', widgetBaseUrl + 'cxbus.min.js');

//     widgetScriptElement.addEventListener('load', function () {
         
//        CXBus.configure({debug: false, pluginsPath: widgetBaseUrl + 'plugins/'});
//        CXBus.loadPlugin('widgets-core');
//     });

//     document.head.append(widgetScriptElement);