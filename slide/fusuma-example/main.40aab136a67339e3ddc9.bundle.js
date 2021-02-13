(self.webpackChunkexample=self.webpackChunkexample||[]).push([[179],{8376:(l,t,e)=>{"use strict";l.exports=e.p+"0b5824a40fa9c7ef8351.svg"},1408:(l,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>u,backgrounds:()=>p,fusumaProps:()=>s,default:()=>k});var n=e(7401),a=e(9332);function r(){return(r=Object.assign||function(l){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(l[n]=e[n])}return l}).apply(this,arguments)}const u=[l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"⛏️ Fusuma でスライドを作るスライド 🙌")),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"Fusuma とは"),(0,a.kt)("img",{src:e(8376),alt:""}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Markdown でスライドを作れる OSS"),(0,a.kt)("li",{parentName:"ul"},"公式サイト ",(0,a.kt)("a",{parentName:"li",href:"https://hiroppy.github.io/fusuma/"},"https://hiroppy.github.io/fusuma/")),(0,a.kt)("li",{parentName:"ul"},"GitHub リポジトリ ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/hiroppy/fusuma"},"https://github.com/hiroppy/fusuma")),(0,a.kt)("li",{parentName:"ul"},"Demo: Introducing Fusuma ",(0,a.kt)("a",{parentName:"li",href:"https://hiroppy.github.io/fusuma/intro/"},"https://hiroppy.github.io/fusuma/intro/")))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"インストールと初期設定"),(0,a.kt)("li",{parentName:"ol"},"動かしてみる"),(0,a.kt)("li",{parentName:"ol"},"基礎的な編集をしてみる"),(0,a.kt)("li",{parentName:"ol"},"スタイルを変更してみる"),(0,a.kt)("li",{parentName:"ol"},"出力してみる")))],p=[0,0,0],s=[{sectionTitle:"タイトル 💁",classes:"title",note:"スピーカーノートを書いていれば\n\nここに表示される\n\nよ"},{},{}],o={};function k({components:l,...t}){return(0,a.kt)("wrapper",r({},o,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"⛏️ Fusuma でスライドを作るスライド 🙌"),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Fusuma とは"),(0,a.kt)("img",{src:e(8376),alt:""}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Markdown でスライドを作れる OSS"),(0,a.kt)("li",{parentName:"ul"},"公式サイト ",(0,a.kt)("a",{parentName:"li",href:"https://hiroppy.github.io/fusuma/"},"https://hiroppy.github.io/fusuma/")),(0,a.kt)("li",{parentName:"ul"},"GitHub リポジトリ ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/hiroppy/fusuma"},"https://github.com/hiroppy/fusuma")),(0,a.kt)("li",{parentName:"ul"},"Demo: Introducing Fusuma ",(0,a.kt)("a",{parentName:"li",href:"https://hiroppy.github.io/fusuma/intro/"},"https://hiroppy.github.io/fusuma/intro/"))),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"インストールと初期設定"),(0,a.kt)("li",{parentName:"ol"},"動かしてみる"),(0,a.kt)("li",{parentName:"ol"},"基礎的な編集をしてみる"),(0,a.kt)("li",{parentName:"ol"},"スタイルを変更してみる"),(0,a.kt)("li",{parentName:"ol"},"出力してみる")))}k.isMDXComponent=!0},6369:(l,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>u,backgrounds:()=>p,fusumaProps:()=>s,default:()=>k});var n=e(7401),a=e(9332);function r(){return(r=Object.assign||function(l){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(l[n]=e[n])}return l}).apply(this,arguments)}const u=[l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"インストールと初期設定")),(0,a.kt)("li",{parentName:"ol"},"動かしてみる"),(0,a.kt)("li",{parentName:"ol"},"基礎的な編集をしてみる"),(0,a.kt)("li",{parentName:"ol"},"スタイルを変更してみる"),(0,a.kt)("li",{parentName:"ol"},"出力してみる"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"インストール"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i fusuma -D\n")),(0,a.kt)("p",null,"事前にスライド用のディレクトリを作って移動する"),(0,a.kt)("p",null,"npm init しておくとよさそう")),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"初期設定"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx fusuma init\n$ tree -a\n\n.\n├── .fusumarc.yml\n├── .github\n│   └── workflows\n│       └── fusuma.yml\n├── slides\n│   └── 0-title.md\n└── style.css\n"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"ひな形が生成される"),(0,a.kt)("img",{src:e(2256),alt:""}),(0,a.kt)("p",null,"前ページで ",(0,a.kt)("inlineCode",{parentName:"p"},"npx fusuma init")," した結果を VS Code で表示"))],p=[0,0,0,0],s=[{sectionTitle:"初期設定 🤖"},{},{},{}],o={};function k({components:l,...t}){return(0,a.kt)("wrapper",r({},o,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"インストールと初期設定")),(0,a.kt)("li",{parentName:"ol"},"動かしてみる"),(0,a.kt)("li",{parentName:"ol"},"基礎的な編集をしてみる"),(0,a.kt)("li",{parentName:"ol"},"スタイルを変更してみる"),(0,a.kt)("li",{parentName:"ol"},"出力してみる")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"インストール"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i fusuma -D\n")),(0,a.kt)("p",null,"事前にスライド用のディレクトリを作って移動する"),(0,a.kt)("p",null,"npm init しておくとよさそう"),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"初期設定"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx fusuma init\n$ tree -a\n\n.\n├── .fusumarc.yml\n├── .github\n│   └── workflows\n│       └── fusuma.yml\n├── slides\n│   └── 0-title.md\n└── style.css\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"ひな形が生成される"),(0,a.kt)("img",{src:e(2256),alt:""}),(0,a.kt)("p",null,"前ページで ",(0,a.kt)("inlineCode",{parentName:"p"},"npx fusuma init")," した結果を VS Code で表示"))}k.isMDXComponent=!0},4553:(l,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>u,backgrounds:()=>p,fusumaProps:()=>s,default:()=>k});var n=e(7401),a=e(9332);function r(){return(r=Object.assign||function(l){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(l[n]=e[n])}return l}).apply(this,arguments)}const u=[l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"インストールと初期設定"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"動かしてみる")),(0,a.kt)("li",{parentName:"ol"},"基礎的な編集をしてみる"),(0,a.kt)("li",{parentName:"ol"},"スタイルを変更してみる"),(0,a.kt)("li",{parentName:"ol"},"出力してみる"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"開発サーバーを起動する"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx fusuma start\n"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"localhost:8080 でスライドを動かせる"),(0,a.kt)("img",{src:e(5e3),alt:""}),(0,a.kt)("p",null,"参考: ",(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/plain/"},"初期状態スライドのデモ"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"Reference"),(0,a.kt)("img",{src:e(7087),alt:""}),(0,a.kt)("p",null,"参考: ",(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/plain/"},"初期状態スライドのデモ"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"サイドバー"),(0,a.kt)("img",{src:e(618),alt:""}),(0,a.kt)("p",null,"section を追加する方法は次の section へ →"))],p=[0,0,0,0,0],s=[{sectionTitle:"動かしてみる 🙃"},{},{},{},{}],o={};function k({components:l,...t}){return(0,a.kt)("wrapper",r({},o,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"インストールと初期設定"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"動かしてみる")),(0,a.kt)("li",{parentName:"ol"},"基礎的な編集をしてみる"),(0,a.kt)("li",{parentName:"ol"},"スタイルを変更してみる"),(0,a.kt)("li",{parentName:"ol"},"出力してみる")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"開発サーバーを起動する"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx fusuma start\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"localhost:8080 でスライドを動かせる"),(0,a.kt)("img",{src:e(5e3),alt:""}),(0,a.kt)("p",null,"参考: ",(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/plain/"},"初期状態スライドのデモ")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Reference"),(0,a.kt)("img",{src:e(7087),alt:""}),(0,a.kt)("p",null,"参考: ",(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/plain/"},"初期状態スライドのデモ")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"サイドバー"),(0,a.kt)("img",{src:e(618),alt:""}),(0,a.kt)("p",null,"section を追加する方法は次の section へ →"))}k.isMDXComponent=!0},414:(l,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>u,backgrounds:()=>p,fusumaProps:()=>s,default:()=>k});var n=e(7401),a=e(9332);function r(){return(r=Object.assign||function(l){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(l[n]=e[n])}return l}).apply(this,arguments)}const u=[l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"インストールと初期設定"),(0,a.kt)("li",{parentName:"ol"},"動かしてみる"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"基礎的な編集をしてみる")),(0,a.kt)("li",{parentName:"ol"},"スタイルを変更してみる"),(0,a.kt)("li",{parentName:"ol"},"出力してみる"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"section を追加する"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- classes: title --\x3e\n\n# Hello😃\n\n---\n\x3c!-- section-title: Ohayo 🙂 --\x3e\n\n## Ohayo 🙂\n\n---\n\x3c!-- section-title: Konichiwa 😉 --\x3e\n\n## Konichiwa 😉\n\n---\n\x3c!-- section-title: Konbanwa 😁 --\x3e\n\n## Konbanwa 😁\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\x3c!-- section-title: foo --\x3e")," と書くことでセクションを追加できる"),(0,a.kt)("p",null,"HTML のコメントっぽい形式で Fusuma の機能を呼び出せる"),(0,a.kt)("p",null,"使える機能は Reference に記載あり")),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"section を基に目次を自動生成できる"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- contents --\x3e\n")),(0,a.kt)("p",null,"目次は次のスライドのようになる")),l=>(0,a.kt)(n.Fragment,null),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"スライドを追加する"),(0,a.kt)("p",null,"下記のように Markdown を記述するファイル内で ",(0,a.kt)("inlineCode",{parentName:"p"},"---")," で区切るか、"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"## Ohayo 🙂\n\nおはよう\n\n---\n\n## Konichiwa 😉\n\nこんにちは\n\n---\n\n## Konbanwa 😁\n\nこんばんは\n\n")),(0,a.kt)("p",null,"もしくは下記のようにファイルを分けると新しいスライドを追加できる。"),(0,a.kt)("img",{src:e(6958),alt:""})),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"スライドに画像を追加してみる"),(0,a.kt)("img",{src:e(8376),alt:""}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'# スライドに画像を追加してみる\n\n<img src="../assets/logo.svg" alt="" />\n'))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"スライドに背景画像を設定してみる"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"# スライドに背景画像を設定してみる\n\n\x3c!-- background: '../assets/2-header.jpg' --\x3e\n"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"スピーカーノートを追加する"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- note\nここにスピーカーノートを書く。\n\nここで書いた内容は Presenter モードで当該スライドに\nたどりついたとき画面上に表示される。\n--\x3e\n"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"スピーカーノートの表示"),(0,a.kt)("img",{src:e(4118),alt:""}))],p=[0,0,0,0,0,0,e(8570),0,0],s=[{sectionTitle:"基礎的な編集 🤗"},{},{},{contents:"true"},{},{},{},{note:"ここにスピーカーノートを書く。\n\nここで書いた内容は Presenter モードで当該スライドにたどりついたとき画面上に表示される。"},{}],o={};function k({components:l,...t}){return(0,a.kt)("wrapper",r({},o,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"インストールと初期設定"),(0,a.kt)("li",{parentName:"ol"},"動かしてみる"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"基礎的な編集をしてみる")),(0,a.kt)("li",{parentName:"ol"},"スタイルを変更してみる"),(0,a.kt)("li",{parentName:"ol"},"出力してみる")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"section を追加する"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- classes: title --\x3e\n\n# Hello😃\n\n---\n\x3c!-- section-title: Ohayo 🙂 --\x3e\n\n## Ohayo 🙂\n\n---\n\x3c!-- section-title: Konichiwa 😉 --\x3e\n\n## Konichiwa 😉\n\n---\n\x3c!-- section-title: Konbanwa 😁 --\x3e\n\n## Konbanwa 😁\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\x3c!-- section-title: foo --\x3e")," と書くことでセクションを追加できる"),(0,a.kt)("p",null,"HTML のコメントっぽい形式で Fusuma の機能を呼び出せる"),(0,a.kt)("p",null,"使える機能は Reference に記載あり"),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"section を基に目次を自動生成できる"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- contents --\x3e\n")),(0,a.kt)("p",null,"目次は次のスライドのようになる"),(0,a.kt)("hr",null),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"スライドを追加する"),(0,a.kt)("p",null,"下記のように Markdown を記述するファイル内で ",(0,a.kt)("inlineCode",{parentName:"p"},"---")," で区切るか、"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"## Ohayo 🙂\n\nおはよう\n\n---\n\n## Konichiwa 😉\n\nこんにちは\n\n---\n\n## Konbanwa 😁\n\nこんばんは\n\n")),(0,a.kt)("p",null,"もしくは下記のようにファイルを分けると新しいスライドを追加できる。"),(0,a.kt)("img",{src:e(6958),alt:""}),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"スライドに画像を追加してみる"),(0,a.kt)("img",{src:e(8376),alt:""}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'# スライドに画像を追加してみる\n\n<img src="../assets/logo.svg" alt="" />\n')),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"スライドに背景画像を設定してみる"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"# スライドに背景画像を設定してみる\n\n\x3c!-- background: '../assets/2-header.jpg' --\x3e\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"スピーカーノートを追加する"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- note\nここにスピーカーノートを書く。\n\nここで書いた内容は Presenter モードで当該スライドに\nたどりついたとき画面上に表示される。\n--\x3e\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"スピーカーノートの表示"),(0,a.kt)("img",{src:e(4118),alt:""}))}k.isMDXComponent=!0},3736:(l,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>u,backgrounds:()=>p,fusumaProps:()=>s,default:()=>k});var n=e(7401),a=e(9332);function r(){return(r=Object.assign||function(l){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(l[n]=e[n])}return l}).apply(this,arguments)}const u=[l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"インストールと初期設定"),(0,a.kt)("li",{parentName:"ol"},"動かしてみる"),(0,a.kt)("li",{parentName:"ol"},"基礎的な編集をしてみる"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"スタイルを変更してみる")),(0,a.kt)("li",{parentName:"ol"},"出力してみる"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"Fusuma でスタイルを変更する方法"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"普通に CSS を書く"),(0,a.kt)("li",{parentName:"ul"},"テーマを使う"),(0,a.kt)("li",{parentName:"ul"},"CSS Variables を使う"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"普通に CSS を書く"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/docs/guides/slide-syntax#adding-class-names"},"https://hiroppy.github.io/fusuma/docs/guides/slide-syntax#adding-class-names"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"普通に CSS を書く"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- classes: foo --\x3e\n")),(0,a.kt)("p",null,"HTML コメントっぽい形式でスライド内にクラスを追加する。")),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"style.css に CSS を書くと..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".foo {\n  color: #3498db;\n  background: #ccc;\n}\n"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"このように反映される"),(0,a.kt)("img",{src:e(9420),alt:""})),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"block-start と block-end で div を作れる"),(0,a.kt)("p",null,"同じページ内で一部に CSS を適用するときに便利"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- block-start: foo --\x3e\n\nここに foo クラスを適用する\n\n\x3c!-- block-end --\x3e\n")),(0,a.kt)("div",{className:"foo"},(0,a.kt)("p",null,"ここに foo クラスを適用する"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"block は div タグ"),(0,a.kt)("img",{src:e(5708),alt:""})),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"block でこういう階層も作れる"),(0,a.kt)("img",{src:e(8243),alt:""}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/intro/#slide-8"},"https://hiroppy.github.io/fusuma/intro/#slide-8"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"CSS Variable を使う"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hiroppy/fusuma#customize-styles"},"https://github.com/hiroppy/fusuma#customize-styles"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"CSS Variable を使う"),(0,a.kt)("p",null,"style.css の ",(0,a.kt)("inlineCode",{parentName:"p"},":root")," のコメントアウトを外して global config を書き換えることができる"),(0,a.kt)("img",{src:e(9418),alt:""}),(0,a.kt)("p",null,"↑ これをするとタイトルが赤くなる ↓"),(0,a.kt)("img",{src:e(4439),alt:""})),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"テーマを使う"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/themes/"},"https://hiroppy.github.io/fusuma/themes/"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,'テーマ "node" を使ってみる'),(0,a.kt)("img",{src:e(963),alt:""}),(0,a.kt)("p",null,"style.css でコメントアウトしてるのを外すだけ！")),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,'テーマ "node" を使ってみる'),(0,a.kt)("img",{src:e(6894),alt:""})),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"こんなスライドが作れるという例"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/intro/"},"https://hiroppy.github.io/fusuma/intro/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hiroppy/slides"},"https://github.com/hiroppy/slides")))],p=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],s=[{sectionTitle:"スタイルを変更 😆"},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],o={};function k({components:l,...t}){return(0,a.kt)("wrapper",r({},o,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"インストールと初期設定"),(0,a.kt)("li",{parentName:"ol"},"動かしてみる"),(0,a.kt)("li",{parentName:"ol"},"基礎的な編集をしてみる"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"スタイルを変更してみる")),(0,a.kt)("li",{parentName:"ol"},"出力してみる")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Fusuma でスタイルを変更する方法"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"普通に CSS を書く"),(0,a.kt)("li",{parentName:"ul"},"テーマを使う"),(0,a.kt)("li",{parentName:"ul"},"CSS Variables を使う")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"普通に CSS を書く"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/docs/guides/slide-syntax#adding-class-names"},"https://hiroppy.github.io/fusuma/docs/guides/slide-syntax#adding-class-names")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"普通に CSS を書く"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- classes: foo --\x3e\n")),(0,a.kt)("p",null,"HTML コメントっぽい形式でスライド内にクラスを追加する。"),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"style.css に CSS を書くと..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".foo {\n  color: #3498db;\n  background: #ccc;\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"このように反映される"),(0,a.kt)("img",{src:e(9420),alt:""}),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"block-start と block-end で div を作れる"),(0,a.kt)("p",null,"同じページ内で一部に CSS を適用するときに便利"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- block-start: foo --\x3e\n\nここに foo クラスを適用する\n\n\x3c!-- block-end --\x3e\n")),(0,a.kt)("p",null,"ここに foo クラスを適用する"),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"block は div タグ"),(0,a.kt)("img",{src:e(5708),alt:""}),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"block でこういう階層も作れる"),(0,a.kt)("img",{src:e(8243),alt:""}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/intro/#slide-8"},"https://hiroppy.github.io/fusuma/intro/#slide-8")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"CSS Variable を使う"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hiroppy/fusuma#customize-styles"},"https://github.com/hiroppy/fusuma#customize-styles")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"CSS Variable を使う"),(0,a.kt)("p",null,"style.css の ",(0,a.kt)("inlineCode",{parentName:"p"},":root")," のコメントアウトを外して global config を書き換えることができる"),(0,a.kt)("img",{src:e(9418),alt:""}),(0,a.kt)("p",null,"↑ これをするとタイトルが赤くなる ↓"),(0,a.kt)("img",{src:e(4439),alt:""}),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"テーマを使う"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/themes/"},"https://hiroppy.github.io/fusuma/themes/")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,'テーマ "node" を使ってみる'),(0,a.kt)("img",{src:e(963),alt:""}),(0,a.kt)("p",null,"style.css でコメントアウトしてるのを外すだけ！"),(0,a.kt)("hr",null),(0,a.kt)("h1",null,'テーマ "node" を使ってみる'),(0,a.kt)("img",{src:e(6894),alt:""}),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"こんなスライドが作れるという例"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/intro/"},"https://hiroppy.github.io/fusuma/intro/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hiroppy/slides"},"https://github.com/hiroppy/slides")))}k.isMDXComponent=!0},3236:(l,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>u,backgrounds:()=>p,fusumaProps:()=>s,default:()=>k});var n=e(7401),a=e(9332);function r(){return(r=Object.assign||function(l){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(l[n]=e[n])}return l}).apply(this,arguments)}const u=[l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"インストールと初期設定"),(0,a.kt)("li",{parentName:"ol"},"動かしてみる"),(0,a.kt)("li",{parentName:"ol"},"基礎的な編集をしてみる"),(0,a.kt)("li",{parentName:"ol"},"スタイルを変更してみる"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"出力してみる")))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"PDF で出力する"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-s"},"$ npm install @fusuma/task-pdf\n")),(0,a.kt)("p",null,"↓"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-s"},"$ npx fusuma build\n")),(0,a.kt)("p",null,"↓"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-s"},"$ npx fusuma pdf\n"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"slide.pdf が生成される"),(0,a.kt)("img",{src:e(1492),alt:""})),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"PDF 出力の注意点"),(0,a.kt)("p",null,"先に build していないと export に失敗する"),(0,a.kt)("img",{src:e(9300),alt:""})),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"Presenter モード"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/docs/modes/presenter"},"https://hiroppy.github.io/fusuma/docs/modes/presenter"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"Presenter モード"),(0,a.kt)("img",{src:e(545),alt:""})),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"Presenter モード"),(0,a.kt)("img",{src:e(7940),alt:""})),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"スライドにかかった時間が見える"),(0,a.kt)("img",{src:e(4898),alt:""})),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"Build & Deploy"),(0,a.kt)("p",null,"スライドを build して HTML を生成し、それを GitHub Pages に deploy できる。"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-s"},"$ npx fusuma deploy\n"))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"Deploy で行われるのは"),(0,a.kt)("img",{src:e(8804),alt:""}),(0,a.kt)("p",null,"remote origin の ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," ブランチに build した ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/")," 以下を入れる"))],p=[0,0,0,0,0,0,0,0,0,0],s=[{sectionTitle:"出力してみる 😇"},{},{},{},{},{},{},{},{},{}],o={};function k({components:l,...t}){return(0,a.kt)("wrapper",r({},o,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"全体の流れ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"インストールと初期設定"),(0,a.kt)("li",{parentName:"ol"},"動かしてみる"),(0,a.kt)("li",{parentName:"ol"},"基礎的な編集をしてみる"),(0,a.kt)("li",{parentName:"ol"},"スタイルを変更してみる"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"出力してみる"))),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"PDF で出力する"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-s"},"$ npm install @fusuma/task-pdf\n")),(0,a.kt)("p",null,"↓"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-s"},"$ npx fusuma build\n")),(0,a.kt)("p",null,"↓"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-s"},"$ npx fusuma pdf\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"slide.pdf が生成される"),(0,a.kt)("img",{src:e(1492),alt:""}),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"PDF 出力の注意点"),(0,a.kt)("p",null,"先に build していないと export に失敗する"),(0,a.kt)("img",{src:e(9300),alt:""}),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Presenter モード"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/docs/modes/presenter"},"https://hiroppy.github.io/fusuma/docs/modes/presenter")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Presenter モード"),(0,a.kt)("img",{src:e(545),alt:""}),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Presenter モード"),(0,a.kt)("img",{src:e(7940),alt:""}),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"スライドにかかった時間が見える"),(0,a.kt)("img",{src:e(4898),alt:""}),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Build & Deploy"),(0,a.kt)("p",null,"スライドを build して HTML を生成し、それを GitHub Pages に deploy できる。"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-s"},"$ npx fusuma deploy\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Deploy で行われるのは"),(0,a.kt)("img",{src:e(8804),alt:""}),(0,a.kt)("p",null,"remote origin の ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," ブランチに build した ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/")," 以下を入れる"))}k.isMDXComponent=!0},2585:(l,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>u,backgrounds:()=>p,fusumaProps:()=>s,default:()=>k});var n=e(7401),a=e(9332);function r(){return(r=Object.assign||function(l){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(l[n]=e[n])}return l}).apply(this,arguments)}const u=[l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"QR コードも作れるよ"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- qr: https://lyohe.github.io/ --\x3e\n")),(0,a.kt)("svg",{className:"qr",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"66px",height:"66px",viewBox:"0 0 66 66",preserveAspectRatio:"xMinYMin meet"},(0,a.kt)("rect",{width:"100%",height:"100%",fill:"white",cx:"0",cy:"0"}),(0,a.kt)("path",{d:"M8,8l2,0 0,2 -2,0 0,-2z M10,8l2,0 0,2 -2,0 0,-2z M12,8l2,0 0,2 -2,0 0,-2z M14,8l2,0 0,2 -2,0 0,-2z M16,8l2,0 0,2 -2,0 0,-2z M18,8l2,0 0,2 -2,0 0,-2z M20,8l2,0 0,2 -2,0 0,-2z M24,8l2,0 0,2 -2,0 0,-2z M36,8l2,0 0,2 -2,0 0,-2z M38,8l2,0 0,2 -2,0 0,-2z M40,8l2,0 0,2 -2,0 0,-2z M44,8l2,0 0,2 -2,0 0,-2z M46,8l2,0 0,2 -2,0 0,-2z M48,8l2,0 0,2 -2,0 0,-2z M50,8l2,0 0,2 -2,0 0,-2z M52,8l2,0 0,2 -2,0 0,-2z M54,8l2,0 0,2 -2,0 0,-2z M56,8l2,0 0,2 -2,0 0,-2z M8,10l2,0 0,2 -2,0 0,-2z M20,10l2,0 0,2 -2,0 0,-2z M24,10l2,0 0,2 -2,0 0,-2z M30,10l2,0 0,2 -2,0 0,-2z M32,10l2,0 0,2 -2,0 0,-2z M34,10l2,0 0,2 -2,0 0,-2z M36,10l2,0 0,2 -2,0 0,-2z M44,10l2,0 0,2 -2,0 0,-2z M56,10l2,0 0,2 -2,0 0,-2z M8,12l2,0 0,2 -2,0 0,-2z M12,12l2,0 0,2 -2,0 0,-2z M14,12l2,0 0,2 -2,0 0,-2z M16,12l2,0 0,2 -2,0 0,-2z M20,12l2,0 0,2 -2,0 0,-2z M24,12l2,0 0,2 -2,0 0,-2z M26,12l2,0 0,2 -2,0 0,-2z M32,12l2,0 0,2 -2,0 0,-2z M38,12l2,0 0,2 -2,0 0,-2z M44,12l2,0 0,2 -2,0 0,-2z M48,12l2,0 0,2 -2,0 0,-2z M50,12l2,0 0,2 -2,0 0,-2z M52,12l2,0 0,2 -2,0 0,-2z M56,12l2,0 0,2 -2,0 0,-2z M8,14l2,0 0,2 -2,0 0,-2z M12,14l2,0 0,2 -2,0 0,-2z M14,14l2,0 0,2 -2,0 0,-2z M16,14l2,0 0,2 -2,0 0,-2z M20,14l2,0 0,2 -2,0 0,-2z M24,14l2,0 0,2 -2,0 0,-2z M26,14l2,0 0,2 -2,0 0,-2z M28,14l2,0 0,2 -2,0 0,-2z M32,14l2,0 0,2 -2,0 0,-2z M34,14l2,0 0,2 -2,0 0,-2z M36,14l2,0 0,2 -2,0 0,-2z M38,14l2,0 0,2 -2,0 0,-2z M44,14l2,0 0,2 -2,0 0,-2z M48,14l2,0 0,2 -2,0 0,-2z M50,14l2,0 0,2 -2,0 0,-2z M52,14l2,0 0,2 -2,0 0,-2z M56,14l2,0 0,2 -2,0 0,-2z M8,16l2,0 0,2 -2,0 0,-2z M12,16l2,0 0,2 -2,0 0,-2z M14,16l2,0 0,2 -2,0 0,-2z M16,16l2,0 0,2 -2,0 0,-2z M20,16l2,0 0,2 -2,0 0,-2z M26,16l2,0 0,2 -2,0 0,-2z M28,16l2,0 0,2 -2,0 0,-2z M32,16l2,0 0,2 -2,0 0,-2z M34,16l2,0 0,2 -2,0 0,-2z M38,16l2,0 0,2 -2,0 0,-2z M40,16l2,0 0,2 -2,0 0,-2z M44,16l2,0 0,2 -2,0 0,-2z M48,16l2,0 0,2 -2,0 0,-2z M50,16l2,0 0,2 -2,0 0,-2z M52,16l2,0 0,2 -2,0 0,-2z M56,16l2,0 0,2 -2,0 0,-2z M8,18l2,0 0,2 -2,0 0,-2z M20,18l2,0 0,2 -2,0 0,-2z M24,18l2,0 0,2 -2,0 0,-2z M26,18l2,0 0,2 -2,0 0,-2z M28,18l2,0 0,2 -2,0 0,-2z M34,18l2,0 0,2 -2,0 0,-2z M40,18l2,0 0,2 -2,0 0,-2z M44,18l2,0 0,2 -2,0 0,-2z M56,18l2,0 0,2 -2,0 0,-2z M8,20l2,0 0,2 -2,0 0,-2z M10,20l2,0 0,2 -2,0 0,-2z M12,20l2,0 0,2 -2,0 0,-2z M14,20l2,0 0,2 -2,0 0,-2z M16,20l2,0 0,2 -2,0 0,-2z M18,20l2,0 0,2 -2,0 0,-2z M20,20l2,0 0,2 -2,0 0,-2z M24,20l2,0 0,2 -2,0 0,-2z M28,20l2,0 0,2 -2,0 0,-2z M32,20l2,0 0,2 -2,0 0,-2z M36,20l2,0 0,2 -2,0 0,-2z M40,20l2,0 0,2 -2,0 0,-2z M44,20l2,0 0,2 -2,0 0,-2z M46,20l2,0 0,2 -2,0 0,-2z M48,20l2,0 0,2 -2,0 0,-2z M50,20l2,0 0,2 -2,0 0,-2z M52,20l2,0 0,2 -2,0 0,-2z M54,20l2,0 0,2 -2,0 0,-2z M56,20l2,0 0,2 -2,0 0,-2z M28,22l2,0 0,2 -2,0 0,-2z M30,22l2,0 0,2 -2,0 0,-2z M36,22l2,0 0,2 -2,0 0,-2z M38,22l2,0 0,2 -2,0 0,-2z M40,22l2,0 0,2 -2,0 0,-2z M8,24l2,0 0,2 -2,0 0,-2z M10,24l2,0 0,2 -2,0 0,-2z M16,24l2,0 0,2 -2,0 0,-2z M18,24l2,0 0,2 -2,0 0,-2z M20,24l2,0 0,2 -2,0 0,-2z M28,24l2,0 0,2 -2,0 0,-2z M32,24l2,0 0,2 -2,0 0,-2z M38,24l2,0 0,2 -2,0 0,-2z M46,24l2,0 0,2 -2,0 0,-2z M50,24l2,0 0,2 -2,0 0,-2z M52,24l2,0 0,2 -2,0 0,-2z M54,24l2,0 0,2 -2,0 0,-2z M56,24l2,0 0,2 -2,0 0,-2z M8,26l2,0 0,2 -2,0 0,-2z M16,26l2,0 0,2 -2,0 0,-2z M18,26l2,0 0,2 -2,0 0,-2z M22,26l2,0 0,2 -2,0 0,-2z M24,26l2,0 0,2 -2,0 0,-2z M34,26l2,0 0,2 -2,0 0,-2z M36,26l2,0 0,2 -2,0 0,-2z M38,26l2,0 0,2 -2,0 0,-2z M40,26l2,0 0,2 -2,0 0,-2z M42,26l2,0 0,2 -2,0 0,-2z M48,26l2,0 0,2 -2,0 0,-2z M50,26l2,0 0,2 -2,0 0,-2z M54,26l2,0 0,2 -2,0 0,-2z M8,28l2,0 0,2 -2,0 0,-2z M18,28l2,0 0,2 -2,0 0,-2z M20,28l2,0 0,2 -2,0 0,-2z M26,28l2,0 0,2 -2,0 0,-2z M28,28l2,0 0,2 -2,0 0,-2z M34,28l2,0 0,2 -2,0 0,-2z M38,28l2,0 0,2 -2,0 0,-2z M42,28l2,0 0,2 -2,0 0,-2z M44,28l2,0 0,2 -2,0 0,-2z M50,28l2,0 0,2 -2,0 0,-2z M52,28l2,0 0,2 -2,0 0,-2z M10,30l2,0 0,2 -2,0 0,-2z M14,30l2,0 0,2 -2,0 0,-2z M18,30l2,0 0,2 -2,0 0,-2z M24,30l2,0 0,2 -2,0 0,-2z M26,30l2,0 0,2 -2,0 0,-2z M32,30l2,0 0,2 -2,0 0,-2z M46,30l2,0 0,2 -2,0 0,-2z M48,30l2,0 0,2 -2,0 0,-2z M52,30l2,0 0,2 -2,0 0,-2z M54,30l2,0 0,2 -2,0 0,-2z M8,32l2,0 0,2 -2,0 0,-2z M14,32l2,0 0,2 -2,0 0,-2z M18,32l2,0 0,2 -2,0 0,-2z M20,32l2,0 0,2 -2,0 0,-2z M24,32l2,0 0,2 -2,0 0,-2z M30,32l2,0 0,2 -2,0 0,-2z M36,32l2,0 0,2 -2,0 0,-2z M42,32l2,0 0,2 -2,0 0,-2z M44,32l2,0 0,2 -2,0 0,-2z M46,32l2,0 0,2 -2,0 0,-2z M50,32l2,0 0,2 -2,0 0,-2z M52,32l2,0 0,2 -2,0 0,-2z M54,32l2,0 0,2 -2,0 0,-2z M56,32l2,0 0,2 -2,0 0,-2z M8,34l2,0 0,2 -2,0 0,-2z M10,34l2,0 0,2 -2,0 0,-2z M12,34l2,0 0,2 -2,0 0,-2z M18,34l2,0 0,2 -2,0 0,-2z M22,34l2,0 0,2 -2,0 0,-2z M28,34l2,0 0,2 -2,0 0,-2z M32,34l2,0 0,2 -2,0 0,-2z M36,34l2,0 0,2 -2,0 0,-2z M38,34l2,0 0,2 -2,0 0,-2z M40,34l2,0 0,2 -2,0 0,-2z M48,34l2,0 0,2 -2,0 0,-2z M54,34l2,0 0,2 -2,0 0,-2z M12,36l2,0 0,2 -2,0 0,-2z M14,36l2,0 0,2 -2,0 0,-2z M16,36l2,0 0,2 -2,0 0,-2z M20,36l2,0 0,2 -2,0 0,-2z M22,36l2,0 0,2 -2,0 0,-2z M26,36l2,0 0,2 -2,0 0,-2z M28,36l2,0 0,2 -2,0 0,-2z M30,36l2,0 0,2 -2,0 0,-2z M32,36l2,0 0,2 -2,0 0,-2z M34,36l2,0 0,2 -2,0 0,-2z M36,36l2,0 0,2 -2,0 0,-2z M38,36l2,0 0,2 -2,0 0,-2z M40,36l2,0 0,2 -2,0 0,-2z M44,36l2,0 0,2 -2,0 0,-2z M46,36l2,0 0,2 -2,0 0,-2z M48,36l2,0 0,2 -2,0 0,-2z M50,36l2,0 0,2 -2,0 0,-2z M52,36l2,0 0,2 -2,0 0,-2z M12,38l2,0 0,2 -2,0 0,-2z M16,38l2,0 0,2 -2,0 0,-2z M18,38l2,0 0,2 -2,0 0,-2z M22,38l2,0 0,2 -2,0 0,-2z M30,38l2,0 0,2 -2,0 0,-2z M44,38l2,0 0,2 -2,0 0,-2z M46,38l2,0 0,2 -2,0 0,-2z M48,38l2,0 0,2 -2,0 0,-2z M52,38l2,0 0,2 -2,0 0,-2z M54,38l2,0 0,2 -2,0 0,-2z M8,40l2,0 0,2 -2,0 0,-2z M10,40l2,0 0,2 -2,0 0,-2z M20,40l2,0 0,2 -2,0 0,-2z M24,40l2,0 0,2 -2,0 0,-2z M26,40l2,0 0,2 -2,0 0,-2z M32,40l2,0 0,2 -2,0 0,-2z M38,40l2,0 0,2 -2,0 0,-2z M40,40l2,0 0,2 -2,0 0,-2z M42,40l2,0 0,2 -2,0 0,-2z M44,40l2,0 0,2 -2,0 0,-2z M46,40l2,0 0,2 -2,0 0,-2z M48,40l2,0 0,2 -2,0 0,-2z M50,40l2,0 0,2 -2,0 0,-2z M52,40l2,0 0,2 -2,0 0,-2z M24,42l2,0 0,2 -2,0 0,-2z M36,42l2,0 0,2 -2,0 0,-2z M40,42l2,0 0,2 -2,0 0,-2z M48,42l2,0 0,2 -2,0 0,-2z M8,44l2,0 0,2 -2,0 0,-2z M10,44l2,0 0,2 -2,0 0,-2z M12,44l2,0 0,2 -2,0 0,-2z M14,44l2,0 0,2 -2,0 0,-2z M16,44l2,0 0,2 -2,0 0,-2z M18,44l2,0 0,2 -2,0 0,-2z M20,44l2,0 0,2 -2,0 0,-2z M26,44l2,0 0,2 -2,0 0,-2z M28,44l2,0 0,2 -2,0 0,-2z M40,44l2,0 0,2 -2,0 0,-2z M44,44l2,0 0,2 -2,0 0,-2z M48,44l2,0 0,2 -2,0 0,-2z M8,46l2,0 0,2 -2,0 0,-2z M20,46l2,0 0,2 -2,0 0,-2z M24,46l2,0 0,2 -2,0 0,-2z M26,46l2,0 0,2 -2,0 0,-2z M28,46l2,0 0,2 -2,0 0,-2z M32,46l2,0 0,2 -2,0 0,-2z M36,46l2,0 0,2 -2,0 0,-2z M38,46l2,0 0,2 -2,0 0,-2z M40,46l2,0 0,2 -2,0 0,-2z M48,46l2,0 0,2 -2,0 0,-2z M50,46l2,0 0,2 -2,0 0,-2z M52,46l2,0 0,2 -2,0 0,-2z M54,46l2,0 0,2 -2,0 0,-2z M8,48l2,0 0,2 -2,0 0,-2z M12,48l2,0 0,2 -2,0 0,-2z M14,48l2,0 0,2 -2,0 0,-2z M16,48l2,0 0,2 -2,0 0,-2z M20,48l2,0 0,2 -2,0 0,-2z M24,48l2,0 0,2 -2,0 0,-2z M28,48l2,0 0,2 -2,0 0,-2z M30,48l2,0 0,2 -2,0 0,-2z M32,48l2,0 0,2 -2,0 0,-2z M40,48l2,0 0,2 -2,0 0,-2z M42,48l2,0 0,2 -2,0 0,-2z M44,48l2,0 0,2 -2,0 0,-2z M46,48l2,0 0,2 -2,0 0,-2z M48,48l2,0 0,2 -2,0 0,-2z M50,48l2,0 0,2 -2,0 0,-2z M52,48l2,0 0,2 -2,0 0,-2z M8,50l2,0 0,2 -2,0 0,-2z M12,50l2,0 0,2 -2,0 0,-2z M14,50l2,0 0,2 -2,0 0,-2z M16,50l2,0 0,2 -2,0 0,-2z M20,50l2,0 0,2 -2,0 0,-2z M26,50l2,0 0,2 -2,0 0,-2z M28,50l2,0 0,2 -2,0 0,-2z M32,50l2,0 0,2 -2,0 0,-2z M36,50l2,0 0,2 -2,0 0,-2z M38,50l2,0 0,2 -2,0 0,-2z M42,50l2,0 0,2 -2,0 0,-2z M44,50l2,0 0,2 -2,0 0,-2z M46,50l2,0 0,2 -2,0 0,-2z M52,50l2,0 0,2 -2,0 0,-2z M54,50l2,0 0,2 -2,0 0,-2z M56,50l2,0 0,2 -2,0 0,-2z M8,52l2,0 0,2 -2,0 0,-2z M12,52l2,0 0,2 -2,0 0,-2z M14,52l2,0 0,2 -2,0 0,-2z M16,52l2,0 0,2 -2,0 0,-2z M20,52l2,0 0,2 -2,0 0,-2z M28,52l2,0 0,2 -2,0 0,-2z M30,52l2,0 0,2 -2,0 0,-2z M32,52l2,0 0,2 -2,0 0,-2z M34,52l2,0 0,2 -2,0 0,-2z M36,52l2,0 0,2 -2,0 0,-2z M40,52l2,0 0,2 -2,0 0,-2z M42,52l2,0 0,2 -2,0 0,-2z M44,52l2,0 0,2 -2,0 0,-2z M50,52l2,0 0,2 -2,0 0,-2z M54,52l2,0 0,2 -2,0 0,-2z M8,54l2,0 0,2 -2,0 0,-2z M20,54l2,0 0,2 -2,0 0,-2z M24,54l2,0 0,2 -2,0 0,-2z M26,54l2,0 0,2 -2,0 0,-2z M32,54l2,0 0,2 -2,0 0,-2z M36,54l2,0 0,2 -2,0 0,-2z M38,54l2,0 0,2 -2,0 0,-2z M42,54l2,0 0,2 -2,0 0,-2z M44,54l2,0 0,2 -2,0 0,-2z M46,54l2,0 0,2 -2,0 0,-2z M48,54l2,0 0,2 -2,0 0,-2z M50,54l2,0 0,2 -2,0 0,-2z M52,54l2,0 0,2 -2,0 0,-2z M54,54l2,0 0,2 -2,0 0,-2z M8,56l2,0 0,2 -2,0 0,-2z M10,56l2,0 0,2 -2,0 0,-2z M12,56l2,0 0,2 -2,0 0,-2z M14,56l2,0 0,2 -2,0 0,-2z M16,56l2,0 0,2 -2,0 0,-2z M18,56l2,0 0,2 -2,0 0,-2z M20,56l2,0 0,2 -2,0 0,-2z M24,56l2,0 0,2 -2,0 0,-2z M30,56l2,0 0,2 -2,0 0,-2z M32,56l2,0 0,2 -2,0 0,-2z M36,56l2,0 0,2 -2,0 0,-2z M38,56l2,0 0,2 -2,0 0,-2z M44,56l2,0 0,2 -2,0 0,-2z M52,56l2,0 0,2 -2,0 0,-2z M54,56l2,0 0,2 -2,0 0,-2z M56,56l2,0 0,2 -2,0 0,-2z ",stroke:"transparent",fill:"black"}))),l=>(0,a.kt)(n.Fragment,null,(0,a.kt)("h1",null,"終わり"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-s"},"$ npx fusuma start-prod\n")),(0,a.kt)("p",null,"これで prod を起動する"))],p=[0,0],s=[{},{}],o={};function k({components:l,...t}){return(0,a.kt)("wrapper",r({},o,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"QR コードも作れるよ"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- qr: https://lyohe.github.io/ --\x3e\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"終わり"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-s"},"$ npx fusuma start-prod\n")),(0,a.kt)("p",null,"これで prod を起動する"))}k.isMDXComponent=!0},5516:(l,t,e)=>{"use strict";e.r(t)},2256:(l,t,e)=>{"use strict";l.exports=e.p+"7de4619b92e34cf25a14.webp"},5e3:(l,t,e)=>{"use strict";l.exports=e.p+"57403f8389db9df334e0.webp"},7087:(l,t,e)=>{"use strict";l.exports=e.p+"57d6dda3c13d917398cb.webp"},618:(l,t,e)=>{"use strict";l.exports=e.p+"0a3b19a8f4f8bed69242.webp"},8570:(l,t,e)=>{"use strict";l.exports=e.p+"1a61f3558e346992dd8e.webp"},6958:(l,t,e)=>{"use strict";l.exports=e.p+"92a8204151b2cf6d74b0.webp"},4118:(l,t,e)=>{"use strict";l.exports=e.p+"a523beae095cf76b0b6d.webp"},5708:(l,t,e)=>{"use strict";l.exports=e.p+"85c33765687510cf70df.webp"},9420:(l,t,e)=>{"use strict";l.exports=e.p+"2454747d0a5bed5563bb.webp"},8243:(l,t,e)=>{"use strict";l.exports=e.p+"a7f454b124d55e1ae8b0.webp"},6894:(l,t,e)=>{"use strict";l.exports=e.p+"69020368d9a2da078d82.webp"},963:(l,t,e)=>{"use strict";l.exports=e.p+"95add1ee9a6955b5639a.webp"},4439:(l,t,e)=>{"use strict";l.exports=e.p+"a26b3e3aeb2497153051.webp"},9418:(l,t,e)=>{"use strict";l.exports=e.p+"4498ede988b4740a2756.webp"},8804:(l,t,e)=>{"use strict";l.exports=e.p+"a868dff092a446b6a24d.webp"},9300:(l,t,e)=>{"use strict";l.exports=e.p+"4ea229442f84f6815281.webp"},1492:(l,t,e)=>{"use strict";l.exports=e.p+"94ba33c163b5a783143a.webp"},4898:(l,t,e)=>{"use strict";l.exports=e.p+"34e4125f9962ccc6240d.webp"},7940:(l,t,e)=>{"use strict";l.exports=e.p+"883f86e6bfa9bcda618f.webp"},545:(l,t,e)=>{"use strict";l.exports=e.p+"f8c0815f241fd9e615a4.webp"},3447:(l,t,e)=>{var n={"./0-title.md":1408,"./1-install-and-init.md":6369,"./2-start-dev-server.md":4553,"./3-basic-editing.md":414,"./4-style.md":3736,"./5-output.md":3236,"./6-owari.md":2585};function a(l){var t=r(l);return e(t)}function r(l){if(!e.o(n,l)){var t=new Error("Cannot find module '"+l+"'");throw t.code="MODULE_NOT_FOUND",t}return n[l]}a.keys=function(){return Object.keys(n)},a.resolve=r,l.exports=a,a.id=3447}},function(l){"use strict";var t;t=l.x,l.x=()=>{var e=t();return[901,921,626].map(l.E),e}},[[7751,666,736],[4377,666,736],[9969,666,736]]]);