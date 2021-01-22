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
                  name: "nickname", 
                  maxlength: "100",
                  placeholder: "@i18n:webchat.ChatFormPlaceholderNickname",
                  label: "@i18n:webchat.ChatFormNickname",
                  readonly: true,
                  value: "" + function(){ if(window.NOW)return window.NOW.user_display_name}
                },
                {
                    id: "cx_webchat_form_email",
                    name: "email", 
                    maxlength: "100",
                    placeholder: "@i18n:webchat.ChatFormPlaceholderFirstName",
                    label: "@i18n:webchat.ChatFormEmail",
                    validateWhileTyping: false,
                    validate: function(e, ndWrapper, ndInput, ndLabel, $, CXBus, Common){
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