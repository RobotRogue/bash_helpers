javascript:var numCookies=0; var cookieArray=document.cookie.split("; "); for(var i=0; i<cookieArray.length && cookieArray[i]; i++) {numCookies++; for(var subDomain= "." + location.host; subDomain; subDomain=subDomain.replace(/^(?:%5C.|[^%5C.]+)/, "")){ for(var curPath =location.pathname; curPath; curPath=curPath.replace(/.$/,"")){document.cookie=(cookieArray[i] + "; domain=" + subDomain + "; path=" + curPath + "; expires="+new Date((new Date()).getTime()-1e11).toGMTString());}}} alert("Removed " + numCookies + " cookies for domain: " + window.location.host); window.location.href = "http://" + window.location.host + window.location.pathname;
