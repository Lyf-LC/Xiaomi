let i1 = document.querySelector(".i1");
let i2 = document.querySelector(".i2");
const xiala = document.querySelector(".xiala");
const v1 = ['路由器', '打印机', '小米平板5pro', '红米', '小米手机', '显示器'];

function ifo() {
    xiala.style.display = "block"
    i1.classList.add("p1")
    i2.classList.add("p1")
}

i1.addEventListener("focus", ifo)
i1.addEventListener("blur", function () {
    xiala.style.display = "none"
    i1.classList.remove("p1")
    i2.classList.remove("p1")
})
i2.addEventListener("mouseover", function () {
    i1.style.borderColor = "#b0b0b0"
})
i2.addEventListener("mouseout", function () {
    i1.style.borderColor = "#e0e0e0"
})
let i = 0
setInterval(function () {
    i1.placeholder = v1[i]
    i++
    if (i === v1.length) {
        i = 0
    }
}, 3000)
const xx = document.querySelectorAll(".nav_b>li");
const xiaxia = document.querySelector(".xiaxia");
const xia_1 = document.querySelectorAll(".xiaxia ul");
const nav = document.querySelector(".nav");
const nav_b = document.querySelector(".nav_b");
let stem;
for (let i = 1; i < xx.length - 2; i++) {
    xx[i].addEventListener("mouseenter", function () {
        // setTimeout(function () {
        //     mit = true
        // }, 100)
        // i1.removeEventListener("focus",ifo)
        //  xiala.style.display = "none"
        //  i1.classList.remove("p1")
        //  i2.classList.remove("p1")
        i1.blur()
        xiaxia.style.height = "229px"
        xiaxia.style.borderTop = "1px solid #e0e0e0"
        xiaxia.style.transition = "height .4s  ease, border .2s 0s"
        for (let j = 0; j < xia_1.length; j++) {
            xia_1[j].style.display = "none"
        }
        xia_1[i - 1].style.display = "flex"
        clearInterval(stem)

    })
    xx[i].addEventListener("mouseleave", function () {
        stem = setTimeout(function () {
            xiaxia.style.height = "0px"
            xiaxia.style.borderTop = "0px solid #e0e0e0"
            xiaxia.style.transition = "height .4s   ease, border .1s .4s"
        }, 300)
        xiaxia.addEventListener("mouseenter", function () {
            clearInterval(stem)
            xiaxia.style.height = "229px"
            xiaxia.style.borderTop = "1px solid #e0e0e0"
            xiaxia.style.transition = "height .4s  ease, border .2s 0s"
        })
        xiaxia.addEventListener("mouseleave", function () {
            clearInterval(stem)
            xiaxia.style.height = "0px"
            xiaxia.style.borderTop = "0px solid #e0e0e0"
            xiaxia.style.transition = "height .4s  ease, border .1s .4s"
        })

    })
}
const clli = document.querySelectorAll(".clli");
const cto = document.querySelectorAll(".cto");
for (let i = 0; i < clli.length; i++) {
    clli[i].addEventListener("mouseover", function () {
        cto[i].style.display = "block"
    })
    clli[i].addEventListener("mouseout", function () {
        cto[i].style.display = "none"
    })
}
const fot4 = document.querySelector(".fot4");
let g = 3;
setInterval(function () {
    g = g + 1
    fot4.src = "./images/fot/fot (" + g + ").png"
    if (g == 5) {
        g = 3
    }
}, 2000)
// var scrollY = document.documentElement.scrollTop
const a1 = document.querySelectorAll(".a1");
var ga6 = document.querySelector(".ga6")
const hight = a1[0].offsetTop;
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop >= hight) {
        ga6.style.display = "block"
    } else {
        ga6.style.display = "none"
    }
})
const select_o = document.querySelector(".select-o");
const select_g = document.querySelector(".select-g");
const yy = document.querySelector(".yy");
select_o.addEventListener("click", function () {
    yy.style.display = "block"
})
select_g.addEventListener("click", function () {
    yy.style.display = "none"
})

