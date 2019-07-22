/**
 * 
功能：

$

each

css

add remove toggle class

html()

text()

val()

children()

parent()
 */


(function () {
    window.$ = window.jQuery = jQuery;//绑定$==jQuery
    function jQuery(selector) {
        return new Dm(selector);
    }
    function Dm(selector) {        //自定义构造函数
        let temp = document.querySelectorAll(selector);
        for (let i = 0; i < temp.length; i++) {
            this[i] = temp[i];
        }
        this['length'] = temp['length'];
        this['context'] = document;
        this['selector'] = selector;
    }
    Dm.prototype = {
        html: function (hTML) {
            if (!hTML) {
                return this[0].innerHTML;
            } else {
                this.each(function (i) {
                    this[i].innerHTML = hTML;
                })
                return this;
            }

        },//html封装完成
        text: function (tEXT) {
            if (!tEXT) {
                return this[0].innerText;
            } else {
                this.each(function (i) {
                    this[i].innerText = tEXT;
                })
                return this;
            }

        },//text封装完成
        val: function (valTEXT) {
            if (!valTEXT) {
                return this[0].value;
            } else {
                this.each(function (i, e) {
                    e.value = valTEXT;
                })
                return this;
            }
        },//val封装完成
        children: function (sonSelect) {
            if (!sonSelect) {
                let childs = new Dm();
                for (let i = 0; i < this[0].children.length; i++) {
                    childs[i] = this[0].children[i];
                }
                childs.length = this[0].children.length;
                childs.prevObject = this;
                return childs;
            } else {
                let chooseName = this.selector;
                chooseName = `${chooseName} ${sonSelect}`
                return $(chooseName);
            }
        },//children find 方法封装完成
        parent: function (parentSelect) {
            let fthis = this;
            // if (!parentSelect) {
            let paNode = new Dm();
            // paNode[0] = this[0].parentNode;
            // paNode.length = 1;
            // paNode.prevObject = this;
            // paNode[i].push(this[i].parentNode);
            this.each(function (i) {
                Array.prototype.push.call(paNode, fthis[i].parentNode)
            })
            for (let a = 0; a < paNode.length; a++) {
                // for (let b = paNode.length - 1; b > a; b--) {        //去掉重复有效
                //     if (paNode[a] == paNode[b]) {
                //         Array.prototype.splice.call(paNode, b, 1)
                //     }
                // }

                if (Array.prototype.indexOf.call(paNode, paNode[a], a + 1) != -1) {
                    Array.prototype.splice.call(paNode, Array.prototype.indexOf.call(paNode, paNode[a], a + 1), 1)
                }
            }
            paNode.prevObject = fthis;
            if (parentSelect) {                  //传入选择器有效
                let paSelect = $(parentSelect);
                // console.log(paSelect)
                // console.log(paArr)
                // console.log(paSelect.indexOf(temp))
                for (let a = 0; a < paNode.length; a++) {
                    let temp = paNode[a];
                    // console.log(paSelect)
                    // console.log(temp)
                    if (Array.prototype.indexOf.call(paSelect, temp) == -1) {
                        Array.prototype.splice.call(paNode, a, 1);
                        a--;
                    }
                }
            }
            return paNode;
        }
    }
    Dm.prototype.each = function (fn) {
        for (let j = 0; j < this.length; j++) {
            let i = j;
            let e = this[j];
            fn(i, e);
        }
        //return this;    //this指向调用此方法的jq对象
    }//each的封装方法完成

    Dm.prototype.css = function (property, value) {
        //console.log(this)       //此时this已经是$('.box li')
        if (value == undefined) {
            let arr = window.getComputedStyle(this[0]);     //获得一个对象,通过键值对的键来获取值
            return arr[property];       //返回值
        } else {
            if (isNaN(parseInt(value))) {       //判断属性是否是以数字开头,如果不是数字开头那么就不需要单位
                this.each((i, e) => {       //遍历每个元素
                    e.style[property] = value;      //把值设定
                })
                return this;        //方便链式编程
            } else {
                if (value.toString().indexOf('px') == -1) { //检索字符串是否有px,如果返回-1那么表示没有,注意需要先把value转为字符串,防止用户只输入数字
                    this.each((i, e) => {
                        e.style[property] = value + 'px';
                    })
                } else {        //有px那么就不需要在后面加单位了
                    this.each((i, e) => {
                        e.style[property] = value;
                    })
                }
                return this;
            }

        }

    }//css的方法封装完成

    Dm.prototype.addClass = function (className) {
        for (let j = 0; j < arguments.length; j++) {
            this.each((i, e) => {
                e.classList.add(arguments[j]);
            })
        }
        return this;
    }//addClass封装完成
    Dm.prototype.removeClass = function (className) {
        for (let j = 0; j < arguments.length; j++) {
            this.each((i, e) => {
                e.classList.remove(arguments[j]);
            })
        }
        return this;
    }//removeClass封装完成
    Dm.prototype.toggleClass = function (className) {
        for (let j = 0; j < arguments.length; j++) {
            this.each((i, e) => {
                e.classList.toggle(arguments[j]);
            })
        }
        return this;
    }//toggleClass封装完成
})()