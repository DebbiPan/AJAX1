let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log('1')
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id;
                xxx.appendChild(li)
            });
            n += 1
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response);
            myName.textContent = object.name
        }
    };
    request.send();
};

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建div标签
                const div = document.createElement('div')
                //填写div标签内容
                div.innerHTML = request.response
                //插到身体里
                document.body.appendChild(div)
            } else {
                alert('加载HTML失败')
            }
        }
    }
    request.onerror = () => { }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建script标签
                const script = document.createElement('script')
                //填写script标签内容
                script.innerHTML = request.response
                //插到身体里
                document.body.appendChild(script)
            } else {
                alert('加载JS失败')
            }
        }
    }

    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()//创建HttpRequest对象
    request.open('GET', '/style.css');//调用对象的open方法
    request.onreadystatechange = () => {//监听对象的onreadystatechange事件
        //下载完成，但是不知道是成功还是失败，成功2xx，失败4xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response//得到的响应
                //插到头里面
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }
        }
    }
    request.send()//调用对象的send方法（发送请求）

}
