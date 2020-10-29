console.log("connected")
function displayRadioValue() 
{ 
    var ele = document.getElementsByName('inlineRadioOptions');
    var genre
      
    for(i = 0; i < ele.length; i++) 
    { 
        if(ele[i].checked)
        window.genre = ele[i].value  
    } 
} 

        let eventData = [];
    function millisecondsToTime(milli)
    {
        var milliseconds = milli % 1000;
        var seconds = Math.floor((milli / 1000) % 60);
        var minutes = Math.floor((milli / (60 * 1000)) % 60);
        return minutes + ":" + seconds + "." + milliseconds;
    }

    function formValidate()
    {
        var ele = document.getElementsByName('inlineRadioOptions');
        var genre
        var valid =false;
        for(i = 0; i < ele.length; i++) 
        { 
            if(ele[i].checked)
            {
                valid=true;
                window.genre = ele[i].value; 
            }
             
        } 
        eName= document.getElementById('ename').value;
        cap= document.getElementById('age').value;
        clg= document.getElementById('clg').value;
        phone= document.getElementById('phone').value;
        if(eName==""||eName==null)
        {
             alert("Name required");
        }
        else if(eName.length<3||eName.length>30)
        { 
            alert("Length should be 3-30");
            return false;
        }
        else if(isNaN(eName)==false)
        {
            alert("No numeric value allowed in name");
            return false;
        }
        else if(clg==""||clg==null)
        {
            alert("College Name required");
            return false;
        }
        else if(clg.length<3||clg.length>30)
        {
            alert("College length should be 3-30");
            return false;
        }
        else if(isNaN(clg)==false)
        {
            alert("No numeric value allowed in college name");
            return false;
        }
        else if(valid==false)
        {
            alert("Select an option");
            return false;
        } 
        else if(isNaN(phone)==true)
        {
            alert("Phone number should have digits only");
            return false;
        }
        else if(phone.length!=10)
        {
            alert("Phone number should be 10 digits only");
            return false;
        }
    
        else if(cap<18)
        {
            alert("Minimum age must be 18");
        }
        else
        {
            alert("Submitted, check in show registrations section");
            var milli= Date.now();
            let data = {
                id: millisecondsToTime(milli),
                eName: document.getElementById('ename').value,
                cap: document.getElementById('age').value,
                clg: document.getElementById('clg').value,
                phone: document.getElementById('phone').value
            }
            eventData.push(data);
            document.forms[0].reset();
            console.log('submit');
            displayRadioValue();
            buildTable(eventData);
        }                                 
    }
    function buildTable(data)
    {
        
        
        eventData=[]
        var table = document.getElementById('myTable')
        console.log("built");
        for (var i = 0; i < data.length; i++)
        {
            var row = `<tr>            
                            <td>${data[i].eName}</td>
                            <td>${data[i].cap}</td>
                            <td>${data[i].clg}</td>
                            <td>${data[i].phone}</td>
                            <td>${window.genre}</td>
                            <td>${data[i].id}</td>        
                        </tr>`
                    table.innerHTML += row
        
        
        }
    }
    let data = JSON.stringify(eventData);         
{
    console.log('success');
}
        
