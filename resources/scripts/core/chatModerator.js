!function(){function e(e){var r=$.inidb.GetKeyList("blackList","");for(h in r)b.push($.inidb.get("blackList",r[h]));$.consoleDebug("blacklist loaded")}function r(e){var r=$.inidb.GetKeyList("whiteList","");for(h in r)p.push($.inidb.get("whiteList",r[h]));$.consoleDebug("whitelist loadee")}function a(e,r){$.say(".timeout "+e+" "+r),setTimeout(function(){$.say(".timeout "+e+" "+r)},1e3)}function t(e){for(h in u)if(u[h].equalsIgnoreCase(e))return a(e,z),i(e),void(J=$.lang.get("chatmoderator.timeout"));a(e,W),i(e),J=$.lang.get("chatmoderator.warning")}function s(e,r){f.length<=1&&$.say("@"+$.username.resolve(e)+", "+r+" "+J)}function i(e){u.push(e),o(e),H>0&&f.push($.systemTime())}function o(e){if(H>0)var r=setTimeout(function(){f.splice(0),clearTimeout(r)},1e3*H);var a=setTimeout(function(){for(var r in u)if(u[r].equalsIgnoreCase(e)){u.splice(r,0);break}clearTimeout(a)},36e5)}function g(e){c.push(e);var r=setTimeout(function(){for(var a in c)if(c[a].equalsIgnoreCase(e)){c.splice(a,1);break}clearTimeout(r)},1e3*w)}function n(e){return e?$.lang.get("common.enabled"):$.lang.get("common.disabled")}function d(e){var r=e.getSender(),t=e.getMessage().toLowerCase();for(h in b)if(t.contains(b[h].toLowerCase()))return a(r,z),J=$.lang.get("chatmoderator.timeout"),s(r,U),!0;return!1}function l(e){var r=e.getSender(),a=(e.getMessage().toLowerCase(),$.patternDetector.hasLinks(e));for(h in c)if(c[h].equalsIgnoreCase(r)&&a)return c.splice(h,1),!0;return!1}function m(e){var r=(e.getSender(),e.getMessage().toLowerCase());for(h in p)if(r.contains(p[h]))return!0;return!1}var h,c=[],u=[],f=[],p=[],b=[],y=$.inidb.exists("chatModerator","linksToggle")?$.getIniDbBoolean("chatModerator","linksToggle"):!0,M=$.inidb.exists("chatModerator","linksMessage")?$.inidb.get("chatModerator","linksMessage"):"you were timed out for linking",w=$.inidb.exists("chatModerator","linkPermitTime")?parseInt($.inidb.get("chatModerator","linkPermitTime")):120,x=$.inidb.exists("chatModerator","capsToggle")?$.getIniDbBoolean("chatModerator","capsToggle"):!0,v=$.inidb.exists("chatModerator","capsMessage")?$.inidb.get("chatModerator","capsMessage"):"you were timed out for overusing caps",P=$.inidb.exists("chatModerator","capsLimitPercent")?parseFloat($.inidb.get("chatModerator","capsLimitPercent")):50,I=$.inidb.exists("chatModerator","capsTriggerLength")?parseInt($.inidb.get("chatModerator","capsTriggerLength")):10,C=$.inidb.exists("chatModerator","spamToggle")?$.getIniDbBoolean("chatModerator","spamToggle"):!0,q=$.inidb.exists("chatModerator","spamMessage")?$.inidb.get("chatModerator","spamMessage"):"you were timed out for spamming",T=$.inidb.exists("chatModerator","spamLimit")?parseInt($.inidb.get("chatModerator","spamLimit")):15,L=$.inidb.exists("chatModerator","symbolsToggle")?$.getIniDbBoolean("chatModerator","symbolsToggle"):!0,k=$.inidb.exists("chatModerator","symbolsMessage")?$.inidb.get("chatModerator","symbolsMessage"):"you were timed out for overusing symbols",D=$.inidb.exists("chatModerator","symbolsLimitPercent")?parseFloat($.inidb.get("chatModerator","symbolsLimitPercent")):50,S=$.inidb.exists("chatModerator","symbolsGroupLimit")?parseFloat($.inidb.get("chatModerator","symbolsGroupLimit")):10,_=$.inidb.exists("chatModerator","symbolsTriggerLength")?parseInt($.inidb.get("chatModerator","symbolsTriggerLength")):5,B=$.inidb.exists("chatModerator","emotesToggle")?$.getIniDbBoolean("chatModerator","emotesToggle"):!1,F=$.inidb.exists("chatModerator","emotesMessage")?$.inidb.get("chatModerator","emotesMessage"):"you were timed out for overusing emotes",j=$.inidb.exists("chatModerator","emotesLimit")?parseInt($.inidb.get("chatModerator","emotesLimit")):15,A=$.inidb.exists("chatModerator","longMessageToggle")?$.getIniDbBoolean("chatModerator","longMessageToggle"):!0,G=$.inidb.exists("chatModerator","longMessageMessage")?$.inidb.get("chatModerator","longMessageMessage"):"you were timed out for posting a long message",N=$.inidb.exists("chatModerator","longMessageLimit")?parseInt($.inidb.get("chatModerator","longMessageLimit")):300,O=$.inidb.exists("chatModerator","colorsToggle")?$.getIniDbBoolean("chatModerator","colorsToggle"):!0,R=$.inidb.exists("chatModerator","colorsMessage")?$.inidb.get("chatModerator","colorsMessage"):"you were timed out for posting a colored message",E=$.inidb.exists("chatModerator","regularsToggle")?$.getIniDbBoolean("chatModerator","regularsToggle"):!1,K=$.inidb.exists("chatModerator","subscribersToggle")?$.getIniDbBoolean("chatModerator","subscribersToggle"):!1,U=$.inidb.exists("chatModerator","blacklistMessage")?$.inidb.get("chatModerator","blacklistMessage"):"you were timed out using a blacklisted phrase",W=$.inidb.exists("chatModerator","warningTime")?parseInt($.inidb.get("chatModerator","warningTime")):5,z=$.inidb.exists("chatModerator","timeoutTime")?parseInt($.inidb.get("chatModerator","timeoutTime")):600,H=$.inidb.exists("chatModerator","msgCooldownSec")?parseInt($.inidb.get("chatModerator","msgCooldownSec")):20,J="";$.bind("ircChannelMessage",function(e){var r=e.getSender(),a=e.getMessage(),i=a.length(),o=$.patternDetector.hasLinks(e),g=$.patternDetector.getNumberOfEmotes(e),n=$.patternDetector.getLongestRepeatedSequence(e),h=$.patternDetector.getNumberOfNonLetters(e),c=$.patternDetector.getLongestNonLetterSequence(e);if(!$.isModv3(r,e.getTags())){if(a&&d(e)||l(e)||m(e))return;if(y&&o)return!$.youtubePlayerConnected||-1==a.indexOf("youtube.com")&&-1==a.indexOf("youtu.be")?E&&$.isReg(r)?!0:K&&$.isSubv3(r,e.getTags())?!0:(t(r),void s(r,M)):!0;if(x&&i>I){var u=parseFloat(e.getCapsCount)/i*100;if(u>P)return t(r),void s(r,v)}if(L&&i>_){if(c>S)return t(r),void s(r,k);var f=parseFloat(h)/i*100;if(f>D)return t(r),void s(r,k)}if(C&&n>T)return t(r),void s(r,q);if(B&&g>j)return t(r),void s(r,F);if(O&&a.startsWith("/me"))return t(r),void s(r,R);A&&i>N&&(t(r),s(r,G))}}),$.bind("command",function(a){var t=a.getSender(),s=a.getCommand(),i=a.getArguments(),o=a.getArgs(),d=o[0],l=o[1];if(s.equalsIgnoreCase("permit"))return $.isModv3(t,a.getTags())?d?(g(d),void $.say($.username.resolve(d)+$.lang.get("chatmoderator.permited",w))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.permit.usage")):void $.say($.whisperPrefix(t)+$.modMsg);if(s.equalsIgnoreCase("blacklist")){if(!$.isAdmin(t))return void $.say($.whisperPrefix(t)+$.adminMsg);if(!d)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.blacklist.usage"));if(d.equalsIgnoreCase("add")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.blacklist.add.usage"));var m=i.replace(d,"").trim().toLowerCase();$.inidb.set("blackList","phrase_"+b.length,m),b.push(m),$.say($.whisperPrefix(t)+$.lang.get("chatmoderator.blacklist.added"))}if(d.equalsIgnoreCase("remove")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.blacklist.remove.usage"));if(!$.inidb.exists("blackList","phrase_"+parseInt(l)))return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.err"));$.inidb.del("blackList","phrase_"+parseInt(l)),e(),$.say($.whisperPrefix(t)+$.lang.get("chatmoderator.blacklist.removed"))}if(d.equalsIgnoreCase("show")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.blacklist.show.usage"));if(!$.inidb.exists("blackList","phrase_"+parseInt(l)))return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.err"));$.say($.whisperPrefix(t)+$.inidb.get("blackList","phrase_"+parseInt(l)))}}if(s.equalsIgnoreCase("whiteList")){if(!$.isAdmin(t))return void $.say($.whisperPrefix(t)+$.adminMsg);if(!d)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.whitelist.usage"));if(d.equalsIgnoreCase("add")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.whitelist.add.usage"));var h=i.replace(d,"").trim().toLowerCase();$.inidb.set("whiteList","link_"+p.length,h),p.push(h),$.say($.whisperPrefix(t)+$.lang.get("chatmoderator.whitelist.link.added"))}if(d.equalsIgnoreCase("remove")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.whitelist.remove.usage"));if(!$.inidb.exists("whiteList","link_"+parseInt(l)))return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.err"));$.inidb.del("whiteList","link_"+parseInt(l)),r(),$.say($.whisperPrefix(t)+$.lang.get("chatmoderator.whitelist.removed"))}if(d.equalsIgnoreCase("show")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.whitelist.show.usage"));if(!$.inidb.exists("whiteList","link_"+parseInt(l)))return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.err"));$.say($.whisperPrefix(t)+$.inidb.get("whiteList","link_"+parseInt(l)))}}if(s.equalsIgnoreCase("moderation")||s.equalsIgnoreCase("mod")){if(!$.isAdmin(t))return void $.say($.whisperPrefix(t)+$.adminMsg);if(!d)return $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.usage.toggles")),$.say($.whisperPrefix(t)+$.lang.get("chatmoderator.usage.messages")),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.options"));if(d.equalsIgnoreCase("links")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.link.usage",n(y)));if(l.equalsIgnoreCase("on"))return y=!0,$.inidb.set("chatModerator","linksToggle",y),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.link.filter.enabled"));if(l.equalsIgnoreCase("off"))return y=!1,$.inidb.set("chatModerator","linksToggle",y),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.link.filter.disabled"))}if(d.equalsIgnoreCase("caps")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.caps.usage",n(x)));if(l.equalsIgnoreCase("on"))return x=!0,$.inidb.set("chatModerator","capsToggle",x),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.caps.filter.enabled"));if(l.equalsIgnoreCase("off"))return x=!1,$.inidb.set("chatModerator","capsToggle",x),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.caps.filter.disabled"))}if(d.equalsIgnoreCase("spam")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.spam.usage",n(C)));if(l.equalsIgnoreCase("on"))return C=!0,$.inidb.set("chatModerator","spamToggle",C),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.spam.filter.enabled"));if(l.equalsIgnoreCase("off"))return C=!1,$.inidb.set("chatModerator","spamToggle",C),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.spam.filter.disabled"))}if(d.equalsIgnoreCase("symbols")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.symbols.usage",n(L)));if(l.equalsIgnoreCase("on"))return L=!0,$.inidb.set("chatModerator","symbolsToggle",L),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.symbols.filter.enabled"));if(l.equalsIgnoreCase("off"))return L=!1,$.inidb.set("chatModerator","symbolsToggle",L),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.symbols.filter.disabled"))}if(d.equalsIgnoreCase("emotes")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.emotes.usage",n(B)));if(l.equalsIgnoreCase("on"))return B=!0,$.inidb.set("chatModerator","emotesToggle",B),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.emotes.filter.enabled"));if(l.equalsIgnoreCase("off"))return B=!1,$.inidb.set("chatModerator","emotesToggle",B),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.emotes.filter.disabled"))}if(d.equalsIgnoreCase("colors")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.colors.usage",n(O)));if(l.equalsIgnoreCase("on"))return O=!0,$.inidb.set("chatModerator","colorsToggle",O),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.colors.filter.enabled"));if(l.equalsIgnoreCase("off"))return O=!1,$.inidb.set("chatModerator","colorsToggle",O),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.colors.filter.disabled"))}if(d.equalsIgnoreCase("longmessages")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.message.usage",n(A)));if(l.equalsIgnoreCase("on"))return A=!0,$.inidb.set("chatModerator","longMessageToggle",A),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.message.filter.enabled"));if(l.equalsIgnoreCase("off"))return A=!1,$.inidb.set("chatModerator","longMessageToggle",A),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.message.filter.disabled"))}if(d.equalsIgnoreCase("regulars")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.regulars.usage"));if(l.equalsIgnoreCase("true"))return E=!0,$.inidb.set("chatModerator","regularsToggle",E),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.regulars.enabled"));if(l.equalsIgnoreCase("false"))return E=!1,$.inidb.set("chatModerator","regularsToggle",E),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.regulars.disabled"))}if(d.equalsIgnoreCase("subscribers")){if(!l)return void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.subscribers.usage"));if(l.equalsIgnoreCase("true"))return K=!0,$.inidb.set("chatModerator","subscribersToggle",K),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.subscribers.enabled"));if(l.equalsIgnoreCase("false"))return K=!1,$.inidb.set("chatModerator","subscribersToggle",K),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.subscribers.disabled"))}if(d.equalsIgnoreCase("linksmessage"))return l?(M=i.replace(d,"").trim(),$.inidb.set("chatModerator","linksMessage",M),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.link.message.set",M))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.link.message.usage"));if(d.equalsIgnoreCase("capsmessage"))return l?(v=i.replace(d,"").trim(),$.inidb.set("chatModerator","capsMessage",v),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.caps.message.set",v))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.caps.message.usage"));if(d.equalsIgnoreCase("symbolsmessage"))return l?(k=i.replace(d,"").trim(),$.inidb.set("chatModerator","symbolsMessage",k),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.symbols.message.set",k))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.symbols.message.usage"));if(d.equalsIgnoreCase("emotesmessage"))return l?(F=i.replace(d,"").trim(),$.inidb.set("chatModerator","emotesMessage",F),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.emotes.message.set",F))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.emotes.message.usage"));if(d.equalsIgnoreCase("colorsmessage"))return l?(R=i.replace(d,"").trim(),$.inidb.set("chatModerator","colorsMessage",R),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.colors.message.set",R))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.colors.message.usage"));if(d.equalsIgnoreCase("longmsgmessage"))return l?(G=i.replace(d,"").trim(),$.inidb.set("chatModerator","longMessageMessage",G),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.message.message.set",G))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.message.message.usage"));if(d.equalsIgnoreCase("spammessage"))return l?(q=i.replace(d,"").trim(),$.inidb.set("chatModerator","spamMessage",q),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.spam.message.set",q))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.spam.message.usage"));if(d.equalsIgnoreCase("blacklistmessage"))return l?(U=i.replace(d,"").trim(),$.inidb.set("chatModerator","blacklistMessage",U),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.blacklist.message.set",U))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.blacklist.message.usage"));if(d.equalsIgnoreCase("permittime"))return l?(w=parseInt(l),$.inidb.set("chatModerator","linkPermitTime",w),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.permit.time.set",w))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.permit.time.usage"));if(d.equalsIgnoreCase("capslimit"))return l?(P=parseFloat(l),$.inidb.set("chatModerator","capsLimitPercent",P),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.caps.limit.set",P))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.caps.limit.usage"));if(d.equalsIgnoreCase("capstriggerlength"))return l?(I=parseInt(l),$.inidb.set("chatModerator","capsTriggerLength",I),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.caps.trigger.length.set",capsLimit))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.caps.trigger.length.usage"));if(d.equalsIgnoreCase("spamlimit"))return l?(T=parseInt(l),$.inidb.set("chatModerator","spamLimit",T),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.spam.limit.set",T))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.spam.limit.usage"));if(d.equalsIgnoreCase("symbolslimit"))return l?(D=parseFloat(l),$.inidb.set("chatModerator","symbolsLimitPercent",D),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.symbols.limit.set",D))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.symbols.limit.usage"));if(d.equalsIgnoreCase("symbolsgrouplimit"))return l?(S=parseInt(l),$.inidb.set("chatModerator","symbolsLimitPercent",S),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.symbols.group.limit.set",S))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.symbols.group.limit.usage"));if(d.equalsIgnoreCase("symbolsTriggerLength"))return l?(_=parseInt(l),$.inidb.set("chatModerator","symbolsTriggerLength",_),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.symbols.trigger.length.set",_))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.symbols.trigger.length.usage"));if(d.equalsIgnoreCase("emoteslimit"))return l?(j=parseInt(l),$.inidb.set("chatModerator","emotesLimit",j),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.emotes.limit.set",j))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.emotes.limit.usage"));if(d.equalsIgnoreCase("messagecharacterlimit"))return l?(N=parseInt(l),$.inidb.set("chatModerator","longMessageLimit",N),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.message.limit.set",N))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.message.limit.usage"));if(d.equalsIgnoreCase("timeouttime"))return l?(z=parseInt(l),$.inidb.set("chatModerator","timeoutTime",z),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.timeout.time.set",z))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.timeout.time.usage"));if(d.equalsIgnoreCase("warningtime"))return l?(W=parseInt(l),$.inidb.set("chatModerator","warningTime",W),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.warning.time.set",W))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.warning.time.usage"));if(d.equalsIgnoreCase("messagecooldown"))return l?(H=parseInt(l),$.inidb.set("chatModerator","msgCooldownSec",H),void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.msgcooldown.set",H))):void $.say($.whisperPrefix(t)+$.lang.get("chatmoderator.msgcooldown.usage"))}}),$.bind("initReady",function(){$.bot.isModuleEnabled("./core/chatmoderator.js")&&(r(),e(),$.registerChatCommand("./core/chatmoderator.js","permit",2),$.registerChatCommand("./core/chatmoderator.js","moderation",1),$.registerChatCommand("./core/chatmoderator.js","mod",1),$.registerChatCommand("./core/chatmoderator.js","blacklist",1),$.registerChatCommand("./core/chatmoderator.js","whitelist",1))}),$.timeoutUser=a,$.permitUserLink=g}();
