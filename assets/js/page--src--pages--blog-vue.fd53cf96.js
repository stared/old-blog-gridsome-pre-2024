(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2Zix":function(t,e,n){var r=n("NC/Y");t.exports=/MSIE|Trident/.test(r)},"8tYL":function(t,e,n){"use strict";n.r(e);var r=n("ODXe"),o=(n("ToJy"),n("2B1R"),n("TeQF"),n("yq1k"),n("JTJg"),n("QWBl"),n("FZtP"),n("T63A"),n("Tqq3")),i={metaInfo:function(){var t="".concat("https://p.migdal.pl/","/blog/"),e="https://p.migdal.pl/"+n("YfQE");return Object(o.a)("Piotr Migdał - Blog",t,"Read blog posts by Piotr Migdał.",e)},data:function(){return{tagSelected:"all"}},methods:{selectTag:function(t){console.log(t),this.tagSelected=t}},computed:{filteredPosts:function(){var t=this,e=this.$page.allBlogPost.edges.map((function(t){return t.node})).sort((function(t,e){return+(t.date<e.date)-.5}));return"all"===this.tagSelected?e:e.filter((function(e){return!!e.tags&&e.tags.includes(t.tagSelected)}))},allTagsCounted:function(){var t={};return this.$page.allBlogPost.edges.forEach((function(e){return e.node.tags.forEach((function(e){e in t?t[e]+=1:t[e]=1}))})),t.all=this.$page.allBlogPost.edges.length,Object.entries(t).map((function(t){var e=Object(r.a)(t,2);return{name:e[0],count:e[1]}})).sort((function(t,e){return e.count-t.count}))}}},a=(n("OFQL"),n("KHd+")),c=null,s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("h1",[t._v("Blog posts")]),n("p",[t._v("\n    Blog posts from the most recent.\n  ")]),n("p",t._l(t.allTagsCounted,(function(e){return n("span",{staticClass:"tag",class:{selected:e.name===t.tagSelected},on:{click:function(n){return t.selectTag(e.name)}}},[t._v(t._s(e.name))])})),0),n("div",{staticClass:"post-list"},t._l(t.filteredPosts,(function(e,r){return n("div",{key:r},[n("p",{staticClass:"title"},[n("g-link",{staticClass:"read",attrs:{to:e.path}},[t._v(t._s(e.title))]),n("span",{staticClass:"date"},[t._v(t._s(e.dateDisplay))]),t._l(e.tags,(function(e){return n("span",{staticClass:"tag",class:{selected:e===t.tagSelected},on:{click:function(n){return t.selectTag(e)}}},[t._v(t._s(e))])}))],2)])})),0)])}),[],!1,null,null,null);"function"==typeof c&&c(s);e.default=s.exports},BNF5:function(t,e,n){var r=n("NC/Y").match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},JTJg:function(t,e,n){"use strict";var r=n("I+eb"),o=n("WjRb"),i=n("HYAF"),a=n("V37c");r({target:"String",proto:!0,forced:!n("qxPZ")("includes")},{includes:function(t){return!!~a(i(this)).indexOf(a(o(t)),arguments.length>1?arguments[1]:void 0)}})},OFQL:function(t,e,n){"use strict";n("lmal")},T63A:function(t,e,n){var r=n("I+eb"),o=n("b1O7").entries;r({target:"Object",stat:!0},{entries:function(t){return o(t)}})},TeQF:function(t,e,n){"use strict";var r=n("I+eb"),o=n("tycR").filter;r({target:"Array",proto:!0,forced:!n("Hd5f")("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},ToJy:function(t,e,n){"use strict";var r=n("I+eb"),o=n("We1y"),i=n("ewvW"),a=n("B/qT"),c=n("V37c"),s=n("0Dky"),u=n("rdv8"),l=n("pkCn"),f=n("BNF5"),d=n("2Zix"),g=n("LQDL"),p=n("USzg"),v=[],h=v.sort,m=s((function(){v.sort(void 0)})),b=s((function(){v.sort(null)})),T=l("sort"),y=!s((function(){if(g)return g<70;if(!(f&&f>3)){if(d)return!0;if(p)return p<603;var t,e,n,r,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)v.push({k:e+r,v:n})}for(v.sort((function(t,e){return e.v-t.v})),r=0;r<v.length;r++)e=v[r].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}}));r({target:"Array",proto:!0,forced:m||!b||!T||!y},{sort:function(t){void 0!==t&&o(t);var e=i(this);if(y)return void 0===t?h.call(e):h.call(e,t);var n,r,s=[],l=a(e);for(r=0;r<l;r++)r in e&&s.push(e[r]);for(n=(s=u(s,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:c(e)>c(n)?1:-1}}(t))).length,r=0;r<n;)e[r]=s[r++];for(;r<l;)delete e[r++];return e}})},Tqq3:function(t,e,n){"use strict";function r(t,e,n,r){return{title:t,meta:[{name:"og:title",content:t},{name:"twitter:title",content:t},{name:"description",content:e},{name:"og:description",content:e},{name:"twitter:description",content:e},{name:"url",content:n},{name:"og:url",content:n},{name:"twitter:url",content:n},{name:"og:image",content:r},{name:"twitter:image",content:r},{name:"author",content:"Piotr Migdał"}]}}n.d(e,"a",(function(){return r}))},USzg:function(t,e,n){var r=n("NC/Y").match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},YfQE:function(t,e,n){t.exports=n.p+"assets/img/piotr-migdal-direct-smiling-2022-by-cytacka-600px.b3d4ee78.jpg"},b1O7:function(t,e,n){var r=n("g6v/"),o=n("33Wh"),i=n("/GqU"),a=n("0eef").f,c=function(t){return function(e){for(var n,c=i(e),s=o(c),u=s.length,l=0,f=[];u>l;)n=s[l++],r&&!a.call(c,n)||f.push(t?[n,c[n]]:c[n]);return f}};t.exports={entries:c(!0),values:c(!1)}},lmal:function(t,e,n){},rdv8:function(t,e){var n=Math.floor,r=function(t,e){var a=t.length,c=n(a/2);return a<8?o(t,e):i(r(t.slice(0,c),e),r(t.slice(c),e),e)},o=function(t,e){for(var n,r,o=t.length,i=1;i<o;){for(r=i,n=t[i];r&&e(t[r-1],n)>0;)t[r]=t[--r];r!==i++&&(t[r]=n)}return t},i=function(t,e,n){for(var r=t.length,o=e.length,i=0,a=0,c=[];i<r||a<o;)i<r&&a<o?c.push(n(t[i],e[a])<=0?t[i++]:e[a++]):c.push(i<r?t[i++]:e[a++]);return c};t.exports=r},yq1k:function(t,e,n){"use strict";var r=n("I+eb"),o=n("TWQb").includes,i=n("RNIs");r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);