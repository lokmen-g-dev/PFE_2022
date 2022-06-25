var fortigateapi = require("./FortigateApi")
var fortigate1 = new fortigateapi("9B8C2B17D1734B5A75F826D43EFB0EE", "http://172.29.24.51/api/v2/cmdb/firewall/policy/")
console.log(fortigate1.createAdmin(payload))