const m1 = document.querySelectorAll(".m1");
const t2 = document.querySelectorAll(".t2");
// var tr = t2[1].querySelectorAll(".tr")
// var biao = m1[0].children
// for (let i = 0; i < biao.length; i++) {
//     biao[i].addEventListener("mouseover", function () {
//         for (let j = 0; j < tr.length; j++) {
//             tr[j].classList.remove("tr-a")
//             biao[j].classList.remove("bor-b")
//         }
//         this.classList.add("bor-b")
//         tr[i].classList.add("tr-a")
//     })
// }
function tab_q(num, num1) {
    for (let i = 0; i < m1[num].children.length; i++) {
        m1[num].children[i].addEventListener("mouseover", function () {
            for (let j = 0; j < t2[num1].querySelectorAll(".tr").length; j++) {
                t2[num1].querySelectorAll(".tr")[j].classList.remove("tr-a")
                m1[num].children[j].classList.remove("bor-b")
            }
            this.classList.add("bor-b")
            t2[num1].querySelectorAll(".tr")[i].classList.add("tr-a")
        })
    }
}

tab_q(0, 1)
tab_q(2, 3)
tab_q(3, 4)
tab_q(4, 5)
tab_q(5, 6)
tab_q(6, 7)
tab_q(7, 8)


//返回顶部
function animate(obj, target, callback) {
    // 调用函数即清除一次定时器（防止不断触发定时器）
    clearInterval(obj.timer);
    // 定时器命名为obj.timer防止不断开辟内存空间，降低执行效率
    obj.timer = setInterval(function () {
        // 写定时器让元素做动画
        // 缓动动画移动距离= 目标位置 - 起始位置 / 份数（此处为10）
        let step = (target - obj.offsetLeft) / 10;
        // 如果直接用上面的step会存在小数问题（无法到达目标位置），故需要进行取整（避免小数）
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 如果物体到达目标位置即停止（关闭定时器）
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 动画完成后，执行回调函数
            // 先判断是否存在回调函数
            callback && callback();
        } else {
            // 把得到的步数赋值给带定位的物体
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}

var ga6 = document.querySelector(".ga6")
let timer = null;
ga6.addEventListener("click", function () {
    window.clearInterval(timer);
    let s = document.documentElement.scrollTop;
    timer = window.setInterval(function () {
        s -= 80;
        if (s < 0) {
            window.clearInterval(timer);
        }
        window.scrollTo(0, s);
    }, 5);
})
// 电梯导航
let flag;
let flag1 = true;
const dtd = document.querySelectorAll(".dtd ul li");
for (let i = 0; i < dtd.length; i++) {
    dtd[i].addEventListener("click", function (a) {
        flag = false
        for (let j = 0; j < dtd.length; j++) {
            dtd[j].style.color = "black"
        }
        let s = document.documentElement.scrollTop;
        const height = a1[i].offsetTop;
        if (flag1) {
            flag1 = false
            timer = window.setInterval(function () {
                // 向上
                if (s > height) {
                    s -= 10;
                    window.scrollTo(0, s);
                    if (s <= height) {
                        window.clearInterval(timer);
                        dtd[i].style.color = "red"
                        flag = true
                        a()
                    }
                    // xlxx
                } else if (s < height) {
                    s += 10;
                    window.scrollTo(0, s);
                    if (s >= height) {
                        window.clearInterval(timer);
                        dtd[i].style.color = "red"
                        flag = true
                        a()
                    }
                }

                function a() {
                    flag1 = true
                }

            }, 1);
        }
    })
}
window.addEventListener("scroll", function () {
    if (flag) {
        for (let i = 0; i < dtd.length; i++) {
            const s = document.documentElement.scrollTop;
            const height = a1[i].offsetTop;
            if (s < height - 300 || s > height + 300) {
                dtd[i].style.color = "black"

            } else {
                dtd[i].style.color = "red"
            }
        }
    }
})
