import React from 'react';
import { Card, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";



function EducationPage(){
    return(
        <div>
 
 
        <br/>
        
    <h4 style={{color:"red", textAlign:"center", fontSize:"large"}}><b>Education</b></h4><br/>
    <Card className='education' style={{ display:"flex", padding:"24px", gap:"50px"}}>
    <CardContent style={{background:"rgb(206, 206, 234)"}}>
        <div className='graduation'>
        <Typography gutterBottom variant="h4" component="div" style={{textAlign:"center"}}>
          Graduation 🧑‍🎓
        </Typography>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
          2015-2019
        </Typography><br/>
        <Typography gutterBottom variant="h5" component="div">
          Course:
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <b> B.Tech Electrical and Electronics Engineering </b>
        </Typography><br/>
        <Typography gutterBottom variant="h5" component="div">
        CGPA:
        </Typography>
        <Typography variant="h6" color="text.secondary">
        <b>8.2</b>
        </Typography><br/>
        <Typography gutterBottom variant="h5" component="div">
        College Name:
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b> Acharya Nagarjuna University College of
        <br/> Engineering and Technology</b>
        </Typography>
        </div>
        </CardContent>

        <CardContent style={{background:"pink"}}>
            <div className='highersecondary'>
        <Typography gutterBottom variant="h4" component="div" style={{textAlign:"center"}}>
        Higher Secondary 📖
        </Typography>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
          2013-2015
        </Typography><br/>
        <Typography gutterBottom variant="h5" component="div">
          Course:
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Maths, Physics, Chemistry (MPC)</b>
        </Typography><br/>
        <Typography gutterBottom variant="h5" component="div">
        Percentage:
        </Typography>
        <Typography variant="h6" color="text.secondary">
        <b>93.6 %</b>
        </Typography><br/>
        <Typography gutterBottom variant="h5" component="div">
        College Name:
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Narayana Junior College</b>
        </Typography>
        </div>
        </CardContent>
        

        <CardContent style={{background:"rgb(242, 192, 255)"}}>
            <div className='ssc'>
        <Typography gutterBottom variant="h4" component="div" style={{textAlign:"center"}}>
        SSC 🏫
        </Typography>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
          2012-2013
        </Typography><br/>
        
        <Typography gutterBottom variant="h5" component="div">
        CGPA:
        </Typography>
        <Typography variant="h6" color="text.secondary">
        <b>9.7</b>
        </Typography><br/>
        <Typography gutterBottom variant="h5" component="div">
        School Name:
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Lakshmi Bharathi Convent High School</b>
        </Typography>
        </div>
        </CardContent>
        
      
        
        
    
    </Card></div>
    


    )
}
export default EducationPage;



