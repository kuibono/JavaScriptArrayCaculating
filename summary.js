// JavaScript caculate example

/*

[{a:1,b:"wwww"},{a:2,b:"wwww"},{a:3,b:"wwww"}].count(function(x){ return x.a>1;})
2

JSON.stringify([{a:1,b:"wwww"},{a:2,b:"wwww"},{a:3,b:"wwww"}].count())
"3"

JSON.stringify([{a:1,b:"wwww"},{a:2,b:"wwww"},{a:3,b:"wwww"}].where(function(x){ return x.a>1;}))
"[{"a":2,"b":"wwww"},{"a":3,"b":"wwww"}]"


JSON.stringify([{a:1,b:"wwww"},{a:2,b:"wwww"},{a:3,b:"wwww"}].select("a"))
"[1,2,3]"

JSON.stringify([{a:1,b:"wwww"},{a:2,b:"wwww"},{a:3,b:"wwww"}].select("a").max())
"3"

JSON.stringify([{a:1,b:"wwww"},{a:2,b:"wwww"},{a:3,b:"wwww"}].select("a").min())
"1"

JSON.stringify([{a:1,b:"wwww"},{a:2,b:"wwww"},{a:3,b:"wwww"}].select("a").sum())
"6"

JSON.stringify([{a:1,b:"wwww"},{a:2,b:"wwww"},{a:3,b:"wwww"}].select("a").avg())
"2"

*/

Array.prototype.select = function (properties) {
    var result = new Array();
    for (var i = 0; i < this.length; i++) {
        var obj = {};
        if (typeof (properties) == "string")
        {
            obj = this[i][properties];
        }
        else {
            for (var prop in properties) {
                if (this[i][properties[prop]]) {
                    obj[properties[prop]] = this[i][properties[prop]];
                }
            }
        }
        
        result.push(obj);
    }
    return result;
}
Array.prototype.where = function (fun_filter) {
    var result = new Array();
    for (var i = 0; i < this.length; i++) {
        if (fun_filter(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}
Array.prototype.sum = function (fun_filter) {
    var t = this.where(fun_filter);
    var result = 0;
    for (var i = 0; i < t.length; i++) {
        result += t[i];
    }
    return result;
}

Array.prototype.avg = function (fun_filter) {
    return this.sum(fun_filter)/this.length;
}


Array.prototype.max = function (fun_filter) {
    var t = this.where(fun_filter);
    var result;
    for (var i = 0; i < t.length; i++) {
        if (result == undefined) {
            result = t[i];
        }
        else if (t[i] > result) {
            result = t[i];
        }
    }
    return result;
}
Array.prototype.min = function (fun_filter) {

    var t = this.where(fun_filter);
    var result;
    for (var i = 0; i < t.length; i++) {
        if (result == undefined) {
            result = t[i];
        }
        else if (t[i] < result) {
            result = t[i];
        }
    }
    return result;
}
Array.prototype.count = function (fun_filter) {
    if (fun_filter) {
        return this.where(fun_filter).length;
    } else {
        return this.length;
    }
     
}
