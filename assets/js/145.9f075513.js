(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{734:function(e,a,t){"use strict";t.r(a);var r=t(48),s=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mongodb-のバックアップ-リストア"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-のバックアップ-リストア","aria-hidden":"true"}},[e._v("#")]),e._v(" MongoDB のバックアップ/リストア")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#概要"}},[e._v("概要")])]),t("li",[t("a",{attrs:{href:"#aws-s3-を利用する方法"}},[e._v("AWS S3 を利用する方法")])]),t("li",[t("a",{attrs:{href:"#google-cloud-platform-を利用する方法"}},[e._v("Google Cloud Platform を利用する方法")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[e._v("#")]),e._v(" 概要")]),e._v(" "),t("p",[e._v("この章では"),t("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),t("OutboundLink")],1),e._v(" を利用したバックアップとリストアの方法を紹介します。")]),e._v(" "),t("h3",{attrs:{id:"必要なもの"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#必要なもの","aria-hidden":"true"}},[e._v("#")]),e._v(" 必要なもの")]),e._v(" "),t("ul",[t("li",[e._v("Docker")]),e._v(" "),t("li",[e._v("バックアップファイルをアップロードするための AWS S3 バケット\n"),t("ul",[t("li",[e._v("S3 バケットへのアクセス権を持った IAM ユーザーのアクセスキーおよびシークレットキー")])])])]),e._v(" "),t("h2",{attrs:{id:"aws-s3-を利用する方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-s3-を利用する方法","aria-hidden":"true"}},[e._v("#")]),e._v(" AWS S3 を利用する方法")]),e._v(" "),t("h3",{attrs:{id:"事前作業"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事前作業","aria-hidden":"true"}},[e._v("#")]),e._v(" 事前作業")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),t("OutboundLink")],1),e._v(" は、シェルスクリプトを実行するテンポラリなコンテナを作成してバックアップ/リストアを行いますが、そのコンテナ内から MongoDB サーバーへの疎通が可能になるように、以下に示す docker コマンドオプションを追加する必要があります。")]),e._v(" "),t("h4",{attrs:{id:"mongodb-が-docker-コンテナで動作している場合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-が-docker-コンテナで動作している場合","aria-hidden":"true"}},[e._v("#")]),e._v(" MongoDB が docker コンテナで動作している場合")]),e._v(" "),t("p",[e._v("コンテナ名を調べる下記コマンドを実行し、コンテナ名("),t("code",[e._v("${container}")]),e._v(")を使って"),t("code",[e._v("--link ${container}:mongo")]),e._v(" オプションを追加してください。")]),e._v(" "),t("h5",{attrs:{id:"e-g"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#e-g","aria-hidden":"true"}},[e._v("#")]),e._v(" e.g.")]),e._v(" "),t("p",[t("code",[e._v("docker ps")]),e._v(" コマンドでコンテナ名を調べます。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("vagrant@ubuntu-xenial:/etc/docker-compose$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\nCONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS                   PORTS               NAMES\n21a10f879cba        mongo                           "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker-entrypoint.s…"')]),e._v("   11 minutes ago      Up 11 minutes            27017/tcp           serene_swartz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("man")]),e._v("\n")])])]),t("p",[e._v("上記コマンドの結果、コンテナ名は "),t("code",[e._v("serene_swartzman")]),e._v(" と分かるので、追加するオプションは "),t("code",[e._v("--link serene_swartz:mongo")]),e._v(" となります。")]),e._v(" "),t("h4",{attrs:{id:"mongodb-が-docker-コンテナ以外で動作している場合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-が-docker-コンテナ以外で動作している場合","aria-hidden":"true"}},[e._v("#")]),e._v(" MongoDB が docker コンテナ以外で動作している場合")]),e._v(" "),t("h5",{attrs:{id:"docker-ホストの-os-が-linux-の場合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-ホストの-os-が-linux-の場合","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker ホストの OS が Linux の場合")]),e._v(" "),t("p",[t("code",[e._v("--network host")]),e._v(" オプションを追加することで、ホストと同一のネットワークを利用できます。")]),e._v(" "),t("h5",{attrs:{id:"docker-for-mac-の場合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-for-mac-の場合","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker for Mac の場合")]),e._v(" "),t("ul",[t("li",[e._v("(TBD: 執筆者募集)")])]),e._v(" "),t("h5",{attrs:{id:"docker-for-windows-の場合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-for-windows-の場合","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker for Windows の場合")]),e._v(" "),t("ul",[t("li",[e._v("(TBD: 執筆者募集)")])]),e._v(" "),t("h3",{attrs:{id:"バックアップ手順"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#バックアップ手順","aria-hidden":"true"}},[e._v("#")]),e._v(" バックアップ手順")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),t("OutboundLink")],1),e._v(" コンテナを、クリーンアップオプション("),t("code",[e._v("--rm")]),e._v(")付きで実行します"),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker run --rm \\\n  -e MONGODB_HOST"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Target MongoDB Host"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e AWS_ACCESS_KEY_ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Your IAM Access Key ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e AWS_SECRET_ACCESS_KEY"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Your IAM Secret Access Key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e S3_TARGET_BUCKET_URL"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Target S3 Bucket URL "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s3://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  weseek/mongodb-awesome-backup\n")])])])]),e._v(" "),t("li",[e._v("対象となる MongoDB サーバーの全てのデータベースのデータを取得し、 "),t("code",[e._v("backup-YYYYMMdd.tar.bz2")]),e._v("として指定された S3 バケットにアップロードされます")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("その他のオプションは "),t("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),t("OutboundLink")],1),e._v(" を参照してください")])]),e._v(" "),t("h3",{attrs:{id:"リストア手順"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#リストア手順","aria-hidden":"true"}},[e._v("#")]),e._v(" リストア手順")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),t("OutboundLink")],1),e._v(" コンテナを、クリーンアップオプション("),t("code",[e._v("--rm")]),e._v(")付きで実行します"),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker run --rm \\\n  -e MONGODB_HOST"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Target MongoDB Host"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e AWS_ACCESS_KEY_ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Your IAM Access Key ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e AWS_SECRET_ACCESS_KEY"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Your IAM Secret Access Key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e S3_TARGET_BUCKET_URL"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Target S3 Bucket URL "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s3://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e S3_TARGET_FILE"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("backup-YYYYMMdd.tar.bz2 \\\n  weseek/mongodb-awesome-backup restore\n")])])])]),e._v(" "),t("li",[e._v("指定された S3 バケット配下にある指定ファイル(上記例では "),t("code",[e._v("backup-YYYYMMdd.tar.bz2")]),e._v(" )がリストアされます")]),e._v(" "),t("li",[e._v("GROWI を再起動してください")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("その他のオプションは "),t("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),t("OutboundLink")],1),e._v(" を参照してください")])]),e._v(" "),t("h2",{attrs:{id:"google-cloud-platform-を利用する方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-platform-を利用する方法","aria-hidden":"true"}},[e._v("#")]),e._v(" Google Cloud Platform を利用する方法")]),e._v(" "),t("ul",[t("li",[e._v("(TBD: 執筆者募集)")])])])},[],!1,null,null,null);a.default=s.exports}}]);