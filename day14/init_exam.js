if(db.getCollectionNames().indexOf('exam')!=-1)
    db.exam.drop();
for(var i=0,studs=[];i<100000;i++){  
    studs[i]={sid:"s"+(1000000+i+"").slice(1),score:parseInt(Math.random()*101)}
} 
db.exam.insert(studs);