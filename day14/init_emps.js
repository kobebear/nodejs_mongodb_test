if(db.getCollectionNames().indexOf("emps")!=-1)
    db.emps.drop();
for(var i=0,arr=[];i<100000;i++){
    arr.push({
        ename:"e"+(100000+i+"").slice(1),
        address:{
            city:"city"+(1000+parseInt(Math.random()*100)+"").slice(1),
            street:"street"+(10000+parseInt(Math.random()*1000)+"").slice(1)
	}
    });
}
db.emps.insert(arr);




