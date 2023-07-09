var posts=["posts/2023430a1/","posts/57914/","posts/2023429a1/","posts/205/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","hundredSuffix":"","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"StarDreamNet","hundredSuffix":"","link":"http://bluestarnet.top/","avatar":"https://s1.ax1x.com/2023/06/23/pCtPd2V.jpg","descr":"一家专业的互联网服务提供商","siteshot":"https://s1.ax1x.com/2023/06/23/pCtPd2V.jpg"},{"name":"Ganzhe","link":"https://ganzhe2028.github.io","avatar":"https://pic.imgdb.cn/item/64895d391ddac507cce97bc3.webpg","descr":"顺其自然，持之以恒"},{"name":"厕所干饭人","link":"https://bkz.asia","avatar":"https://cccimg.com/view.php/e3f2af3293ed9ebe81c76e0c33015073.jpg","descr":"有钱终成眷属，没钱亲眼目睹"},{"name":"Ganzhe","link":"https://ganzhe2028.github.io","avatar":"https://pic.imgdb.cn/item/64895d391ddac507cce97bc3.webpg","descr":"顺其自然，持之以恒"},{"name":"厕所干饭人","link":"https://bkz.asia/","avatar":"https://cccimg.com/view.php/e3f2af3293ed9ebe81c76e0c33015073.jpg","descr":"有钱终成眷属，没钱亲眼目睹"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };