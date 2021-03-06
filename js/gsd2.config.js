window._genesys = {
  widgets: {
      main: {
          debug: false,
          preload: ['sidebar', 'webchat'],
          theme: 'dark'
      },
      webchat: {
        // form: {
        //     wrapper: "<table></table>",
        //     inputs: [
        //         {
        //             name: "nickname", 
        //             maxlength: "100",
        //             placeholder: "@i18n:webchat.ChatFormPlaceholderNickname",
        //             label: "@i18n:webchat.ChatFormNickname",
        //             readonly: true,
        //             value: function(){ if(window.NOW)return window.NOW.user_display_name; return "";}
        //         }
        //     ]
        // },
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

var oPlugin = CXBus.registerPlugin("myPlugin");

oPlugin.before("WebChat.open", function(){
  var NOW_name = (window.NOW) ? window.NOW.user_display_name : "User";
  return { form : { autoSubmit: true}, formJSON: {
    wrapper: "<table></table>",
    inputs: [
      {
        name: "nickname", 
        label: "Name",
        readonly: true,
        value: NOW_name
      }
    ]
  }};
});