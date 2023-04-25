(()=>{"use strict";var o,t={46:(o,t,e)=>{var r=e(273),n=e(31);class s extends n.g{}const i=e(506).i`
    :host(button){
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    :host(button:hover) {
      border-color: #646cff;
      cursor: pointer;
    }
    :host(button:focus),
    :host(button:focus-visible) {
      outline: 4px auto -webkit-focus-ring-color;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="content"]),
    ::slotted([slot="end"]),
    .content {
        display: flex;
    }

    .control.icon-only {
        line-height: 0;
        padding: 0;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 11px;
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 11px;
    }
`;s.define({name:"fast-button",template:(0,r.u)(),styles:i,shadowOptions:{mode:"open",delegatesFocus:!0}})}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,r),s.exports}r.m=t,o=[],r.O=(t,e,n,s)=>{if(!e){var i=1/0;for(c=0;c<o.length;c++){for(var[e,n,s]=o[c],a=!0,l=0;l<e.length;l++)(!1&s||i>=s)&&Object.keys(r.O).every((o=>r.O[o](e[l])))?e.splice(l--,1):(a=!1,s<i&&(i=s));if(a){o.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=o.length;c>0&&o[c-1][2]>s;c--)o[c]=o[c-1];o[c]=[e,n,s]},r.d=(o,t)=>{for(var e in t)r.o(t,e)&&!r.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})},r.o=(o,t)=>Object.prototype.hasOwnProperty.call(o,t),(()=>{var o={841:0};r.O.j=t=>0===o[t];var t=(t,e)=>{var n,s,[i,a,l]=e,d=0;if(i.some((t=>0!==o[t]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var c=l(r)}for(t&&t(e);d<i.length;d++)s=i[d],r.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return r.O(c)},e=self.webpackChunkfast_storybook_7_webpack=self.webpackChunkfast_storybook_7_webpack||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))})();var n=r.O(void 0,[736],(()=>r(46)));n=r.O(n)})();