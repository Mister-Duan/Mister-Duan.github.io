import{_ as s,o as a,c as t,b as e}from"./app-BZ335xDN.js";const h={};function n(l,i){return a(),t("div",null,i[0]||(i[0]=[e(`<h1 id="网络服务器相关" tabindex="-1"><a class="header-anchor" href="#网络服务器相关"><span>网络服务器相关</span></a></h1><h2 id="ftp" tabindex="-1"><a class="header-anchor" href="#ftp"><span>ftp</span></a></h2><h3 id="vsftpd" tabindex="-1"><a class="header-anchor" href="#vsftpd"><span>vsftpd</span></a></h3><ul><li><p>安装</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vsftpd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ftp</span></span></code></pre></div></li><li><p>配置</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/vsftpd.conf</span></span></code></pre></div><p>至少要更改:</p><div class="language-conf" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">write_enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">YES</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">utf8_filesystem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">YES</span></span></code></pre></div></li></ul><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h2><ul><li><p>安装</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre></div><p>Nginx 默认安装在 <code>/etc/nginx</code> 目录下</p></li><li><p>配置</p><p>配置文件为 <code>nginx.conf</code>。</p><p>默认站点配置文件在 <code>/etc/nginx/sites-available/default</code></p><p>为了使得 Nginx 能使用 PHP，需要配置</p><div class="language-nginx" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ~ </span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">\\.php$ </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          /var/www/html;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 配置给 socks 应该可行，还在研究中</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    fastcgi_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  127.0.0.1:9000;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    fastcgi_index </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> index.php;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    fastcgi_param </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> SCRIPT_FILENAME  $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">document_root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">fastcgi_script_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    include </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">       fastcgi_params;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div></li></ul><h2 id="php" tabindex="-1"><a class="header-anchor" href="#php"><span>PHP</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Apache</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Ngnix</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-fpm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># MySQL</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-mysql</span></span></code></pre></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://dev.mysql.com/get/mysql-apt-config_0.8.14-1_all.deb</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dpkg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-apt-config_0.8.14-1_all.deb</span></span></code></pre></div><p>配置版本(一般是 5.7)后安装</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-server</span></span></code></pre></div><p>之后重启，完成配置</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span></span></code></pre></div><h2 id="nmp" tabindex="-1"><a class="header-anchor" href="#nmp"><span>NMP</span></a></h2><p>需要对 Nginx 的配置文件进行修改: 主要改动的目标是把 Nginx 代理端口转发给 php-fpm。</p><p>首先配置 index:</p><div class="language-nginx" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">index </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">index.php index.html;</span></span></code></pre></div><p>需要注意的是，Nginx 将端口转发给 php 默认的 9000 端口。而通过 apt-get 安装的 php 默认使用本地 sock 文件通信，需要对 php 的配置进行修改。要修改的文件位于: <code>/etc/php/7.2/fpm/pool.d/www.conf</code>，将</p><div class="language-conf" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">listen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;"> /run/php/php7.0-fpm.sock</span></span></code></pre></div><p>改成:</p><div class="language-conf" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">listen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;"> 127.0.0.1:9000</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果报了 permission limitted 的错误，说明 php 没法访问 html 文件夹，修改配置的 html 文件夹权限即可。</p></div>`,24)]))}const k=s(h,[["render",n],["__file","webserver.html.vue"]]),d=JSON.parse('{"path":"/linux/ubuntu/webserver.html","title":"网络服务器相关","lang":"zh-CN","frontmatter":{"icon":"network","date":"2019-11-22T00:00:00.000Z","description":"网络服务器相关 ftp vsftpd 安装 配置 至少要更改: Nginx 安装 Nginx 默认安装在 /etc/nginx 目录下 配置 配置文件为 nginx.conf。 默认站点配置文件在 /etc/nginx/sites-available/default 为了使得 Nginx 能使用 PHP，需要配置 PHP MySQL 安装 配置版本(一...","head":[["meta",{"property":"og:url","content":"https://mister-duan.github.io/linux/ubuntu/webserver.html"}],["meta",{"property":"og:site_name","content":"Mister.Duan"}],["meta",{"property":"og:title","content":"网络服务器相关"}],["meta",{"property":"og:description","content":"网络服务器相关 ftp vsftpd 安装 配置 至少要更改: Nginx 安装 Nginx 默认安装在 /etc/nginx 目录下 配置 配置文件为 nginx.conf。 默认站点配置文件在 /etc/nginx/sites-available/default 为了使得 Nginx 能使用 PHP，需要配置 PHP MySQL 安装 配置版本(一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T05:53:16.000Z"}],["meta",{"property":"article:published_time","content":"2019-11-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T05:53:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网络服务器相关\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T05:53:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mister.Duan\\",\\"url\\":\\"https://mister-duan.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-duan.github.io/atom.xml","title":"Mister.Duan Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-duan.github.io/feed.json","title":"Mister.Duan JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-duan.github.io/rss.xml","title":"Mister.Duan RSS Feed"}]]},"headers":[{"level":2,"title":"ftp","slug":"ftp","link":"#ftp","children":[{"level":3,"title":"vsftpd","slug":"vsftpd","link":"#vsftpd","children":[]}]},{"level":2,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":2,"title":"PHP","slug":"php","link":"#php","children":[]},{"level":2,"title":"MySQL","slug":"mysql","link":"#mysql","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]},{"level":2,"title":"NMP","slug":"nmp","link":"#nmp","children":[]}],"git":{"createdTime":1731661457000,"updatedTime":1731909196000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":1.13,"words":339},"filePathRelative":"linux/ubuntu/webserver.md","localizedDate":"2019年11月22日","excerpt":"","autoDesc":true}');export{k as comp,d as data};
