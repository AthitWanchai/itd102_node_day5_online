import axios from 'axios'
import { useEffect, useState } from 'react';


const Employee = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/employee')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching employee data:', error);
            });
    },[]);

    return <>
        <h1>Employee</h1>;
        <ul>
            {data.map(item => (
                <li key={item.id}>
                    {item.name},
                    {item.position},
                    {item.companyId}
                </li>
            ))}
        </ul>
    </>
};

export default Employee;