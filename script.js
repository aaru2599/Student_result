function getResult(){
    let hm,cm,jm,bm,tot,avg,grd;
    hm=+html.value;
    cm=+css.value;
    jm=+js.value;
    bm=+bs.value;
    tot=hm+cm+jm+bm;
    avg=tot/4;
   
    if(hm>39&&cm>39&&jm>39&&bm>39){
        //pass
        if(avg>=90)
        grd="A+";
        else if(avg>=80)
        grd="A";
        else if(avg>=70)
        grd="B+";
        else if(avg>=60)
        grd="B";
       else if(avg>=50)
        grd="C";
        else
        grd="D";}
        else{
        grd="Fail";
        }

        total.value=`Total Marks :`+tot;
        average.value=`Total Average :`+avg;
        grade.value=`Grade:`+grd; 

        

    }

