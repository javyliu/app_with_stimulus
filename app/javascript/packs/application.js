// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
//import * as ActiveStorage from "@rails/activestorage"
//import "channels"
//直接导入css文件即可，不用再安装相应loader, 试用后对于大的css文件变没有变得更快，所以保持webpack仅编译js
//import "welcome"

Rails.start()
Turbolinks.start()
//ActiveStorage.start()

import "controllers"
