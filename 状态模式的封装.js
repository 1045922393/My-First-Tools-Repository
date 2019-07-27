let rules = {
    checkName: function (dom, emsg) {
        if (!(/^[a-zA-Z0-9_-]{4,16}$/.test(dom.value))) {
            return emsg;
        }
    },
    checkPassword: function (dom, emsg) {
        if (!(/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(dom.value))) {
            return emsg;
        }
    },
    reCheckPassword: function (dom, emsg, selector) {
        let canKao = document.querySelector('#' + selector);
        if (canKao.value !== dom.value) {
            return emsg;
        }
    },
    checkPhone: function (dom, emsg) {
        if (!(/^1[34578]\d{9}$/.test(dom.value))) {
            return emsg;
        }
    },
}
function Vili() {
    this.fns = [];
}
// Vili.prototype.add = function (dom, rulesArrs) {
//     if (rulesArrs.length != 0) {
//         for (let i = 0; i < rulesArrs.length; i++) {
//             let rule = rulesArrs[i];
//             let fn = function () {
//                 let tempArr = rule.fnName.split(':');           //目标 [dom,msg]
//                 let fnRule = tempArr.shift();
//                 tempArr.unshift(dom);
//                 tempArr.push(rule.msg);
//                 return rules[fnRule].apply(dom, tempArr);
//             }
//             this.fns.push(fn);
//         }
//     }
// }
Vili.prototype.add = function (dom, rulesObj) {
    let fn = function () {
        let tempArr = [];
        let temp = rulesObj.fnName.split(':');           //目标 [dom,msg]
        let fnRule = temp[0];
        let third = temp.pop();
        tempArr.unshift(dom);
        tempArr.push(rulesObj.msg);
        tempArr.push(third)
        return rules[fnRule].apply(dom, tempArr);
    }
    this.fns.push(fn);


}
Vili.prototype.trigger = function () {
    if (this.fns.length != 0) {
        for (let i = 0; i < this.fns.length; i++) {
            let msg = this.fns[i]();
            if (msg) {
                return msg;
            }
        }
    }
}


/**
 *
 * vili.add(userName, {
        fnName: 'checkName',
        msg: '用户名4到16位（字母，数字，下划线，减号）'
    });
    vili.add(password, {
        fnName: 'checkPassword',
        msg: '密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
    });
    vili.add(resure, {
        fnName: 'reCheckPassword:password',
        msg: '密码不一致'
    });
    vili.add(phone, {
        fnName: 'checkPhone',
        msg: '输入正确手机号码'
    })

 *
 *  */