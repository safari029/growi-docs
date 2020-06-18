(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{730:function(_,t,v){"use strict";v.r(t);var d=v(48),e=Object(d.a)({},function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"環境変数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#環境変数","aria-hidden":"true"}},[_._v("#")]),_._v(" 環境変数")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("環境変数名")]),_._v(" "),v("th",[_._v("説明")]),_._v(" "),v("th",[_._v("デフォルト値")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("MONGO_URI")])]),_._v(" "),v("td",[_._v("接続する MongoDB サーバーの URI")]),_._v(" "),v("td",[v("code",[_._v("mongodb://localhost/growi")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("NO_CDN")])]),_._v(" "),v("td",[v("code",[_._v("true")]),_._v(" の場合、システムは CDN を使用しません。代わりに全てのリソースはクライアントビルド時に CDN からダウンロードされ、利用時は GROWI Express serverからのみ提供されるようになります。")]),_._v(" "),v("td",[v("code",[_._v("false")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("ELASTICSEARCH_URI")])]),_._v(" "),v("td",[_._v("接続する Elasticearch サーバーの URI")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("ELASTICSEARCH_REQUEST_TIMEOUT")])]),_._v(" "),v("td",[_._v("リクエスト時のタイムアウト(msec)")]),_._v(" "),v("td",[_._v("8000")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("REDIS_URI")])]),_._v(" "),v("td",[_._v("接続する Redis サーバーの URI (Redis を MongoDB の代わりにセッションストアとして利用する場合に設定してください）")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("PASSWORD_SEED")])]),_._v(" "),v("td",[_._v("パスワードハッシュ生成時に使用されるパスワードシード")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SECRET_TOKEN")])]),_._v(" "),v("td",[_._v("発行された cookie の正当性を検証するためのシークレットトークン")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SESSION_NAME")])]),_._v(" "),v("td",[_._v("Express からのレスポンスに含まれる cookie 内のセッション ID 名")]),_._v(" "),v("td",[v("code",[_._v("connect.sid")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("FORCE_WIKI_MODE")])]),_._v(" "),v("td",[_._v("wiki 閲覧モードの強制指定")]),_._v(" "),v("td",[v("code",[_._v("undefined")])])]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v(": "),v("code",[_._v("undefined")]),_._v(" 閲覧権限は管理画面のセキュリティ設定に従います。")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v(": "),v("code",[_._v("public")]),_._v(" 全てのページを強制的にパブリックにします。")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v(": "),v("code",[_._v("private")]),_._v(" 全てのページを強制的に非公開にします。")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("FORMAT_NODE_LOG")])]),_._v(" "),v("td",[v("code",[_._v("false")]),_._v("の場合、サーバーログを JSON 形式で出力します。("),v("code",[_._v("NODE_ENV=production")]),_._v(" の時のみ可能)")]),_._v(" "),v("td",[v("code",[_._v("true")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("MATHJAX")])]),_._v(" "),v("td",[_._v("(TBD)")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("USER_UPPER_LIMIT")])]),_._v(" "),v("td",[_._v("(TBD)")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("ファイルアップロードオプション")])]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("FILE_UPLOAD")])]),_._v(" "),v("td",[_._v("ファイルアップロード先のストレージ")]),_._v(" "),v("td",[v("code",[_._v("aws")])])]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v(": "),v("code",[_._v("aws")]),_._v(" Amazon Web Service S3 を使用します。(管理ページにて AWS 設定を行う必要があります。)")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v(": "),v("code",[_._v("gcs")]),_._v(" Google Cloud Storage を使用します。(環境変数にて使用する GCS を設定する必要があります。)")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v(": "),v("code",[_._v("mongodb")]),_._v(" MongoDB の GridFS　機能を使用します。 (別途の設定は不要です。)")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v(": "),v("code",[_._v("local")]),_._v(" ローカルのファイルシステムを使用します。 (別途の設定は不要です。)")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v(": "),v("code",[_._v("none")]),_._v(" ファイルアップロードを無効にします。")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("FILE_UPLOAD_DISABLED")])]),_._v(" "),v("td",[v("code",[_._v("true")]),_._v(" の場合、ファイルアップロード機能を無効にしますが、既にアップロードされている画像の閲覧は可能です。")]),_._v(" "),v("td",[v("code",[_._v("false")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("MAX_FILE_SIZE")])]),_._v(" "),v("td",[_._v("アップロード可能なファイルサイズ上限（bytes）。")]),_._v(" "),v("td",[v("code",[_._v("Infinity")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("FILE_UPLOAD_TOTAL_LIMIT")])]),_._v(" "),v("td",[_._v("アップロードファイルの総容量の上限（bytes）")]),_._v(" "),v("td",[v("code",[_._v("Infinity")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("GCS_API_KEY_JSON_PATH")])]),_._v(" "),v("td",[v("a",{attrs:{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys",target:"_blank",rel:"noopener noreferrer"}},[_._v("GCP API 認証用のサービスアカウントキー"),v("OutboundLink")],1),_._v(" を含む JSON ファイルのパス")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("GCS_BUCKET")])]),_._v(" "),v("td",[_._v("利用する GCS バケット名")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("GCS_UPLOAD_NAMESPACE")])]),_._v(" "),v("td",[_._v("バケット内に作成するファイルアップロード用のディレクトリ名")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("外部システム連携オプション")])]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("HACKMD_URI")])]),_._v(" "),v("td",[_._v("接続する "),v("a",{attrs:{href:"https://hackmd.io/",target:"_blank",rel:"noopener noreferrer"}},[_._v("HackMD(CodiMD)"),v("OutboundLink")],1),_._v(" サーバーの URI")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("このサーバーは GROWI エージェントをロードする必要があります。 セットアップ方法は"),v("RouterLink",{attrs:{to:"/en/admin-guide/admin-cookbook/integrate-with-hackmd.html"}},[_._v("こちら")]),_._v("。")],1),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("HACKMD_URI_FOR_SERVER")])]),_._v(" "),v("td",[_._v("GROWI Express サーバーが参照する "),v("a",{attrs:{href:"https://hackmd.io/",target:"_blank",rel:"noopener noreferrer"}},[_._v("HackMD(CodiMD)"),v("OutboundLink")],1),_._v(" のURI。 未設定の場合は "),v("code",[_._v("HACKMD_URI")]),_._v(" が使用されます。")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("PLANTUML_URI")])]),_._v(" "),v("td",[_._v("接続する "),v("a",{attrs:{href:"http://plantuml.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("PlantUML"),v("OutboundLink")],1),_._v(" サーバーの URI")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("BLOCKDIAG_URI")])]),_._v(" "),v("td",[_._v("接続する "),v("a",{attrs:{href:"http://http://blockdiag.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("blockdiag"),v("OutboundLink")],1),_._v(" サーバーの URI")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("DRAWIO_URI")])]),_._v(" "),v("td",[_._v("接続する "),v("a",{attrs:{href:"https://www.diagrams.net/",target:"_blank",rel:"noopener noreferrer"}},[_._v("diagrams.net(draw.io)"),v("OutboundLink")],1),_._v(" サーバーの URI")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("管理設定を上書きする環境変数")])]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("APP_SITE_URL")])]),_._v(" "),v("td",[_._v("サイト URL (例: "),v("code",[_._v("https://example.com")]),_._v(" 、 "),v("code",[_._v("https://example.com:8080")]),_._v(")")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("LOCAL_STRATEGY_ENABLED")])]),_._v(" "),v("td",[v("code",[_._v("true")]),_._v(" の場合、ID/Pass ログインが有効になります。")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("LOCAL_STRATEGY_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")])]),_._v(" "),v("td",[v("code",[_._v("true")]),_._v(" の場合、ID/Pass オプションの設定値はローカル DB の値を参照せず、環境変数の値のみを参照します。")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SAML_ENABLED")])]),_._v(" "),v("td",[v("code",[_._v("true")]),_._v(" の場合、SAML 連携を有効にします。")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")])]),_._v(" "),v("td",[v("code",[_._v("true")]),_._v(" の場合、SAML オプションの設定値はローカル DB の値を参照せず、環境変数の値のみを参照します。")]),_._v(" "),v("td",[v("code",[_._v("false")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SAML_ENTRY_POINT")])]),_._v(" "),v("td",[_._v("IdP のエントリーポイント")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SAML_ISSUER")])]),_._v(" "),v("td",[_._v("認証要求をする issuer (SP)")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SAML_ATTR_MAPPING_ID")])]),_._v(" "),v("td",[_._v("SAML Identity プロバイダ内で一意に識別可能な値を格納している属性")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SAML_ATTR_MAPPING_USERNAME")])]),_._v(" "),v("td",[_._v("新規ユーザーのアカウント名 ("),v("code",[_._v("username")]),_._v(") に関連付ける属性")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SAML_ATTR_MAPPING_MAIL")])]),_._v(" "),v("td",[_._v("新規ユーザーのメールアドレスに関連付ける属性")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SAML_ATTR_MAPPING_FIRST_NAME")])]),_._v(" "),v("td",[_._v("新規ユーザーの姓に関連付ける属性")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SAML_ATTR_MAPPING_LAST_NAME")])]),_._v(" "),v("td",[_._v("新規ユーザーの名に関連付ける属性")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("SAML_CERT")])]),_._v(" "),v("td",[_._v("IdP からのレスポンスを検証するための PEM エンコードされた X.509 証明書文字列")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("OAUTH_GOOGLE_CLIENT_ID")])]),_._v(" "),v("td",[_._v("OAuth ログインで使用する Google API の クライアント ID")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("OAUTH_GOOGLE_CLIENT_SECRET")])]),_._v(" "),v("td",[_._v("OAuth ログインで使用する Google API のクライアントシークレット")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("OAUTH_GITHUB_CLIENT_ID")])]),_._v(" "),v("td",[_._v("OAuth ログインで使用する GitHub API のクライアント ID")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("OAUTH_GITHUB_CLIENT_SECRET")])]),_._v(" "),v("td",[_._v("OAuth ログインで使用する GitHub API のクライアント シークレット")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("OAUTH_TWITTER_CONSUMER_KEY")])]),_._v(" "),v("td",[_._v("OAuth ログインで使用する Twitter カスタマーキー (API キー)")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("code",[_._v("OAUTH_TWITTER_CONSUMER_SECRET")])]),_._v(" "),v("td",[_._v("OAuth ログインで使用する Twitter カスタマーシークレット(API シークレット)")]),_._v(" "),v("td")])])])])},[],!1,null,null,null);t.default=e.exports}}]);