var script = document.createElement('script');
var head = document.getElementsByTagName("head")[0];
var A1 = document.createTextNode(`function shuffle(h){for(let t=h.length-1;0<t;t--){var a=Math.floor(Math.random()*(t+1)),f=h[t];h[t]=h[a],h[a]=f}return h}const path=["9lgCF","I1cX5","7v9z","rPUwOrT3","DgxHryE","ZgbNby9W","IkCpUkXE","6PKs","bhBSQ","QNUpG","mVSL","HFtj0S1","yeCcdu","11FL","l3T5CL9F","uTMH7Eh","ftw0F","H73KYPd","x10zjlrR","qypRG2aA","bGCGo","cmnn","FgHr8f7","znAjn","0aWMss4","Qo8CDT","G2YfTF","CrqeDGH4","NLGVK7","gY7wc4Xy","PqH66K","WWyZu","FztF","Lki5td","SpgpCHlF","0DF1","u34eminS","FSM5Fuz","h1iPeyf","B0n3zu","K7V0xKfh","rHr5NV","aeiou","cHUZzyp","NMjwbwYz","QQeZG","piaYt9Y","qlV1nv","M9o5hUC7","JgC4Do","mo9JGG","RQbU1","6HfaY","UBqv","F0iMZ","I0s4Y8u","Dni79zD","f9bCF","Z2g7yBVF","jHEt3drS","4OYS","4j4GjU","EO32dnm","8e4uGSVg","OfrqY","E12KWs6t","Whsceb1D","DV1wd5A","sDCyZ","3k6kT","1VulBwOs","N7OP","zeUO8Hpf","8glqEpvv","QAyQch0P","Fq51oI2","K93ur","KoKCo","Oe4tH","WBY1si","LUN2vbs","ZC6Bx","Jt60yyad","sFjf","B2xbXNR","VtOc","hCuzku","6q11sSyq","V0Rqavh3","Vqthfdy","stuMJ","I8p0xnU","mh5oKA2","ekXjK","T4k3swE","sdG00","3tYTEG","RjmqKWV","lPozhn","LaDI","ylCpDw0R","lZoB2","oua6","A5ZXTy","buOSKf3x","5SyQwP","31ekWm","7YwTR8","OMF6S9","965N","xmInJ","ZaIN2Cx","eB9Lcloi","V2iHHomw","fkxhTG7W","VPVClE9Y","Xf7fZYm"],pathshuffle=shuffle(path),random=pathshuffle[Math.floor(Math.random()*pathshuffle.length)];window.location="https://gplinks.co/"+random;`);

function ref() {
    const i = setInterval(() => {
        if (window.location.host == 'onotepad.com' || window.location.host == "pastebin.com" || window.location.host == "controlc.com") {
            clearInterval(i);
            setTimeout(() => {
                script.appendChild(A1);
                head.appendChild(script);
            }, 1000);
        }
    }, 500)
}

function captcha_pg() {
    const cpg = setInterval(() => {
        if (!document.querySelector("#invisibleCaptchaShortlink").disabled) {
            clearInterval(cpg)
            setTimeout(() => {
                document.querySelector("#invisibleCaptchaShortlink").click();
            }, 1000);
        }
    }, 2500);
}

function last_pg() {
    const lpg = setInterval(() => {
        if (document.querySelector("#link-btn > a").innerText == 'Get Link') {
            clearInterval(lpg)
            setTimeout(() => {
                document.querySelector("#link-btn > a").click();
                setTimeout(() => {
                    window.stop();
                    setTimeout(() => {
                        window.location = "https://h2244r.github.io/gp/";
                    }, 50);
                }, 50);
            }, 50);
        }
    }, 2500);
}

