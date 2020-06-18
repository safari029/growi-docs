(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{736:function(e,t,a){"use strict";a.r(t);var r=a(48),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"heroku"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heroku","aria-hidden":"true"}},[e._v("#")]),e._v(" Heroku")]),e._v(" "),a("h2",{attrs:{id:"アプリの起動"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アプリの起動","aria-hidden":"true"}},[e._v("#")]),e._v(" アプリの起動")]),e._v(" "),a("ol",[a("li",[e._v("Go to "),a("a",{attrs:{href:"https://github.com/weseek/growi/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("the latest release page on GitHub"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Go to file tree URL like https://github.com/weseek/growi/tree/vX.X.x")]),e._v(" "),a("li",[e._v('Click "Deploy to Heroku" button at the top of README.md\n'),a("ol",[a("li",[e._v("Your browser will jump to Heroku")]),e._v(" "),a("li",[e._v("Login if you need")])])]),e._v(" "),a("li",[e._v("Deploy app")])]),e._v(" "),a("h2",{attrs:{id:"アップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アップグレード","aria-hidden":"true"}},[e._v("#")]),e._v(" アップグレード")]),e._v(" "),a("h3",{attrs:{id:"heroku-cli-のインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heroku-cli-のインストール","aria-hidden":"true"}},[e._v("#")]),e._v(" Heroku CLI のインストール")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://devcenter.heroku.com/articles/heroku-cli#download-and-install",target:"_blank",rel:"noopener noreferrer"}},[e._v("公式ページ"),a("OutboundLink")],1),e._v("を参考にHeroku CLIをインストールしてください。")]),e._v(" "),a("h3",{attrs:{id:"heroku-cli-を使って-app-のリポジトリを更新する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heroku-cli-を使って-app-のリポジトリを更新する","aria-hidden":"true"}},[e._v("#")]),e._v(" Heroku CLI を使って App のリポジトリを更新する")]),e._v(" "),a("p",[e._v("まず以下のコマンドによりHerokuにログインします。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ heroku login \n")])])]),a("p",[e._v("続いて, Herokuからリポジトリをクローンします。クローンするときの名前はHerokuでのApp Nameになります.\n"),a("code",[e._v("warning: You appear to have cloned an empty repository.")]),e._v("のようなメッセージが出ることがありますが無視して構いません。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("heroku git:clone -a [App Name]\n")])])]),a("p",[e._v("git remoteで正しくremoteが登録されているか確認します。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git remote -v\nheroku\thttps://git.heroku.com/[App Name].git (fetch)\nheroku\thttps://git.heroku.com/[App Name].git (push)\n")])])]),a("p",[e._v("続いて, GitHub上のGROWIのリポジトリをremoteに登録します。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git remote add origin https://github.com/weseek/growi.git\n")])])]),a("p",[e._v("登録したGROWIリポジトリからtag一覧を取得します。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git pull origin --tags \n")])])]),a("p",[e._v("使用したいバージョンにブランチを作成してチェックアウトします。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout -b growi-vX.X.X refs/tags/vX.X.X\n")])])]),a("p",[e._v("作成したブランチをHerokuリポジトリのmasterにpushします。これにより、Heroku上でbuildとdeployが行われエラー等がでなければアップグレード完了となります。場合によっては"),a("code",[e._v("--force")]),e._v("オプションの付与が必要になります。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git push heroku growi-vX.X.X:master\n")])])])])},[],!1,null,null,null);t.default=s.exports}}]);