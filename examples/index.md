# Demo

---

## Normal usage

````javascript
seajs.use('index', function(timer) {
    var  a = new timer().start();
    setTimeout(function(){
        a.end(function(length){
            console.log('end timer',length);
        });
    },2000);
});
````
