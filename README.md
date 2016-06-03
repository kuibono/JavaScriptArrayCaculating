# JavaScriptArrayCaculating


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
