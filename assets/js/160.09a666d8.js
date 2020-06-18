(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{748:function(t,e,a){"use strict";a.r(e);var r=a(48),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"growi-v3-4-x-へのアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-v3-4-x-へのアップグレード","aria-hidden":"true"}},[t._v("#")]),t._v(" GROWI v3.4.x へのアップグレード")]),t._v(" "),a("p",[t._v("v3.4 とそれ以前では、動作対象環境およびミドルウェアのバージョンが変更されました。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("GROWI")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("<= v3.3.x")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("v3.4.x")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Node.js")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("v8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("v10")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MongoDB")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3.6")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Elasticsearch")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5.3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6.6")])])])]),t._v(" "),a("p",[t._v("また、"),a("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[t._v("growi-docker-compose"),a("OutboundLink")],1),t._v(" 利用時に起動する Elasticsearch の Docker イメージは、\n従来の "),a("a",{attrs:{href:"https://github.com/docker-library/elasticsearch/blob/6854914f0b890840c75b6db9eeaefbc26177df9c/5/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-library/elasticsearch"),a("OutboundLink")],1),t._v(" から、\n"),a("a",{attrs:{href:"https://www.docker.elastic.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker.elastic.co"),a("OutboundLink")],1),t._v(" 公式が提供するイメージに変更されました。")]),t._v(" "),a("h2",{attrs:{id:"オンプレミスで利用している場合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#オンプレミスで利用している場合","aria-hidden":"true"}},[t._v("#")]),t._v(" オンプレミスで利用している場合")]),t._v(" "),a("h3",{attrs:{id:"node-js-のアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-のアップグレード","aria-hidden":"true"}},[t._v("#")]),t._v(" Node.js のアップグレード")]),t._v(" "),a("ol",[a("li",[t._v("v10 にアップグレードしてください")])]),t._v(" "),a("h3",{attrs:{id:"mongodb-のアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-のアップグレード","aria-hidden":"true"}},[t._v("#")]),t._v(" MongoDB のアップグレード")]),t._v(" "),a("ol",[a("li",[t._v("3.6 以降にアップグレードしてください\n"),a("ul",[a("li",[t._v("データはそのまま利用可能です")])])])]),t._v(" "),a("h3",{attrs:{id:"elasticsearch-のアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-のアップグレード","aria-hidden":"true"}},[t._v("#")]),t._v(" Elasticsearch のアップグレード")]),t._v(" "),a("ol",[a("li",[t._v("6.6 以降にアップグレードし、必要なプラグインをインストールしてください\n"),a("ul",[a("li",[t._v("インデックスデータは GROWI の管理画面から再構築可能なので、破棄しても構いません")])])])]),t._v(" "),a("h2",{attrs:{id:"growi-docker-compose-を利用している場合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-docker-compose-を利用している場合","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[t._v("growi-docker-compose"),a("OutboundLink")],1),t._v(" を利用している場合")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("既存コンテナの削除")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MongoDB, Elasticsearch コンテナを削除")]),t._v("\ndocker-compose "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" mongodb elasticsearch\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Elasticsearch のボリュームを削除")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("実際のボリューム名は "),a("code",[t._v("docker volume ls")]),t._v(" で確認してください")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker volume "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" growi_es_data\ndocker volume "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" growi_es_plugins\n")])])])]),t._v(" "),a("li",[a("p",[t._v("起動")])])]),t._v(" "),a("h2",{attrs:{id:"起動後"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起動後","aria-hidden":"true"}},[t._v("#")]),t._v(" 起動後")]),t._v(" "),a("ol",[a("li",[t._v("管理画面の全文検索管理ページ("),a("code",[t._v("/admin/search")]),t._v(")で、インデックスを再構築してください")])])])},[],!1,null,null,null);e.default=s.exports}}]);