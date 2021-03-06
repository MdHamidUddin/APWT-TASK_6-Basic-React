import React from 'react';
import StudentList  from './StudentList';
import Nav  from './Nav';

function Student()
{
    return (
        <div> 
            <Nav/>
            <StudentList sl="1" name="Hamid" id="19-40250-1" cgpa="3.94" cc="131" semester="9"/>
            <StudentList sl="2" name="Ariyan" id="19-40259-1" cgpa="3.87" cc="133" semester="9"/>
            <StudentList sl="3" name="Jisun" id="19-40319-1" cgpa="3.93" cc="134" semester="9"/>
        </div>
    )
}
export default Student;