function adclick() {
    if (window.location.host == 'mynewsmedia.co' && document.querySelector("#btn6")) {
        setTimeout(() => {
            if (document.querySelectorAll('p a img')) {
                var items = document.querySelectorAll('p a img');
                var i = 0;
                (function loopIt(i) {
                    setTimeout(function () {
                        items[i].click();
                        if (i < items.length - 1) loopIt(i + 1)
                    }, 500);
                })(i)
            }
            setTimeout(() => {
                if (document.querySelectorAll('a[id="downloadButton"][aria-label]')) {
                    var items = document.querySelectorAll('a[id="downloadButton"][aria-label]');
                    var i = 0;
                    (function loopIt(i) {
                        setTimeout(function () {
                            items[i].click();
                            if (i < items.length - 1) loopIt(i + 1)
                        }, 500);
                    })(i)
                }
                setTimeout(() => {
                    if (document.querySelectorAll('a[class="text-white"][target="_blank"]')) {
                        var items = document.querySelectorAll('a[class="text-white"][target="_blank"]');
                        var i = 0;
                        (function loopIt(i) {
                            setTimeout(function () {
                                items[i].click();
                                if (i < items.length - 1) loopIt(i + 1)
                            }, 500);
                        })(i)
                    }
                }, 1500);
            }, 1000);
        }, 500);
    }
    if (window.location.host == 'gplinks.co' && document.querySelector("#invisibleCaptchaShortlink")) {
        setTimeout(() => {
            if (document.querySelectorAll('p a img')) {
                var items = document.querySelectorAll('p a img');
                var i = 0;
                (function loopIt(i) {
                    setTimeout(function () {
                        items[i].click();
                        if (i < items.length - 1) loopIt(i + 1)
                    }, 500);
                })(i)
            }
            setTimeout(() => {
                if (document.querySelectorAll('a[id="downloadButton"][aria-label]')) {
                    var items = document.querySelectorAll('a[id="downloadButton"][aria-label]');
                    var i = 0;
                    (function loopIt(i) {
                        setTimeout(function () {
                            items[i].click();
                            if (i < items.length - 1) loopIt(i + 1)
                        }, 500);
                    })(i)
                }
            }, 1000);
        }, 500);
    }
    if (window.location.host == 'gplinks.co' && document.querySelector("#link-btn")) {
        setTimeout(() => {
            if (document.querySelectorAll('p a img')) {
                var items = document.querySelectorAll('p a img');
                var i = 0;
                (function loopIt(i) {
                    setTimeout(function () {
                        items[i].click();
                        if (i < items.length - 1) loopIt(i + 1)
                    }, 500);
                })(i)
            }
        }, 500);
    }
}

setTimeout(() => {
    ref();
    setInterval(() => {
        if (window.location.host == 'gplinks.in') {
            window.location = "https://h2244r.github.io/gp/";
        }
        if (document.querySelector("#mh-mobile")) {
            window.location = "https://h2244r.github.io/gp/";
        }
        if (document.querySelector('body[id="mh-mobile"]')) {
            window.location = "https://h2244r.github.io/gp/";
        }
        if (document.querySelector("#mh-mobile > pre").innerText == 'Array\n(\n)\n') {
            window.location = "https://h2244r.github.io/gp/";
        }
        if (document.querySelector('div[class="mh-header-text"] a[class="mh-header-text-link"][title="MYNEWSMEDIA"][rel="home"]')) {
            window.location = "https://h2244r.github.io/gp/";
        }
    }, 2000);
    setInterval(() => {
        if (document.querySelector("body > nav")) {
            document.querySelector("body > nav").remove();
        }
        if (document.querySelector("#container > nav")) {
            document.querySelector("#container > nav").remove();
        }
        if (document.querySelector("#container > footer")) {
            document.querySelector("#container > footer").remove();
        }
        if (document.querySelector("iframe[style*='z-index:']")) {
            document.querySelector("iframe[style*='z-index:']").remove();
        }
        if (document.querySelector("body > footer.footer.bg-light")) {
            document.querySelector("body > footer.footer.bg-light").remove();
        }
        if (document.querySelectorAll("#container > script")) {
            document.querySelectorAll("#container > script").forEach(el => {
                if (el.outerHTML.includes('var count' && 'var counter')) {
                    el.remove();
                    var script = document.createElement('script');
                    var head = document.getElementsByTagName("head")[0];
                    var txt = document.createTextNode(`var count=0,counter=setInterval(timer,0);function timer(){if(--count<=0)return document.getElementById("wpsafe-wait1").style.display="none",document.getElementById("container-countdown").style.display="none",document.getElementById("wpsafe-generate").style.display="block",document.getElementById("wpsafe-snp").style.display="block",void clearInterval(counter);document.getElementById("wpsafe-time").innerHTML=count}`)
                    script.appendChild(txt);
                    head.appendChild(script);
                }
            });
        }
    }, 50);
}, 1500);

setTimeout(() => {
    if (window.location.host == 'mynewsmedia.co' && document.querySelector("#btn6")) {
        adclick();
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
            setTimeout(() => {
                document.querySelector("#btn6").click();
            }, 500);
        }, 500);
    }
    if (window.location.host == 'gplinks.co' && document.querySelector("#invisibleCaptchaShortlink")) {
        adclick();
        setTimeout(() => {
            document.querySelector('div[id="captchaShortlink"]').scrollIntoView({
                behavior: "smooth"
            });
            setTimeout(() => {
                captcha_pg();
            }, 500);
        }, 500);
    }
    if (window.location.host == 'gplinks.co' && document.querySelector("#link-btn")) {
        adclick();
        setTimeout(() => {
            document.querySelector("#timer").scrollIntoView({
                behavior: "smooth"
            });
            setTimeout(() => {
                last_pg();
            }, 500);
        }, 500);
    }
}, 8000);
