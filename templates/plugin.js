import lazysizes from 'lazysizes'

const lsConfig = <%= serialize(options.config) %>

Object.assign(lazysizes.cfg, lsConfig)

<% if (options.plugins.blurUp) { %>
  require('lazysizes/plugins/blur-up/ls.blur-up')
<% } %>

<% if (options.plugins.parentFit) { %>
  require('lazysizes/plugins/parent-fit/ls.parent-fit')
<% } %>

<% if (options.plugins.optimumx) { %>
  require('lazysizes/plugins/optimumx/ls.optimumx')
<% } %>

<% if (
  options.plugins.nativeLoading || 
  options.plugins.unveilhooks || 
  options.plugins.rias || 
  options.plugins.customMedia || 
  options.plugins.bgset
) { %>
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

    <% if (options.plugins.customMedia) { %>
      require('lazysizes/plugins/custommedia/ls.custommedia')
    <% } %>

    <% if (options.plugins.bgset) { %>
      require('lazysizes/plugins/bgset/ls.bgset')
    <% } %>
  }
<% } %>