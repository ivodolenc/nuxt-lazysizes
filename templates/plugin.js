import lazysizes from 'lazysizes'

const lsConfig = <%= serialize(options.config) %>

Object.assign(lazysizes.cfg, lsConfig)

<% if (options.plugins.blurUp) { %>
  require('lazysizes/plugins/blur-up/ls.blur-up')
<% } %>

<% if (options.plugins.parentFit) { %>
  require('lazysizes/plugins/parent-fit/ls.parent-fit')
<% } %>

<% if (options.plugins.nativeLoading || options.plugins.unveilhooks || options.plugins.rias) { %>
  if(process.client){
    <% if (options.plugins.nativeLoading) { %>
      require('lazysizes/plugins/native-loading/ls.native-loading')
    <% } %>
      
    <% if (options.plugins.unveilhooks) { %>
      require('lazysizes/plugins/unveilhooks/ls.unveilhooks')
    <% } %>

    <% if (options.plugins.rias) { %>
      require('lazysizes/plugins/rias/ls.rias')
    <% } %>
  }
<% } %>