(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{425:function(e,t,a){e.exports=a.p+"assets/img/lsx_gif.31f08b39.gif"},715:function(e,t,a){"use strict";a.r(t);var r=a(48),i=Object(r.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"add-a-page-hierarchy-using-lsx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-a-page-hierarchy-using-lsx","aria-hidden":"true"}},[e._v("#")]),e._v(" Add a page hierarchy using lsx")]),e._v(" "),r("p",[e._v("You can add a page hierarchy of the current page or of another\npage using "),r("code",[e._v("$lsx()")]),e._v(", as shown below.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(425),alt:"lsx"}})]),e._v(" "),r("p",[e._v("This is useful for parent pages with large child hierarchy\nstructures.")]),e._v(" "),r("h2",{attrs:{id:"add-a-page-hierarchy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-a-page-hierarchy","aria-hidden":"true"}},[e._v("#")]),e._v(" Add a page hierarchy")]),e._v(" "),r("p",[e._v("By default, the command "),r("code",[e._v("$lsx()")]),e._v(" will produce the hierarchy\nof the current page.  You can also add hierarchies of other pages:")]),e._v(" "),r("p",[e._v("By supplying a page name beginning with "),r("code",[e._v("/")]),e._v(", you can provide a\npage path from your wiki's main page.  For example, if you\nenter "),r("code",[e._v("$lsx(/user)")]),e._v(', the hierarchy of the main page\'s direct child\ncalled "user" will be produced.')]),e._v(" "),r("p",[e._v("By beginning your page name with "),r("code",[e._v(".")]),e._v(", you can provide a page\npath from the current page.  For example, "),r("code",[e._v("$lsx (./sample)")]),e._v(' will\nprovide the hierarchy under the current page\'s child called "sample".')]),e._v(" "),r("p",[e._v("If the provided page name does not correspond to a page in the wiki,\nan error message will be displayed.")]),e._v(" "),r("h2",{attrs:{id:"additional-features-of-lsx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#additional-features-of-lsx","aria-hidden":"true"}},[e._v("#")]),e._v(" Additional features of lsx")]),e._v(" "),r("p",[r("code",[e._v("$lsx()")]),e._v(" allows you to set many additional options to customize your\npage hierarchy display.  You can use any combination of them, each\nseparated by a comma, for example:")]),e._v(" "),r("p",[r("code",[e._v("$lsx(/page, depth=1, sort=createdAt, reverse=true)")])]),e._v(" "),r("p",[e._v("The options you can set include:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Parameter name")]),e._v(" "),r("th",[e._v("Default value")]),e._v(" "),r("th",[e._v("Explanation")]),e._v(" "),r("th",[e._v("Additional details")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("num")]),e._v(" "),r("td",[e._v("not set")]),e._v(" "),r("td",[e._v("Specify the number of pages in the hierarchy.")]),e._v(" "),r("td",[r("a",{attrs:{href:"#num-option"}},[e._v("num option details")])])]),e._v(" "),r("tr",[r("td",[e._v("depth")]),e._v(" "),r("td",[e._v("not set")]),e._v(" "),r("td",[e._v("Specify the maximum hierarchy depth to display.")]),e._v(" "),r("td",[r("a",{attrs:{href:"#depth-option"}},[e._v("depth option details")])])]),e._v(" "),r("tr",[r("td",[e._v("sort")]),e._v(" "),r("td",[e._v("path")]),e._v(" "),r("td",[e._v("Specify the sort order of the hierarchy.")]),e._v(" "),r("td",[r("a",{attrs:{href:"#sort-option"}},[e._v("sort option details")])])]),e._v(" "),r("tr",[r("td",[e._v("reverse")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td",[e._v("Reverse the order of the hierarchy.")]),e._v(" "),r("td",[r("a",{attrs:{href:"#reverse-option"}},[e._v("reverse option details")])])]),e._v(" "),r("tr",[r("td",[e._v("filter")]),e._v(" "),r("td",[e._v("not set")]),e._v(" "),r("td",[e._v("Filter the hierarchy according to some parameters.")]),e._v(" "),r("td",[r("a",{attrs:{href:"#filter-option"}},[e._v("filter option details")])])])])]),e._v(" "),r("p",[e._v("Additional details are as follows.")]),e._v(" "),r("h3",{attrs:{id:"num"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#num","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("num")])]),e._v(" "),r("ul",[r("li",[e._v("Specify the number of pages to display in the hierarchy.")])]),e._v(" "),r("p",[e._v("Example: "),r("code",[e._v("$lsx(num=5)")])]),e._v(" "),r("p",[e._v("You can also specify a page range using "),r("code",[e._v("num")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("$lsx(num=1:10)")]),e._v(" will display the 1st to the 10th result.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("$lsx(num=2:)")]),e._v(" will display the 2nd result to the end of the hierarchy\n(skipping the first result).")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("$lsx(num=5+2)")]),e._v(" will display the 5th result, and then the next 2 results\n(5th, 6th, 7th).")])])]),e._v(" "),r("h3",{attrs:{id:"depth"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#depth","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("depth")])]),e._v(" "),r("ul",[r("li",[e._v("Specify the maximum depth of the hierarchy")])]),e._v(" "),r("p",[e._v("Example: "),r("code",[e._v("$lsx(depth=1)")]),e._v(".")]),e._v(" "),r("p",[e._v("By default, the entire hierarchy is displayed with no depth limit.")]),e._v(" "),r("p",[e._v("Ranges can be specified in the same way as "),r("code",[e._v("num")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"sort"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sort","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("sort")])]),e._v(" "),r("p",[e._v("The order of the page list can be specified as follows:")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("$lsx(sort=path)")])]),e._v(" "),r("p",[e._v("Lexicographic (alphabetical) sort by page name.  This is the default setting.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("$lsx(sort=createdAt)")])]),e._v(" "),r("p",[e._v("Sort by page created date in increasing order (oldest page first).")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("$lsx(sort=updatedAt)")])]),e._v(" "),r("p",[e._v("Sort by page last updated date in increasing order.")])])]),e._v(" "),r("h3",{attrs:{id:"reverse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reverse","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("reverse")])]),e._v(" "),r("ul",[r("li",[e._v("Reverse the sort order.  Supported values are "),r("code",[e._v("true")]),e._v(" and "),r("code",[e._v("false")]),e._v(".\nDefault value is "),r("code",[e._v("false")]),e._v(".")])]),e._v(" "),r("p",[e._v("Example: "),r("code",[e._v("$lsx(sort=updatedAt, reverse=true)")])]),e._v(" "),r("p",[e._v("In this example, the hierarchy will be displayed in order of\npage last updated date, with the most recently updated page first.")]),e._v(" "),r("h3",{attrs:{id:"filter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filter","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("filter")])]),e._v(" "),r("ul",[r("li",[e._v("Filter the hierarchy to display only pages containing a specified\ntext in the title")])]),e._v(" "),r("p",[e._v("Example: "),r("code",[e._v("$lsx(filter=2019)")])]),e._v(" "),r("p",[e._v("In this example, only pages with "),r("code",[e._v("2019")]),e._v(" in the page name are displayed\nin the list.")]),e._v(" "),r("h2",{attrs:{id:"github"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github","aria-hidden":"true"}},[e._v("#")]),e._v(" GitHub")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("$lsx()")]),e._v(" function used in GROWI originated as the\n"),r("a",{attrs:{href:"http://ukiya.sakura.ne.jp/index.php?PukiWiki%2F1.4%2F%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%2F%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%2F%E7%8B%AC%E8%87%AA%E3%81%AB%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%9F%E3%82%82%E3%81%AE%2Flsx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pukiwiki lsx plugin"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("The GROWI implementation can be found on our\n"),r("a",{attrs:{href:"https://github.com/weseek/growi-plugin-lsx",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),r("OutboundLink")],1)])])},[],!1,null,null,null);t.default=i.exports}}]);