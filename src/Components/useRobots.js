import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useRobots = () => {
    // localStorage.removeItem('robos')
    const defaultRobots = [
        {
            id: '1',
            name: 'Muzamil Khurshid',
            userName: 'Muzamil',
            email: 'muzamil.khurshid@hotmail.com'
        },
            {
              id:'2',
              name: 'Aisha Tariq',
              userName: 'aishat',
              email: 'aisha.tariq@example.pk'
            },
    ];

    const [robots, setRobots] = useState(() => {
        const savedRobots = localStorage.getItem('robos');
        return savedRobots ? JSON.parse(savedRobots) : defaultRobots;
    });

    useEffect(() => {
        localStorage.setItem('robos', JSON.stringify(robots));
    }, [robots]);

    // useEffect(()=> {
    //     console.log('not working')
    //     setRobots(
    // }, [])

    const addRobot = (robo) => {
        debugger
        const newRobo = { ...robo, id: uuidv4() };
        setRobots([...robots, newRobo]);
    };

    const updateRobot = (id, updatedRobo) => {
        const updatedRobots = robots.map((robo) => (robo.id === id ? { ...robo, ...updatedRobo } : robo));
        console.log('UpdatedRobots' , updatedRobots)
        setRobots(updatedRobots);
    };
    console.log('Robots' , robots)

    const deleteRobot = (id) => {
        setRobots(robots.filter((robo) => robo.id !== id));
    };

    return { robots, addRobot, updateRobot, deleteRobot };
};
