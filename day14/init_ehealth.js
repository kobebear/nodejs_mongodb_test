db.eHealth.drop(); 
for(var i=0,emps=[];i<10000;i++){   
	var emp={};   
	emp.eid="e"+(100000+i+"").slice(1);   
	emp.age=parseInt(Math.random()*(60-18+1)+18);   
	emp.height=parseInt(Math.random()*(195-155+1)+155);   	   	  
	emp.weight=parseInt(Math.random()*(110-40+1)+40); 
        birth:new Date(         
		     parseInt(Math.random()*(2016-2000+1)+2000),         
		     parseInt(Math.random()*(12)),         
		     parseInt(Math.random()*(31)+1)       
	    );
	emps[i]=emp; 
} 
db.eHealth.insert(emps);


