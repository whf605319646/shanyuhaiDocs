(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{375:function(t,e,v){"use strict";v.r(e);var r=v(24),a=Object(r.a)({},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("p",[t._v("该文档是由 VuePress 搭建的， 搭建过程录制了视频。")]),t._v(" "),v("p",[t._v("🎉 "),v("a",{attrs:{href:"https://www.bilibili.com/video/av43316513/",target:"_blank",rel:"noopener noreferrer"}},[t._v("视频地址"),v("OutboundLink")],1),t._v(" 🎉")]),t._v(" "),v("p",[t._v("使用 VuePress 作为自己文档记录主要是因为就学了 Vue，并且想要深入了解 Vue。")]),t._v(" "),v("h2",{attrs:{id:"写文档的目的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写文档的目的","aria-hidden":"true"}},[t._v("#")]),t._v(" 写文档的目的 ?")]),t._v(" "),v("p",[t._v("之所以写文档在视频的第一集也有介绍，因为之前记录的文档并不便于回顾，可以说是记完了就没了。")]),t._v(" "),v("p",[t._v("VuePress 提供了一个良好的写文档的环境，侧边栏可以快速跳转，可以将知识进行连接。")]),t._v(" "),v("p",[t._v("总的来说，还是为了稳固自己的知识。")]),t._v(" "),v("h2",{attrs:{id:"写文档的想法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写文档的想法","aria-hidden":"true"}},[t._v("#")]),t._v(" 写文档的想法")]),t._v(" "),v("p",[t._v("在大三的时候使用过 hexo 来搭建博客，那一阵子学了东西就直接 push 到 github 上，也没有经过自己的咀嚼，不过还是学到了很多东西。")]),t._v(" "),v("p",[t._v("不过也是由于没有经过咀嚼这些知识又很快的忘记了， 而且显示的方式是以博客的形式，现在回想起来感觉不是那么恰当导致自己早早退出博客，当然更多的原因还是在于自己。")]),t._v(" "),v("p",[t._v("这一次搭建文档，并且录制视频记录下来感觉对很多东西进一步了解了很多东西，你觉得自己会了其实并没有会，你要能够独立的把它写出来才是真的初步了解，如果能够把这些讲出来那就更好了。")]),t._v(" "),v("h2",{attrs:{id:"文档的状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文档的状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 文档的状态 "),v("Badge",{attrs:{text:"19-07-20 新增",type:"warn"}})],1),t._v(" "),v("p",[t._v("早期对文档的排序是通过文档名称来完成的，通过在文档名前增加数字 "),v("code",[t._v("01")]),t._v("、"),v("code",[t._v("02")]),t._v(" 等，以这样的形式完成排序。但随着记录的内容不断增加，对某个东西的理解也发生了变化，之前的排序就遭到插入，而插入时就需要将顺序之后的文档累加数字，导致大量文档链接发生变化，影响了分享，也影响了文档内的链接，总之就是很糟糕吧。\n虽然已经有了初步的思路：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("[x] "),v("s",[t._v("在文档中增加排序，虽然这样可以解决链接失效的问题，但是依然无法解决插入时自增序的问题。")])])]),t._v(" "),v("li",[v("p",[t._v("[x] "),v("s",[t._v("新方案是添加父指针。这样的解决方案也存在一定问题，后增的内容导致出现同时有两个内容指向同一个 "),v("code",[t._v("prev(父)")]),t._v("，这时需要先解决它们之间的先后问题。")])]),t._v(" "),v("ol",[v("li",[v("s",[t._v("若新增内容在前，则需要将旧内容的 "),v("code",[t._v("prev")]),t._v(" 指向新增内容，修改次数为 2；")])]),t._v(" "),v("li",[v("s",[t._v("若新增内容在后，则需要将旧内容的 "),v("code",[t._v("next")]),t._v(" 的 "),v("code",[t._v("prev")]),t._v(" 指向新增内容，修改次数同样为 2；")])])]),t._v(" "),v("p",[v("s",[t._v("然后手动操作可以通过 Node 来执行，听起来这个解决方案还算可以。")])])])]),t._v(" "),v("p",[t._v("作为个人笔记，文档左侧顺序混乱并不会影响阅读，暂时存在更重要的任务，所以接下来文档进入混乱的状态。")]),t._v(" "),v("h2",{attrs:{id:"文档的归纳"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文档的归纳","aria-hidden":"true"}},[t._v("#")]),t._v(" 文档的归纳 "),v("Badge",{attrs:{text:"19-11-04 新增",type:"warn"}})],1),t._v(" "),v("p",[t._v("关于文档的状态已经 "),v("Badge",{attrs:{text:"废弃",type:"error"}}),t._v(" 了，当记录的内容不断增多时，已经无法很明确的给各个内容进行排序了，后续的思路为每个内容打 tag，这似乎又回到了博客的形式（笑 😏）。")],1)])},[],!1,null,null,null);e.default=a.exports}}]);