"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[870],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,l]of s)a[i]=l;return a}},895:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>t,data:()=>e});var l=a(641);const n={},t=(0,a(6262).A)(n,[["render",function(i,s){return(0,l.uX)(),(0,l.CE)("div",null,s[0]||(s[0]=[(0,l.Fv)('<h1 id="列表标签" tabindex="-1"><a class="header-anchor" href="#列表标签"><span>列表标签</span></a></h1><p>列表是一系列排列好的项目，主要分成两类：有序列表和无序列表。</p><p>有序列表是每个列表项前面有编号，呈现出顺序，就像下面这样。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">1. 列表项 A</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">2. 列表项 B</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">3. 列表项 C</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无序列表则是列表项前面没有编号，只有一个列表符号，默认是一个圆点。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">· 列表项 A</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">· 列表项 B</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">· 列表项 C</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ol" tabindex="-1"><a class="header-anchor" href="#ol"><span><code>&lt;ol&gt;</code></span></a></h2><p><code>&lt;ol&gt;</code>标签是一个有序列表容器（ordered list），会在内部的列表项前面产生数字编号。列表项的顺序有意义时，比如排名，就会采用这个标签。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 A&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 B&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 C&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码会在列表项 A、B、C 前面，分别产生1、2、3的编号。</p><p><code>&lt;ol&gt;</code>标签内部可以嵌套<code>&lt;ol&gt;</code>标签或<code>&lt;ul&gt;</code>标签，形成多级列表。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 A&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 B</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 B1&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 B2&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 B3&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 C&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，一个有序列表内部嵌套了另一个有序列表，渲染结果如下。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">1. 列表项 A</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">2. 列表项 B</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  1. 列表项 B1</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  2. 列表项 B2</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  3. 列表项 B3</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">3. 列表项 C</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该标签有以下属性。</p><p><strong>（1）reversed</strong></p><p><code>reversed</code>属性产生倒序的数字列表。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> reversed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 A&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 B&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 C&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，列表项 A、B、C 前面，产生的编号是3、2、1。</p><p><strong>（2）start</strong></p><p><code>start</code>属性的值是一个整数，表示数字列表的起始编号。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;5&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 A&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 B&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 C&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，列表项 A、B、C 前面，产生的编号是5、6、7。</p><p><strong>（3）type</strong></p><p><code>type</code>属性指定数字编号的样式。目前，浏览器支持以下样式。</p><ul><li><code>a</code>：小写字母</li><li><code>A</code>：大写字母</li><li><code>i</code>：小写罗马数字</li><li><code>I</code>：大写罗马数字</li><li><code>1</code>：整数（默认值）</li></ul><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 A&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 B&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 C&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，列表项 A、B、C 前面的编号，分别是英文小写字母a、b、c。</p><p>注意，即使编号是字母，<code>start</code>属性也依然使用整数。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;3&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 A&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 B&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 C&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>type</code>属性指定编号采用小写英文字母，<code>start</code>属性等于<code>3</code>，表示从<code>c</code>开始编号。</p><h2 id="ul" tabindex="-1"><a class="header-anchor" href="#ul"><span><code>&lt;ul&gt;</code></span></a></h2><p><code>&lt;ul&gt;</code>标签是一个无序列表容器（unordered list），会在内部的列表项前面产生实心小圆点，作为列表符号。列表项的顺序无意义时，采用这个标签。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 A&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 B&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 C&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的渲染结果是，列表项 A、B、C 前面，分别产生一个实心小圆点，作为列表符号。</p><p><code>&lt;ul&gt;</code>标签内部可以嵌套<code>&lt;ul&gt;</code>或<code>&lt;ol&gt;</code>，形成多级列表。</p><h2 id="li" tabindex="-1"><a class="header-anchor" href="#li"><span><code>&lt;li&gt;</code></span></a></h2><p><code>&lt;li&gt;</code>表示列表项，用在<code>&lt;ol&gt;</code>或<code>&lt;ul&gt;</code>容器之中。</p><p>有序列表<code>&lt;ol&gt;</code>之中，<code>&lt;li&gt;</code>有一个<code>value</code>属性，定义当前列表项的编号，后面列表项会从这个值开始编号。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 A&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;4&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 B&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;列表项 C&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>value</code>属性指定第二个列表项的编号是<code>4</code>，因此三个列表项的编号，分别为1、4、5。</p><h2 id="dl-dt-dd" tabindex="-1"><a class="header-anchor" href="#dl-dt-dd"><span><code>&lt;dl&gt;</code>，<code>&lt;dt&gt;</code>，<code>&lt;dd&gt;</code></span></a></h2><p><code>&lt;dl&gt;</code>标签是一个块级元素，表示一组术语的列表（description list）。术语名（description term）由<code>&lt;dt&gt;</code>标签定义，术语解释（description detail）由<code>&lt;dd&gt;</code>标签定义。<code>&lt;dl&gt;</code>常用来定义词汇表。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;CPU&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;中央处理器&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Memory&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;内存&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Hard Disk&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;硬盘&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;dt&gt;</code>和<code>&lt;dd&gt;</code>都是块级元素，<code>&lt;dd&gt;</code>默认会在<code>&lt;dt&gt;</code>下方缩进显示。上面代码的默认渲染结果如下。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">CPU</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  中央处理器</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Memory</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  内存</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Hard Disk</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  硬盘</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多个术语（<code>&lt;dt&gt;</code>）对应一个解释（<code>&lt;dd&gt;</code>），或者多个解释（<code>&lt;dd&gt;</code>）对应一个术语（<code>&lt;dt&gt;</code>），都是合法的。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;A&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;B&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;C&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;D&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;E&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;F&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>A</code>和<code>B</code>有共同的解释<code>C</code>，而<code>D</code>有两个解释<code>E</code>和<code>F</code>。</p>',49)]))}]]),e=JSON.parse('{"path":"/MeLearnHTML/list.html","title":"列表标签","lang":"zh-CN","frontmatter":{"description":"列表标签 列表是一系列排列好的项目，主要分成两类：有序列表和无序列表。 有序列表是每个列表项前面有编号，呈现出顺序，就像下面这样。 无序列表则是列表项前面没有编号，只有一个列表符号，默认是一个圆点。 <ol> <ol>标签是一个有序列表容器（ordered list），会在内部的列表项前面产生数字编号。列表项的顺序有意义时，比如排名，就会采用这个标签。...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/cty-docs/MeLearnHTML/list.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"列表标签"}],["meta",{"property":"og:description","content":"列表标签 列表是一系列排列好的项目，主要分成两类：有序列表和无序列表。 有序列表是每个列表项前面有编号，呈现出顺序，就像下面这样。 无序列表则是列表项前面没有编号，只有一个列表符号，默认是一个圆点。 <ol> <ol>标签是一个有序列表容器（ordered list），会在内部的列表项前面产生数字编号。列表项的顺序有意义时，比如排名，就会采用这个标签。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-14T10:48:52.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-14T10:48:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"列表标签\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-14T10:48:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"<ol>","slug":"ol","link":"#ol","children":[]},{"level":2,"title":"<ul>","slug":"ul","link":"#ul","children":[]},{"level":2,"title":"<li>","slug":"li","link":"#li","children":[]},{"level":2,"title":"<dl>，<dt>，<dd>","slug":"dl-dt-dd","link":"#dl-dt-dd","children":[]}],"git":{"createdTime":1739530132000,"updatedTime":1739530132000,"contributors":[{"name":"Cui Tianyi","username":"Cui Tianyi","email":"cty88003200@outlook.com","commits":1,"url":"https://github.com/Cui Tianyi"}]},"readingTime":{"minutes":3.69,"words":1106},"filePathRelative":"MeLearnHTML/list.md","localizedDate":"2025年2月14日","autoDesc":true}')}}]);