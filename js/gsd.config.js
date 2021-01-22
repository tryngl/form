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
                        validateWhileTyping: true,
                        validate: function(e, ndWrapper, ndInput, ndLabel, $, CXBus, Common){
                            //if(ndInput && ndInput.val() && ndInput.val().trim() != "" && !ndInput.val().match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/))return true;
                            if(ndInput && ndInput.val() && ndInput.val().trim() != "" && ndInput.val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) return true;
                            return false;
                        },
                    }
                ]
            },
            autoInvite: {
                enabled: true,
                timeToInviteSeconds: 15,
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