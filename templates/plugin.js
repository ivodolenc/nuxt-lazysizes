import lazysizes from 'lazysizes'

const options = <%= serialize(options) %>

Object.assign(lazysizes.cfg, options)
